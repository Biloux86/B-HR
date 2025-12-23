from fastapi import APIRouter, Request
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates

from app.db import db_session
from app.routes.deps import require_user

router = APIRouter()

templates = Jinja2Templates(directory="app/templates")


@router.get("/comparatif")
async def comparatif(request: Request):
    redirect = require_user(request)
    if redirect:
        return redirect

    with db_session() as conn:
        rows = conn.execute(
            """
            SELECT encodages.*, employees.nom, employees.prenom, employees.brut_mensuel_ref
            FROM encodages
            JOIN employees ON employees.id = encodages.employee_id
            ORDER BY encodages.mois DESC
            """
        ).fetchall()

    comparaisons = []
    for row in rows:
        brut_attendu = row["brut_mensuel_ref"]
        brut_encode = row["brut_encode"]
        ecart = round(brut_encode - brut_attendu, 2)
        comparaisons.append({
            "row": row,
            "brut_attendu": brut_attendu,
            "ecart": ecart,
        })

    return templates.TemplateResponse(
        "comparatif.html",
        {"request": request, "comparaisons": comparaisons},
    )
