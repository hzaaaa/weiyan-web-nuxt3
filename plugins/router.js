export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
      next({ path: "/" });
      return;
    }
    next();
  });
});
