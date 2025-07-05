resource "google_compute_network" "vpc_network" {
  name                    = "luxehaven-vpc-prod"
  auto_create_subnetworks = false
  project                 = "luxehaven-project"
}
