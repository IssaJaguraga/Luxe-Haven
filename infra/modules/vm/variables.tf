variable "vm_name" {
  type = string
}

variable "machine_type" {
  type = string
}

variable "zone" {
  type = string
}

variable "image" {
  type = string
}

variable "project_id" {
  type = string
}

variable "network" {
  description = "Self link du réseau VPC"
  type        = string
}

variable "subnetwork" {
  description = "Self link du sous-réseau"
  type        = string
}

variable "ssh_keys" {
  type = string
}

variable "region" {
  description = "La région GCP"
  type        = string
}
