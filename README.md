macbook_setup
=============

MacBookのセットアップ

## 1. Xcodeをインストール

執筆時点のXcodeのバージョンは6.1です。

### App Storeからインストール

Finderで[アプリケーション]/[App Store.app]を起動し、Xcodeを検索してインストールします。

### ライセンスに同意

インストールが終わったら、[アプリケーション]/[Xcode]でXcodeを一度起動して、ライセンスに同意してください。

## 2. Command Line Tools for Xcodeをインストール

Xcodeを起動した状態で、メニューバーから
[Xcode]/[Open Developer Tool]/[More Developer Tools...]メニューを開きます。

以下はYosemite (OS X 10.10)の場合の説明です。OSのバージョンが違う場合はバージョンにあったファイルをダウンロードしてインストールしてください。

ブラウザが開いたら
Command Line Tools (OS X 10.10) for Xcode 6.1を開いて
command_line_tools_for_osx_10.10_for_xcode_6.1.dmg
ファイルをダウンロードします。

ダウンロードが終わったらFinderで
command_line_tools_for_osx_10.10_for_xcode_6.1.dmg
をダブルクリックします。

開いたウィンドウの中にある
Command Line Tools (OS X 10.10).pkg
をダブルクリックして、インストールします。


## 3. GitHubのアクセストークン設定

### GitHubの2段階認証を有効にします

[Two-factor Authentication]( https://github.com/blog/1614-two-factor-authentication )の手順に従って、GitHubの2段階認証を有効にします

### gitコマンド用にGitHubのアクセストークンを設定し、OSXのキーチェーンに設定します

ターミナルで以下のコマンドを実行します。

```
git config --global credential.helper osxkeychain
```

GitHubのapplication settingsの"Personal access tokens"で"Generate new token"ボタンを押して作成します。
Token descriptionには"git @MacBook Pro"のような名前を入れました。scopeはデフォルトのまま(repo, public_repo, user, gist)にしました。

参考： [GitHubへのアクセスはSSHよりHTTPSがお勧めらしいので切り替えてみた - Qiita]( http://qiita.com/hnakamur/items/cb04882cc69f2d1a7367 )

## 4. セットアップ用スクリプトをgitから取得

[アプリケーション]/[ユーティリティ]/[ターミナル]でターミナルを起動し、以下のコマンドを実行します。

```
cd
git clone https://github.com/hnakamur/macbook_setup
cd macbook_setup
```

## 5. HomebrewとAnsibleのインストール

ターミナルで以下のコマンドを実行します。

```
./setup01.sh
```

## 6. Ansibleを使って各種ソフトウェアをセットアップ

host_vars/localhost.yml.sampleをhost_vars/localhost.ymlにコピーし、
git_global_user_nameとgit_global_user_emailの値を必ず書き換えてください。

```
---
git_global_user_name: "YOUR_NAME_HERE"
git_global_user_email: YOUR_EMAIL_HERE@example.com
```

ターミナルで以下のコマンドを実行します。

```
./setup02.sh
```
