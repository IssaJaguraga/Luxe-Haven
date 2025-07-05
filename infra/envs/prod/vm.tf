resource "google_compute_instance" "prod_vm" {
  name         = var.vm_name
  machine_type = var.machine_type
  zone         = var.zone
  project      = var.project_id

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2204-lts"
      size  = 10
    }
  }

  network_interface {
    network    = var.network
    subnetwork = var.subnetwork
    access_config {}  # IP publique
  }

  tags = ["prod"]

  metadata = {
    environment = "production"
    managed_by  = "terraform"
    ssh-keys    = var.ssh_keys
  }
}
