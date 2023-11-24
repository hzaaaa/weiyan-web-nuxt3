<template>
  <div style="">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import "@/assets/styles/global.scss";
// import "@/assets/iconfont/iconfont.js";
const isMobile = ref(false);

onMounted(() => {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;;
  isMobile.value = screenWidth < 768;
  window.onresize = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;;
    isMobile.value = screenWidth < 768;
  }
})
</script>

<style lang="scss" scoped></style>
