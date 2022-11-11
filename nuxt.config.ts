// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
        { name: "referrer", content: "always" },
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
    },
  },
});
