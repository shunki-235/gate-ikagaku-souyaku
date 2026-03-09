# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

おひさまホームクリニック（訪問診療クリニック）のコーポレートサイト。
6ページ構成のシンプルなPHPサイト。デザインは柔らかく親しみのある雰囲気。

## 開発環境

- **サーバー**: MAMP（ローカル）
- **URL**: http://localhost:8888/ohisama-hc/
- **PHP**: 8.x

## ディレクトリ構成

```
ohisama-hc/
├── index.php              # トップページ
├── pages/                 # 各ページ（medical-care, doctors, faq, recruit, contact）
├── includes/              # 共通パーツ（header, footer, nav, config）
└── assets/
    ├── css/               # スタイルシート
    ├── js/                # JavaScript
    └── images/            # 画像
```

## デザイン仕様

詳細は `DESIGN.md` を参照。

### カラーパレット
- メイン: `#F5A962`（オレンジ）
- サブ: `#FFF8F0`（ベージュ）
- アクセント: `#7CB342`（グリーン）
- テキスト: `#333333`
- 背景: `#FFFDF9`

### CSS設計
- BEM記法を使用
- レスポンシブ: モバイル（〜767px）、タブレット（768px〜1023px）、デスクトップ（1024px〜）

## ページ一覧

| ページ | ファイル | 内容 |
|--------|----------|------|
| TOP | `index.php` | メインビジュアル、特徴、お知らせ |
| 診療案内 | `pages/medical-care.php` | 診療内容、訪問エリア |
| 医師紹介 | `pages/doctors.php` | 院長挨拶、プロフィール |
| FAQ | `pages/faq.php` | よくある質問（アコーディオン） |
| 採用情報 | `pages/recruit.php` | 募集要項 |
| お問い合わせ | `pages/contact.php` | フォーム |

## コーディング規約

- PHPの共通パーツは `includes/` に配置し、`include` で読み込む
- 画像パスは `assets/images/` を基準にする
- クラス名はBEM記法: `.block__element--modifier`
- 日本語コンテンツのため `lang="ja"` を設定

## Gitルール

- コミットメッセージに `Co-Authored-By` を含めない

## デプロイ/認証メモ

- `.htaccess` / `.htpasswd` はサーバー固有設定になりやすく、誤ると `500` になり得るため Git 管理しない
- Basic認証を使う場合はサーバー側に `.htaccess` と `.htpasswd` を配置する
- GitHub Actions のFTPデプロイでは `.htaccess` / `.htpasswd` / `.htaccess.example` を除外している
