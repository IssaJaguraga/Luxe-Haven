terraform {
  required_version = ">= 1.0.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.45.2"
    }
  }

  # backend "gcs" {}
}

provider "google" {
  project = var.project_id
  region  = var.region
}
