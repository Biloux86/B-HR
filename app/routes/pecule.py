from fastapi import APIRouter, Request, Form
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates

from app.db import db_session, get_parameter
from app.domain import calculations
from app.routes.deps import require_user

router = APIRouter()

templates = Jinja2Templates(directory="app/templates")


@router.get("/pecule")
async def pecule_form(request: Request):
    redirect = require_user(request)
    if redirect:
        return redirect
    with db_session() as conn:
        employees = conn.execute("SELECT * FROM employees ORDER BY nom, prenom").fetchall()
    return templates.TemplateResponse(
        "pecule.html",
        {"request": request, "employees": employees, "result": None},
    )


@router.post("/pecule")
async def pecule_compute(
    request: Request,
    employee_id: int = Form(...),
    date_sortie: str = Form(...),
):
    redirect = require_user(request)
    if redirect:
        return redirect

    with db_session() as conn:
        employee = conn.execute("SELECT * FROM employees WHERE id = ?", (employee_id,)).fetchone()
        if not employee:
            return RedirectResponse("/pecule", status_code=303)
        coef_article60 = float(get_parameter(conn, "coef_article60", "1.0"))
        coef_contractuel = float(get_parameter(conn, "coef_contractuel", "1.0"))

        if employee["categorie"] == "ARTICLE60":
            montant = calculations.compute_pecule_sortie_article60(employee["brut_mensuel_ref"], coef_article60)
        else:
            montant = calculations.compute_pecule_sortie_contractuel(employee["brut_mensuel_ref"], coef_contractuel)

        employees = conn.execute("SELECT * FROM employees ORDER BY nom, prenom").fetchall()

    return templates.TemplateResponse(
        "pecule.html",
        {
            "request": request,
            "employees": employees,
            "result": {
                "employee": employee,
                "date_sortie": date_sortie,
                "montant": montant,
            },
        },
    )
