# 本地快速预览脚本
cd $PSScriptRoot
python -m http.server 8000
Write-Host "访问 http://localhost:8000 来预览网站"