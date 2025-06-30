FROM python:3.11-slim

# Installation d'Ansible et SSH
RUN pip install --no-cache-dir ansible \
 && apt-get update \
 && apt-get install --no-install-recommends -y openssh-client \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /ansible