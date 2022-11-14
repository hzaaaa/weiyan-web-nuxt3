<template>
  <NuxtLayout name="base-layout">
    <div v-for="i in 5" :key="i">
      <NuxtLink :to="`/article/${i}`">jump to news {{ i }}</NuxtLink>
    </div>
    <div class="test">
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>666</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
      <div>888</div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.test {
  div {
    background-color: coral;
  }
}
</style>
