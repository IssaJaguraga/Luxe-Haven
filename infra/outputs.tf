output "preprod_vm_external_ip" {
  description = "Adresse IP externe de la VM préproduction"
  value       = google_compute_instance.preprod_vm.network_interface[0].access_config[0].nat_ip
}
