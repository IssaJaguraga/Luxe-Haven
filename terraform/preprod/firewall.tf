resource "google_compute_firewall" "allow_icmp_ssh" {
  name          = "allow-icmp-ssh"
  network       = google_compute_network.vpc_network.name
  project       = var.project_id
  direction     = "INGRESS"
  priority      = 1000
  source_ranges = ["${var.my_ip}/32"]

  target_tags = ["preprod"]

  allow {
    protocol = "icmp"
  }

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  description = "Allow ICMP and SSH only from authorized public IP"
}

resource "google_compute_firewall" "allow_ssh_from_iap" {
  name          = "allow-ssh-from-iap"
  network       = google_compute_network.vpc_network.name
  project       = var.project_id
  direction     = "INGRESS"
  priority      = 1000
  source_ranges = ["35.235.240.0/20"]
  target_tags   = ["preprod", "dev"]

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  description = "Allow SSH from IAP for preprod and dev"
}

resource "google_compute_firewall" "allow_directus" {
  name          = "allow-directus-preprod"
  network       = google_compute_network.vpc_network.name
  project       = var.project_id
  direction     = "INGRESS"
  priority      = 1001
  source_ranges = ["${var.my_ip}/32"]

  target_tags = ["preprod"]

  allow {
    protocol = "tcp"
    ports    = ["8055"]
  }

  description = "Allow Directus port 8055 only from authorized public IP"
}


