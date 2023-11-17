<template>
  <NuxtLayout name="base-layout">

    <div class="banner">
      <div class="big-title ">


        智慧农业解决方案

      </div>
      <div class="small">
        智慧农业解决方案智慧农业解决方案智慧农业解决方案智慧农业
      </div>
    </div>
    <div class="body">
      <div class="profile">
        <div class="title">
          方案描述
        </div>
        <div class="content1 content">
          通过智慧农业大数据平台，实现园区内虫情、孢子、气象、墒情、灌溉、苗情、灾情、视频监控、生产、溯源等14大子模块的全方位管理和把控，实现以数据监测为基础，远程控制为核心的物联网集成管理。
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

                <el-image class="left-img" src="/solution/item0.png" fit="fill" />
                <div class="right-block">

                  <el-image class="logo" src="/solution/logo.png" fit="fill" />
                  <div class="text">
                    目前与一绿色发展领域技术主体合作，以其“沙地改良”荒漠综合治理的绿色技术，结合微言科技智慧农业技术服务能力，共同开展智慧农业业务。首个合作项目为新疆喀什地区1400亩沙区治理绿色技术实验基地建设项目，后续持续合作当地新增耕地和上海其他援疆项目。
                  </div>
                  <div class="quote">“</div>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <!-- <div class="item1"> -->

              <el-image class="item1" src="/solution/item1.png" fit="fill" />

              <!-- </div> -->
            </el-carousel-item>
            <el-carousel-item>
              <!-- <div class="item1"> -->

              <el-image class="item1" src="/solution/item2.png" fit="fill" />

              <!-- </div> -->
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
onMounted(() => {

  nextTick(() => {

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
})
const table_list = ref([
  {
    title: '环境监测系统',
    content: '安装环境监测终端，实现环境信息的智能获取和直观展示',
    ishot: false
  },
  {
    title: '智能控制系统',
    content: '开关量、正反转、百分比设备，远程手动/自动控制让控制更智能',
    ishot: true
  },
  {
    title: '虫情监测系统',
    content: '监测虫情，方便分析虫害情况，为虫害防治措施的制定提供准确的、详细的数据支持',
    ishot: false
  },
  {
    title: '孢子监测系统',
    content: '对空气中病原菌进行监测，以便掌握可靠数据，准确预测，采取有效措施进行防治',
    ishot: true
  },
  {
    title: '气象监测系统',
    content: '气象监测是农事作业的基础内容，也是有效预防气象灾害，引导农户科学种植的重要方式',
    ishot: false
  },
  {
    title: '土壤墒情监测系统',
    content: '全面、准确的掌握土壤状况，为抗旱防灾、种植栽培等提供准确的数据信息',
    ishot: true
  },
  {
    title: '智能浇灌系统',
    content: '软硬件结合，实现远程/定时/智能策略控制，打造节水节肥，高效多产的水肥基地',
    ishot: false
  },
  {
    title: '苗情监测系统',
    content: '及时准确掌握作物生长发育动态、生产特点，方便农户总结作物高产规律，提高作物产量',
    ishot: true
  },
  {
    title: '灾情监测系统',
    content: '一旦灾情出现能及时发现从而采取应急措施，有效避免园区灾情的发生和蔓延',
    ishot: false
  },
  {
    title: '视频监控系统',
    content: '全方位实时监控园区情况，搭配云台控制，大大提高工作效率',
    ishot: true
  },
  {
    title: '远程报警系统',
    content: '离线、数据超限、差值和低电量四种报警类型，短信和邮件两种远程报警方式',
    ishot: false
  },
  {
    title: '生产管理系统',
    content: '通过互联网+的形式对园区进行现代化管理，对生产的各个流程进行全方位一体化把控，节省成本、提高效率',
    ishot: true
  },
  {
    title: '产品溯源系统',
    content: '手机扫描二维码即可准确了解农产品从种植到销售全过程的信息，实现“从农田到餐桌”的全程可追溯信息化管理',
    ishot: false
  },
  {
    title: 'LED展示系统',
    content: 'LED大屏展示，数据更直观',
    ishot: true
  },

])
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

  background: url("@/assets/image/solution/banner.png") no-repeat;
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

      font-size: 20px;
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
          font-size: 22px;
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
