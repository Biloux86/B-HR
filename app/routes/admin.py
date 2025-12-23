from fastapi import APIRouter, Request, Form
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates

from app.db import db_session, get_parameter, set_parameter
from app.routes.deps import require_user

router = APIRouter()

templates = Jinja2Templates(directory="app/templates")


@router.get("/admin")
async def admin_params(request: Request):
    redirect = require_user(request)
    if redirect:
        return redirect

    with db_session() as conn:
        params = {
            "coef_article60": get_parameter(conn, "coef_article60", "1.0"),
            "coef_contractuel": get_parameter(conn, "coef_contractuel", "1.0"),
            "plafond_saisie": get_parameter(conn, "plafond_saisie", "500.0"),
            "taux_avance": get_parameter(conn, "taux_avance", "0.8"),
        }

    return templates.TemplateResponse(
        "admin.html",
        {"request": request, "params": params},
    )


@router.post("/admin")
async def admin_update(
    request: Request,
    coef_article60: str = Form(...),
    coef_contractuel: str = Form(...),
    plafond_saisie: str = Form(...),
    taux_avance: str = Form(...),
):
    redirect = require_user(request)
    if redirect:
        return redirect

    with db_session() as conn:
        set_parameter(conn, "coef_article60", coef_article60)
        set_parameter(conn, "coef_contractuel", coef_contractuel)
        set_parameter(conn, "plafond_saisie", plafond_saisie)
        set_parameter(conn, "taux_avance", taux_avance)

    return RedirectResponse("/admin", status_code=303)
