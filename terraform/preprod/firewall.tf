resource "google_compute_firewall" "allow_icmp_ssh" {
  name          = "allow-icmp-ssh"
  network       = google_compute_network.vpc_network.name
  project       = var.project_id
  direction     = "INGRESS"
  priority      = 1000
  source_ranges = ["0.0.0.0/0"]  # Ouvert à toutes les IPs temporairement pour test déploiement

  target_tags   = ["preprod"]

  allow {
    protocol = "icmp"
  }

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  description = "Allow ICMP and SSH from anywhere temporarily for preprod deployment testing"
}

resource "google_compute_firewall" "allow_directus" {
  name          = "allow-directus-preprod"
  network       = google_compute_network.vpc_network.name
  project       = var.project_id
  direction     = "INGRESS"
  priority      = 1001
  source_ranges = ["176.186.175.230/32"]

  target_tags   = ["preprod"]

  allow {
    protocol = "tcp"
    ports    = ["8055"]
  }

  description = "Allow Directus port 8055 from my IP"
}
