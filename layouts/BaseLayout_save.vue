<template>
  <div id="container">
    <!-- <div class="header-top" :style="{ display: headerTopDisplay }">
      <div class="inner">
        <span><i></i>BD@weiyankeji.cn</span><span><i></i>0755-8279 5265</span>
      </div>
    </div> -->
    <header>


      <div class="new-header">

        <el-image class="logo" style="cursor: pointer" @click="gotoHome" src="/top/logo.png" fit="fill" />
        <div class="nav">

          <ClientOnly>
            <NuxtLink class="item-link" to="/">首页</NuxtLink>

            <el-popover placement="bottom" title=" " :width="990" trigger="hover" popper-class="popover-menu-class">
              <template #reference>
                <div class="item-link" :class="{ 'item-link-active': isProductionPage }">
                  产品中心

                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </div>
              </template>
              <template #default>
                <div class="content">
                  <div class="content-item">
                    <div class="title-block">
                      <div class="pre-line"></div>
                      <div class="title">
                        数据智能平台
                      </div>
                    </div>
                    <div class="line"></div>
                    <div class="link-block">
                      <div class="link-item">
                        <NuxtLink to="/production/dataServe" style="color: inherit;display: flex;align-items: center;">
                          <span class=" "> 数据服务平台 </span>
                        </NuxtLink>
                      </div>
                      <div class="link-item">
                        <NuxtLink to="/production/dataGovernance"
                          style="color: inherit;display: flex;align-items: center;">
                          <span class=" "> 数据治理平台 </span>
                        </NuxtLink>
                      </div>
                      <div class="link-item">
                        <NuxtLink to="/production/dataAssets" style="color: inherit;display: flex;align-items: center;">
                          <span class=" "> 数据资产平台 </span>
                        </NuxtLink>
                      </div>
                      <div class="link-item">
                        <NuxtLink to="/production/strategy" style="color: inherit;display: flex;align-items: center;">
                          <span class=" "> 策略平台 </span>
                        </NuxtLink>
                      </div>
                      <div class="link-item">
                        <NuxtLink to="/production/dataSubscription"
                          style="color: inherit;display: flex;align-items: center;">
                          <span class=" "> 数据订阅平台 </span>
                        </NuxtLink>
                      </div>
                      <div class="link-item">
                        <NuxtLink to="/production/Modeling" style="color: inherit;display: flex;align-items: center;">
                          <span class=" "> 建模平台 </span>
                        </NuxtLink>
                      </div>
                      <div class="link-item">
                        <NuxtLink to="/production/dataIndicators"
                          style="color: inherit;display: flex;align-items: center;">
                          <span class=" "> 数据指标平台 </span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                  <div class="content-item">
                    <div class="title-block">
                      <div class="pre-line"></div>
                      <div class="title">
                        算力管理平台
                      </div>
                    </div>
                    <div class="line"></div>
                    <div class="link-block">
                      <div class="link-item">
                        <NuxtLink to="/production/AIComputingPower"
                          style="color: inherit;display: flex;align-items: center;">
                          <span class=" "> AI算力管理平台 </span>
                        </NuxtLink>
                      </div>

                    </div>
                  </div>
                  <div class="content-item">
                    <div class="title-block">
                      <div class="pre-line"></div>
                      <div class="title">
                        数据安全平台
                      </div>
                    </div>
                    <div class="line"></div>
                    <div class="link-block">
                      <div class="link-item">
                        <NuxtLink to="/production/privacyComputing"
                          style="color: inherit;display: flex;align-items: center;">
                          <span class=" "> 隐私计算平台 </span>
                        </NuxtLink>
                      </div>

                    </div>
                  </div>
                </div>
              </template>
            </el-popover>
            <!-- <el-dropdown>
              <div class="item-link" :class="{ 'item-link-active': isProductionPage }">
                产品中心

                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </div>

              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>

                    <NuxtLink to="/production/dataServe" style="color: inherit;display: flex;align-items: center;">
                      <span class=" "> 数据服务平台 </span>
                    </NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/production/dataGovernance" style="color: inherit;display: flex;align-items: center;">
                      <span class=" "> 数据治理平台 </span>
                    </NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/production/dataAssets" style="color: inherit;display: flex;align-items: center;">
                      <span class=" "> 数据资产管理平台 </span>
                    </NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/production/privacyComputing" style="color: inherit;display: flex;align-items: center;">
                      <span class=" "> 隐私计算平台 </span>
                    </NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/production/strategy" style="color: inherit;display: flex;align-items: center;">
                      <span class=" "> 策略平台 </span>
                    </NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/production/dataSubscription" style="color: inherit;display: flex;align-items: center;">
                      <span class=" "> 数据订阅平台 </span>
                    </NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/production/Modeling" style="color: inherit;display: flex;align-items: center;">
                      <span class=" "> 建模平台 </span>
                    </NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/production/dataIndicators" style="color: inherit;display: flex;align-items: center;">
                      <span class=" "> 数据指标平台 </span>
                    </NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/production/AIComputingPower" style="color: inherit;display: flex;align-items: center;">
                      <span class=" "> AI算力管理平台 </span>
                    </NuxtLink>
                  </el-dropdown-item>

                </el-dropdown-menu>
              </template>
            </el-dropdown> -->
            <el-popover placement="bottom" title=" " :width="282" trigger="hover" popper-class="popover-menu-class">
              <template #reference>
                <div class="item-link" :class="{ 'item-link-active': isSolutionPage }">
                  解决方案

                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </div>
              </template>
              <template #default>
                <div class="content content-solution">
                  <div class="content-item">
                    <div class="title-block">
                      <div class="pre-line"></div>
                      <div class="title">
                        行业解决方案
                      </div>
                    </div>
                    <div class="line"></div>
                    <div class="link-block">
                      <div class="link-item">
                        <NuxtLink to="/solution/insurance" style="color: inherit;display: flex;align-items: center;">

                          <span class=" ">智慧保险</span>
                        </NuxtLink>
                      </div>
                      <div class="link-item">
                        <NuxtLink to="/solution/marketing" style="color: inherit;display: flex;align-items: center; ">

                          <span class=" ">智慧营销</span>
                        </NuxtLink>
                      </div>
                      <div class="link-item">
                        <NuxtLink to="/solution/bank" style="color: inherit;display: flex;align-items: center;">

                          <span class=" ">智慧银行</span>
                        </NuxtLink>
                      </div>
                      <div class="link-item">
                        <NuxtLink to="/solution/agriculture" style="color: inherit;display: flex;align-items: center;">

                          <span class=" ">智慧农业</span>
                        </NuxtLink>
                      </div>
                      <div class="link-item">
                        <NuxtLink to="/solution/construction" style="color: inherit;display: flex;align-items: center;">

                          <span class=" ">智慧工地</span>
                        </NuxtLink>
                      </div>

                    </div>
                  </div>

                </div>
              </template>
            </el-popover>
            <!-- <el-dropdown>
              <div class="item-link" :class="{ 'item-link-active': isSolutionPage }">

                解决方案
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </div>

              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>

                    <NuxtLink to="/solution/marketing" style="color: inherit;display: flex;align-items: center; ">

                      <span class=" ">智慧营销</span>
                    </NuxtLink>

                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/solution/agriculture" style="color: inherit;display: flex;align-items: center;">

                      <span class=" ">智慧农业</span>
                    </NuxtLink>

                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/solution/insurance" style="color: inherit;display: flex;align-items: center;">

                      <span class=" ">智慧保险</span>
                    </NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/solution/bank" style="color: inherit;display: flex;align-items: center;">

                      <span class=" ">智慧银行</span>
                    </NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>

                    <NuxtLink to="/solution/construction" style="color: inherit;display: flex;align-items: center;">
                      <el-icon :size="16">
                        <svgIcon name="icon-zhichiyinhang"></svgIcon>
                      </el-icon>
                      <span class=" ">智慧工地</span>
                    </NuxtLink>
                  </el-dropdown-item>

                </el-dropdown-menu>
              </template>
            </el-dropdown> -->
            <NuxtLink class="item-link" to="/news" :class="{ 'item-link-active': isNewsPage }">新闻资讯</NuxtLink>
            <NuxtLink class="item-link" to="/about">关于我们</NuxtLink>
          </ClientOnly>
        </div>
      </div>
    </header>

    <div class="main">
      <slot />
    </div>

    <footer>
      <div class="footer">
        <div class="footer-detail">
          <div class="col0">

            <el-image class="logo" style="cursor: pointer" @click="gotoHome" src="/bottom/logo.png" fit="fill" />
            <div class="phone-block">

              <el-image class="phone-img" src="/bottom/phone.png" fit="fill" />
              <div class="phone-num">0755-8279 5265</div>
            </div>
          </div>
          <div class="col1 col1-2">
            <div class="title">快速链接</div>
            <div class="content-block">
              <div class="content-item">
                <NuxtLink :class="{ 'item-link-active': isProductionPage }" to="/production/dataServe"
                  style="color: inherit;">产品中心</NuxtLink>
              </div>
              <div class="content-item">
                <NuxtLink :class="{ 'item-link-active': isSolutionPage }" to="/solution/marketing"
                  style="color: inherit;">解决方案</NuxtLink>
              </div>
              <div class="content-item">
                <NuxtLink :class="{ 'item-link-active': isNewsPage }" to="/news" style="color: inherit;">新闻资讯</NuxtLink>
              </div>
              <div class="content-item">
                <NuxtLink to="/about" style="color: inherit;">关于我们</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col2 col1-2">
            <div class="title">联系我们</div>
            <div class="content-block">
              <div class="content-item">深圳总部：深圳市福田区凯丰路10号国际金融科技城13层</div>
              <div class="content-item">上海分公司：上海市黄浦区外滩街道四川中路33号创业大楼617室</div>
              <div class="content-item">北京分公司：北京市西城区黄寺大街甲23号院北广大厦A口6层634</div>
              <div class="content-item">成都分公司：四川省成都市新津区花源街道青瓷路51号17栋B区1-5楼编号066</div>
            </div>
          </div>
          <div class="col3">
            <div class="title">微言科技公众号</div>

            <el-image class="QR-code-img" src="/bottom/QRcode.png" fit="fill" />

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
import { ArrowDown } from "@element-plus/icons-vue";
const route = useRoute();
const router = useRouter();
const gotoHome = () => {
  router.push('/')
}
onMounted(() => {
  if (route.path.startsWith("/details")) {
    isNewsPage.value = true;
  } else {
    isNewsPage.value = false;
  }
  if (route.path.startsWith("/solution")) {
    isSolutionPage.value = true;
  } else {
    isSolutionPage.value = false;
  }
  if (route.path.startsWith("/production")) {
    isProductionPage.value = true;
  } else {
    isProductionPage.value = false;
  }



  if (!route.path.endsWith("/")) {
    headerTopDisplay.value = "none";
  } else {
    headerTopDisplay.value = "block";
  }

});
const isNewsPage = ref(false);
const isSolutionPage = ref(false);
const isProductionPage = ref(false);
let headerTopDisplay = ref("");
</script>

<style scoped lang="scss">
.header-top {
  border-bottom: 1px solid #efefef;
  width: 100%;
  height: 49px;

  .inner {
    margin: 0 auto;
    width: 1200px;

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

* {
  box-sizing: border-box;
  outline: none !important;
}

header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #ffffff;
  border-bottom: 1px solid #E5E5E5;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 28px 0;
    width: 1200px;
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

  .new-header {
    height: 70px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;



    a.router-link-active {
      color: var(--el-color-primary) !important;
    }



    .logo {
      width: 144px;
      height: 32px;

    }

    .nav {
      display: flex;

      .item-link {
        margin-left: 60px;
        font-size: 16px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #363636;
        line-height: 1.4;
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .item-link-active {
        color: var(--el-color-primary);
      }


    }
  }
}

.item-link-active {
  color: var(--el-color-primary) !important;
}

footer {
  // padding-top: 60px;
  background-color: #2F3131;
  color: #919899;



  .footer {
    &-detail {
      display: flex;
      margin: 0 auto;
      width: 1200px;
      height: 240px;
      font-weight: 300;
      display: flex;

      .col0 {
        width: 307px;
        height: 100%;

        .logo {
          width: 122px;
          height: 27px;
          margin-top: 48px;
          margin-bottom: 19px;

        }

        .phone-block {
          width: 180px;
          height: 36px;
          background: #00CDC4;
          border-radius: 4px 4px 4px 4px;
          opacity: 1;
          display: flex;
          align-items: center;

          .phone-img {
            width: 21px;
            height: 21px;
            margin-left: 11px;
            margin-right: 7px;

          }

          .phone-num {
            font-size: 16px;
            font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 1.4;
          }
        }
      }

      .col1 {
        width: 225px;
        height: 100%;


      }

      .col2 {
        // width: 550;
        flex: 1;
        height: 100%;
      }

      .col1-2 {
        .title {
          margin-top: 46px;
          margin-bottom: 20px;
          font-size: 14px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 1.4;
        }

        .content-block {
          .content-item {
            margin-bottom: 10px;
            font-size: 14px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #949494;
            line-height: 1.4;
          }
        }
      }

      .col3 {
        width: 119px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          font-size: 14px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 1.4;
          margin-top: 46px;
          margin-bottom: 9px;
        }

        .QR-code-img {
          width: 119px;
          height: 119px;

        }
      }


    }

    &-bottom {
      padding: 24px 0;
      border-top: 1px solid rgb(255 255 255 / 10%);

      div {
        margin: 0 auto;
        width: 1200px;
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
<style  lang="scss">
.popover-menu-class {
  padding: 0 !important;
  border-radius: 8px !important;

  * {
    box-sizing: border-box;
  }

  .el-popover__title {
    margin: 0 !important;
  }

  .content-solution {
    height: 240px !important;
  }

  .content {
    height: 300px;
    display: flex;

    .content-item {
      flex: 1;
      padding-top: 31px;
      padding-left: 47px;

      .title-block {
        display: flex;
        align-items: center;

        .pre-line {
          width: 3px;
          height: 14px;
          background: #00CDC4;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          margin-right: 9px;
        }

        .title {
          font-size: 18px;
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          color: #151717;
          line-height: 1.4;
        }
      }

      .line {
        width: 220px;
        height: 0px;
        opacity: 1;
        border: 1px solid #D2DBDB;
        margin-top: 15px;
        margin-bottom: 19px;
      }

      .link-block {
        display: flex;
        // flex-direction: column;
        flex-wrap: wrap;
        height: 180px;

        align-content: flex-start;

        .link-item {
          font-size: 16px;
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          color: #505353;
          line-height: 1.4;
          margin-bottom: 22px;
          margin-right: 34px;
        }
      }
    }
  }
}
</style>
