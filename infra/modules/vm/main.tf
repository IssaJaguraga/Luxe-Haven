resource "google_compute_instance" "vm_instance" {
  name         = var.vm_name
  machine_type = var.machine_type
  zone         = var.zone
  project      = var.project_id

  boot_disk {
    initialize_params {
      image = var.image
      size  = 10
    }
  }

  network_interface {
    network    = var.network
    subnetwork = var.subnetwork
    access_config {
      nat_ip = google_compute_address.vm_static_ip.address
    }
  }

  tags = ["prod"]

  metadata = {
    environment = "production"
    managed_by  = "terraform"
    ssh-keys    = var.ssh_keys
  }
}