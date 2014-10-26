node.js
=======

An Ansible role to install node.js using [node-build/bin](https://github.com/OiNutter/node-build/tree/master/bin)

Requirements
------------

None.

Role Variables
--------------

```
node_version: 0.10.32
node_install_dir: /usr/local/node-{{ node_version }}
node_build_dir: /usr/local/src/node-build
node_global_packages:
- grunt-cli
- gulp
node_bin_dir: "{{ node_install_dir }}/bin"
```

Dependencies
------------

None.

Example Playbook
----------------

    - hosts: servers
      roles:
         - hnakamur.node

License
-------

MIT

Author Information
------------------

Hiroaki Nakamura
