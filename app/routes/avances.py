from fastapi import APIRouter, Request, Form
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates

from app.db import db_session, get_parameter
from app.domain import calculations
from app.routes.deps import require_user

router = APIRouter()

templates = Jinja2Templates(directory="app/templates")


@router.get("/avances")
async def avances_form(request: Request):
    redirect = require_user(request)
    if redirect:
        return redirect
    with db_session() as conn:
        plafond = float(get_parameter(conn, "plafond_saisie", "500.0"))
        taux_avance = float(get_parameter(conn, "taux_avance", "0.8"))
    return templates.TemplateResponse(
        "avances.html",
        {"request": request, "result": None, "plafond": plafond, "taux_avance": taux_avance},
    )


@router.post("/avances")
async def avances_check(
    request: Request,
    montant_avance: float = Form(...),
    brut_mensuel_ref: float = Form(...),
):
    redirect = require_user(request)
    if redirect:
        return redirect

    with db_session() as conn:
        plafond = float(get_parameter(conn, "plafond_saisie", "500.0"))
        taux_avance = float(get_parameter(conn, "taux_avance", "0.8"))

    max_autorise = calculations.compute_avance_max(plafond)
    net_estime = calculations.compute_net_estime(brut_mensuel_ref, taux_avance)

    ok = montant_avance <= max_autorise
    message = (
        "Montant accepté : conforme au plafond." if ok else "Montant trop élevé : dépasse le plafond autorisé."
    )

    return templates.TemplateResponse(
        "avances.html",
        {
            "request": request,
            "result": {
                "montant_avance": montant_avance,
                "brut_mensuel_ref": brut_mensuel_ref,
                "net_estime": net_estime,
                "max_autorise": max_autorise,
                "message": message,
                "ok": ok,
            },
            "plafond": plafond,
            "taux_avance": taux_avance,
        },
    )
