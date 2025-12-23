import os
import sqlite3
from contextlib import contextmanager
from pathlib import Path

def get_db_path() -> str:
    return os.environ.get("APP_DB_PATH", "./data/app.db")


def ensure_db_dir(db_path: str) -> None:
    Path(db_path).parent.mkdir(parents=True, exist_ok=True)


def get_connection() -> sqlite3.Connection:
    db_path = get_db_path()
    ensure_db_dir(db_path)
    conn = sqlite3.connect(db_path, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn


@contextmanager
def db_session():
    conn = get_connection()
    try:
        yield conn
        conn.commit()
    finally:
        conn.close()


def init_db() -> None:
    with db_session() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS employees (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                matricule TEXT NOT NULL,
                nom TEXT NOT NULL,
                prenom TEXT NOT NULL,
                categorie TEXT NOT NULL,
                date_entree TEXT NOT NULL,
                date_sortie TEXT,
                regime TEXT NOT NULL,
                brut_mensuel_ref REAL NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS encodages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                employee_id INTEGER NOT NULL,
                mois TEXT NOT NULL,
                brut_encode REAL NOT NULL,
                commentaire TEXT,
                FOREIGN KEY(employee_id) REFERENCES employees(id)
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS parameters (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                key TEXT NOT NULL UNIQUE,
                value TEXT NOT NULL
            )
            """
        )

        defaults = {
            "coef_article60": "1.0",
            "coef_contractuel": "1.0",
            "plafond_saisie": "500.0",
            "taux_avance": "0.8",
        }
        for key, value in defaults.items():
            conn.execute(
                "INSERT OR IGNORE INTO parameters (key, value) VALUES (?, ?)",
                (key, value),
            )


def get_parameter(conn: sqlite3.Connection, key: str, default: str) -> str:
    row = conn.execute("SELECT value FROM parameters WHERE key = ?", (key,)).fetchone()
    return row["value"] if row else default


def set_parameter(conn: sqlite3.Connection, key: str, value: str) -> None:
    conn.execute(
        "INSERT INTO parameters (key, value) VALUES (?, ?) "
        "ON CONFLICT(key) DO UPDATE SET value = excluded.value",
        (key, value),
    )
