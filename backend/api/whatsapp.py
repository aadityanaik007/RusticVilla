import os

import requests

CALLMEBOT_API_URL = "https://api.callmebot.com/whatsapp.php"


def send_whatsapp(message: str) -> None:
    phone = os.environ.get("CALLMEBOT_PHONE")
    api_key = os.environ.get("CALLMEBOT_API_KEY")
    if not phone or not api_key:
        # Not configured — skip rather than break the booking flow.
        return

    try:
        response = requests.get(
            CALLMEBOT_API_URL,
            params={"phone": phone, "text": message, "apikey": api_key},
            timeout=10,
        )
        if response.status_code >= 400:
            print(f"CallMeBot WhatsApp send rejected: {response.status_code} {response.text}")
    except requests.RequestException as exc:
        # A guest's booking is already saved by the time this runs — a
        # WhatsApp hiccup shouldn't turn into a 500 for something that
        # already succeeded.
        print(f"CallMeBot WhatsApp send failed: {exc}")
