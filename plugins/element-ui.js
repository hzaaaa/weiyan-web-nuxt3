import 'element-plus/dist/index.css'
// import "../assets/styles/element/index.scss";

import ElementPlus from "element-plus";
import locale from "element-plus/dist/locale/zh-cn.mjs";
export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use(ElementPlus);
  nuxtApp.vueApp.use(ElementPlus, { locale });
});