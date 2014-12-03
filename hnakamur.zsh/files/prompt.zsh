# Hiroaki Nakamura's zsh prompt config.
# This config is based on http://mollifier.hatenablog.com/entry/20090814/p1
# Thanks!
autoload -Uz vcs_info
zstyle ':vcs_info:*' formats '(%s)-[%b]'
zstyle ':vcs_info:*' actionformats '(%s)-[%b|%a]'
precmd () {
    psvar=()
    LANG=en_US.UTF-8 vcs_info
    [[ -n "$vcs_info_msg_0_" ]] && psvar[1]="$vcs_info_msg_0_"
}
PROMPT='[%D{%Y-%m-%d %H:%M:%S} %~ %? %1(v|%1v|)]
%# '
