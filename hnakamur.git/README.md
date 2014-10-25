git
===

An Ansible role to setup git.

Requirements
------------

You must set the following role variables which have no default values.
host_vars/localhost.yml might be a good place to set these variables.

```
git_global_user_name: "YOUR_NAME_HERE"
git_global_user_email: YOUR_EMAIL_HERE@example.com
```

Role Variables
--------------

See defaults/main.yml

Dependencies
------------

None.

Example Playbook
----------------

    - hosts: servers
      roles:
         - hnakamur.git

License
-------

MIT

Author Information
------------------

Hiroaki Nakamura
