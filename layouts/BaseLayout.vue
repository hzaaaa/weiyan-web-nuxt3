<template>
  <div id="container">
    <div class="header-top" :style="{ display: headerTopDisplay }">
      <div class="inner">
        <span><i></i>BD@weiyankeji.cn</span><span><i></i>0755-8279 5265</span>
      </div>
    </div>
    <header>
      <div class="header">
        <div class="header-left">
          <NuxtLink to="/">
            <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/index/logo.png" alt="" />
          </NuxtLink>
          <span>普惠的人工智能基础设施提供商</span>
        </div>
        <div class="header-right">
          <NuxtLink to="/">首页</NuxtLink>
          <NuxtLink to="/production">产品中心</NuxtLink>
          <NuxtLink to="/team">微言团队</NuxtLink>
          <NuxtLink to="/news" :class="{ 'nav-news': isNewsPage }">微言动态</NuxtLink>
          <NuxtLink to="/join">加入我们</NuxtLink>
          <NuxtLink to="/about">关于我们</NuxtLink>
        </div>
        
      </div>
    </header>

    <div class="main">
      <slot />
    </div>

    <footer>
      <div class="footer">
        <div class="footer-detail">
          <div class="footer-detail-left">
            <div class="translate">About us</div>
            <h6>关于<i>微言</i></h6>
            <p>
              微言科技，成立于2017年，是普惠的人工智能基础设施提供商。公司基于AutoML自动建模平台及隐私计算技术，为政府、金融机构及企业提供PaaS+SaaS服务，助力其加速数字化变革。微言科技已经获得包括软银中国在内的顶级投资机构投资，目前在北京、上海及深圳均设有分支机构。
            </p>
          </div>
          <div class="footer-detail-center">
            <div class="translate">Quick line</div>
            <h6>快速链接</h6>
            <div class="router">
              <NuxtLink to="/about">关于我们</NuxtLink>
              <NuxtLink to="/team">微言团队</NuxtLink>
              <NuxtLink to="/news">微言动态</NuxtLink>
              <NuxtLink to="/join">加入我们</NuxtLink>
            </div>
          </div>
          <div class="footer-detail-right">
            <div class="translate">Contact us</div>
            <h6>联系我们</h6>
            <div class="contact-info">
              <div class="weiyan-code">
                <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/index/code.png" alt="" />
              </div>
              <div class="address">
                <p><span>深圳总部：</span>深圳市福田区凯丰路10号国际金融科技城13层</p>
                <p><span>上海分公司：</span>上海市黄浦区外滩街道四川中路33号创业大楼617室</p>
                <p><span>北京分公司：</span>北京市西城区黄寺大街甲23号院北广大厦A口6层634</p>
                <div><span>T：0755-8279 5265</span><span>E：BD@weiyankeji.cn</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div>
            <span>Copyright&copy;2021 深圳微言科技有限责任公司 版权所有 </span>
            <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备17076300号</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
onMounted(() => {
  if (route.path.startsWith("/article")) {
    isNewsPage.value = true;
  } else {
    isNewsPage.value = false;
  }
  if (!route.path.endsWith("/")) {
    headerTopDisplay.value = "none";
  } else {
    headerTopDisplay.value = "block";
  }
});
const isNewsPage = ref(false);
let headerTopDisplay = ref("");
</script>

<style scoped lang="scss">
.header-top {
  border-bottom: 1px solid #efefef;
  width: 100%;
  height: 49px;
  .inner {
    margin: 0 auto;
    width: 1170px;
    span {
      line-height: 50px;
      font-weight: 300;
      font-size: 14px;
      color: #8a8e99;
      &:first-child {
        margin-right: 20px;
        i {
          display: inline-block;
          position: relative;
          top: -1px;
          margin-right: 10px;
          width: 30px;
          height: 14px;
          background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/index/email.png") no-repeat;
          background-size: 100% 100%;
          vertical-align: middle;
        }
      }
      &:last-child {
        i {
          display: inline-block;
          position: relative;
          top: -2px;
          margin-right: 10px;
          width: 16px;
          height: 16px;
          background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/index/phone.png") no-repeat;
          background-size: 100% 100%;
          vertical-align: middle;
        }
      }
    }
  }
}
header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #ffffff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 28px 0;
    width: 1170px;
    height: 32px;
    line-height: 32px;
    &-left {
      display: flex;
      align-items: center;
      font-size: 16px;
      a {
        display: inline-block;
        width: 132px;
        min-width: 132px;
        height: 32px;
        cursor: pointer;
        img {
          width: 100%;
        }
      }
      span {
        margin: 0 20px;
        padding-left: 20px;
        border-left: 2px solid #ededed;
        color: #5c6566;
      }
    }
    &-right {
      display: flex;
      justify-content: center;
      align-items: center;
      .nav-news {
        font-weight: 700;
        color: #00cdc4;
        &::before {
          position: absolute;
          left: -7px;
          top: 5px;
          width: 2px;
          height: 18px;
          background-color: #00cdc4;
          content: "";
        }
      }
      a {
        position: relative;
        margin-right: 32px;
        line-height: 28px;
        text-decoration: none;
        font-size: 14px;
        color: #000000;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          color: #00cdc4;
        }
        &.router-link-active {
          font-weight: 700;
          color: #00cdc4;
          &::before {
            position: absolute;
            left: -7px;
            top: 5px;
            width: 2px;
            height: 18px;
            background-color: #00cdc4;
            content: "";
          }
        }
      }
    }
  }
}
footer {
  padding-top: 60px;
  background-color: #2d3240;
  color: #919899;
  .footer {
    &-detail {
      display: flex;
      margin: 0 auto;
      width: 1170px;
      height: 270px;
      font-weight: 300;
      &-left {
        position: relative;
        margin-right: 90px;
        width: 300px;
        p {
          line-height: 26px;
          font-size: 14px;
        }
      }
      &-center {
        position: relative;
        margin-right: 84px;
        width: 115px;
        .router {
          display: flex;
          flex-direction: column;
          a {
            margin-bottom: 24px;
            line-height: 16px;
            text-decoration: none;
            font-size: 14px;
            color: #919899;
          }
        }
      }
      &-right {
        position: relative;
        .contact-info {
          display: flex;
          .weiyan-code {
            margin-right: 16px;
            width: 128px;
            height: 128px;
            img {
              width: 100%;
            }
          }
          .address {
            line-height: 16px;
            font-size: 14px;
            p {
              margin-bottom: 8px;
            }
            span {
              color: #c8cccc;
            }
            div {
              margin-top: 48px;
              span:first-child {
                margin-right: 30px;
              }
            }
          }
        }
      }
      .translate {
        margin-bottom: 30px;
        line-height: 32px;
        font-size: 24px;
        color: rgb(255 255 255 / 10%);
      }
      h6 {
        position: absolute;
        top: 18px;
        line-height: 20px;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        i {
          font-style: normal;
          color: #01cada;
        }
      }
    }
    &-bottom {
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
