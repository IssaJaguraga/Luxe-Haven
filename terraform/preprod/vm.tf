resource "google_compute_instance" "preprod_vm" {
  name         = "preprod-vm"
  machine_type = "e2-micro"
  zone         = "europe-west1-b"

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2204-lts"
      size  = 10
    }
  }

  network_interface {
    network    = google_compute_network.vpc_network.self_link
    subnetwork = google_compute_subnetwork.luxehaven_subnet.self_link
    access_config {}  # Obligatoire pour attribuer une IP publique
  }

  tags = ["preprod"]

  metadata = {
    environment = "preproduction"
    managed_by  = "terraform"
    ssh-keys    = "issa:${file("${path.module}/id_rsa.pub")}"
  }
}
