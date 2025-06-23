FROM node:20

# Terraform
RUN apt-get update && apt-get install -y curl gnupg software-properties-common \
 && curl -fsSL https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg \
 && echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" \
 > /etc/apt/sources.list.d/hashicorp.list \
 && apt-get update && apt-get install -y terraform

# gcloud CLI
# RUN apt-get install -y apt-transport-https ca-certificates gnupg \
#  && echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" \
#  > /etc/apt/sources.list.d/google-cloud-sdk.list \
#  && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg add - \
#  && apt-get update && apt-get install -y google-cloud-cli
