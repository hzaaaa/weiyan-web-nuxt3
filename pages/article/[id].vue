<template>
  <NuxtLayout name="base-layout">
    <h3 style="">此处是pages里的 {{ $route.params.group }}, {{ $route.params.id }}文件</h3>
    <h3>下面是从 json 文件里动态读取的内容：</h3>
    <div>{{ content }}</div>
    <div>
      <NuxtLink to="/">jump to Home</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { news } from "./news.json";

const route = useRoute();
// const router = useRouter();

onMounted(() => {
  console.warn(news);
});
const obj = news.find((item) => item.id === route.params.id);
let content;
if (!obj) {
  // router.push("/article/1");
  content = news[0].content;
} else {
  content = computed(() => news.find((item) => item.id === route.params.id).content);
}
</script>

<style></style>
