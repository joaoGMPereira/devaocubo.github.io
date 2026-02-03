import json
import os
from isodate import parse_duration

# Mocking the classification logic from youtubeVideos.py
def is_short(duration):
    try:
        return parse_duration(duration).total_seconds() <= 60
    except:
        return False

def classify_mock_videos(items):
    classified = {"normal": [], "live": [], "upcoming": []}
    for item in items:
        vid = item["id"]
        title = item["snippet"]["title"]
        publishedAt = item["snippet"]["publishedAt"]
        duration = item["contentDetails"]["duration"]
        live_status = item["snippet"].get("liveBroadcastContent", "none")
        title_lower = title.lower()

        if is_short(duration):
            continue

        if "devaocubo #" in title_lower:
            video_type = "live"
        elif live_status == "live":
            video_type = "live"
        elif live_status == "upcoming":
            video_type = "upcoming"
        else:
            video_type = "normal"

        video_data = {"videoId": vid, "title": title, "publishedAt": publishedAt}
        classified[video_type].append(video_data)
    return classified

# Sample Data
mock_data = [
    {"id": "v1", "snippet": {"title": "Normal Video", "publishedAt": "2024-01-01T00:00:00Z", "liveBroadcastContent": "none"}, "contentDetails": {"duration": "PT10M"}},
    {"id": "v2", "snippet": {"title": "Short Video", "publishedAt": "2024-01-02T00:00:00Z", "liveBroadcastContent": "none"}, "contentDetails": {"duration": "PT30S"}},
    {"id": "v3", "snippet": {"title": "Live Stream DevAoCubo #001", "publishedAt": "2024-01-03T00:00:00Z", "liveBroadcastContent": "none"}, "contentDetails": {"duration": "PT1H"}},
    {"id": "v4", "snippet": {"title": "Upcoming Event", "publishedAt": "2024-01-04T00:00:00Z", "liveBroadcastContent": "upcoming"}, "contentDetails": {"duration": "P0D"}}
]

if __name__ == "__main__":
    result = classify_mock_videos(mock_data)
    print(json.dumps(result, indent=2))
    
    assert len(result["normal"]) == 1
    assert len(result["live"]) == 1
    assert len(result["upcoming"]) == 1
    assert "v2" not in str(result) # v2 is a short
    print("\n✅ Script logic test passed!")
