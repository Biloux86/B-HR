from app.domain import calculations


def test_compute_pecule_sortie_article60():
    assert calculations.compute_pecule_sortie_article60(2000.0, 1.1) == 2200.0


def test_compute_pecule_sortie_contractuel():
    assert calculations.compute_pecule_sortie_contractuel(1800.0, 0.9) == 1620.0


def test_compute_net_estime():
    assert calculations.compute_net_estime(2500.0, 0.8) == 2000.0
