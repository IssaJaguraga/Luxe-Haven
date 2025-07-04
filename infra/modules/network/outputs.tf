output "vpc_self_link" {
  description = "Self link du VPC"
  value       = google_compute_network.vpc.self_link
}

output "subnet_self_link" {
  description = "Self link du sous-réseau"
  value       = google_compute_subnetwork.subnet.self_link
}
