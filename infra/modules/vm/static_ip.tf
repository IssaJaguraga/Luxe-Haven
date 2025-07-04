resource "google_compute_address" "vm_static_ip" {
  name    = "${var.vm_name}-ip"
  region  = var.region
  project = var.project_id
}
