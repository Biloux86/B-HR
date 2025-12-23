from fastapi import Request
from fastapi.responses import RedirectResponse


def require_user(request: Request):
    user_id = request.session.get("user_id")
    if not user_id:
        return RedirectResponse("/login", status_code=303)
    return None
