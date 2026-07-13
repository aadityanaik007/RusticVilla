import os

from fastapi import Header, HTTPException


def require_admin(x_admin_key: str = Header(default="")) -> None:
    expected = os.environ.get("ADMIN_SECRET_KEY")
    if not expected:
        # Fail closed: never allow admin actions if the server has no key configured.
        raise HTTPException(status_code=500, detail="Admin key not configured on server")
    if x_admin_key != expected:
        raise HTTPException(status_code=401, detail="Invalid or missing admin key")
