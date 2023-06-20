<template>
  <NuxtLayout name="base-layout">
    <div class="container">
      <div class="img">
        <img src="@/assets/images/construction.png" alt="建设中" />
      </div>
      <div class="tips">正在建设中，敬请期待...</div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.container {
  padding-top: 160px;
  height: 100%;
  .img {
    margin: 0 auto 100px;
    width: 528px;
    height: 448px;
    img {
      width: 100%;
    }
  }
  .tips {
    margin-left: 54px;
    text-align: center;
    color: #212121;
  }
}
</style>
