homebrew_packages
=================

Ansible role for installing homebrew packages

Requirements
------------

Install Ansible and homebrew.

Role Variables
--------------

- homebrew_packages_taps
    - an array of homebrew taps
- homebrew_packages_pacakges
    - an array of hashes for homebrew pacakges.
    - each hash has key name (mandatory), state (optional, default is present), and install_options

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
        - hnakamur.homebrew_packages

License
-------

MIT

Author Information
------------------

Hiroaki Nakamura
