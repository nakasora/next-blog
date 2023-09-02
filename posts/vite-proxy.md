---
title: "Viteプロジェクトでプロキシを設定する方法"
date: "2023-09-02"
thumbnail: "/images/thumbnail-vite-proxy.jpg"
---

## そもそも Vite とは

Vite（フランス語で"速い"）は、Evan You（Vue.js の開発者）によって開発された、新世代のフロントエンドビルドツールです。Vite は、より高速で効率的な開発環境を提供することを目的としています。最近人気と満足度も急騰しており、State Of JavaScript2022 というフロントエンド開発者のアンケート結果でも、上位にランクインしています。  
[出典記事](https://2022.stateofjs.com/en-US/libraries/build-tools/)  
ここでは Vite プロジェクトで proxy を設定する方法についてガイドします。

## プロキシの設定手順

1. **Vite 設定ファイルを作成/更新する**: プロジェクトのルートに`vite.config.js`ファイルがあることを確認します。もしない場合は、作成してください。

2. **プロキシを設定する**: `vite.config.js`ファイルで、以下のようにプロキシの設定を行います。

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  ## ここまではデフォルト設定
  ## 以下を追記
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: false,
      },
    },
  },
})
```

ここでは、例として/api というパスの proxy を設定しています。上記のように設定すると、
/api へのリクエストはすべて**http://localhost:3000**に転送されます。

つまり、例えば axios を用いている場合、

`axios.get('/api')`

とソースに書くと、Vite 側で**http://localhost:3000/api**へとリクエストを転送してくれるんです。

### changeOrigin オプション

changeOrigin: changeOrigin を true に設定すると、リクエストの Host ヘッダーがターゲット URL に変更されます。これは、ターゲットサーバーが特定のホストからのリクエストのみを受け入れる場合に役立ちます。false に設定すると、リクエストの Host ヘッダーは変更されず、元のホストが使用されます。

## まとめ

この記事では Vite プロジェクトでプロキシを設定する方法を紹介しました。これからビルドツールとして Vite を利用することも増えていくと思いますので、どんどん慣れていきましょう
