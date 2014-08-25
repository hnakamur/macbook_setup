#!/bin/bash -x
ansible-galaxy install --roles=. hnakamur.osx-defaults --force
ansible-galaxy install --roles=. hnakamur.homebrew-packages --force
ansible-galaxy install --roles=. hnakamur.homebrew-cask-packages --force
ansible-galaxy install --roles=. hnakamur.osx-login-shell --force
ansible-galaxy install --roles=. hnakamur.oh-my-zsh --force
ansible-galaxy install --roles=. hnakamur.homebrew-path --force
ansible-galaxy install --roles=. hnakamur.osx-go --force
ansible-galaxy install --roles=. hnakamur.osx-vim --force
ansible-galaxy install --roles=. hnakamur.osx-tmux --force
ansible-galaxy install --roles=. hnakamur.osx-direnv --force
ansible-galaxy install --roles=. hnakamur.osx-ruby --force
ansible-galaxy install --roles=. hnakamur.osx-node-js --force
ansible-playbook localhost.yml
