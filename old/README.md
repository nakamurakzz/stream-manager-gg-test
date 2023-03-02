# 検証の目的
- エッジサーバがOFFLINE（通信不良）時に取得したデータを、ONLINEに回復したタイミングでS3にアップロード出来ることを確認する
- 設定方法、実装方法を確認する

# 前提
- Linux上にGreengrass v2をインストールしておく

# 事前調査
## SDKを使用してコードから実行する
- S3アクセスポリシー作成、既存のロールにアタッチ
- ストリームマネージャーコンポーネントの設定、デプロイ（要らないかも？）
- Greengrass上のLambda内でストリームマネージャーを呼び出し（SDKによるAPI実行）

（参考）
https://docs.aws.amazon.com/ja_jp/greengrass/v2/developerguide/stream-export-configurations.html
https://aws-greengrass.github.io/aws-greengrass-stream-manager-sdk-js/aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition.html

# デプロイ
```bash
npx sls deploy --aws-profile ***
---