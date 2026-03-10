# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

医化学創薬株式会社（Medicinal Chemistry Pharmaceuticals Co., Ltd.）のコーポレートサイト。
糖鎖化学（糖鎖受託解析・糖鎖受託合成・抗体関連サービスなど）を提供する企業のWebサイト。
静的HTML + CSS + JSで構築。

## 開発環境

- **サーバー**: MAMP（ローカル）
- **URL**: http://localhost:8888/gate/ikagaku-souyaku/
- **開発サーバー**: Browser-Sync（port 3000）
- **パッケージマネージャ**: pnpm
- **起動**: `./dev-start.sh` または `pnpm dev`

## ディレクトリ構成

```
ikagaku-souyaku/
├── index.html             # トップページ（メイン）
├── pages/                 # 下層ページ（未作成）
├── assets/
│   ├── css/
│   │   ├── reset.css      # リセットCSS
│   │   └── style.css      # メインスタイル
│   ├── js/
│   │   └── main.js        # メインJS
│   └── images/
│       ├── icon/           # ロゴ・アイコン（SVG/PNG）
│       └── background/     # 背景画像
├── robots.txt
├── sitemap.xml
├── dev-start.sh           # 開発環境起動スクリプト
└── package.json           # Browser-Sync設定
```

## デザイン仕様

### カラーパレット（CSS変数）
- グリーン系（メイン）: `--green-primary: #4A9A3A` / `--green-dark: #2D6B22` / `--green-light: #7CB342`
- オレンジ（アクセント）: `--orange: #F5A623`
- テキスト: `--text-dark: #333333` / `--text-gray: #666666`
- 背景: `--bg-light: #F9F9F6` / `--white: #FFFFFF`

### フォント
- `"Noto Sans JP"`, `"Hiragino Kaku Gothic ProN"`, `"Hiragino Sans"`, `Meiryo`, `sans-serif`

### CSS設計
- BEM記法を使用
- CSS変数を `:root` で管理
- レスポンシブ対応

## トップページ構成（index.html）

| セクション | クラス名 | 内容 |
|-----------|---------|------|
| ヘッダー | `.header` | ロゴ、ナビ（企業情報・採用情報・お知らせ）、お問い合わせ、検索 |
| モバイルナビ | `.mobile-nav` | ハンバーガーメニュー展開時 |
| ヒーロー | `.hero` | スライダー、GT Platform訴求、糖鎖コラムバナー |
| お知らせ | `.news` | LATEST NEWS一覧 |
| サービス | `.services` | 7枚のカード（糖鎖の視点、受託解析、受託合成、抗体関連など） |
| 糖鎖情報 | `.sugar-chain` | 情報発信セクション（特徴技術、事例紹介、Q&Aなど） |
| パートナー | `.partners` | 関連企業ロゴ一覧 |
| フッター | `.footer` | サイトマップ、連絡先、コピーライト |

## コーディング規約

- クラス名はBEM記法: `.block__element--modifier`
- 画像パスは `assets/images/` を基準にする
- 日本語コンテンツのため `lang="ja"` を設定
- CSS変数は `:root` に定義し、直書きの色コードを避ける

## コミットメッセージ規約

- 日本語で書く
- 形式: `<prefix>: <説明>`
- prefix: `feat` / `fix` / `refactor` / `chore` / `docs` / `style` / `test`
- `Co-Authored-By` は付けない

## デプロイ

- `.htaccess` / `.htpasswd` は Git 管理しない
- GitHub Actions のFTPデプロイを使用（`.github/workflows/` に設定）
