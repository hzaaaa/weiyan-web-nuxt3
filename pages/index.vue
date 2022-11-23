<template>
  <NuxtLayout name="base-layout">
    <div class="container">
      <div id="banner">
        <div id="background">
          <div class="center">
            <div class="content-inner">
              <div id="banner-content">
                <div class="title1">
                  <img src="@/assets/image/banner_title.png" />
                </div>
                <div class="title2">深圳微言科技有限公司宣布完成A轮融资，<br />由知名国际顶级投资机构软银中国资本领投。</div>
                <div class="btn-wrap">
                  <!-- <NuxtLink :to="`/article/3`"> -->
                  <a :href="`${indexURL}article/3`" target="_blank">
                    <div class="view-btn">
                      <span>立即查看</span>
                    </div>
                  </a>
                  <!-- </NuxtLink> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content-wrap" class="center">
        <div class="content-inner">
          <div id="four-value">
            <div class="content-title"><span>四大价值</span><span>Four values</span></div>
            <div class="content-subtitle">以AI驱动 为您创造四大价值</div>
            <div class="content">
              <div class="content-card">
                <span class="card-img1"></span>
                <p>产业布局</p>
                <div class="card-detail">赋予产业平等获取AI的能力，推动AI在多个产业的应用和布局。</div>
              </div>
              <div class="content-card">
                <span class="card-img2"></span>
                <p>模式升级</p>
                <div class="card-detail">让AI和场景充分融合，实现从商业智能化到产业链的智能化。</div>
              </div>
              <div class="content-card">
                <span class="card-img3"></span>
                <p>降本增效</p>
                <div class="card-detail">结合产业痛点，用AI驱动促进产业降本增效，提升用户体验。</div>
              </div>
              <div class="content-card">
                <span class="card-img4"></span>
                <p>公司增值</p>
                <div class="card-detail">凭借AI进入“风口”，提升资本市场对公司整体估值。</div>
              </div>
            </div>
          </div>
          <div id="news">
            <div class="content-title"><span>微言动态</span><span>News</span></div>
            <div class="content-subtitle">关注微言实时动态获取更多行业信息</div>
            <div class="news-lists">
              <div class="news-item" v-for="item in newsLists" :key="item.id">
                <a :href="`${indexURL}article/${item.id}`" target="_blank">
                  <div class="img-wrap">
                    <img
                      :src="`https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/dynamic/${item.imgSrc}`"
                      width="370"
                      height="218"
                      alt=""
                    />
                  </div>
                  <p class="news-title">{{ item.title }}</p>
                  <p class="news-time">{{ item.time }}</p>
                  <p class="news-summary">{{ item.summary }}</p>
                  <p class="news-detail">查看详情</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
onMounted(() => {
  indexURL.value = window.location.href;
});
let indexURL = ref("");
interface NewsListsItem {
  id: number;
  imgSrc: string;
  title: string;
  time: string;
  summary: string;
}

const newsLists = ref<NewsListsItem[]>([
  {
    id: 31,
    imgSrc: "31/1.png",
    title: "微言科技获2020第四届中国零售金融创新实践大奖",
    time: "2021-01-21",
    summary:
      "过去的2020年，是中国零售金融迅猛发展的一年。各大银行、金融科技公司、资产管理公司和其他金融服务公司积极配合国家发展战略...",
  },
  {
    id: 32,
    imgSrc: "32/1.png",
    title: "荣获毕马威中国2020领先金融科技50企业",
    time: "2021-01-22",
    summary:
      "毕马威中国自2016年开始，已连续成功举办四届中国领先金融科技企业评选，见证了中国金融科技的发展并成为了宣传和推动中国金融科技...",
  },
  {
    id: 33,
    imgSrc: "33/1.png",
    title: "微言科技入选腾讯AI加速器四期40强",
    time: "2021-01-23",
    summary: "腾讯AI加速器四期入选名单近日揭晓：包括微言科技在内的40家企业经过激烈角逐，从超1000家优质AI企业中...",
  },
]);

newsLists.value.reverse();
</script>

<style lang="scss">
.container {
  #banner {
    #background {
      min-height: 500px;
      background: url("@/assets/image/banner.jpg") no-repeat;
      background-position: center;
      background-size: cover;
      .center {
        padding: 111px 0 94px;
        // width: 1170px;
        min-width: 1170px;
        font-size: 16px;
        .title1 {
          img {
            width: 656px;
            min-width: 656px;
            height: 105px;
            min-height: 105px;
          }
        }
        .title2 {
          margin-top: 29px;
          line-height: 35px;
          font-weight: 300;
          font-size: 20px;
          color: #ffffff;
        }
        .btn-wrap {
          margin-top: 39px;
          width: 190px;
          .view-btn {
            overflow: hidden;
            position: relative;
            border: 1px solid hsl(0deg 0% 100% / 50%);
            width: 190px;
            min-width: 190px;
            height: 50px;
            min-height: 50px;
            cursor: pointer;
            line-height: 48px;
            text-align: center;
            font-weight: 300;
            color: #ffffff;
            &::before,
            &::after {
              display: block;
              position: absolute;
              border: 2px solid #ffffff;
              width: 25px;
              height: 25px;
              background: transparent;
              content: "";
              transition: width 0.5s, height 0.5s;
            }
            &::before {
              bottom: 0;
              border-color: transparent transparent #ffffff #ffffff;
            }
            &::after {
              right: 0;
              top: 0;
              border-color: #ffffff #ffffff transparent transparent;
            }
            &:hover {
              &::before {
                width: 190px;
                height: 50px;
              }
              &::after {
                width: 190px;
                height: 50px;
              }
            }
          }
        }
      }
    }
  }
  #four-value {
    margin: 80px auto 0;
    min-width: 1170px;
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .content-card {
      // float: left;
      box-sizing: border-box;
      margin-right: 30px;
      padding: 49px 10px 65px 25px;
      border: 1px solid #e9eaf0;
      width: 270px;
      min-width: 270px;
      &:last-child {
        margin-right: 0;
      }
      p {
        line-height: 36px;
        font-size: 18px;
      }
      .card-detail {
        line-height: 26px;
        font-weight: 300;
        font-size: 14px;
        color: #8a8e99;
      }
      .card-img1 {
        display: inline-block;
        margin: 5px 0 33px;
        width: 59px;
        height: 54px;
        background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/index/zybx.png") no-repeat;
        background-size: contain;
      }
      .card-img2 {
        display: inline-block;
        margin: 7px 0 31px;
        width: 54px;
        height: 54px;
        background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/index/yhyy.png") no-repeat;
        background-size: contain;
      }
      .card-img3 {
        display: inline-block;
        margin: 2px 0 31px;
        width: 56px;
        height: 59px;
        background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/index/gszz.png") no-repeat;
        background-size: contain;
      }
      .card-img4 {
        display: inline-block;
        margin: 8px 0 30px;
        width: 53px;
        height: 54px;
        background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/index/cybj.png") no-repeat;
        background-size: contain;
      }
    }
  }
  #news {
    padding: 81px 0 98px;
    width: 1170px;
    min-width: 1170px;
    .news-lists {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 40px;
      .news-item {
        // float: left;
        margin-right: 30px;
        width: 370px;
        min-width: 370px;
        &:last-child {
          margin-right: 0;
        }
        .img-wrap {
          // width: 370px;
          // height: 218px;
          width: 100%;
          img {
            width: 100%;
          }
        }
        p.news-title {
          margin-top: 27px;
          height: 50px;
          line-height: 25px;
          font-size: 18px;
          color: #243233;
        }
        p.news-time {
          margin-top: 10px;
          line-height: 20px;
          font-size: 14px;
          color: #919899;
        }
        p.news-summary {
          margin-top: 16px;
          padding-right: 40px;
          line-height: 24px;
          font-size: 14px;
          color: #5c6566;
        }
        p.news-detail {
          margin-top: 22px;
          line-height: 20px;
          font-size: 14px;
          color: #5c6566;
          &:hover {
            color: #00cdc4;
          }
        }
      }
      // tip 使用felx布局
      // &.clearfix {
      //   &::after {
      //     display: block;
      //     clear: both;
      //     content: "";
      //   }
      // }
    }
  }
  #content-wrap {
    .content-title {
      font-size: 32px;
      span {
        &:first-child {
          line-height: 48px;
          font-size: 48px;
          color: #000000;
        }
        &:last-child {
          margin-left: 21px;
          line-height: 48px;
          font-weight: 300;
          font-size: 38px;
          color: #c2c4cc;
        }
      }
    }
    .content-subtitle {
      margin-top: 20px;
      line-height: 20px;
      font-weight: 300;
      font-size: 20px;
      color: #8a8e99;
    }
    .content {
      margin-top: 40px;
      // tip 使用flex布局
      // &.clearfix {
      //   &::after {
      //     display: block;
      //     clear: both;
      //     content: "";
      //   }
      // }
    }
  }
  .content-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 1170px;
    #banner-content {
      width: 1170px;
      min-width: 1170px;
    }
  }
}
</style>
