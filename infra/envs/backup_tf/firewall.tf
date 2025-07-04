resource "google_compute_firewall" "allow_icmp_ssh" {
  name    = "allow-icmp-ssh-prod"
  network = google_compute_network.vpc_network.name
  project = var.project_id

  allow {
    protocol = "icmp"
  }

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  source_ranges = ["0.0.0.0/0"]

  target_tags = ["prod"]

  direction = "INGRESS"
  priority  = 1000

  description = "Allow ICMP (ping) and SSH (port 22) from any IP for production access"
}
