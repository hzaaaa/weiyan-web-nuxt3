<template>
  <NuxtLayout name="base-layout-solution">
    <ClientOnly>
      <div class="banner" :style="{ backgroundImage: 'url(' + itemImg() + ')' }">
        <div class="big-title ">



          {{ solutionItem.title }}解决方案
        </div>
        <div class="small">
          {{ solutionItem.title }}解决方案{{ solutionItem.title }}解决方案{{ solutionItem.title }}解决方案
        </div>
      </div>
    </ClientOnly>
    <div class="body">
      <div class="profile">
        <div class="title">
          方案描述
          <div class="bg-word">
            PROGRAMME
          </div>
        </div>
        <div class="content1 content">
          {{ solutionItem.desc }}
        </div>
      </div>
      <div class="grid-class">
        <div class="item" v-for="(item, index) in table_list">

          <el-image class="left-img" :src="`/solution/${routeId}/sys_item${index}.svg`" fit="fill" />
          <div class="right-block">
            <div class="top-title">
              <div>{{ item.title }}</div>
              <!-- <div v-if="item.ishot" class="hot">热销</div> -->
            </div>
            <div class="bottom-word">{{ item.content }}</div>
          </div>
        </div>


      </div>
      <div class="case">
        <div class="title">
          客户案例
          <div class="bg-word">
            CUSTOMER CASES
          </div>
        </div>
        <div class="carousel-wrap">
          <!-- <div @click="preItemClick" class="left-btn"></div> -->
          <el-image @click="preItemClick" class="left-btn" src="/solution/left-arrow.png" fit="fill" />
          <el-carousel ref="carouselRef" indicator-position="none" arrow="never" class="carousel" :autoplay="true">
            <el-carousel-item v-for="(item, index) in solutionItem.caseList">
              <div class="item0">

                <el-image class="left-img" :src="`/solution/${routeId}/item${index}.png`" fit="fill" />
                <div class="right-block">

                  <el-image class="logo" src="/solution/logo.png" fit="fill" />
                  <div class="text">
                    {{ item }}
                  </div>
                  <div class="quote">“</div>
                </div>
              </div>
            </el-carousel-item>
            <template v-if="solutionItem.caseList.length < 3">

              <el-carousel-item v-for="itemI in (3 - solutionItem.caseList.length)">
                <!-- <div class="item1"> -->

                <el-image class="item1" :src="`/solution/${routeId}/item${itemI - 1 + solutionItem.caseList.length}.png`"
                  fit="fill" />


              </el-carousel-item>
            </template>

          </el-carousel>
          <!-- <div @click="nextItemClick" class="right-btn"></div> -->
          <el-image @click="nextItemClick" class="right-btn" src="/solution/right-arrow.png" fit="fill" />
        </div>
      </div>
    </div>

  </NuxtLayout>
</template>

<script setup  lang="ts">
import { solutionInfoList } from "@/assets/text/solution.json";
const route = useRoute();
let solutionItem = solutionInfoList.find((item) => item.id === route.params.id);
if (!solutionItem) {
  solutionItem = solutionInfoList[solutionInfoList.length - 1];
}
let routeId = route.params.id;
const itemImg = () => {
  return getAssetsFile(`solution/banner_${routeId}.png`)
}
onMounted(() => {

  nextTick(() => {

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
})
const table_list = ref(solutionItem.sceneList)
const carouselRef = <any>ref(null)
const preItemClick = () => {
  carouselRef.value.prev()
}
const nextItemClick = () => {
  carouselRef.value.next()
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;

}

.banner {

  height: 500px;
  width: 100%;

  // background: url("@/assets/image/solution/banner.png") no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  .big-title {
    margin-top: 179px;
    margin-left: 383px;

    font-size: 46px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 1.4 // -webkit-text-fill-color: transparent;
  }

  .small {
    margin-top: 21px;
    margin-left: 383px;

    font-size: 18px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 300;
    color: #EEF1F1;
    line-height: 1.4;
    width: 576px;
  }

}

.body {

  display: flex;
  flex-direction: column;
  align-items: center;

  &>div {
    width: 1200px;
  }

  .profile {

    .title {
      font-size: 36px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      color: #151717;
      line-height: 1.4;

      margin-top: 69px;
      text-align: center;
      display: flex;
      justify-content: center;

      position: relative;

      .bg-word {
        position: absolute;

        font-size: 42px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 600;
        color: #0D4E4B;
        line-height: 1.4;
        letter-spacing: 0;
        z-index: -1;
        opacity: 0.06;
        top: -18px;
      }

      &::before {
        width: 15px;
        height: 15px;
        background: #00CDC4;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        margin-right: 9px;
        display: block;
        content: '';
        margin-bottom: 9px;
        align-self: flex-end;
      }

      &::after {
        width: 15px;
        height: 15px;
        background: #00CDC4;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        display: block;
        margin-left: 9px;
        content: '';
        margin-bottom: 9px;
        align-self: flex-end;
      }
    }

    .content {

      font-size: 16px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      color: #151717;
      line-height: 24px;
      margin-top: 61px;

      margin-bottom: 78px;
    }


  }

  .grid-class {
    margin-bottom: 100px;
    display: grid;

    grid-template-columns: repeat(auto-fill, 33.33%);
    grid-template-rows: repeat(auto-fill, 200px);
    border-left: 1px solid #DDDFDF;
    border-top: 1px solid #DDDFDF;

    .item {
      height: 200px;

      border-right: 1px solid #DDDFDF;
      border-bottom: 1px solid #DDDFDF;
      display: flex;

      .left-img {
        width: 22px;
        height: 21px;
        margin-top: 50px;
        margin-left: 39px;
        margin-right: 14px;

      }

      .right-block {
        flex: 1;
        margin-top: 46px;

        .top-title {
          font-size: 18px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #151717;

          height: 30px;
          -webkit-background-clip: text;
          display: flex;
          align-items: center;

          .hot {
            width: 56px;
            height: 24px;
            background: #00CDC4;
            border-radius: 2px 2px 2px 2px;
            opacity: 1;

            font-size: 14px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            // line-height: 1.4;

            display: flex;
            align-items: center;
            justify-content: center;

            margin-left: 10px;


          }
        }

        .bottom-word {
          margin-top: 14px;
          font-size: 16px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #505353;
          line-height: 24px;
          -webkit-background-clip: text;
          padding-right: 27px;
        }
      }
    }
  }

  .case {
    .title {}

    .title {
      margin-bottom: 90px;
      font-size: 36px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      color: #151717;
      line-height: 1.4;

      margin-top: 69px;
      text-align: center;
      display: flex;
      justify-content: center;

      position: relative;

      .bg-word {
        position: absolute;

        font-size: 42px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 600;
        color: #0D4E4B;
        line-height: 1.4;
        letter-spacing: 0;
        z-index: -1;
        opacity: 0.06;
        top: -18px;
      }

      &::before {
        width: 15px;
        height: 15px;
        background: #00CDC4;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        margin-right: 9px;
        display: block;
        content: '';
        margin-bottom: 9px;
        align-self: flex-end;
      }

      &::after {
        width: 15px;
        height: 15px;
        background: #00CDC4;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        display: block;
        margin-left: 9px;
        content: '';
        margin-bottom: 9px;
        align-self: flex-end;
      }
    }

    .carousel-wrap {
      height: 520px;
      display: flex;
      align-items: center;
      margin-bottom: 100px;

      .left-btn {
        width: 29px;
        height: 29px;
        // background-color: red;
        // margin-right: ;
        cursor: pointer;
      }

      .right-btn {
        width: 29px;
        height: 29px;
        cursor: pointer;
        // background-color: red
      }
    }

    .carousel {
      flex: 1;
      height: 520px;


      :deep(.el-carousel__container) {
        height: 520px;

      }

      :deep(.el-carousel__item) {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item0 {
        width: 1100px;
        height: 480px;
        background: #FFFFFF;
        box-shadow: 0px 4px 14px 1px #E9E9E9;
        border-radius: 10px 10px 10px 10px;
        // opacity: 0.79;
        padding: 40px 24px;
        display: flex;

        .left-img {
          width: 610px;
          width: 730px;
          height: 400px;
          // background: #E20404;
          border-radius: 10px 10px 10px 10px;
          opacity: 1;
          // margin-right: 22px;

        }

        .right-block {
          flex: 1;
          background: #F2F6F6;
          border-radius: 10px 10px 10px 10px;
          opacity: 1;
          position: relative;

          .logo {
            width: 144px;
            height: 32px;
            margin-left: 29px;
            margin-top: 42px;

          }

          .text {
            margin-top: 70px;
            margin-left: 52px;
            margin-right: 39px;

            font-size: 16px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            color: #151717;
            line-height: 24px;
          }

          .quote {
            position: absolute;
            left: 5px;
            top: 108px;
            width: 48px;
            height: 48px;
            font-size: 48px;
            font-family: SimHei-Regular, SimHei;
            font-weight: 400;
            color: #383B3B;

          }
        }
      }

      .item1 {
        width: 1100px;
        height: 480px;

        box-shadow: 0px 4px 14px 1px #E9E9E9;
        border-radius: 10px 10px 10px 10px;
      }
    }
  }




}

:deep(.el-carousel__item) {}
</style>
