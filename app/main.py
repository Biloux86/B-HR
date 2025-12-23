import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.middleware.sessions import SessionMiddleware

from app.db import init_db
from app.routes import auth, employees, pecule, avances, comparatif, admin

app = FastAPI(title="Paie CPAS")

templates = Jinja2Templates(directory="app/templates")

app.add_middleware(SessionMiddleware, secret_key=os.environ.get("SESSION_SECRET", "dev-secret"))
app.mount("/static", StaticFiles(directory="app/static"), name="static")


@app.on_event("startup")
async def startup() -> None:
    init_db()
    auth.ensure_admin_user()


app.include_router(auth.router)
app.include_router(employees.router)
app.include_router(pecule.router)
app.include_router(avances.router)
app.include_router(comparatif.router)
app.include_router(admin.router)


@app.get("/")
async def root():
    return {"status": "ok"}
