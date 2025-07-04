resource "google_compute_subnetwork" "luxehaven_subnet_prod" {
  name          = "luxehaven-subnet-prod"
  ip_cidr_range = "10.0.2.0/24"
  region        = var.region
  network       = google_compute_network.vpc_network.id
  project       = var.project_id
}
