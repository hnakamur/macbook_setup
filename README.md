macbook_setup
=============

MacBookのセットアップ

## 1. Xcodeインストール

[アプリケーション]/[ユーティリティ]/[ターミナル]でターミナルを起動し、以下のコマンドを実行します。

```
xcode-select --install
```

ダイアログが出てきたら「Xcode」を選択してXcodeをインストールします。
インストールが終わったら、[アプリケーション]/[Xcode]でXcodeを一度起動して、ライセンスに同意してください。

## 2. GitHubのアクセストークン設定

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

## 3. セットアップ用スクリプトをgitから取得

[アプリケーション]/[ユーティリティ]/[ターミナル]でターミナルを起動し、以下のコマンドを実行します。

```
cd
git clone https://github.com/hnakamur/macbook_setup
cd macbook_setup
```

## 4. HomebrewとAnsibleのインストール

ターミナルで以下のコマンドを実行します。

```
./setup01.sh
```

## 5. Ansibleを使って各種ソフトウェアをセットアップ

host_vars/localhost.yml.sampleをhost_vars/localhost.ymlにコピーし、
git_user_nameとgit_user_emailの値を必ず書き換えてください。

```
---
git_user_name: "YOUR_NAME_HERE"
git_user_email: YOUR_EMAIL_HERE@example.com
```

ターミナルで以下のコマンドを実行します。

```
./setup02.sh
```
