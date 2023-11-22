<template>
  <NuxtLayout name="base-layout" style="">


    <div class="banner">
      <div class="big-title ">


        新闻资讯
      </div>
    </div>
    <div class="body">
      <div class="plane">

        <div class="title">{{ detailsObj.content.newsItem[0].title }}</div>
        <div class="date"> 发布时间：2017-11-27</div>
        <div class="" style="display: flex;justify-content: center;">

          <div style="max-width:667px ;" class="h-content"
            v-html="detailsObj && detailsObj.content.newsItem[0].content.replace(/data-src/g, 'src')"></div>
        </div>
      </div>
    </div>



  </NuxtLayout>
</template>

<script setup  lang="ts">
import moment from 'moment';
onMounted(() => {

  nextTick(() => {

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
})
let route = <any>useRoute()

let detailsObj = <any>ref(useState(route.query.articleId))

onMounted(() => {
  console.log('route.params', route.params)


})
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;

}

:deep(.h-content) {
  img {
    max-width: 667px;
  }
}

.news {}

.banner {

  height: 500px;
  width: 100%;

  background: url("@/assets/image/article/banner.png") no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  .big-title {
    margin-top: 204px;
    font-size: 60px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 80px;
    text-shadow: 0px 2px 3px #373D3D;
    -webkit-background-clip: text;
    text-align: center;


    // -webkit-text-fill-color: transparent;
  }



}

.body {

  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F8F8F8;


  .plane {
    margin-top: 40px;
    margin-bottom: 53px;
    width: 1200px;
    // height: 1770px;
    background: #FFFFFF;
    border-radius: 6px 6px 6px 6px;
    opacity: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
  }



  &>div {
    width: 1200px;
  }

  .title {
    font-size: 28px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #151717;
    line-height: 1.4;
    margin-top: 50px;
    margin-bottom: 7px;
  }

  .date {
    font-size: 16px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #B5B5B5;
    line-height: 1.4;
    margin-bottom: 10px;
  }


}
</style>
