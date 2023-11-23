<template>
  <NuxtLayout name="base-layout">
    <div class="banner">
      <div class="big-title">人工智能行业的务实者和领跑者</div>
      <div class="small">人工智能行业的务实者和领跑者人工智能行业的务实者和领跑者</div>
    </div>
    <div class="body">
      <div class="company-intro-wrapper">
        <div class="company-intro">
          <div class="company-desc">
            <span class="title">企业简介</span>
            <span class="desc"
              >2017年4月，微言科技注册成立于深圳市福田区，并获得软银中国资本、利欧股份、海通证券、广东粤科多家知名投资机构投资。自成立以来，通过六年的时间，在农业、建筑业、保险、银行、营销等领域形成了成熟的业务能力，已经拥有超过200多家长期合作的大型B端客户，专业能力和解决方案得到市场高度认可。</span
            >
            <span class="desc"
              >公司现有员工200多人，技术研发人员占比一半以上，公司员工硕士以上学历占比20%以上。公司核心高管均拥有国际知名院校博士学位，团队成员来自平安、阿里、腾讯、华为、工商银行等知名机构。</span
            >
            <span class="desc"
              >微言科技成定位在“技术驱动，场景赋能”各行业数字化转型的人工智能服务商，是智能决策、隐私计算、人工智能等技术场景化运用的创新先锋。通过智能化系统产品、场景类化的模型、算法、策略产品，服务实体、赋能实业，助力各行业实现数据驱动的智能化转型，业务规模化高效落地。</span
            >
          </div>
        </div>
      </div>
      <div class="senior-intro-wrapper">
        <div class="title">高管介绍</div>
        <div class="senior-intro-card-wrapper">
          <div class="senior-intro-card" v-for="(item, index) in seniorIntroList" :key="index">
            <div class="top">
              <div class="name">{{ item.name }}</div>
              <div class="position">
                <span>{{ item.position }}</span>
              </div>
            </div>

            <div class="desc-list-wrapper">
              <ul class="desc-list">
                <li class="list-item" v-for="(item, index) in item.descList" :key="index">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="dev-history-wrapper">
        <div class="title">发展历程</div>
        <div class="history-wrapper">
          <div class="map-road"></div>
          <div
            class="road-point"
            v-for="(item, index) in roadPointList"
            :key="index"
            :class="[`${item}`]"
            @mouseover="changeRoadDescStyle(index)"
            @mouseleave="recoverRoadDescStyle(index)"
          ></div>
          <div class="road-desc first">
            <span class="year">2017年</span>
            <span class="desc">4月公司成立</span>
            <span class="desc">6月获软银中国天使轮融资</span>
            <span class="desc">8月完成软银中国、利欧股份A轮融资 </span>
          </div>
          <div class="road-desc second">
            <span class="year">2018年</span>
            <span class="desc">获得汇尊资本、新安金融A+轮融资</span>
          </div>
          <div class="road-desc third">
            <span class="year">2019年</span>
            <span class="desc">获得“2018粤港澳大湾区新经济企业TOP100”称号</span>
            <span class="desc">获得“高新技术企业”认定</span>
            <span class="desc">获得“德勤2019中国高成长高科技明日之星”</span>
          </div>
          <div class="road-desc fourth">
            <span class="year">2020年</span>
            <span class="desc">获得2020年度中国创客TOP30</span>
          </div>
          <div class="road-desc fifth">
            <span class="year">2021年</span>
            <span class="desc">获得2020年中国零售金融创新“人工智能技术应用奖”</span>
            <span class="desc">获得“2021年腾讯AI加速器”称号</span>
            <span class="desc">获得“2021CITC网易创新创业大赛中国十强”</span>
            <span class="desc">获得“2021全球科大人创新创业大赛三十强”</span>
          </div>
          <div class="road-desc sixth">
            <span class="year">2022年</span>
            <span class="desc">获得2022年数字金融创新大赛金奖 </span>
            <span class="desc">再次获得“高新技术企业”认定</span>
            <span class="desc">获得“2022 AI天马高成长性企业”称号</span>
            <span class="desc">参编《跨境数据流通合规与技术应用白皮书》正式发布</span>
          </div>
          <div class="road-desc seventh">
            <span class="year">2023年</span>
            <span class="desc">完成海通证券旗下投资机构领投的B轮融资</span>
            <span class="desc">获得”专精特新中小企业“称号</span>
            <span class="desc">参编《数据要素安全流通白皮书》正式发布</span>
            <span class="desc">参编《隐私计算互联互通技术研究报告》正式发布</span>
          </div>
        </div>
      </div>
      <div class="honorary-qualifications-wrapper">
        <!-- <div id="honorary-carousel"> -->
        <ul id="carousel-nav">
          <li
            class="nav-item"
            v-for="(item, index) in honoraryCarouselItem"
            :key="index"
            :class="[item.first ? 'active' : '']"
            @mouseover="handleCarouselNavItemClick(index)"
          >
            {{ item.descText }}
          </li>
        </ul>
        <div class="title">荣誉资质</div>
        <ul id="carousel">
          <li
            class="carousel-item"
            v-for="(item, index) in honoraryCarouselItem"
            :key="index"
            :class="[item.first ? 'active' : '']"
          >
            <el-image :src="getAssetsFile(`${item.imgSrc}${index}${item.imgType}`)" class="carousel-img" fit="fill" />
            <div class="desc-item">
              <span class="desc">{{ item.descText }}</span>
            </div>
          </li>
        </ul>
        <!-- </div> -->
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const seniorIntroList = [
  {
    name: "黄聪博士",
    position: "创始人&CEO",
    descList: [
      "曾任陆金所创新产品部总经理，从0-1打造陆金所核心产品中台和技术后台",
      "曾就职于麦肯锡，为众多机构提供人工智能数字化转型的咨询服务",
      "曾就职于人民银行总行金融研究局，发表多篇论文，为央行宏观审慎监管提供决策依据",
      "曾任哥伦比亚大学统计系助理教授，研究方向为机器学习和数据挖掘",
      "耶鲁大学统计学博士",
      "中国科学技术大学少年班数学专业学士",
    ],
  },
  {
    name: "强锋博士",
    position: "隐私技术专家&CTO",
    descList: [
      "曾任中国工商银行-大数据与人工智能实验室，联邦学习团队负责人",
      "曾任海梁科技CTO，从0到1搭建公司平台及产品研发团队",
      "曾任年长城物业集团股份有限公司数据与算法首席专家",
      "曾在芝加哥阿贡（Argonne）国家实验室（美国）参与并行数学建模工具的设计与实施、C++和Julia中自动微分的Library",
      "英国爱丁堡大学优化与运筹学博士、英国剑桥大学高级计算机科学硕士、",
      "清华大学-香港中文大学金融管理硕士，加拿大滑铁卢大学计算机科学与运筹学、数学系双学士",
    ],
  },
  {
    name: "吴庄博士",
    position: "COO",
    descList: [
      "曾就职美国Visa-Inc、中国平安集团、阳光保险集团等国内外知名机构",
      "金融科技、结构化产品设计业务领域专家",
      "美国威斯康星大学统计学博士,美国密歇根大学电子工程硕士,中国科大少年班学士",
    ],
  },
  {
    name: "田园",
    position: "模型算法部总经理",
    descList: [
      "曾任中科金集团资深模型科学家",
      "曾任云从科技模型策略总监",
      "曾任Genbon Pty项目规划与风险评估总监",
      "曾任SunGard风险评估经理",
      "麦考瑞大学应用金融硕士，中科大理学学士",
    ],
  },
];

const changeRoadDescStyle = (index: any) => {
  console.log(index);
  const roadDescDom = document.querySelectorAll(".road-desc") as NodeListOf<HTMLElement>;
  console.log("roadDescDom: ", roadDescDom);
  roadDescDom[index].childNodes.forEach((item: any) => {
    // item.style.color = "#00CDC4";
    // item.style.transform = "scale(1.1)";
    item.classList.add("active");
  });
};
const recoverRoadDescStyle = (index: any) => {
  console.log(index);
  const roadDescDom = document.querySelectorAll(".road-desc") as NodeListOf<HTMLElement>;
  console.log("roadDescDom: ", roadDescDom);
  roadDescDom[index].childNodes.forEach((item: any) => {
    item.classList.remove("active");
  });
};
const honoraryCarouselItem = ref<any[]>([
  {
    imgSrc: "about/honor_",
    imgType: ".png",
    descText: "华东江苏大数据交易中心数商",
    first: true,
  },
  {
    imgSrc: "about/honor_",
    imgType: ".png",
    descText: "新特精中小企业",
  },
  {
    imgSrc: "about/honor_",
    imgType: ".png",
    descText: "开源社区成员单位",
  },
  {
    imgSrc: "about/honor_",
    imgType: ".png",
    descText: "创新型中小企业",
  },
  {
    imgSrc: "about/honor_",
    imgType: ".png",
    descText: "开放群岛开源社区成员单位",
  },
  {
    imgSrc: "about/honor_",
    imgType: ".png",
    descText: "深圳数据交易所首批数据商",
  },
  {
    imgSrc: "about/honor_",
    imgType: ".png",
    descText: "深圳市人工智能产业协会副会长单位",
  },
  {
    imgSrc: "about/honor_",
    imgType: ".png",
    descText: "全球科大人创新创业大赛三十强",
  },
  {
    imgSrc: "about/honor_",
    imgType: ".png",
    descText: "网易创新创业大赛全国十强",
  },
  {
    imgSrc: "about/honor_",
    imgType: ".png",
    descText: "人工智能技术应用",
  },
]);
let carouselItem = null;
let carouselItemIndex = 0;

let timer = null;
let timeOuter = null;

const carouselNavItem = ref<any>(null);

const clearCarouselClass = () => {
  for (let i = 0; i < carouselItem.length; i++) {
    carouselItem[i].className = "carousel-item";
    carouselNavItem.value[i].className = "nav-item";
  }
};

const carouselIndexLoop = () => {
  if (carouselItemIndex < carouselItem.length - 1) {
    carouselItemIndex++;
  } else {
    carouselItemIndex = 0;
  }
};

const carouselMove = () => {
  clearCarouselClass();
  console.log(carouselItemIndex);
  carouselItem[carouselItemIndex].className = "carousel-item active";
  carouselNavItem.value[carouselItemIndex].className = "nav-item active";
};

const handleCarouselNavItemClick = (index: number) => {
  clearInterval(timer);
  carouselItemIndex = index;
  carouselMove();
  timer = setInterval(function () {
    carouselIndexLoop();
    carouselMove();
  }, 5000);
};

const roadPointList = ["one", "tow", "three", "four", "fifth", "six", "seven"];

onMounted(() => {
  nextTick(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  clearInterval(timer);
  clearTimeout(timeOuter);
  // indexURL.value = window.location.href + "article/";
  // carouselItem.value = document.getElementsByClassName("carousel-item");

  // timer.value = setInterval(function () {
  //   carouselMove();
  // }, 5000);
  timeOuter = setTimeout(() => {
    nextTick(() => {
      carouselItem = document.getElementsByClassName("carousel-item");
      carouselNavItem.value = document.getElementsByClassName("nav-item");
      console.log("carouselItem.value: ", carouselItem);
      console.log(carouselNavItem.value);
      timer = setInterval(function () {
        carouselIndexLoop();
        carouselMove();
      }, 5000);
    });
  }, 500);
});
onUnmounted(() => {
  clearInterval(timer);
  clearTimeout(timeOuter);
});
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.banner {
  height: 800px;
  width: 100%;

  background: url("@/assets/image/about/banner.png") no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  .big-title {
    margin-top: 268px;
    font-size: 60px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
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
    color: #eef1f1;
    line-height: 1.4;
    -webkit-background-clip: text;
    text-align: center;
  }
}
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  .company-intro-wrapper {
    padding: 118px 0 110px 0;
    .company-intro {
      width: 1200px;
      height: 520px;
      // box-shadow: 0px 6px 12px 1px rgba(228, 238, 237, 0.52);
      border-radius: 10px;
      background-image: url("@/assets/image/about/company.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 50px;
      .company-desc {
        width: 495px;
        // height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          font-size: 42px;
          margin-bottom: 30px;
          font-weight: 500;
          color: #151717;
        }
        .desc {
          width: 445px;
          font-size: 16px;
          line-height: 22px;
          font-weight: 400;
          color: #151717;
          margin-bottom: 18px;
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  .senior-intro-wrapper {
    padding: 52px 0 118px 0;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .title {
      font-size: 42px;
      text-align: center;
      font-weight: 500;
      color: #151717;
      margin-bottom: 86px;
    }
    .senior-intro-card-wrapper {
      display: flex;
      width: 1203px;
      flex-wrap: wrap;
      .senior-intro-card {
        background: #f8f8f8;
        width: 585px;
        height: 446px;
        width: 600px;
        // background: #ffffff;
        // box-shadow: 0px 4px 10px 1px rgba(226, 226, 226, 0.5);
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        background-image: url("@/assets/image/about/senior_bg.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        margin-bottom: 43px;
        .top {
          padding: 25px 0 30px 36px;
          height: 154px;
        }
        .name {
          font-size: 30px;

          font-weight: 500;
          color: #ffffff;
          margin-bottom: 10px;
        }
        .position {
          width: 300px;
          height: 46px;
          background: linear-gradient(97deg, rgba(0, 169, 162, 0.8) 0%, #11393a 100%);
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          border: 1px solid #13f3ea;
          font-size: 20px;

          font-weight: 500;
          color: #10fff5;
          display: flex;
          align-items: center;
          padding-left: 19px;
        }
        .desc-list-wrapper {
          flex: 1;
          padding: 23px 28px 23px 36px;
          .desc-list {
            padding-left: 10px;
            .list-item {
              line-height: 30px;
              font-size: 16px;

              font-weight: 400;
              color: #151717;
              &::marker {
                // content: "";
                // width: 4px;
                // height: 4px;
                background-color: #505353;
                color: #505353;
              }
            }
          }
        }
      }
    }
  }
  .dev-history-wrapper {
    padding: 87px 0 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .title {
      font-size: 42px;
      text-align: center;
      font-weight: 500;
      color: #151717;
      margin-bottom: 36px;
    }
    .history-wrapper {
      width: 1515px;
      height: 682px;
      background-image: url("@/assets/image/about/map_bg.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;
      .map-road {
        position: absolute;
        width: 1174px;
        height: 259px;
        background-image: url("@/assets/image/about/map_road.png");
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        top: 200px;
        left: 154px;
      }
      .road-point {
        width: 26px;
        height: 26px;
        background: #ffffff;
        box-shadow: 0px 2px 4px 1px #c8eceb;
        border-radius: 50%;
        border: 4px solid #00cdc4;
        position: absolute;
        transition: all 0.5s;
        &:hover {
          cursor: pointer;
          border-color: #fff;
          background: #00cdc4;
          box-shadow: 0px 2px 4px 1px #c8eceb;
        }
        &.one {
          top: 383px;
          left: 187px;
        }
        &.tow {
          top: 385px;
          left: 333px;
        }
        &.three {
          top: 300px;
          left: 503px;
        }
        &.four {
          top: 338px;
          left: 681px;
        }
        &.fifth {
          top: 215px;
          left: 903px;
        }
        &.six {
          top: 284px;
          left: 1114px;
        }
        &.seven {
          top: 224px;
          left: 1260px;
        }
      }
      .road-desc {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        .year {
          font-size: 22px;
          margin-bottom: 12px;
          font-weight: 500;
          color: #151717;
          transition: all 0.5s;
          &.active {
            color: #00cdc4;
            transform: scale(1.1);
          }
        }
        .desc {
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: #505353;
          transition: all 0.5s;
          &.active {
            color: #00cdc4;
            transform: scale(1.1);
          }
        }
        &.first {
          top: 456px;
          left: 73px;
        }

        &.second {
          top: 245px;
          left: 221px;
        }
        &.third {
          top: 392px;
          left: 346px;
        }
        &.fourth {
          top: 184px;
          left: 587px;
        }
        &.fifth {
          top: 323px;
          left: 734px;
        }
        &.sixth {
          top: 51px;
          left: 940px;
        }
        &.seventh {
          top: 300px;
          left: 1104px;
        }
      }
    }
  }
  .honorary-qualifications-wrapper {
    width: 100%;
    height: 620px;
    background-image: url("@/assets/image/about/honorary_bg.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    // align-items: center;

    .title {
      font-size: 42px;
      align-self: flex-start;
      font-weight: 500;
      color: #ffffff;
      margin-bottom: 92px;
      padding-top: 64px;
    }
    // #honorary-carousel {
    // width: 845px;
    // width: 100%;
    // display: flex;
    // padding-left: 58px;
    // justify-content: space-between;
    #carousel {
      margin-top: 215px;
      position: relative;
      // width: fit-content;
      // height: fit-content;
      // flex: 1;
      height: 302px;
      width: 376px;
      // width: fit-content;
      .carousel-item {
        position: absolute;
        opacity: 0;
        transition: all 0.5s;
        // width: 100%;
        width: auto;
        // height: 230px;
        height: auto;
        // right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .el-image.carousel-img {
          width: auto;
          // height: 100%;
          height: auto;
          // object-fit: cover;
          margin-bottom: 12px;
        }
        .desc-item {
          color: #fff;
          // display: flex;
          // flex-direction: column;
          // .title {
          //   font-size: 60px;
          //   font-weight: 500;
          // }
          .desc {
            font-size: 14px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            color: #ffffff;
          }
        }
        &.active {
          opacity: 1;
        }
      }
    }
    // }
    #carousel-nav {
      margin-top: 215px;
      // position: absolute;
      // display: flex;
      // bottom: 50px;
      // left: 0;
      // right: 0;
      // margin: 0 auto;
      width: fit-content;
      // margin-right: 205px;
      // list-style: none;

      .nav-item {
        // width: 30px;
        // height: 6px;
        // background: #ffffff;
        color: #fff;
        font-size: 16px;
        margin-bottom: 12px;
        font-weight: 400;
        transition: all 0.5s;
        padding-left: 8px;
        &:hover {
          cursor: pointer;
        }
        &::marker {
          content: "♦️";
          color: white;
        }
        &.active {
          // width: 50px;
          color: #00cdc4;
          opacity: 1;
          &::marker {
            color: #00cdc4;
          }
        }
      }
    }
  }
}
</style>
