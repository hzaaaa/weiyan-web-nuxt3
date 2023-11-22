<template>
  <NuxtLayout name="base-layout">
    <div class="banner">
      <div class="big-title">
        微言科技受联盟数据专委会<br />
        邀请分享“公共数据金融应用展望”
      </div>
    </div>
    <div class="body news">
      <div class="big-title">
        <div class="green-title">新闻资讯</div>
        <div class="green-line"></div>
        <div class="grey-title">NEWS</div>
      </div>
      <div class="grid-class">
        <div class="grid-item" v-for="item in newsList" @click="gotoDetails(item)">
          <div class="img">
            <el-image :src="item.content.newsItem[0].thumbUrl" fit="fill" />
          </div>
          <div class="date">{{ moment(item.articleUpdateTime * 1000).format("YYYY-MM-DD") }}</div>
          <div class="title">{{ item.content.newsItem[0].title }}</div>
        </div>
      </div>

      <div class="pagination-block">
        <el-pagination background layout="total,prev, pager, next,jumper" @size-change="handleSizeChange"
          @current-change="handleCurrentPageChange" :current-page="pageParams.pageNum" :page-size="pageParams.pageSize"
          :total="pageParams.total" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import moment from "moment";
onMounted(() => {
  nextTick(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
let router = useRouter();
const gotoDetails = (item: any) => {
  localStorage.setItem(item.articleId, JSON.stringify(item));
  router.push({
    name: "details",
    query: {
      articleId: item.articleId,
    },
  });
};
const pageParams = reactive({
  pageNum: 1,
  pageSize: 6,
  total: 0,
  pageSizesList: [6],
});

const newsList = <any>ref([]);
const handleSizeChange = () => { };
const handleCurrentPageChange = (pageNum: any) => {
  pageParams.pageNum = pageNum;
  getNewsList();
};

const getNewsList = async () => {
  let params = <any>{
    pageNumber: pageParams.pageNum,
    pageSize: pageParams.pageSize,
    sorts: "article_update_time desc",
  };
  let { data, code } = <any>await $fetch(`http://172.16.1.44:8189/publish/article/page`, {
    method: "get",
    query: params,
  });

  newsList.value = data.records;
  pageParams.total = data.total;
};
onMounted(() => {
  getNewsList();
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.news {}

.banner {
  height: 800px;
  width: 100%;

  background: url("@/assets/image/news/banner.png") no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  .big-title {
    margin-top: 251px;
    font-size: 60px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 80px;
    text-shadow: 0px 2px 3px #373d3d;
    -webkit-background-clip: text;
    text-align: center;
    // -webkit-text-fill-color: transparent;
  }
}

.body {
  margin-top: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &>div {
    width: 1200px;
  }

  .big-title {
    margin-bottom: 75px;
    position: relative;

    .green-title {
      font-size: 34px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      color: #00cdc4;
      line-height: 1.4;
    }

    .green-line {
      width: 134px;
      height: 3px;
      background: #00cdc4;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
    }

    .grey-title {
      width: 188px;
      height: 84px;
      font-size: 60px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 600;
      color: #0d4e4b;
      line-height: 1.4;
      letter-spacing: 0;
      position: absolute;
      bottom: 0;
      left: 10px;
      z-index: -1;
      opacity: 0.06;
    }
  }

  .list-block {
    .item-block {
      height: 377px;
      display: flex;

      .left-block {
        width: 178px;
        height: 100%;
        padding-right: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 48px;

        .date {
          font-size: 46px;
          font-family: DIN-Bold, DIN;
          font-weight: bold;
          color: #00cdc4;
          line-height: 1.4;
          -webkit-background-clip: text;
        }

        .year-block {
          display: flex;
          align-items: center;

          .line {
            width: 24px;
            height: 0px;
            opacity: 1;
            border: 1px solid #959595;
          }

          .year {
            font-size: 24px;
            font-family: DIN-Medium, DIN;
            font-weight: 500;
            color: #7a7a7a;
            line-height: 1.4;
            -webkit-background-clip: text;
            margin: 0 8px;
          }
        }
      }

      .middle-block {
        flex: 1;
        width: 0;
        height: 100%;
        padding-top: 60px;

        .title {
          font-size: 24px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #151717;
          line-height: 1.4;

          margin-bottom: 20px;

          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .content {
          font-size: 16px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #505353;
          line-height: 24px;
          height: 123px;
          margin-bottom: 19px;
        }

        .details {
          font-size: 16px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #00cdc4;
          line-height: 1.4;
        }
      }

      .right-block-img {
        width: 460px;
        height: 260px;
        margin-left: 98px;
        margin-top: 52px;
      }
    }

    .item-line {
      width: 1200px;
      height: 0px;
      opacity: 1;
      border-bottom: 1px solid #e1e8e8;
    }
  }

  .grid-class {
    display: grid;
    grid-template-columns: repeat(auto-fill, 580px);
    grid-column-gap: 40px; // grid-template-rows: repeat(auto-fill, 200px);
    grid-row-gap: 40px; // grid-template-rows: repeat(auto-fill, 200px);

    .grid-item {
      width: 580px;
      height: 400px;
      background: #ffffff;
      box-shadow: 0px 6px 12px 1px rgba(228, 238, 237, 0.52);
      border-radius: 10px 10px 10px 10px;
      opacity: 1;
      border: 1px solid #f3f6f6;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        .title {
          color: var(--el-color-primary);
        }

        .img {
          .el-image {
            transform: scale(1.05);
          }
        }
      }

      .img {
        height: 240px;
        width: 100%;
        // background: #E20404;
        border-radius: 10px 10px 0px 0px;
        opacity: 1;
        overflow: hidden;

        .el-image {
          height: 100%;
          width: 100%;
          transition: all 0.2s;
        }
      }

      .date {
        font-size: 14px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        color: #909191;
        line-height: 1.4;
        margin-top: 34px;
        margin-left: 28px;
      }

      .title {
        margin-left: 28px;
        margin-top: 35px;
        font-size: 16px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        color: #151717;
        line-height: 1.4;
      }
    }
  }

  .pagination-block {
    margin-top: 29px;
    margin-bottom: 79px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
