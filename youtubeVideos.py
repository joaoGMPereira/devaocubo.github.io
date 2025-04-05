import requests
import json
import os
from time import sleep
from isodate import parse_duration
from dotenv import load_dotenv
from datetime import datetime

# Carrega variáveis do .env
load_dotenv()

API_KEY = os.environ.get("YOUTUBE_API_KEY")
CHANNEL_ID = os.environ.get("YOUTUBE_CHANNEL_ID")

def get_uploads_playlist_id(api_key, channel_id):
    url = "https://www.googleapis.com/youtube/v3/channels"
    params = {
        "part": "contentDetails",
        "id": channel_id,
        "key": api_key
    }
    response = requests.get(url, params=params)
    response.raise_for_status()
    data = response.json()
    return data["items"][0]["contentDetails"]["relatedPlaylists"]["uploads"]

def get_all_video_ids(api_key, playlist_id):
    video_ids = []
    url = "https://www.googleapis.com/youtube/v3/playlistItems"
    params = {
        "part": "snippet",
        "playlistId": playlist_id,
        "maxResults": 50,
        "key": api_key
    }

    while True:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        for item in data["items"]:
            video_ids.append({
                "videoId": item["snippet"]["resourceId"]["videoId"],
                "title": item["snippet"]["title"],
                "publishedAt": item["snippet"]["publishedAt"]
            })
        if "nextPageToken" in data:
            params["pageToken"] = data["nextPageToken"]
        else:
            break

    return video_ids

def classify_videos(api_key, videos_info):
    url = "https://www.googleapis.com/youtube/v3/videos"
    classified = {"normal": [], "live": [], "upcoming": []}

    for i in range(0, len(videos_info), 50):
        batch = videos_info[i:i+50]
        ids = ",".join([v["videoId"] for v in batch])
        params = {
            "part": "snippet,contentDetails",
            "id": ids,
            "key": api_key
        }
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()

        for item in data["items"]:
            vid = item["id"]
            title = item["snippet"]["title"]
            publishedAt = item["snippet"]["publishedAt"]
            duration = item["contentDetails"]["duration"]
            live_status = item["snippet"].get("liveBroadcastContent", "none")
            title_lower = title.lower()

            if is_short(duration):
                continue  # Ignora shorts

            # Determina o tipo
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
                "url": f"https://youtu.be/{vid}",
                "publishedAt": publishedAt
            }

            classified[video_type].append(video_data)

        sleep(1)

    # Ordena cada tipo por data decrescente
    for key in list(classified.keys()):
        classified[key].sort(key=lambda v: v["publishedAt"], reverse=True)
        if not classified[key]:
            del classified[key]  # remove chave vazia

    return classified

def is_short(duration):
    try:
        return parse_duration(duration).total_seconds() <= 60
    except:
        return False

if __name__ == "__main__":
    if not API_KEY or not CHANNEL_ID:
        print("❌ API_KEY ou CHANNEL_ID não configurados nas variáveis de ambiente.")
        exit(1)

    uploads_id = get_uploads_playlist_id(API_KEY, CHANNEL_ID)
    videos_info = get_all_video_ids(API_KEY, uploads_id)
    classified_videos = classify_videos(API_KEY, videos_info)

    with open("meus_videos_classificados.json", "w", encoding="utf-8") as f:
        json.dump(classified_videos, f, ensure_ascii=False, indent=2)

    print(f"✅ Vídeos classificados por tipo salvos em 'meus_videos_classificados.json'")
