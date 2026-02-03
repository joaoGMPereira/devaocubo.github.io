import json
import os
from googleapiclient.discovery import build
from isodate import parse_duration
from dotenv import load_dotenv

# Carrega variáveis do .env (para desenvolvimento local)
load_dotenv()

API_KEY = os.environ.get("YOUTUBE_API_KEY")
CHANNEL_ID = os.environ.get("YOUTUBE_CHANNEL_ID")

print(f"DEBUG: API_KEY carregada: '{API_KEY}'")
print(f"DEBUG: CHANNEL_ID carregado: '{CHANNEL_ID}'")

def get_service():
    return build("youtube", "v3", developerKey=API_KEY)

def get_uploads_playlist_id(youtube, channel_id):
    request = youtube.channels().list(
        part="contentDetails",
        id=channel_id
    )
    response = request.execute()
    if not response["items"]:
        raise Exception("Canal não encontrado")
    return response["items"][0]["contentDetails"]["relatedPlaylists"]["uploads"]

def get_all_video_ids(youtube, playlist_id):
    video_ids = []
    request = youtube.playlistItems().list(
        part="snippet",
        playlistId=playlist_id,
        maxResults=50
    )

    while request and len(video_ids) < 150:
        response = request.execute()
        for item in response["items"]:
            video_ids.append({
                "videoId": item["snippet"]["resourceId"]["videoId"],
                "title": item["snippet"]["title"],
                "publishedAt": item["snippet"]["publishedAt"]
            })
        request = youtube.playlistItems().list_next(request, response)

    return video_ids

def classify_videos(youtube, videos_info):
    classified = {"normal": [], "live": [], "upcoming": []}

    # Processa em lotes de 50 (limite da API)
    for i in range(0, len(videos_info), 50):
        batch = videos_info[i:i+50]
        ids = ",".join([v["videoId"] for v in batch])
        
        request = youtube.videos().list(
            part="snippet,contentDetails",
            id=ids
        )
        response = request.execute()

        for item in response["items"]:
            vid = item["id"]
            title = item["snippet"]["title"]
            publishedAt = item["snippet"]["publishedAt"]
            duration = item["contentDetails"]["duration"]
            live_status = item["snippet"].get("liveBroadcastContent", "none")
            title_lower = title.lower()

            if is_short(duration):
                continue

            # Classificação
            if "devaocubo #" in title_lower:
                video_type = "live"
            elif live_status == "live":
                video_type = "live"
            elif live_status == "upcoming":
                video_type = "upcoming"
            else:
                video_type = "normal"

            video_data = {
                "videoId": vid,
                "title": title,
                "publishedAt": publishedAt
            }

            classified[video_type].append(video_data)

    # Ordena e limita
    final_result = {}
    for key in classified:
        sorted_list = sorted(classified[key], key=lambda v: v["publishedAt"], reverse=True)
        if sorted_list:
            final_result[key] = sorted_list[:10]

    return final_result

def is_short(duration):
    try:
        return parse_duration(duration).total_seconds() <= 60
    except:
        return False

if __name__ == "__main__":
    if not API_KEY or not CHANNEL_ID:
        print("❌ API_KEY ou CHANNEL_ID não configurados.")
        exit(1)

    try:
        youtube = get_service()
        uploads_id = get_uploads_playlist_id(youtube, CHANNEL_ID)
        videos_info = get_all_video_ids(youtube, uploads_id)
        classified_videos = classify_videos(youtube, videos_info)

        output_dir = "client/src/data"
        os.makedirs(output_dir, exist_ok=True)
        output_path = os.path.join(output_dir, "videos.json")

        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(classified_videos, f, ensure_ascii=False, indent=2)

        print(f"✅ Vídeos atualizados com sucesso em '{output_path}'")
        
    except Exception as e:
        print(f"❌ Erro durante a execução: {e}")
        exit(1)
