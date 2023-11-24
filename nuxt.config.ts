// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  // plugins: [{ src: "@/plugins/baiduTJ" }],
  // css: ["@/assets/styles/common.css"],
  plugins: [{ src: "@/plugins/directives", ssr: false }],
  postcss: {
    // plugins: {
    //   autoprefixer: { overrideBrowserslist: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 8"], grid: true },
    //   // 1px = 0.05254861vw
    //   // "postcss-px-to-viewport-8-plugin": {
    //   //   unitToConvert: "px", // 要转化的单位
    //   //   viewportWidth: 1903, // UI设计稿的宽度
    //   //   viewportHeight: 1080, // 视窗的高度
    //   //   unitPrecision: 6, // 转换后的精度，即小数点位数
    //   //   propList: ["*", "!font-size", "!max-width", "!min-width", "!min-height", "!max-height", "!font"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    //   //   viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
    //   //   fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
    //   //   selectorBlackList: [".view-btn", ".header-inner", ".person-summary"], // 指定不转换为视窗单位的类名， [".content", ".news-lists", "header-inner"]
    //   //   minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
    //   //   mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
    //   //   replace: true, // 是否转换后直接更换属性值
    //   //   exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    //   //   landscape: false, // 是否处理横屏情况
    //   //   landscapeUnit: "vw", // 横屏时使用的单位
    //   // },
    //   "postcss-pxtorem": {
    //     // 1rem = 190.3px
    //     rootValue: 190.3,
    //     propList: ["font-size"],
    //     selectorBlackList: ["html"],
    //   },
    // },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/mixin.scss"; `,
          // @import "@/assets/styles/global.scss";
        },
      },
    },
  },
  app: {
    // 全局设置的 html 页面 head 里的 meta 信息，用于 SEO
    head: {
      title: "微言科技",
      meta: [
        { name: "keywords", content: "微言科技，深圳微言，深圳微言科技，微言，微言科技黄聪，黄聪" },
        {
          name: "description",
          content:
            "创立于2017年，微言科技是一支中国新金融领域顶尖的精英服务团队，为有志于布局新金融版图的中国领先机构，提供端到端的解决方案。我们的客户将以最低的试错成本，获得优质的金融产品设计、资金资产获取、风控体系建设、IT系统开发、市场推广运营、平台综合管理等能力。微言科技已经获得包括软银中国在内的顶级投资机构投资，目前在北京、上海、广州、深圳均设有分支机构。微言愿景：在中国新金融领域，成为有突破、有价值、有影响的创新服务机构。",
        },
        { name: "referrer", content: "no-referrer" },
        { name: "viewport", content: "width=device-width, user-scalable=no,initial-scale=1.0, maximum-scale=1.0, mininum-scale=1.0" },
        { name: "format-detection", content: "telephone=no" },
        { "http-equiv": "x-ua-compatible", content: "IE=edge,chrome=1" },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "https://xengine.weiyankeji.cn/static/logo-favicon/wykj-favicon.ico",
          type: "image/x-icon",
        },
      ],
      script: [{ src: "https://hm.baidu.com/hm.js?ef4978975287b26defd919021350932e" }],
    },
  },
});
