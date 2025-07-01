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

variable "network_name" {
  description = "Nom du VPC"
  type        = string
  default     = "luxehaven-vpc"
}

variable "my_ip" {
  description = "IP publique autorisée pour SSH et Directus"
  type        = string
}
