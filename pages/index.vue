<template>
  <div>
    <div>BD@weiyankeji.cn 0755-8279 5265</div>
    <NuxtLayout name="base-layout">
      <h3>此处是pages里的入口文件：你好！！</h3>
      <div>
        <NuxtLink to="/about">jump to /about</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/team">jump to /team</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ name: 'news' }">jump to {name:'news'}</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/join">jump to join</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/article/1">jump to Danymic Page</NuxtLink>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
