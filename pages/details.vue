<template>
  <NuxtLayout name="base-layout" style="">
    <client-only>

      <div class="banner">
        <div class="big-title ">


          新闻资讯
        </div>
      </div>
      <div class="body">
        <div class="plane">

          <div class="title">{{ detailsObj && detailsObj.content.newsItem[0].title }}</div>
          <div class="date"> 发布时间：{{ detailsObj && moment(detailsObj.articleUpdateTime * 1000).format('YYYY-MM-DD') }}
          </div>
          <div class="" style="display: flex;justify-content: center;">

            <!-- <div style="max-width:667px ;" class="h-content"
              v-html="detailsObj && detailsObj.content.newsItem[0].content.replace(/data-src/g, 'src')"></div> -->
            <!-- <div style="max-width:667px ;" class="h-content" v-html="text && text.replace(/referrer/g, '')"></div> -->
            <div style="max-width:667px ;" class="h-content" v-html="text"></div>
          </div>
        </div>
      </div>


    </client-only>
  </NuxtLayout>
</template>

<script setup  lang="ts">
import moment from 'moment';

// debugger
const text = <any>ref(null);

onMounted(() => {
  fetch('/text.html').then(res => res.text()).then((data: any) => text.value = data.replace(/data-src/g, 'src').replace(/name="referrer"/g, ''))
  nextTick(() => {

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
})
let route = <any>useRoute()
const detailsObj = <any>ref(null)

onMounted(() => {
  console.log('route.params', route.params)
  let itemStr = localStorage.getItem(route.query.articleId);

  detailsObj.value = JSON.parse(itemStr)

})
</script>
<style>
.rich_media_content {
  visibility: visible !important;
}

.rich_media_title,
.rich_media_meta_list {
  display: none !important;
}
</style>
<style lang="scss" scoped>
* {
  box-sizing: border-box;

}

:deep(.h-content) {
  line-height: 1.75;
  letter-spacing: 1px;

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
