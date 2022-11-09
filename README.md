# 微言官网第三版 Nuxt3 重构

## 一、前言

微言官网第三版，为了满足 SEO 需求，采用 Nuxt3 重构

- Nuxt3 : 基于 Vue3 的混合开发框架，支持 TS，支持服务端渲染（SSR）与静态网站生成（SSG）
- Eslint : 语法检查，保证项目的质量
- Prettier : 风格检查，保证项目的统一风格
- Stylelint : css 语法风格检查，检查 css 语法错误与不合理的写法
- EditorConfig : 不同的编辑器和 IDE 之间定义和维护一致的编码样式
- Husky : git hooks 工具，代码提交前检查以保证质量

## 二、node 版本

- nvm 1.1.9
- node 16.17.0
- npm 8.15.0

## 三、安装使用步骤

- **Clone：**

```text
git clone ssh://git@172.16.110.183:10022/front-end/weiyan-web-nuxt3.git
```

- **Install：**

```text
npm i

# npm install 安装失败，请升级 nodejs 到 16 以上，或尝试使用以下命令：
npm install --registry=http://registry.npmmirror.com/
```

- **Run：**

```text
npm run dev
```

- **Build：**

```text
# 生成静态网站
npm run generate
```

- **Lint：**

```text
# eslint 检测代码
npm run lint

# prettier 格式化代码
npm run format

# stylelint 格式化样式
npm run style
```

- **commit：**

```text
# 提交代码（提交前会自动执行 lint-staged 命令）
git add .
npm run commit
git push
```
