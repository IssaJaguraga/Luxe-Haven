output "vm_ip" {
  description = "Adresse IP publique de la VM de prod"
  value       = module.vm.instance_ip
}
