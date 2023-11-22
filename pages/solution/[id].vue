<template>
  <NuxtLayout name="base-layout">
    <ClientOnly>
      <div class="banner" :style="{ backgroundImage: 'url(' + itemImg() + ')' }">
        <div class="big-title ">



          {{ solutionItem.title }}解决方案
        </div>
        <div class="small">
          智慧农业解决方案智慧农业解决方案智慧农业解决方案智慧农业
        </div>
      </div>
    </ClientOnly>
    <div class="body">
      <div class="profile">
        <div class="title">
          方案描述
        </div>
        <div class="content1 content">
          {{ solutionItem.desc }}
        </div>
      </div>
      <div class="grid-class">
        <div class="item" v-for="item in table_list">

          <el-image class="left-img" src="/solution/left-img.png" fit="fill" />
          <div class="right-block">
            <div class="top-title">
              <div>{{ item.title }}</div>
              <div v-if="item.ishot" class="hot">热销</div>
            </div>
            <div class="bottom-word">{{ item.content }}</div>
          </div>
        </div>
        <div class="item">
          <div class="left-img"></div>
          <div class="right-block">
            <div class="top-title">
              <div> 更多产品持续上线中</div>

            </div>
            <div class="bottom-word">敬请期待...</div>
          </div>
        </div>

      </div>
      <div class="case">
        <div class="title">
          客户案例
        </div>
        <div class="carousel-wrap">
          <!-- <div @click="preItemClick" class="left-btn"></div> -->
          <el-image @click="preItemClick" class="left-btn" src="/solution/left-arrow.png" fit="fill" />
          <el-carousel ref="carouselRef" indicator-position="none" arrow="never" class="carousel" :autoplay="true">
            <el-carousel-item>
              <div class="item0">

                <el-image class="left-img" :src="`/solution/${routeId}/item0.png`" fit="fill" />
                <div class="right-block">

                  <el-image class="logo" src="/solution/logo.png" fit="fill" />
                  <div class="text">
                    {{ solutionItem.caseList[0] }}

                  </div>
                  <div class="quote">“</div>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <!-- <div class="item1"> -->

              <el-image class="item1" :src="`/solution/${routeId}/item1.png`" fit="fill" />


            </el-carousel-item>
            <el-carousel-item>
              <!-- <div class="item1"> -->

              <el-image class="item1" :src="`/solution/${routeId}/item2.png`" fit="fill" />


            </el-carousel-item>
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

  height: 800px;
  width: 100%;

  // background: url("@/assets/image/solution/banner.png") no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  .big-title {
    margin-top: 268px;
    font-size: 60px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.4;
    -webkit-background-clip: text;
    text-align: center;


    // -webkit-text-fill-color: transparent;
  }

  .small {
    margin-top: 15px;
    font-size: 38px;
    font-family: PingFang SC-Light, PingFang SC;
    font-weight: 300;
    color: #EEF1F1;
    line-height: 1.4;
    -webkit-background-clip: text;
    text-align: center;
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
      font-size: 42px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #151717;
      line-height: 1.4;
      -webkit-background-clip: text;
      margin-top: 75px;
      text-align: center;
    }

    .content {

      font-size: 16px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #151717;
      line-height: 1.4;
      -webkit-background-clip: text;
      margin-top: 28px;

      margin-bottom: 70px;
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
    .title {
      font-size: 42px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 1.4;
      -webkit-background-clip: text;
      text-align: center;
      margin-bottom: 90px;

      text-align: center;

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
      }

      .right-btn {
        width: 29px;
        height: 29px;
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
          height: 400px;
          background: #E20404;
          border-radius: 10px 10px 10px 10px;
          opacity: 1;
          margin-right: 22px;

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

            font-size: 18px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #151717;
            line-height: 26px;
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
