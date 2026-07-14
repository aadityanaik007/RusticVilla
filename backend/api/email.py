import os

import requests

BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"


def send_email(to_email: str, to_name: str, subject: str, text_content: str) -> None:
    api_key = os.environ.get("BREVO_API_KEY")
    sender_email = os.environ.get("BREVO_SENDER_EMAIL")
    if not api_key or not sender_email or not to_email:
        # Not configured (or no recipient) — skip rather than break the booking flow.
        return

    sender_name = os.environ.get("BREVO_SENDER_NAME", "Rustic Farm Villaa")

    try:
        response = requests.post(
            BREVO_API_URL,
            headers={
                "api-key": api_key,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            json={
                "sender": {"name": sender_name, "email": sender_email},
                "to": [{"email": to_email, "name": to_name or to_email}],
                "subject": subject,
                "textContent": text_content,
            },
            timeout=10,
        )
        if response.status_code >= 400:
            print(
                f"Brevo email to {to_email} rejected: "
                f"{response.status_code} {response.text}"
            )
    except requests.RequestException as exc:
        # A guest's booking is already saved by the time this runs — an email
        # hiccup shouldn't turn into a 500 for something that already succeeded.
        print(f"Brevo email to {to_email} failed: {exc}")
