module "network" {
  source         = "../../modules/network"
  vpc_name       = var.vpc_name
  subnet_name    = var.subnet_name
  subnet_cidr    = var.subnet_cidr
  region         = var.region
  firewall_name  = var.firewall_name
  project_id     = var.project_id
}

module "vm" {
  source       = "../../modules/vm"
  vm_name      = var.vm_name
  machine_type = var.machine_type
  zone         = var.zone
  image        = var.image
  project_id   = var.project_id
  ssh_keys     = var.ssh_keys

  network      = module.network.vpc_self_link
  subnetwork   = module.network.subnet_self_link
  region       = var.region
}
