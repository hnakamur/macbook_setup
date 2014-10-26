#!/bin/bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install python
brew install ansible
mkdir -p /usr/local/etc/ansible
echo localhost > /usr/local/etc/ansible/hosts
