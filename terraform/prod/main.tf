terraform {
  required_version = ">= 1.0.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.45.2"
    }
  }
}

provider "google" {
  project = "luxehaven-project"
  region  = "europe-west1"
}
