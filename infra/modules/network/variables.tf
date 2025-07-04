variable "project_id" {
  description = "ID du projet GCP"
  type        = string
}

variable "vpc_name" {
  type = string
}

variable "subnet_name" {
  type = string
}

variable "subnet_cidr" {
  type = string
}

variable "region" {
  type = string
}

variable "firewall_name" {
  type = string
}
