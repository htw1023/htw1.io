# 学习技能平台

这是一个简单的学习平台静态网页项目，包含多项学习技能卡片，并附带哔哩哔哩视频跳转链接。

## 本地预览

如果你只是想本地打开：

- 直接打开 `index.html`
- 或者运行以下命令启动本地服务：

```powershell
cd d:\Agent\MyCode
python -m http.server 8000
```

然后访问：

`http://localhost:8000`

## 公开部署（推荐 GitHub Pages）

1. 在 GitHub 上创建一个新仓库。
2. 将本地仓库连接到 GitHub：

```powershell
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git branch -M main
git push -u origin main
```

3. 进入仓库设置，启用 GitHub Pages：
   - 选择 `main` 分支
   - 选择根目录 `/`

4. 几分钟后，GitHub Pages 会生成一个公开网址。

## 自动部署

仓库中已包含 GitHub Actions 工作流：`.github/workflows/deploy.yml`

每次你将代码推送到 `main` 分支时，GitHub 会自动构建并发布网站。

## 备注

如果你希望，我也可以继续帮你：

- 配置 GitHub Actions 自动部署
- 集成更多技能标签和搜索筛选
- 改成 React/Vue 单页应用
