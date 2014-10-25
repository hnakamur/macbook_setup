ruby
====

An Ansible role to install ruby using [sstephenson/ruby-build](https://github.com/sstephenson/ruby-build)

Requirements
------------

C compiler must be installed beforehand.

Role Variables
--------------

```
ruby_version: 2.1.3
ruby_install_dir: /usr/local/ruby-{{ ruby_version }}
ruby_build_dir: /usr/local/src/ruby-build
ruby_global_gems:
- bundler
- compass
ruby_bin_dir: "{{ ruby_install_dir }}/bin"
```

Dependencies
------------

None.

Example Playbook
----------------

Including an example of how to use your role (for instance, with variables passed in as parameters) is always nice for users too:

    - hosts: servers
      roles:
         - hnakamur.ruby

License
-------

MIT

Author Information
------------------

Hiroaki Nakamura
