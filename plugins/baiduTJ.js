export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.afterEach((to, from) => {
    try {
      window._hmt = window._hmt || [];
      window._hmt.push(["_trackPageview", to.fullPath]);
    } catch (e) {}
  });
});
