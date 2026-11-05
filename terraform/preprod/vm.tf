resource "google_compute_instance" "preprod_vm" {
  name         = "preprod-vm"
  machine_type = "e2-small"
  zone         = "europe-west1-b"

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2204-lts"
      size  = 20
    }
  }

  network_interface {
    network    = google_compute_network.vpc_network.self_link
    subnetwork = google_compute_subnetwork.luxehaven_subnet.self_link
    access_config {} # Obligatoire pour attribuer une IP publique
  }

  tags = ["preprod"]

  metadata = {
    environment = "preproduction"
    managed_by  = "terraform"
    ssh-keys    = "ubuntu:ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICXrewYK08ks1LnRZiMbQR6efmHR9Jrd+sLc5yvzKzl7 luxehaven-gcp"
  }

  lifecycle {
    ignore_changes = [
      metadata["ssh-keys"]
    ]
  }
}
