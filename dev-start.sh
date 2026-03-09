#!/bin/bash

echo "開発環境を起動中..."

# MAMPが起動しているかチェック
if ! pgrep -f "/Applications/MAMP/Library/bin/httpd" > /dev/null; then
    echo "MAMPが起動していません。MAMPを先に起動してください。"
    echo "MAMPコントロールパネルを開いています..."
    open /Applications/MAMP/MAMP.app
    echo "MAMPを起動したら、再度このスクリプトを実行してください。"
    exit 1
fi

echo "MAMPが起動していることを確認しました"

# Node.jsの依存関係がインストールされているかチェック
if [ ! -d "node_modules" ]; then
    echo "依存関係をインストール中..."
    npm install
fi

echo "Browser-Syncを開始します..."
echo "開発サーバー: http://localhost:3000"
echo "MAMP直接アクセス: http://localhost:8888/ohisama-hc/"
echo ""
echo "停止する場合は Ctrl+C を押してください"

# 開発環境開始
npm run dev
