homebrew_cask_packages
======================

Ansible role for installing homebrew cask packages

Requirements
------------

Install Ansible and homebrew.

Role Variables
--------------

- homebrew_cask_packages_taps
    - an array of homebrew cask packages

Dependencies
------------

None.

Example Playbook
-------------------------

    - hosts: localhost
      connection: local
      gather_facts: no           
      sudo: no
      roles:
        - hnakamur.homebrew_cask_packages

License
-------

MIT

Author Information
------------------

Hiroaki Nakamura
