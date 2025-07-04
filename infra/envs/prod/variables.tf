variable "project_id" {
  description = "ID du projet GCP"
  type        = string
  default     = "luxehaven-project"
}

variable "region" {
  description = "La région GCP"
  type        = string
  default     = "europe-west1"
}

variable "vpc_name" {
  description = "Nom du VPC"
  type        = string
  default     = "luxehaven-vpc-prod"
}

variable "subnet_name" {
  description = "Nom du sous-réseau"
  type        = string
  default     = "luxehaven-subnet-prod"
}

variable "subnet_cidr" {
  description = "CIDR du sous-réseau"
  type        = string
  default     = "10.0.2.0/24"
}

variable "firewall_name" {
  description = "Nom de la règle de pare-feu"
  type        = string
  default     = "luxehaven-firewall-prod"
}

variable "vm_name" {
  description = "Nom de la VM"
  type        = string
  default     = "prod-vm"
}

variable "machine_type" {
  description = "Type de machine GCP"
  type        = string
  default     = "e2-medium"
}

variable "zone" {
  description = "Zone GCP"
  type        = string
  default     = "europe-west1-b"
}

variable "image" {
  description = "Image Ubuntu officielle"
  type        = string
  default     = "ubuntu-os-cloud/ubuntu-2204-lts"
}

variable "ssh_keys" {
  description = "Clé publique SSH 'user:ssh-rsa ...'"
  type        = string
}
