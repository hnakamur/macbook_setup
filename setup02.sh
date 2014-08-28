#!/bin/bash -x
ansible-galaxy install --roles=. -r requirements.txt --force
ansible-playbook localhost.yml
