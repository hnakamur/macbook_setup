Go
==

An Ansible role to install go

Requirements
------------

None.

Role Variables
--------------

```
go_gopath: ~/go
```

Dependencies
------------

- hnakamur.zsh

Example Playbook
----------------

    - hosts: servers
      roles:
         - hnakamur.go

License
-------

MIT

Author Information
------------------

Hiroaki Nakamura
