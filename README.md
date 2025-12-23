# Paie CPAS (MVP)

Application interne pour calculer un pécule de sortie, valider des saisies d'avance et comparer des bruts.

## Fonctionnalités MVP
- CRUD Employés + Encodages mensuels.
- Calcul pécule de sortie (Article 60 / Contractuel) avec formules placeholder.
- Vérification des saisies d'avance (montant vs plafond + net estimé).
- Comparatif brut (brut attendu vs brut encodé).
- Paramètres configurables (coefficients, plafonds, taux).
- Authentification obligatoire (bcrypt + session cookie).

## Installation locale
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

export SESSION_SECRET="change-me"
export ADMIN_USER="admin"
export ADMIN_PASS="admin"

uvicorn app.main:app --reload
```

Ensuite : http://localhost:8000/login

## Docker Compose
```bash
docker compose up --build
```

Accès : http://localhost:8000/login

## Base de données
- SQLite fichier (par défaut `./data/app.db` en local, `/data/app.db` en Docker).
- Sauvegarde : copier le fichier SQLite pendant que l'app est arrêtée.

## Sécurité (recommandation)
- Changez `SESSION_SECRET` et les identifiants admin.
- Pour accès interne sécurisé via NAS : utilisez un VPN type **Tailscale**.

## Formules métier
Les formules sont isolées dans `app/domain/calculations.py`.
Elles sont volontairement simplifiées (TODO) pour le MVP.
