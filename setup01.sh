#!/bin/bash -x
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
brew install python
brew install ansible
mkdir -p /usr/local/etc/ansible
echo localhost > /usr/local/etc/ansible/hosts
