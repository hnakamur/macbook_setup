osx_noto_sans_fonts
===================

An Ansible role to install Noto Sans fonts.

Requirements
------------

None.

Role Variables
--------------

- osx_noto_sans_fonts_zip_url_base: https://www.google.com/get/noto/pkgs/
- osx_noto_sans_fonts_download_dir: ~/Downloads
- osx_noto_sans_fonts_install_dir: ~/Library/Fonts

Dependencies
------------

None.

Example Playbook
----------------

    - hosts: servers
      roles:
      - role: hnakamur.osx_noto_sans_fonts
        osx_noto_sans_fonts_zip_filename: NotoSans-unhinted.zip
        osx_noto_sans_fonts_creates_font_filename: NotoSans-Regular.ttf
      - role: hnakamur.osx_noto_sans_fonts
        osx_noto_sans_fonts_zip_filename: NotoSerif-unhinted.zip
        osx_noto_sans_fonts_creates_font_filename: NotoSerif-Regular.ttf
      - role: hnakamur.osx_noto_sans_fonts
        osx_noto_sans_fonts_zip_filename: NotoSansJapanese-hinted.zip
        osx_noto_sans_fonts_creates_font_filename: NotoSansJP-Regular.otf

License
-------

MIT

Author Information
------------------

Hiroaki Nakamura
