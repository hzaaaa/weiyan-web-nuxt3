<template>
  <NuxtLayout name="base-layout">
    <section class="banner">
      <div class="banner-inner">
        <div class="banner-inner-img">
          <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/dynamic/weiyan_news.png" alt="" />
        </div>
        <div class="banner-inner-title">微言动态</div>
      </div>
    </section>
    <section class="news">
      <div class="news-inner">
        <div class="news-inner-title">
          <span>微言动态</span>
          <span>Weiyan news</span>
        </div>
        <div class="news-inner-list">
          <article v-for="item in news" :key="item.id">
            <NuxtLink :to="`/article/${item.id}`">
              <div class="section">
                <div class="section-left">
                  <img :src="item.image" alt="" />
                  <span>{{ item.feature }}</span>
                </div>
                <div class="section-right">
                  <div class="date">
                    <span class="date-day">{{ item.day }}</span>
                    <span class="date-month">{{ item.month }}</span>
                  </div>
                  <div class="info">
                    <h3 class="info-title">{{ item.title }}</h3>
                    <p class="info-desc">
                      {{ item.desc }}
                    </p>
                    <div>
                      <span class="info-tips">查看详情</span>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import news from "@/assets/text/news";
onMounted(() => {
  // console.warn(news);
});
</script>
<style scoped lang="scss">
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-image: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/about/header_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  &-inner {
    display: flex;
    align-items: flex-end;
    width: 1170px;
    &-img {
      height: 68px;
      img {
        height: 100%;
      }
    }
    &-title {
      margin-left: 28px;
      font-size: 36px;
      color: #ffffff;
    }
  }
}
.news {
  display: flex;
  justify-content: center;
  padding: 100px 0 72px;
  &-inner {
    width: 1170px;
    &-title {
      margin-bottom: 40px;
      span {
        font-size: 48px;
        &:last-child {
          margin-left: 20px;
          font-weight: 300;
          font-size: 38px;
          color: #c2c4cc;
        }
      }
    }
    &-list {
      a {
        text-decoration: none;
      }
      article {
        margin-top: 30px;
      }
      .section {
        display: flex;
        box-sizing: border-box;
        border: 1px solid #e9eaf0;
        height: 220px;
        &-left {
          position: relative;
          flex-shrink: 0;
          width: 370px;
          img {
            width: 100%;
            height: 100%;
          }
          span {
            position: absolute;
            right: 10px;
            bottom: 10px;
            width: 60px;
            height: 24px;
            background-color: rgb(0 0 0 / 40%);
            line-height: 24px;
            text-align: center;
            font-weight: 300;
            font-size: 12px;
            color: rgb(255 255 255 / 80%);
          }
        }
        &-right {
          display: flex;
          padding: 36px 44px;
          .date {
            display: flex;
            flex-direction: column;
            margin-right: 32px;
            &-day {
              line-height: 48px;
              font-size: 48px;
              color: #2d3140;
            }
            &-month {
              line-height: 20px;
              font-size: 14px;
              color: #3e4559;
            }
          }
          .info {
            display: flex;
            flex-direction: column;
            &-title {
              margin-bottom: 12px;
              line-height: 24px;
              font-weight: 700;
              font-size: 18px;
              color: #3e4559;
              &:hover {
                color: #00cdc4;
              }
            }
            &-desc {
              flex-grow: 1;
              line-height: 24px;
              font-weight: 300;
              font-size: 14px;
              color: #5f636d;
            }
            &-tips {
              line-height: 20px;
              font-size: 14px;
              color: #5c6566;
              &:hover {
                color: #00cdc4;
              }
            }
          }
        }
      }
    }
  }
}
</style>
