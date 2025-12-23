from fastapi import APIRouter, Request, Form
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates

from app.db import db_session
from app.models import Categorie
from app.routes.deps import require_user

router = APIRouter()

templates = Jinja2Templates(directory="app/templates")


@router.get("/employees")
async def employees_list(request: Request):
    redirect = require_user(request)
    if redirect:
        return redirect
    with db_session() as conn:
        employees = conn.execute("SELECT * FROM employees ORDER BY nom, prenom").fetchall()
    return templates.TemplateResponse(
        "employees.html",
        {"request": request, "employees": employees, "categories": list(Categorie)},
    )


@router.post("/employees")
async def employees_create(
    request: Request,
    matricule: str = Form(...),
    nom: str = Form(...),
    prenom: str = Form(...),
    categorie: str = Form(...),
    date_entree: str = Form(...),
    date_sortie: str = Form(None),
    regime: str = Form(...),
    brut_mensuel_ref: float = Form(...),
):
    redirect = require_user(request)
    if redirect:
        return redirect
    with db_session() as conn:
        conn.execute(
            """
            INSERT INTO employees
                (matricule, nom, prenom, categorie, date_entree, date_sortie, regime, brut_mensuel_ref)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (matricule, nom, prenom, categorie, date_entree, date_sortie or None, regime, brut_mensuel_ref),
        )
    return RedirectResponse("/employees", status_code=303)


@router.get("/employees/{employee_id}/edit")
async def employees_edit(request: Request, employee_id: int):
    redirect = require_user(request)
    if redirect:
        return redirect
    with db_session() as conn:
        employee = conn.execute("SELECT * FROM employees WHERE id = ?", (employee_id,)).fetchone()
    if not employee:
        return RedirectResponse("/employees", status_code=303)
    return templates.TemplateResponse(
        "employee_edit.html",
        {"request": request, "employee": employee, "categories": list(Categorie)},
    )


@router.post("/employees/{employee_id}/edit")
async def employees_update(
    request: Request,
    employee_id: int,
    matricule: str = Form(...),
    nom: str = Form(...),
    prenom: str = Form(...),
    categorie: str = Form(...),
    date_entree: str = Form(...),
    date_sortie: str = Form(None),
    regime: str = Form(...),
    brut_mensuel_ref: float = Form(...),
):
    redirect = require_user(request)
    if redirect:
        return redirect
    with db_session() as conn:
        conn.execute(
            """
            UPDATE employees
            SET matricule = ?, nom = ?, prenom = ?, categorie = ?, date_entree = ?, date_sortie = ?,
                regime = ?, brut_mensuel_ref = ?
            WHERE id = ?
            """,
            (matricule, nom, prenom, categorie, date_entree, date_sortie or None, regime, brut_mensuel_ref, employee_id),
        )
    return RedirectResponse("/employees", status_code=303)


@router.post("/employees/{employee_id}/delete")
async def employees_delete(request: Request, employee_id: int):
    redirect = require_user(request)
    if redirect:
        return redirect
    with db_session() as conn:
        conn.execute("DELETE FROM encodages WHERE employee_id = ?", (employee_id,))
        conn.execute("DELETE FROM employees WHERE id = ?", (employee_id,))
    return RedirectResponse("/employees", status_code=303)


@router.get("/employees/{employee_id}/encodages")
async def encodages_list(request: Request, employee_id: int):
    redirect = require_user(request)
    if redirect:
        return redirect
    with db_session() as conn:
        employee = conn.execute("SELECT * FROM employees WHERE id = ?", (employee_id,)).fetchone()
        encodages = conn.execute(
            "SELECT * FROM encodages WHERE employee_id = ? ORDER BY mois DESC",
            (employee_id,),
        ).fetchall()
    if not employee:
        return RedirectResponse("/employees", status_code=303)
    return templates.TemplateResponse(
        "encodages.html",
        {"request": request, "employee": employee, "encodages": encodages},
    )


@router.post("/employees/{employee_id}/encodages")
async def encodages_create(
    request: Request,
    employee_id: int,
    mois: str = Form(...),
    brut_encode: float = Form(...),
    commentaire: str = Form(None),
):
    redirect = require_user(request)
    if redirect:
        return redirect
    with db_session() as conn:
        conn.execute(
            "INSERT INTO encodages (employee_id, mois, brut_encode, commentaire) VALUES (?, ?, ?, ?)",
            (employee_id, mois, brut_encode, commentaire),
        )
    return RedirectResponse(f"/employees/{employee_id}/encodages", status_code=303)


@router.post("/encodages/{encodage_id}/delete")
async def encodages_delete(request: Request, encodage_id: int):
    redirect = require_user(request)
    if redirect:
        return redirect
    with db_session() as conn:
        row = conn.execute("SELECT employee_id FROM encodages WHERE id = ?", (encodage_id,)).fetchone()
        if row:
            employee_id = row["employee_id"]
            conn.execute("DELETE FROM encodages WHERE id = ?", (encodage_id,))
            return RedirectResponse(f"/employees/{employee_id}/encodages", status_code=303)
    return RedirectResponse("/employees", status_code=303)
