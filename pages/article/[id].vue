<template>
  <NuxtLayout name="base-layout">
    <div class="article">
      <div class="article-content">
        <div class="article-content-title">{{ article.mainTitle }}</div>
        <div class="article-content-source" v-html="article.source"></div>
        <div class="article-content-detail">
          <div class="detail-pic" v-if="article.mainPic">
            <img :src="article.mainPic" alt="" />
          </div>
          <div class="detail-content">
            <div class="detail-item" v-for="(detailItem, index) in article.content" :key="index">
              <div class="detail-item-title" v-if="detailItem.title">{{ detailItem.title }}</div>
              <div class="detail-item-detail" v-if="detailItem.detail" v-html="detailItem.detail"></div>
              <div class="detail-item-img" v-if="detailItem.image">
                <img :src="detailItem.image" :alt="detailItem.imageText" :style="detailItem.imageStyle" />
              </div>
              <div class="detail-item-note" v-if="detailItem.imageText">{{ detailItem.imageText }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { articles } from "@/assets/text/articles.json";
const route = useRoute();

let article;
article = articles.find((item) => item.id === route.params.id);
if (!article) {
  article = articles[articles.length - 1];
}
// console.warn("article", article);
// console.warn(articles);

onMounted(() => {
  window.scroll(0, 0);
});
</script>

<style scoped lang="scss">
.article {
  padding: 40px 0 80px;
  width: 100%;
  background-color: #f6f6f6;
}
.article-content {
  margin: 0 auto;
  padding: 40px 50px 60px;
  width: 1100px;
  background-color: #ffffff;
  &-title {
    margin-bottom: 10px;
    line-height: 32px;
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    color: #363b4d;
  }
  &-source {
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    color: #8a9499;
  }
  &-detail {
    margin-top: 30px;
    border-top: 1px solid #edeef0;
    line-height: 28px;
    font-weight: 300;
    font-size: 16px;
    color: #5c5e66;
    .detail-pic {
      width: 100%;
      text-align: center;
      img {
        width: 100%;
        height: 350px;
        vertical-align: top;
      }
    }
    .detail-content {
      margin-top: 40px;
      padding: 0 16px;
      .detail-item {
        &-title {
          margin-top: 30px;
          line-height: 28px;
          font-weight: 700;
          font-size: 16px;
          color: #3e4559;
        }
        &-detail {
          margin-top: 20px;
          :deep() strong {
            font-weight: 400;
          }
        }
        &-img {
          margin-top: 20px;
          text-align: center;
          img {
            max-width: 80%;
            vertical-align: top;
          }
        }
        &-note {
          text-align: center;
          font-size: 12px;
          color: #888888;
        }
      }
    }
  }
}
</style>
