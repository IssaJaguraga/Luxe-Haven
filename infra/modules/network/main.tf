resource "google_compute_network" "vpc" {
  name                    = var.vpc_name
  auto_create_subnetworks = false
  project                 = var.project_id
}

resource "google_compute_subnetwork" "subnet" {
  name          = var.subnet_name
  ip_cidr_range = var.subnet_cidr
  region        = var.region
  network       = google_compute_network.vpc.self_link
  project       = var.project_id
}

resource "google_compute_firewall" "allow_icmp_ssh" {
  name    = var.firewall_name
  network = google_compute_network.vpc.name
  project = var.project_id

  allow {
    protocol = "icmp"
  }

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["prod"]

  direction = "INGRESS"
  priority  = 1000

  description = "Allow ICMP (ping) and SSH (port 22) from any IP for production access"
}

output "vpc_name" {
  value = google_compute_network.vpc.name
}

output "subnet_name" {
  value = google_compute_subnetwork.subnet.name
}

resource "google_compute_firewall" "allow_http_https" {
  name    = "${var.firewall_name}-http-https"
  network = google_compute_network.vpc.name
  project = var.project_id

  allow {
    protocol = "tcp"
    ports    = ["80", "443"]
  }

  direction     = "INGRESS"
  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["prod"]
  priority      = 1001
  description   = "Allow HTTP and HTTPS traffic for production"
}
