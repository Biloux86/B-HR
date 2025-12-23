from dataclasses import dataclass
from enum import Enum
from typing import Optional


class Categorie(str, Enum):
    ARTICLE60 = "ARTICLE60"
    CONTRACTUEL = "CONTRACTUEL"


@dataclass
class Employee:
    id: Optional[int]
    matricule: str
    nom: str
    prenom: str
    categorie: Categorie
    date_entree: str
    date_sortie: Optional[str]
    regime: str
    brut_mensuel_ref: float


@dataclass
class EncodageMensuel:
    id: Optional[int]
    employee_id: int
    mois: str
    brut_encode: float
    commentaire: Optional[str]
