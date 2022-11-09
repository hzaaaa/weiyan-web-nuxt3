# 项目创建流程

## 1 创建项目（以 Nuxt3 为例）

```Bash
npx nuxi init nuxt3Demo    // 需要科学上网
```

## 2 配置 eslint

```Bash
npm i eslint -D    //安装
npx eslint --init    // 初始化
```

```Bash
(1) How would you like to use ESLint?
选择：To check syntax and find problems

(2) What type of modules does your project use?
选择：JavaScript modules (import/export)

(3) Which framework does your project use?
选择：Vue.js

(4) Does your project use TypeScript?
选择：Yes

(5) Where does your code run?
选择：Browser

(6) What format do you want your config file to be in?
选择：JavaScript

(7) Would you like to install them now?
选择：Yes

(8) Which package manager do you want to use?
选择：npm
```

#### 安装依赖说明

> 1. eslint-plugin-vue：为 Vue 使用 ESlint 的插件
>
> 1. @typescript-eslint/eslint-plugin： ESLint 插件，包含各类定义好的 TypeScript 代码的规范
>
> 1. @typescript-eslint/parser：ESLint 用于解析 TypeScript，从而检查和规范 TypeScript 代码

#### 修改生成的 `.eslintrc.js` 文件

```Diff
// .eslintrc.js
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
+        // 新增
+        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
+    // 修改
+    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
+        // 新增
+        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": ["vue", "@typescript-eslint"],
    "rules": {}
}
```

## 3 配置 prettier

```Bash
npm i prettier eslint-config-prettier eslint-plugin-prettier -D
```

#### 安装依赖说明

> 1. [eslint-plugin-prettier](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-plugin-prettier)： 让 eslint 使用 pretter 规则来格式化代码
>
> 1. [eslint-config-prettier](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-config-prettier)： 禁用所有与格式相关的 eslint 规则，解决 prettier 与 eslint 规则冲突，**确保将其放在 extends 队列最后，这样它将覆盖其他配置**

#### 项目根目录下新建`.prettierrc.js`

```JavaScript
// .prettierrc.js
module.exports = {
  printWidth: 130, // 超过最大值换行
  tabWidth: 2, // 一个 tab 代表几个空格
  useTabs: true, // 是否使用 tab 进行缩进(默认false:空格 | true:tab)
  semi: true, // 行尾是否使用分号(默认true:有 | false:没有)
  singleQuote: false, // 使用单引号(默认false:双引号 | true:单引号)
  quoteProps: "as-needed", // 是否自动给对象属性加引号 (默认as-needed:只给需要加的单个属性加 | consistent:有属性需要加时给所有属性加 | preserve:保持输入状态)
  trailingComma: "es5", // 多行时尽可能打印尾随逗号(默认es5：obj、arr会加，ts type不加 | none:都不加 | all:尽可能加，包括ts的type>"
  bracketSpacing: true, // 对象大括号之间是否有空格，(默认true:有 | false:没有)
  arrowParens: "always", //  (x) => {} 箭头函数参数只有一个时是否要有小括号 (默认always:加 | avoid：不加)
  proseWrap: "preserve", // 默认 preserve .因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  htmlWhitespaceSensitivity: "css", // 在html中空格是否是敏感的 (默认css:遵守CSS显示属性的默认值 | strict:空格被认为是敏感的 | ignore:空格被认为是不敏感的)
  vueIndentScriptAndStyle: false, // Vue文件脚本和样式标签缩进 (默认false:无缩进 | true:有缩进)
  endOfLine: "lf", // 换行符使用 lf 结尾是 (默认lf | crlf | cr | auto)
};
```

#### 修改 `.eslintrc.js`配置防止冲突（需重启 vscode）

```Diff
// .eslintrc.js
{
    extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
+    // 新增，必须放在最后面
+    'plugin:prettier/recommended'
  ],
}
```

## 4 配置 stylelint

```Bash
npm i stylelint stylelint-config-standard stylelint-config-standard-scss postcss-html stylelint-config-prettier stylelint-order -D
```

#### 安装依赖说明

> 1. stylelint：`Stylelint` 核心库，CSS 检查工具
>
> 1. stylelint-config-standard：`Stylelint`的标准可共享配置规则，包括：惯用 CSS 原则，谷歌的 CSS 样式指南，Airbnb 的样式指南，和 @mdo 的代码指南。
>
> 1. stylelint-config-standard-scss：扩展 stylelint-config-standard 共享配置，使之可以检查 SCSS
>
> 1. postcss-html：识别 html/vue 中的`<style></style>`标签中的样式
>
> 1. stylelint-config-prettier：关闭所有不必要或可能与`Prettier`冲突的规则
>
> 1. stylelint-order：自定义样式的顺序，在`.stylelintrc.js`中`order/properties-order`指定

#### 项目根目录下新建`.stylelintrc.js`

```JavaScript
// .stylelintrc.js
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: ["stylelint-order"],
  overrides: [
    // 不同格式的文件指定自定义语法（顺序不可变）。主要为了检查 html 中的 css，如果postcss-html写在extends 中会报错
    // Unknown word (CssSyntaxError)，这个问题主要是因为 stylelint 升级到 14 大版本造成的。
    {
      files: ["**/*.{html,vue}"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.{css,scss,sass}"],
      customSyntax: "postcss-scss",
    },
  ],
  rules: {
    "no-descending-specificity": null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    "function-url-quotes": "always", // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    "string-quotes": "double", // 指定字符串使用单引号或双引号
    "unit-case": null, // 指定单位的大小写 "lower(全小写)"|"upper(全大写)"
    "color-hex-case": "lower", // 指定 16 进制颜色的大小写 "lower(全小写)"|"upper(全大写)"
    "color-hex-length": "long", // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
    "rule-empty-line-before": "never", // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行。)"
    "font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字
    "block-opening-brace-space-before": "always", // 要求在块的开大括号之前必须有一个空格或不能有空白符 "always(大括号前必须始终有一个空格)"|"never(左大括号之前绝不能有空格)"|"always-single-line(在单行块中的左大括号之前必须始终有一个空格)"|"never-single-line(在单行块中的左大括号之前绝不能有空格)"|"always-multi-line(在多行块中，左大括号之前必须始终有一个空格)"|"never-multi-line(多行块中的左大括号之前绝不能有空格)"
    "property-no-unknown": null, // 禁止未知的属性(true 为不允许)
    "no-empty-source": null, // 禁止空源码
    "declaration-block-trailing-semicolon": null, // 要求或不允许在声明块中使用尾随分号 string："always(必须始终有一个尾随分号)"|"never(不得有尾随分号)"
    "selector-class-pattern": null, // 强制选择器类名的格式
    "scss/at-import-partial-extension": null, // 解决不能引入scss文件
    "value-no-vendor-prefix": null, // 关闭 vendor-prefix(为了解决多行省略 -webkit-box)
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "v-deep", "deep"],
      },
    ],
    "order/properties-order": [
      // 布局属性
      "display",
      "visibility",
      "overflow",
      "overflow-x",
      "overflow-y",
      "overscroll-behavior",
      "scroll-behavior",
      "scroll-snap-type",
      "scroll-snap-align",
      // 布局属性：浮动
      "float",
      "clear",
      // 布局属性：定位
      "position",
      "left",
      "right",
      "top",
      "bottom",
      "z-index",
      // 布局属性：列表
      "list-style",
      "list-style-type",
      "list-style-position",
      "list-style-image",
      // 布局属性：表格
      "table-layout",
      "border-collapse",
      "border-spacing",
      "caption-side",
      "empty-cells",
      // 布局属性：弹性
      "flex-flow",
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-content",
      "align-items",
      "align-self",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "order",
      // 布局属性：多列
      "columns",
      "column-width",
      "column-count",
      "column-gap",
      "column-rule",
      "column-rule-width",
      "column-rule-style",
      "column-rule-color",
      "column-span",
      "column-fill",
      "column-break-before",
      "column-break-after",
      "column-break-inside",
      // 布局属性：格栅
      "grid-columns",
      "grid-rows",
      // 尺寸属性
      "box-sizing",
      "margin",
      "margin-left",
      "margin-right",
      "margin-top",
      "margin-bottom",
      "padding",
      "padding-left",
      "padding-right",
      "padding-top",
      "padding-bottom",
      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-colors",
      "border-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-left-colors",
      "border-right",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-right-colors",
      "border-top",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-top-colors",
      "border-bottom",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "border-bottom-colors",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      // 界面属性
      "appearance",
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "outline-radius",
      "outline-radius-topleft",
      "outline-radius-topright",
      "outline-radius-bottomleft",
      "outline-radius-bottomright",
      "background",
      "background-color",
      "background-image",
      "background-repeat",
      "background-repeat-x",
      "background-repeat-y",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-size",
      "background-origin",
      "background-clip",
      "background-attachment",
      "bakground-composite",
      "mask",
      "mask-mode",
      "mask-image",
      "mask-repeat",
      "mask-repeat-x",
      "mask-repeat-y",
      "mask-position",
      "mask-position-x",
      "mask-position-y",
      "mask-size",
      "mask-origin",
      "mask-clip",
      "mask-attachment",
      "mask-composite",
      "mask-box-image",
      "mask-box-image-source",
      "mask-box-image-width",
      "mask-box-image-outset",
      "mask-box-image-repeat",
      "mask-box-image-slice",
      "box-shadow",
      "box-reflect",
      "filter",
      "mix-blend-mode",
      "opacity",
      "object-fit",
      "clip",
      "clip-path",
      "resize",
      "zoom",
      "cursor",
      "pointer-events",
      "user-modify",
      "user-focus",
      "user-input",
      "user-select",
      "user-drag",
      // 文字属性
      "line-height",
      "line-clamp",
      "vertical-align",
      "direction",
      "unicode-bidi",
      "writing-mode",
      "ime-mode",
      "text-overflow",
      "text-decoration",
      "text-decoration-line",
      "text-decoration-style",
      "text-decoration-color",
      "text-decoration-skip",
      "text-underline-position",
      "text-align",
      "text-align-last",
      "text-justify",
      "text-indent",
      "text-stroke",
      "text-stroke-width",
      "text-stroke-color",
      "text-shadow",
      "text-transform",
      "text-size-adjust",
      "src",
      "font",
      "font-family",
      "font-style",
      "font-stretch",
      "font-weight",
      "font-variant",
      "font-size",
      "font-size-adjust",
      "color",
      // 内容属性
      "tab-size",
      "overflow-wrap",
      "word-wrap",
      "word-break",
      "word-spacing",
      "letter-spacing",
      "white-space",
      "caret-color",
      "quotes",
      "content",
      "content-visibility",
      "counter-reset",
      "counter-increment",
      "page",
      "page-break-before",
      "page-break-after",
      "page-break-inside",
      // 交互属性
      "will-change",
      "perspective",
      "perspective-origin",
      "backface-visibility",
      "transform",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-property",
      "transition-duration",
      "transition-timing-function",
      "transition-delay",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-play-state",
      "animation-fill-mode",
      // Webkit专有属性
      "-webkit-overflow-scrolling",
      "-webkit-box-orient",
      "-webkit-line-clamp",
      "-webkit-text-fill-color",
      "-webkit-tap-highlight-color",
      "-webkit-touch-callout",
      "-webkit-font-smoothing",
      "-moz-osx-font-smoothing",
    ],
  },
};
```

## 5 配置 EditorConfig

#### 安装 VsCode 插件（EditorConfig ）

#### 项目根目录下新建`.editorconfig`

```TOML
# .editorconfig
# @see: http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
end_of_line = lf # 控制换行类型(lf | cr | crlf)
insert_final_newline = true # 始终在文件末尾插入一个新行
trim_trailing_whitespace = true # 关闭末尾空格修剪

[*.md] # 表示仅 md 文件适用以下规则
trim_trailing_whitespace = false # 关闭末尾空格修剪
```

## 6 配置 husky

```Shell
npm i husky lint-staged @commitlint/cli commitizen cz-git -D
```

#### 安装依赖说明

> 1. husky：操作 git 钩子的工具
>
> 1. lint-staged：在提交之前进行 eslint 校验、prettier 格式化本地暂存区代码等操作
>
> 1. @commitlint/cli：校验 git commit 信息是否符合规范，保证团队的一致性（commit 检查）
>
> 1. commitizen：基于 Node.js 的 git commit 命令行工具（生成标准化的 commit，npx cz 启用）
>
> 1. cz-git：工程性更强，轻量级，高度自定义的 commitize 适配器（基于 commitizen，更好用）

```Bash
npm pkg set scripts.prepare="husky install"
npm run prepare
```

```Bash
npx husky add .husky/pre-commit "npx lint-staged"
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

#### 项目根目录下新建 `lint-staged.config.js`

```JavaScript
// lint-staged.config.js
module.exports = {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": ["prettier --write--parser json"],
    "package.json": ["prettier --write"],
    "*.vue": ["eslint --fix", "prettier --write", "stylelint --fix"],
    "*.{scss,less,styl,html}": ["stylelint --fix", "prettier --write"],
    "*.md": ["prettier --write"]
};
```

#### 修改 `package.json`

```Diff
"scripts": {
+    "commit": "cz"
},
+"config": {
+    "commitizen": {
+      "path": "node_modules/cz-git"
+    }
+}
```

#### 项目根目录下新建 `commitlint.config.js`

```JavaScript
// commitlint.config.js
// @see: https://cz-git.qbenben.com/zh/guide
/** @type {import('cz-git').UserConfig} */

module.exports = {
  ignores: [(commit) => commit.includes("init")],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      // customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      // body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      // breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      // footerPrefixsSelect: "选择关联issue前缀（可选）:",
      // customFooterPrefixs: "输入自定义issue前缀 :",
      // footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?"
    },
    types: [
      { value: "feat", name: "feat:   🚀  新增功能", emoji: "🚀" },
      { value: "fix", name: "fix:   🧩  修复缺陷", emoji: "🧩" },
      { value: "docs", name: "docs:   📚  文档变更", emoji: "📚" },
      { value: "style", name: "style: 🎨  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: "🎨" },
      // { value: "refactor", name: "refactor:   ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: "♻️" },
      // { value: "perf", name: "perf:   ⚡️  性能优化", emoji: "⚡️" },
      // { value: "test", name: "test:   ✅  添加疏漏测试或已有测试改动", emoji: "✅" },
      // { value: "build", name: "build:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）", emoji: "📦️" },
      // { value: "ci", name: "ci:   🎡  修改 CI 配置、脚本", emoji: "🎡" },
      // { value: "revert", name: "revert:   ⏪️  回滚 commit", emoji: "⏪️" },
      // { value: "chore", name: "chore:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: "🔨" }
    ],
    useEmoji: true,
    skipQuestions: ["body","breaking","footer","footerPrefix"],
    scopes: []
  },
};
```

## 7 安装 vscode 插件

#### 安装 vscode 插件 ESLint、Prettier - Code formatter、Stylelint、EditorConfig

#### 项目根目录下新建`.vscode/settings.json`

```JSON
{
  // 本配置文件仅在当前项目生效，且优先级高于 vscode 的用户配置
  // 启用 eslint (用户配置默认为启用。防止 vscode 用户配置主动禁用 eslint)
  "eslint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, // eslint 保存文件时自动修复语法
    "source.fixAll.stylelint": true,  // stylelint 保存文件时自动修复 css 语法、样式
  },
  // prettier 保存时自动格式化样式
  "editor.formatOnSave": true,
  // prettier 默认格式化工具选择
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // stylelint 校验的文件格式
  "stylelint.validate": ["css", "scss", "vue", "html"],
}
```

## 8 规则

#### `.prettierrc.js`

```JavaScript
// .prettierrc.js 修改后重启 vscode 生效
// @see: https://www.prettier.cn

module.exports = {
  printWidth: 130, // 超过最大值换行
  tabWidth: 2, // 一个 tab 代表几个空格
  useTabs: true, // 是否使用 tab 进行缩进(默认false:空格 | true:tab)
  semi: true, // 行尾是否使用分号(默认true:有 | false:没有)
  singleQuote: false, // 使用单引号(默认false:双引号 | true:单引号)
  quoteProps: "as-needed", // 是否自动给对象属性加引号 (默认as-needed:只给需要加的单个属性加 | consistent:有属性需要加时给所有属性加 | preserve:保持输入状态)
  trailingComma: "es5", // 多行时尽可能打印尾随逗号(默认es5：obj、arr会加，ts type不加 | none:都不加 | all:尽可能加，包括ts的type>"
  bracketSpacing: true, // 对象大括号之间是否有空格，(默认true:有 | false:没有)
  arrowParens: "always", //  (x) => {} 箭头函数参数只有一个时是否要有小括号 (默认always:加 | avoid：不加)
  proseWrap: "preserve", // 默认 preserve .因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  htmlWhitespaceSensitivity: "css", // 在html中空格是否是敏感的 (默认css:遵守CSS显示属性的默认值 | strict:空格被认为是敏感的 | ignore:空格被认为是不敏感的)
  vueIndentScriptAndStyle: false, // Vue文件脚本和样式标签缩进 (默认false:无缩进 | true:有缩进)
  endOfLine: "lf", // 换行符使用 lf 结尾是 (默认lf | crlf | cr | auto)
};
```

#### `.eslintrc.js`

```JavaScript
// .eslintrc.js 修改后重启 vscode 生效
/*
    * "off" 或 0    ==>  关闭规则
    * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
    * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
    */
rules: {
  // eslint (http://eslint.cn/docs/rules)
  "no-var": "error", // 要求使用 let 或 const 而不是 var
  "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
  "no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们
  "prefer-const": "off", // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
  "no-irregular-whitespace": "off", // 禁止不规则的空白
  "no-undef": "off", // 默认值 error 与 vue3中的setup 冲突，改为 off

  // typeScript (https://typescript-eslint.io/rules)
  "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
  "@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
  "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
  "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
  "@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 @ts-ignore
  "@typescript-eslint/ban-types": "off", // 禁止使用特定类型
  "@typescript-eslint/explicit-function-return-type": "off", // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
  "@typescript-eslint/no-var-requires": "off", // 不允许在 import 语句中使用 require 语句
  "@typescript-eslint/no-empty-function": "off", // 禁止空函数
  "@typescript-eslint/no-use-before-define": "off", // 禁止在变量定义之前使用它们
  "@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
  "@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
  "@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和类的公共类方法的显式返回和参数类型

  // vue (https://eslint.vuejs.org/rules)
  "vue/script-setup-uses-vars": "error", // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该no-unused-vars规则时有效。
  "vue/v-slot-style": "error", // 强制执行 v-slot 指令样式
  "vue/no-mutating-props": "off", // 不允许组件 prop的改变（明天找原因）
  "vue/custom-event-name-casing": "off", // 为自定义事件名称强制使用特定大小写
  "vue/attributes-order": "off", // vue api使用顺序，强制执行属性顺序
  "vue/one-component-per-file": "off", // 强制每个组件都应该在自己的文件中
  "vue/html-closing-bracket-newline": "off", // 在标签的右括号之前要求或禁止换行
  "vue/max-attributes-per-line": "off", // 强制每行的最大属性数
  "vue/multiline-html-element-content-newline": "off", // 在多行元素的内容之前和之后需要换行符
  "vue/singleline-html-element-content-newline": "off", // 在单行元素的内容之前和之后需要换行符
  "vue/attribute-hyphenation": "off", // 对模板中的自定义组件强制执行属性命名样式
  "vue/require-default-prop": "off", // 此规则要求为每个 prop 为必填时，必须提供默认值
  "vue/multi-word-component-names": "off" // 要求组件名称始终为 “-” 链接的单词
}
```

#### `.stylelintrc.js`

```JavaScript
// .stylelintrc.js 修改后重启 vscode 生效
rules: {
  "no-descending-specificity": null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
  "function-url-quotes": "always", // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
  "string-quotes": "double", // 指定字符串使用单引号或双引号
  "unit-case": null, // 指定单位的大小写 "lower(全小写)"|"upper(全大写)"
  "color-hex-case": "lower", // 指定 16 进制颜色的大小写 "lower(全小写)"|"upper(全大写)"
  "color-hex-length": "long", // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
  "rule-empty-line-before": "never", // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行。)"
  "font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字
  "block-opening-brace-space-before": "always", // 要求在块的开大括号之前必须有一个空格或不能有空白符 "always(大括号前必须始终有一个空格)"|"never(左大括号之前绝不能有空格)"|"always-single-line(在单行块中的左大括号之前必须始终有一个空格)"|"never-single-line(在单行块中的左大括号之前绝不能有空格)"|"always-multi-line(在多行块中，左大括号之前必须始终有一个空格)"|"never-multi-line(多行块中的左大括号之前绝不能有空格)"
  "property-no-unknown": null, // 禁止未知的属性(true 为不允许)
  "no-empty-source": null, // 禁止空源码
  "declaration-block-trailing-semicolon": null, // 要求或不允许在声明块中使用尾随分号 string："always(必须始终有一个尾随分号)"|"never(不得有尾随分号)"
  "selector-class-pattern": null, // 强制选择器类名的格式
  "scss/at-import-partial-extension": null, // 解决不能引入scss文件
  "value-no-vendor-prefix": null, // 关闭 vendor-prefix(为了解决多行省略 -webkit-box)
  "selector-pseudo-class-no-unknown": [
    true,
    {
      ignorePseudoClasses: ["global", "v-deep", "deep"]
    }
  ]
}
```
