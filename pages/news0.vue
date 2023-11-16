<template>
  <NuxtLayout name="base-layout">

    <div class="banner">
      <div class="big-title ">


        微言科技受联盟数据专委会<br />
        邀请分享“公共数据金融应用展望”
      </div>
    </div>
    <div class="body news">
      <div class="list-block">
        <template v-for="item in  newsList">

          <div class="item-block">
            <div class="left-block">
              <div class="date">{{ moment(item.articleUpdateTime * 1000).format('MM.DD') }}</div>
              <div class="year-block">
                <div class="line"></div>
                <div class="year">
                  {{ moment(item.articleUpdateTime * 1000).format('YYYY') }}
                </div>
                <div class="line"></div>
              </div>
            </div>
            <div class="middle-block">
              <div class="title">{{ item.content.newsItem[0].title }}</div>
              <div class="content">
                2023年8月7日至11日，中国（温州）数安港举办第二届“数据智能夏令营”（以下简称夏令营）。夏令营受到了全国各高校学子们的广泛关注，来自全国30余所高校的50名优秀大学生参加活动。深圳微言科技参与了夏令营的多项活动，助力...
              </div>
              <div class="details">查看详情</div>
            </div>
            <!-- <div class="right-block-img">
  
            </div> -->
            <!-- <el-image class="right-block-img" src="/news/test.png" fit="fill" /> -->
            <el-image class="right-block-img" :src="item.content.newsItem[0].thumbUrl" fit="fill" />
          </div>
          <div v-html="item.content.newsItem[0].content"></div>
          <div class="item-line"></div>
        </template>

        <!-- {{ data }} -->
      </div>
      <div class="pagination-block">
        <el-pagination background layout="total,prev, pager, next,jumper" @size-change="handleSizeChange"
          @current-change="handleCurrentPageChange" :current-page="pageParams.pageNum" :page-size="pageParams.pageSize"
          :total="pageParams.total" />
      </div>

    </div>


  </NuxtLayout>
</template>

<script setup  lang="ts">
import moment from 'moment';
const pageParams = reactive({
  pageNum: 1,
  pageSize: 5,
  total: 56,
  pageSizesList: [5],
});
const newsList = <any>ref([]);
const handleSizeChange = () => {

}
const handleCurrentPageChange = (pageNum: any) => {
  pageParams.pageNum = pageNum;
  getNewsList()
}
// const dataS = <any>ref('')
// const { data } = await useFetch(`http://172.16.1.44:8189/publish/article/page`,
//   <any>{
//     pageNumber: 0,
//     pageSize: 5,
//     sorts: 'article_update_time desc'
//   })
// dataS.value = data
const getNewsList = async () => {
  let params = <any>{
    pageNumber: pageParams.pageNum,
    pageSize: pageParams.pageSize,
    sorts: 'article_update_time desc'
  }
  let { data } = <any>await $fetch(`http://172.16.1.44:8189/publish/article/page`, {
    method: 'get',
    query: params
  })
  // .then((res: any) => {

  newsList.value = data.records;
  // debugger
  // })
}
onMounted(() => {

  getNewsList();
})
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
    color: #FFFFFF;
    line-height: 80px;
    text-shadow: 0px 2px 3px #373D3D;
    -webkit-background-clip: text;
    text-align: center;


    // -webkit-text-fill-color: transparent;
  }



}

.body {
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &>div {
    width: 1200px;
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
          color: #00CDC4;
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
            color: #7A7A7A;
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
          color: #00CDC4;
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
      border-bottom: 1px solid #E1E8E8;
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
