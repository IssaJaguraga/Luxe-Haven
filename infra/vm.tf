
# Machine virtuelle préproduction sur GCP
# Déployer une VM Ubuntu LTS

resource "google_compute_instance" "preprod_vm" {
  name         = "preprod-vm"
  machine_type = "e2-micro"                     # VM 
  zone         = "europe-west1-b"               # région

  # Image Ubuntu LTS recommandée par Google Cloud
  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2204-lts"
      size  = 10                                # Taille du disque en Go (10 Go minimum)
    }
  }

  # Réseau et sous-réseau
  network_interface {
    network    = google_compute_network.vpc_network.self_link
    subnetwork = google_compute_subnetwork.luxehaven_subnet.self_link
    access_config {}  # Obligatoire pour attribuer une IP publique
  }

  # Tag pour identifier l'environnement 
  # Permet de cibler cette VM dans Ansible ou un pare-feu
  
  tags = ["preprod"]

  # Métadonnées de base pour l'organisation
  metadata = {
    environment = "preproduction"
    managed_by  = "terraform"
  }
}
