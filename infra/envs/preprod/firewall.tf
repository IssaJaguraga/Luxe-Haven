# Règle de pare-feu pour autoriser l'accès à la VM de préproduction

resource "google_compute_firewall" "allow_icmp_ssh" {
  # Nom unique pour identifier la règle dans le projet GCP
  name    = "allow-icmp-ssh"

  # Référence au réseau VPC défini dans vpc.tf
  network = google_compute_network.vpc_network.name

  # Projet GCP ciblé (défini dans variables.tf)
  project = var.project_id

  # Autorise les paquets ICMP pour tester la connectivité via "ping"
  allow {
    protocol = "icmp"
  }

  # Autorise les connexions SSH sur le port 22 (protocole TCP)
  # Nécessaire pour administrer la VM à distance
  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  # Autorise le trafic entrant depuis n'importe quelle IP
  # À restreindre en production pour des raisons de sécurité
  source_ranges = ["0.0.0.0/0"]

  # Cible uniquement les instances avec le tag "preprod"
  # Ce tag doit être défini dans la configuration de la VM
  target_tags = ["preprod"]

  # Direction du trafic : INGRESS = trafic entrant
  direction = "INGRESS"

  # Priorité d’évaluation de la règle (plus petit = plus prioritaire)
  priority = 1000

  # Description pour documenter la règle
  description = "Allow ICMP (ping) and SSH (port 22) from any IP for preprod testing"
}
