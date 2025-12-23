"""
Fonctions de calcul métier.

Les formules sont volontairement simplifiées (MVP) et isolées ici.
TODO: remplacer par les règles métier officielles.
"""

def compute_pecule_sortie_article60(brut_mensuel_ref: float, coef: float) -> float:
    """
    Placeholder Article 60.
    TODO: remplacer par la formule réelle.
    """
    return round(brut_mensuel_ref * coef, 2)


def compute_pecule_sortie_contractuel(brut_mensuel_ref: float, coef: float) -> float:
    """
    Placeholder Contractuel.
    TODO: remplacer par la formule réelle.
    """
    return round(brut_mensuel_ref * coef, 2)


def compute_avance_max(plafond: float) -> float:
    """Retourne le plafond autorisé pour une saisie d'avance."""
    return round(plafond, 2)


def compute_net_estime(brut_mensuel_ref: float, taux_avance: float) -> float:
    """
    Calcul simplifié d'un net estimé pour comparaison.
    TODO: remplacer par une règle plus précise.
    """
    return round(brut_mensuel_ref * taux_avance, 2)
