# mini-memo-app

## 開発、ビルド、実行の流れ
1. dockerで開発環境を準備する
    - rootディレクトリで `docker-compose up -d` を実行する
1. コンテナ内で開発
    - rootディレクトリで `npm ci` を実行してコンテナ内で依存モジュールのインストール
    - rootディレクトリで `npm run dev -w ssr-server` を実行して起動
    - rootディレクトリで `npm run eslint:fix -w ssr-server` を実行してlint
    - rootディレクトリで `npm run cy:run -w e2e` を実行して全件テスト実行
        - 個別に確認する場合は`npx cypress run -s "cypress/integration/yamabiko.spec.js"` のように指定可能
        - フォルダ単位で実行するなら`-s "cypress/integration/dirA/*"`とすることも可能
    - rootディレクトリで `npm run build -w ssr-server` を実行してビルド。
1. dockerイメージにビルドする
    - 例） `docker build -f Dockerfile.prod -t mini-memo-app-image .`
1. dockerイメージを利用してデプロイする
    - 例） `docker run -it -p 3001:3000 --name mini-memo-app mini-memo-app-image`
    - 環境変数などもコマンドで付与が可能

### sls offlineをつかって動作確認する
local用のdockerにslsをインストールしてあるので、それを利用します。

1. プロジェクトrootで`sh sls-prepare.sh` を実行する
1. プロジェクトrootで`sh sls-offline.sh` を実行する
1. ホスト上で http://localhost:3000/ にアクセスして動作確認を行う

## 各操作の詳細

### ローカルで開発の仕方
コンテナ内での開発を想定しています。RemoteContainerを利用してもいいですし、シェルをアタッチしてもいいです

Dockerコンテナを用いず開発することも可能ですが、ビルドはコンテナで対応するほうが良いとおもいます

### イメージビルド後の解説
- ビルド `docker build -f Dockerfile.prod -t mini-memo-app-image .`
    - -f はDockerfileの指定
    - -t はタグの指定。mini-memo-app-image:0.1などのようにバージョン指定も可能
- イメージから作成 `docker run -it -p 3001:3000 --name mini-memo-app mini-memo-app-image`
    - 開発とかぶるためportをずらしているが、本番運用するのであればLB等と合うように設定すれば問題ない
-  `docker start mini-memo-app`
    - 2回目以降の起動時、コンテナが残っているためstartで起動する
- 不要なコンテナを削除する場合 `docker rm mini-memo-app`
