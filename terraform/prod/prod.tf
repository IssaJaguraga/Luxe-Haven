# Production : une VM avec une IP fixe, dans le réseau déjà créé pour la préproduction

# Réseau existant, lu sans être modifié
data "google_compute_network" "vpc" {
  name = "luxehaven-vpc"
}

data "google_compute_subnetwork" "subnet" {
  name = "luxehaven-subnet"
}

resource "google_compute_address" "prod_ip" {
  name = "prod-ip"
}

resource "google_compute_instance" "prod_vm" {
  name         = "prod-vm"
  machine_type = "e2-small"
  zone         = "europe-west1-b"

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2204-lts"
      size  = 20
    }
  }

  network_interface {
    subnetwork = data.google_compute_subnetwork.subnet.self_link
    access_config {
      nat_ip = google_compute_address.prod_ip.address
    }
  }

  tags = ["prod"]

  metadata = {
    environment = "production"
    managed_by  = "terraform"
  }
}

resource "google_compute_firewall" "allow_web_prod" {
  name          = "allow-web-prod"
  network       = data.google_compute_network.vpc.name
  direction     = "INGRESS"
  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["prod"]

  allow {
    protocol = "tcp"
    ports    = ["80", "443"]
  }

  description = "Allow HTTP and HTTPS from anywhere to production"
}

resource "google_compute_firewall" "allow_ssh_iap_prod" {
  name          = "allow-ssh-iap-prod"
  network       = data.google_compute_network.vpc.name
  direction     = "INGRESS"
  source_ranges = ["35.235.240.0/20"]
  target_tags   = ["prod"]

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  description = "Allow SSH from IAP only to production"
}

output "prod_ip" {
  value = google_compute_address.prod_ip.address
}

# Ansible se connecte depuis mon poste, comme pour la préproduction
variable "my_ip" {
  description = "IP publique autorisée pour SSH"
  type        = string
}

resource "google_compute_firewall" "allow_ssh_myip_prod" {
  name          = "allow-ssh-myip-prod"
  network       = data.google_compute_network.vpc.name
  direction     = "INGRESS"
  source_ranges = ["${var.my_ip}/32"]
  target_tags   = ["prod"]

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  description = "Allow SSH to production only from authorized public IP"
}
