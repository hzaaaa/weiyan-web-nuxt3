<template>
  <div id="container">
    <div class="main">
      <slot />
    </div>

    <footer>
      <div class="footer">
        <div class="footer-bottom">
          <div>
            <span>Copyright&copy;2021 深圳微言科技有限责任公司 版权所有 </span>
            <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备17076300号-1</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main {
  flex: 1;
}
footer {
  background-color: #2d3240;
  color: #919899;
  .footer {
    .footer-bottom {
      padding: 24px 0;
      border-top: 1px solid rgb(255 255 255 / 10%);
      div {
        margin: 0 auto;
        width: 1170px;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
        color: #c8cccc;
        a {
          text-decoration: underline;
          color: #c8cccc;
        }
      }
    }
  }
}
</style>
