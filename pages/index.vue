<template>
  <NuxtLayout name="base-layout">
    <div class="container">
      <div id="banner-carousel">
        <ul id="carousel">
          <li class="carousel-item" v-for="(item, index) in bannerCarouselItem" :key="index"
            :class="[item.first ? 'active' : '']">
            <img :src="`/${item.imgSrc}${index}${item.imgType}`" class="carousel-img" />
            <div class="desc-item">
              <span class="title">{{ item.titleText }}</span>
              <span class="desc">{{ item.descText }}</span>
            </div>
          </li>
        </ul>
        <ul id="carousel-nav">
          <li class="nav-item" v-for="(item, index) in bannerCarouselItem" :key="index"
            :class="[item.first ? 'active' : '']" @click="handleCarouselNavItemClick(index)"></li>
        </ul>
      </div>

      <div id="ace-product" class="">
        <div class="desc-wrapper">
          <span class="desc-title">三大王牌产品</span>
          <span class="desc">打磨标准产品，形成产品矩阵平台打磨标准产品，形成产品矩阵平台打磨标准 </span>
          <span class="desc">产品矩阵平台打磨标准产品，形成产品矩阵平台打磨标准产品，形成产品矩阵平台打磨标准产品</span>
        </div>
        <div class="ace-product-list" v-clickOutside="handleMouseLeaveProduct">
          <!-- <img class="product-item" src="@/assets/image/home/product_1.png" /> -->
          <div class="product-item" @mouseover="handleProductClick()">
            <div class="product-desc-wrapper" v-if="productDetailIndex == 0">
              <span class="product-name">数据智能平台</span>
              <span class="product-desc">数据智能平台数据智能平台</span>
              <img class="arrow" src="@/assets/image/home/product_arrow.png" />
            </div>

            <div class="product-detail-wrapper" v-if="productDetailIndex == 1">
              <span class="product-name">数据智能平台</span>
              <span class="product-desc">数据智能平台数据智能平台</span>
              <div class="arrow-move-block">
                <img class="arrow_tow first" src="@/assets/image/home/product_arrow_2.png" /><img class="arrow_tow"
                  src="@/assets/image/home/product_arrow_2.png" />
              </div>

              <div class="product-btn-wrapper">
                <div class="btn-simple" @click="goToProduct('/production/dataGovernance', 'function-block')">
                  <span>产品功能</span>
                </div>
                <div class="btn-simple" @click="goToProduct('/production/dataGovernance', 'scene-block')">
                  <span>应用场景</span>
                </div>
                <div class="btn-simple" @click="goToProduct('/production/dataGovernance', 'advantage-block')">
                  <span>产品优势</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" @mouseover="handleProduct2Click()">
            <div class="product-desc-wrapper" v-if="productDetailIndex == 0">
              <span class="product-name">算力管理平台</span>
              <span class="product-desc">算力管理平台算力管理平台</span>
              <img class="arrow" src="@/assets/image/home/product_arrow.png" />
            </div>
            <div class="product-detail-wrapper" v-if="productDetailIndex == 2">
              <span class="product-name">算力管理平台</span>
              <span class="product-desc">算力管理平台算力管理平台</span>
              <div class="arrow-move-block">
                <img class="arrow_tow first" src="@/assets/image/home/product_arrow_2.png" />
                <img class="arrow_tow" src="@/assets/image/home/product_arrow_2.png" />
                <!-- <img class="arrow_tow" src="@/assets/image/home/product_arrow_2.png" /> -->
              </div>

              <div class="product-btn-wrapper">
                <div class="btn-simple" @click="goToProduct('/production/AIComputingPower', 'function-block')">
                  <span>产品功能</span>
                </div>
                <div class="btn-simple" @click="goToProduct('/production/AIComputingPower', 'scene-block')">
                  <span>应用场景</span>
                </div>
                <div class="btn-simple" @click="goToProduct('/production/AIComputingPower', 'advantage-block')">
                  <span>产品优势</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" @mouseover="handleProduct3Click()">
            <div class="product-desc-wrapper" v-if="productDetailIndex == 0">
              <span class="product-name">数据安全平台</span>
              <span class="product-desc">数据安全平台数据安全平台</span>
              <img class="arrow" src="@/assets/image/home/product_arrow.png" />
            </div>
            <div class="product-detail-wrapper" v-if="productDetailIndex == 3">
              <span class="product-name">数据安全平台</span>
              <span class="product-desc">数据安全平台数据安全平台</span>
              <div class="arrow-move-block">
                <img class="arrow_tow first" src="@/assets/image/home/product_arrow_2.png" /><img class="arrow_tow"
                  src="@/assets/image/home/product_arrow_2.png" />
              </div>

              <div class="product-btn-wrapper">
                <div class="btn-simple" @click="goToProduct('/production/privacyComputing', 'function-block')">
                  <span>产品功能</span>
                </div>
                <div class="btn-simple" @click="goToProduct('/production/privacyComputing', 'scene-block')">
                  <span>应用场景</span>
                </div>
                <div class="btn-simple" @click="goToProduct('/production/privacyComputing', 'advantage-block')">
                  <span>产品优势</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="service-product">
        <div class="desc-wrapper">
          <span class="desc-title">专业智能决策服务商，赋能行业发展</span>
          <span class="desc">打磨标准产品，形成产品矩阵平台打磨标准产品，形成产品矩阵平台打磨标准 </span>
          <span class="desc">产品矩阵平台打磨标准产品，形成产品矩阵平台打磨标准产品，形成产品矩阵平台打磨标准产品</span>
        </div>
        <div class="service-cards-wrapper">
          <div class="s-card">
            <div class="mask">
              <!-- <span class="card-title">智慧保险</span>
              <span class="card-desc"
                >覆盖车辆/个人的车险模型产品：以保险公司自有承保理赔数据 + 国家部委数据 +
                生态合作伙伴合规数据联合建模，形成适用于各类保险业务板块的模型产品(风险评级 +
                风险因子），为保险公司保前风险评估、保中风险管理、保后理赔反欺诈提供一站式数字化服务。
              </span>
              <div class="card-btn" @click="goToSolution">
                <span>查看详情</span>
                <img src="@/assets/image/home/arrow_green.png" />
              </div> -->
            </div>
            <span class="card-title">智慧保险</span>
            <span class="card-desc">覆盖车辆/个人的车险模型产品：以保险公司自有承保理赔数据 + 国家部委数据 +
              生态合作伙伴合规数据联合建模，形成适用于各类保险业务板块的模型产品(风险评级 +
              风险因子），为保险公司保前风险评估、保中风险管理、保后理赔反欺诈提供一站式数字化服务。
            </span>
            <div class="card-btn" @click="goToSolution('/solution/insurance')">
              <span>查看详情</span>
              <img src="@/assets/image/home/arrow_green.png" />
            </div>
          </div>
          <div class="s-card">
            <div class="mask"></div>
            <span class="card-title">智慧银行</span>
            <span
              class="card-desc">覆盖个人/企业全品类的模型产品：以金融机构自有数据+生态合作伙伴合规数据联合建模，形成适用于各类风险人群、各业务场景的模型产，为金融机构贷前授信、贷中管理、贷后催收一站式智能决策提供更多维度依据，助力银行从人工审批为主的信贷1.0到:全面实现自动化审批的信贷3.0升级，全面升级智慧银行，支持实体经济发展。</span>
            <div class="card-btn" @click="goToSolution('/solution/bank')">
              <span>查看详情</span>
              <img src="@/assets/image/home/arrow_green.png" />
            </div>
          </div>
          <div class="s-card" style="margin-right: 0">
            <div class="mask"></div>
            <span class="card-title">智慧农业</span>
            <span
              class="card-desc">通过智慧农业大数据平台，实现园区内虫情、孢子、气象、墒情、灌溉、苗情、灾情、视频监控、生产、溯源等14大子模块的全方位管理和把控，实现以数据监测为基础，远程控制为核心的物联网集成管理。</span>
            <div class="card-btn" @click="goToSolution('/solution/agriculture')">
              <span>查看详情</span>
              <img src="@/assets/image/home/arrow_green.png" />
            </div>
          </div>
          <div class="b-card market">
            <div class="mask"></div>
            <span class="card-title">智能营销</span>
            <span class="card-desc">秉承"智创服务内容+产品技术数据"的营销理念，为金融、互联网应用、电子商务、游戏、教育、消费品等多个行业品牌，提供全链路服务体系。</span>
            <div class="card-btn" @click="goToSolution('/solution/marketing')">
              <span>查看详情</span>
              <img src="@/assets/image/home/arrow_green.png" />
            </div>
          </div>
          <div class="b-card construction" style="margin-right: 0">
            <div class="mask"></div>
            <span class="card-title">智慧工地</span>
            <span
              class="card-desc">以智慧工地大屏BI和人员一码通为承载，帮助从政府/总包方/工地管理统筹牵引，有效制定策略，并为工地人员提供个性化有效便捷的信息化工具，发挥整体合力，高效完成全业务运营工作，实现人员、设备、物料、工艺、环保、安全、质量、进度全面智慧监管。</span>
            <div class="card-btn" @click="goToSolution('/solution/construction')">
              <span>查看详情</span>
              <img src="@/assets/image/home/arrow_green.png" />
            </div>
          </div>
        </div>
      </div>
      <div id="operate-customer">
        <div class="desc-wrapper">
          <span class="desc-title">合作用户</span>
        </div>
        <div class="customer-wrapper">
          <div class="customer" v-for="(item, index) in customerItemList" :key="index">
            <img :src="`/${item.imgSrc}${item.imgType}`" />
          </div>
        </div>
      </div>
      <div id="news-info">
        <div class="desc-wrapper">
          <span class="desc-title">新闻资讯</span>
        </div>
        <div class="news-wrapper">
          <client-only>
            <div class="news-item" v-for="(item, index) in newsList" :key="index" @click="gotoDetails(item)">
              <el-image class="img" :src="item.postUrl" fit="cover" />
              <div class="news-info-content">
                <div class="date">{{ item.articlePublishTime }}</div>
                <div class="title">{{ item.title }}</div>
              </div>
            </div>
          </client-only>
        </div>
        <div class="more-new-btn" @click="goToNews">
          <span>查看更多</span>
          <img src="@/assets/image/home/arrow_white.png" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import moment from "moment";
let indexURL = ref("");

interface BannerCarouselItem {
  imgSrc: string;
  imgType: string;
  titleText: string;
  descText: string;
  first?: boolean;
}

const bannerCarouselItem = ref<BannerCarouselItem[]>([
  {
    imgSrc: "home/home_top_carousel_",
    imgType: ".png",
    titleText: "惠普AI 智造美好未来",
    descText: "惠普AI智造美好未来惠普AI，智造美好未来惠普AI智造美好未来",
    first: true,
  },
  {
    imgSrc: "home/home_top_carousel_",
    imgType: ".jpeg",
    titleText: "title1",
    descText: "惠普AI智造美好未来惠普AI，智造美好未来惠普AI智造美好未来",
  },
  {
    imgSrc: "home/home_top_carousel_",
    imgType: ".jpeg",
    titleText: "title2",
    descText: "惠普AI智造美好未来惠普AI，智造美好未来惠普AI智造美好未来",
  },
]);

// const carouselItem = ref<any>(null);
let carouselItem = null;
let carouselItemIndex = 0;

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

let timer = null;
let timeOuter = null;

const carouselMouseEnter = () => {
  clearInterval(timer);
};

const carouselMouseLeave = () => {
  timer = setInterval(function () {
    carouselIndexLoop();
    carouselMove();
  }, 5000);
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

// 产品点击
const handleProductClick = () => {
  const productItemDomList = document.querySelectorAll(".product-item") as NodeListOf<HTMLElement>;
  console.log("productItemDomList: ", productItemDomList);

  productItemDomList[0].style.backgroundImage = `url(${getAssetsFile("home/product_active_1.png")})`;
  // productItemDomList[0].style.width = "1551px";
  productItemDomList[0].style.width = "80.73%";
  // productItemDomList[0].classList.add("active");
  // productItemDomList[0].style.backgroundPosition = "center bottom";
  productItemDomList[0].style.clipPath = `polygon(0% 0%, 100% 0%, 86.77% 100%, 0% 100%)`;
  // productItemDomList[1].style.left = "1346px";
  productItemDomList[1].style.left = "70.05%";
  productItemDomList[1].style.clipPath = `polygon(45.18% 0%, 100% 0%, 63.07% 100%, 0% 100%)`;
  // productItemDomList[1].style.width = "456px";
  productItemDomList[1].style.width = "23.69%";
  // productItemDomList[2].style.width = "289px";
  productItemDomList[2].style.width = "15.03%";
  productItemDomList[2].style.clipPath = `polygon(58.25% 0%, 100% 0%, 100% 100%, 0% 100%)`;
  productItemDomList[1].style.backgroundImage = `url(${getAssetsFile("home/product_collapse_1_2.png")})`;
  productItemDomList[2].style.backgroundImage = `url(${getAssetsFile("home/product_collapse_1_3.png")})`;
  productDetailIndex.value = 1;
};

const handleProduct3Click = () => {
  const productItemDomList = document.querySelectorAll(".product-item") as NodeListOf<HTMLElement>;
  console.log("productItemDomList: ", productItemDomList);

  productItemDomList[2].style.backgroundImage = `url(${getAssetsFile("home/product_active_3.png")})`;
  // productItemDomList[2].style.width = "1551px";
  productItemDomList[2].style.width = "80.73%";
  productItemDomList[2].style.clipPath = `polygon(0% 0%, 100% 0%, 100% 100%, 13.26% 100%)`;
  // productItemDomList[1].style.left = "122px";
  productItemDomList[1].style.left = "6.25%";
  // productItemDomList[1].style.width = "456px";
  productItemDomList[1].style.width = "23.71%";
  productItemDomList[1].style.clipPath = `polygon(0% 0%, 54.89% 0%, 100% 100%, 36.91% 100%)`;
  // productItemDomList[0].style.width = "289px";
  productItemDomList[0].style.width = "15.03%";
  productItemDomList[0].style.clipPath = `polygon(0% 0%, 41.58% 0%, 100% 100%, 0% 100%)`;
  productItemDomList[0].style.backgroundImage = `url(${getAssetsFile("home/product_collapse_3_1.png")})`;
  productItemDomList[1].style.backgroundImage = `url(${getAssetsFile("home/product_collapse_3_2.png")})`;
  productDetailIndex.value = 3;
};

const handleProduct2Click = () => {
  const productItemDomList = document.querySelectorAll(".product-item") as NodeListOf<HTMLElement>;
  console.log("productItemDomList: ", productItemDomList);

  productItemDomList[1].style.backgroundImage = `url(${getAssetsFile("home/product_active_2.png")})`;
  // productItemDomList[1].style.width = "1680px";
  productItemDomList[1].style.width = "87.44%";
  productItemDomList[1].style.clipPath = `polygon(10.01% 0%, 89.99% 0%, 100% 100%, 0% 100%)`;
  // productItemDomList[1].style.left = "122px";
  productItemDomList[1].style.left = "6.275%";
  // productItemDomList[0].style.width = "289px";
  productItemDomList[0].style.width = "15.03%";
  productItemDomList[0].style.clipPath = `polygon(0% 0%, 100% 0%, 41.58% 100%, 0% 100%)`;
  // productItemDomList[2].style.width = "289px";
  productItemDomList[2].style.width = "15.03%";
  productItemDomList[2].style.clipPath = `polygon(0% 0%, 100% 0%, 100% 100%, 58.25% 100%)`;
  productItemDomList[0].style.backgroundImage = `url(${getAssetsFile("home/product_collapse_2_1.png")})`;
  productItemDomList[2].style.backgroundImage = `url(${getAssetsFile("home/product_collapse_2_3.png")})`;
  productDetailIndex.value = 2;
};

const handleMouseLeaveProduct = () => {
  const productItemDomList = document.querySelectorAll(".product-item") as NodeListOf<HTMLElement>;
  productItemDomList[0].style.backgroundImage = `url(${getAssetsFile("home/product_1.png")})`;
  // productItemDomList[0].style.width = "640px";
  productItemDomList[0].style.width = "33.25%";
  productItemDomList[0].style.clipPath = `polygon(0% 0%, 100% 0%, 85.43% 100%, 0% 100%)`;
  // productItemDomList[1].style.left = "534px";
  productItemDomList[1].style.left = "27.74%";
  // productItemDomList[1].style.width = "750px";
  productItemDomList[1].style.width = "38.97%";
  productItemDomList[1].style.clipPath = `polygon(12% 0%, 100% 0%, 90% 100%, 0% 100%)`;
  // productItemDomList[2].style.width = "727px";
  productItemDomList[2].style.width = " 37.77%";
  productItemDomList[2].style.clipPath = `polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)`;
  productItemDomList[1].style.backgroundImage = `url(${getAssetsFile("home/product_2.png")})`;
  productItemDomList[2].style.backgroundImage = `url(${getAssetsFile("home/product_3.png")})`;
  productDetailIndex.value = 0;
};

const productDetailIndex = ref(0);

const customerItemList = [
  {
    imgSrc: "home/donge",
    imgType: ".png",
  },
  {
    imgSrc: "home/anta",
    imgType: ".png",
  },
  {
    imgSrc: "home/lining",
    imgType: ".png",
  },
  {
    imgSrc: "home/wufangzhai",
    imgType: ".png",
  },
  {
    imgSrc: "home/panpan",
    imgType: ".png",
  },
  {
    imgSrc: "home/sinian",
    imgType: ".png",
  },
  {
    imgSrc: "home/aux",
    imgType: ".png",
  },
  {
    imgSrc: "home/lanyueliang",
    imgType: ".png",
  },
  {
    imgSrc: "home/yuanqi",
    imgType: ".png",
  },
  {
    imgSrc: "home/health100",
    imgType: ".png",
  },
  {
    imgSrc: "home/EF",
    imgType: ".png",
  },
  {
    imgSrc: "home/wangyigame",
    imgType: ".png",
  },
  {
    imgSrc: "home/37Interactive",
    imgType: ".png",
  },
  {
    imgSrc: "home/hisense",
    imgType: ".png",
  },
  {
    imgSrc: "home/pingan",
    imgType: ".png",
  },
  {
    imgSrc: "home/baicaowei",
    imgType: ".png",
  },
  {
    imgSrc: "home/tal",
    imgType: ".png",
  },
  {
    imgSrc: "home/kaiying",
    imgType: ".png",
  },
  {
    imgSrc: "home/lexin",
    imgType: ".png",
  },
  {
    imgSrc: "home/baidu",
    imgType: ".png",
  },
];

let router = useRouter();
const gotoDetails = (item: any) => {
  useState(item.articleId, () => item);
  router.push({
    name: "details",
    query: {
      articleId: item.articleId,
    },
  });
};
const pageParams = reactive({
  pageNum: 1,
  pageSize: 3,
  total: 0,
  pageSizesList: [3],
});

const newsList = <any>ref([]);
const getNewsList = async () => {
  let params = <any>{
    pageNumber: pageParams.pageNum,
    pageSize: pageParams.pageSize,
    sorts: "article_publish_time desc",
  };
  let { data, code } = <any>await $fetch(`http://172.16.1.44:8189/publish/article/page`, {
    method: "get",
    query: params,
  });

  newsList.value = data.records;
  pageParams.total = data.total;
};

const goToNews = (item: any) => {
  router.push({
    name: "news",
  });
};

const goToProduct = async (name: any, dom) => {
  await navigateTo({
    path: name,

    // query: {
    //   dom: "function",
    // },
  });
  sessionStorage.setItem("scrollDom", dom);
};

const goToSolution = async (name: any) => {
  await navigateTo({
    path: name,

    // query: {
    //   dom: "function",
    // },
  });
};

const containerDom = ref<any>(null);
const containerDomWidth = ref<any>(0);

const getContainerDom = () => {
  containerDom.value = document.getElementsByClassName("container")[0];
  console.log(containerDom.value);
  containerDomWidth.value = containerDom.value.offsetWidth;
  console.log("containerDomWidth.value: ", containerDomWidth.value);
};
const changeProductListStyle = () => {
  const productListDom = <HTMLElement>document.getElementsByClassName("ace-product-list")[0];
  const height = (600 / 1920) * containerDomWidth.value;
  console.log("height: ", height);
  productListDom.style.height = `${height}px`;
};
onMounted(() => {
  nextTick(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  window.addEventListener("resize", getContainerDom);
  // getContainerDom();
  clearInterval(timer);
  clearTimeout(timeOuter);
  indexURL.value = window.location.href + "article/";
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
      getContainerDom();
    });
  }, 500);
  getNewsList();
});

watch(
  () => containerDomWidth.value,
  () => {
    changeProductListStyle();
  }
);
onUnmounted(() => {
  clearInterval(timer);
  clearTimeout(timeOuter);
  window.removeEventListener("resize", getContainerDom);
});
</script>

<style lang="scss" scoped>
.container {
  #banner-carousel {
    margin: auto;
    // width: 1920px;
    width: 100%;
    height: 820px;
    position: relative;

    #carousel {
      width: 100%;
      height: 100%;

      .carousel-item {
        position: absolute;
        opacity: 0;
        transition: all 1s;
        width: 100%;
        height: 100%;
        list-style: none;

        img.carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .desc-item {
          position: absolute;
          top: 265px;
          left: 363px;
          color: #fff;
          display: flex;
          flex-direction: column;

          .title {
            font-size: 60px;
            font-weight: 500;
          }

          .desc {
            width: 600px;
            margin-top: 32px;
            font-size: 32px;
            font-weight: 300;
            color: #eef1f1;
            line-height: 45px;
          }
        }

        &.active {
          opacity: 1;
        }
      }
    }

    #carousel-nav {
      position: absolute;
      display: flex;
      bottom: 50px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: fit-content;
      list-style: none;

      .nav-item {
        width: 30px;
        height: 6px;
        background: #ffffff;
        border-radius: 8px 8px 8px 8px;
        opacity: 0.8;
        margin-right: 10px;
        transition: all 0.5s;

        &:last-of-type {
          margin-right: 0;
        }

        &.active {
          width: 50px;
          background: #00cdc4;
          opacity: 1;
        }
      }
    }
  }

  .desc-wrapper {
    padding: 96px 0 69px 0;
    display: flex;
    flex-direction: column;
    // align-content: center;
    justify-content: center;

    // width: fit-content;
    span {
      text-align: center;
    }

    .desc-title {
      font-size: 42px;
      font-weight: 500;
      color: #151717;
      margin-bottom: 31px;
    }

    .desc {
      font-size: 20px;
      font-weight: 400;
      color: #505353;
      line-height: 30px;
    }
  }

  #ace-product {
    display: flex;
    flex-direction: column;
    align-items: center;

    .ace-product-list {
      // width: 1924.5px;
      // min-width: 1924.5px;
      width: 100%;

      height: 600px;

      // margin: auto;

      position: relative;
      background-color: #8e9f9e;

      .product-item {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        transition: all 0.5s;

        // object-fit: cover;
        &:first-of-type {
          // width: 534px;
          // width: 640px;
          width: 33.33%;
          background-image: url("@/assets/image/home/product_1.png");
          height: 100%;
          background-size: cover;
          clip-path: polygon(0% 0%, 100% 0%, 82.96% 100%, 0% 100%);
          background-position: center;
          background-repeat: no-repeat;

          // &.active {
          //   width: 80.78%;
          //   clip-path: polygon(0% 0%, 100% 0%, 87% 100%, 0% 100%);
          // }
          .product-detail-wrapper {
            margin-left: 144px;
          }
        }

        &:nth-of-type(2) {
          // width: 750px;
          width: 39.06%;
          background-image: url("@/assets/image/home/product_2.png");
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          // left: 534px;
          left: 27.65%;
          clip-path: polygon(14.2% 0%, 100% 0%, 88.26% 100%, 0% 100%);

          .product-detail-wrapper {
            margin-left: 300px;
          }
        }

        &:last-of-type {
          // width: 727px;
          width: 37.86%;
          background-image: url("@/assets/image/home/product_3.png");
          height: 100%;
          right: 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          clip-path: polygon(11.91% 0%, 100% 0%, 100% 100%, 0% 100%);

          .product-detail-wrapper {
            margin-left: 342px;
          }
        }

        .product-desc-wrapper,
        .product-detail-wrapper {
          display: flex;
          flex-direction: column;
          color: #fff;

          align-items: center;

          .product-name {
            font-size: 40px;
            font-weight: 400;
          }

          .product-desc {
            margin-top: 26px;
            font-size: 22px;
            font-weight: 300;
          }

          img.arrow {
            margin-top: 58px;
            width: 116px;
            height: 53px;
          }

          .arrow-move-block {
            margin-top: 28px;
            width: 32px;
            height: 11px;
            overflow: hidden;
            // display: flex;
            // align-items: center;
            // justify-content: center;
            position: relative;

            img.arrow_tow {
              width: 32px;
              height: 11px;
              position: absolute;
              left: -42px;
              // margin-right: 10px;
              animation: moveRight 2s infinite;
              -webkit-animation: moveRight 2s infinite;

              // animation-delay: -1.5s;
              // -webkit-animation-delay: -1.5s;
              &.first {
                // left: -42px;
                animation-delay: 1s;
                -webkit-animation-delay: 1s;
              }
            }

            // &:first-child {
            //   animation-delay: 0.1s;
            //   -webkit-animation-delay: 0.1s;
            // }

            // &:nth-child(2) {
            //   animation-delay: 0s;
            //   -webkit-animation-delay: 0s;
            // }
            // &:last-child {
            // animation-delay: 0s;
            // -webkit-animation-delay: 0s;
            // margin-right: 0;
            // }
          }

          // img.arrow_tow {
          //   // margin-top: 28px;
          //   width: 32px;
          //   height: 11px;
          // }
        }

        @keyframes moveRight {
          0% {
            transform: translateX(0px);
            // opacity: 1;
          }

          // 40% {
          //   transform: translateX(11px);
          // }
          50% {
            transform: translateX(42px);
          }

          // 80% {
          //   transform: translateX(33px);
          // }
          100% {
            transform: translateX(84px);
            // opacity: 0;
          }
        }

        .product-detail-wrapper {
          align-items: flex-start;
          align-self: center;
          margin-right: auto;
          // margin-top: 148px;

          .product-btn-wrapper {
            margin-top: 110px;
            display: flex;

            div[class^="btn"] {
              width: 160px;
              height: 44px;
              border-radius: 4px;
              margin-right: 48px;
              display: flex;
              justify-content: center;
              align-items: center;

              span {
                font-size: 22px;

                font-weight: 300;
              }
            }

            .btn-simple {
              border: 1px solid #ffffff;

              &:hover {
                background-color: #00cdc4;
                border-color: transparent;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  #service-product {
    .desc-wrapper {
      padding: 112px 0 100px 0;
    }

    .service-cards-wrapper {
      width: 1207px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;

      div[class$="-card"],
      .s-card,
      .b-card {
        position: relative;
        // transition: all 1s ease-in-out;
        overflow: hidden;

        .mask {
          width: 100%;
          // height: 100%;
          height: 0px;
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.5s ease-in-out;
        }

        .card-title {
          width: fit-content;
          height: fit-content;
          font-size: 28px;
          font-weight: 400;
          color: #ffffff;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          transition: all 1s ease-in-out;
        }

        .card-desc {
          width: fit-content;
          height: fit-content;
          font-size: 16px;
          font-weight: 300;
          color: #ffffff;
          position: absolute;
          line-height: 24px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          transform: translateX(-385px);
          margin: auto;
          padding: 0 28px;
          opacity: 0;
          transition: all 1s ease-in-out;
        }

        .card-btn {
          width: 120px;
          height: 36px;
          background: #ffffff;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 0;
          transform: translateX(-385px);
          right: 0;
          bottom: 70px;

          margin: auto;
          opacity: 0;
          transition: all 1s ease-in-out;

          &:hover {
            cursor: pointer;
          }

          &:nth-of-type(2) {
            bottom: 50px;
          }

          span {
            font-size: 14px;

            font-weight: 400;
            color: #00cdc4;
            margin-right: 10px;
          }

          img {
            width: 14px;
            height: 5px;
          }
        }

        &:hover {
          .mask {
            background: linear-gradient(180deg,
                rgba(0, 205, 196, 0.52) 0%,
                #11afa8 30%,
                rgba(11, 186, 178, 0.98) 62%,
                rgba(0, 205, 196, 0.55) 100%);
            height: 400px;
            opacity: 0.8;
          }

          .card-title {
            // top: 69px;
            // bottom: auto;
            transform: translateY(-126px);
          }

          .card-desc {
            opacity: 1;
            transform: translateX(0px);
          }

          .card-btn {
            opacity: 1;
            transform: translateX(0px);
          }
        }
      }

      .s-card {
        width: 385px;

        height: 400px;
        border-radius: 10px;

        margin-right: 24px;
        background-size: auto;
        background-repeat: no-repeat;

        &:nth-of-type(1) {
          background-image: url("@/assets/image/home/insure.png");
        }

        &:nth-of-type(2) {
          background-image: url("@/assets/image/home/bank.png");
        }

        &:nth-of-type(3) {
          background-image: url("@/assets/image/home/agriculture.png");
        }
      }

      .b-card {
        margin-top: 30px;
        width: 587px;
        height: 340px;
        border-radius: 10px;
        margin-right: 30px;
        background-size: auto;
        background-repeat: no-repeat;
        position: relative;

        &.market {
          background-image: url("@/assets/image/home/market.png");
        }

        &.construction {
          background-image: url("@/assets/image/home/construction_site.png");
        }

        &:hover {
          .card-title {
            transform: translateY(-100px);
          }
        }
      }
    }
  }

  #operate-customer {
    .desc-wrapper {
      padding: 92px 0 68px 0;
    }

    .customer-wrapper {
      width: 1210px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;

      .customer {
        width: 224px;
        height: 86px;
        border-radius: 8px;
        border: 1px solid #d9e8e7;
        margin-right: 20px;
        margin-bottom: 20px;
        overflow: hidden;

        img {
          transform: scale(1.1);
          transition: all 0.5s ease-in-out;
        }

        &:nth-of-type(5n) {
          margin-right: 0;
        }

        &:hover {
          img {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  #news-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .desc-wrapper {
      padding: 77px 0 70px 0;
    }

    .news-wrapper {
      width: 1206px;
      display: flex;
      flex-wrap: wrap;

      .news-item {
        width: 380px;
        height: 360px;
        background: #ffffff;
        box-shadow: 0px 6px 12px 1px rgba(228, 238, 237, 0.52);
        border-radius: 10px;

        border: 1px solid #f3f6f6;
        margin-right: 30px;
        overflow: hidden;

        .el-image.img {
          width: 380px;
          height: 200px;
          transition: all 0.5s;
        }

        &:nth-of-type(3n) {
          margin-right: 0;
        }

        .news-info-content {
          height: 160px;
          width: 380px;
          padding: 26px 40px 55px 28px;
          box-sizing: border-box;

          .date {
            font-size: 14px;
            font-weight: 400;
            color: #909191;
          }

          .title {
            margin-top: 15px;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            color: #151717;
          }
        }

        &:hover {
          .el-image.img {
            transform: scale(1.1);
          }

          .title {
            color: #00cdc4;
          }
        }
      }
    }

    .more-new-btn {
      width: 160px;
      height: 44px;
      background: #00cdc4;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 58px 0 63px 0;

      span {
        font-size: 20px;
        font-weight: 400;
        color: #ffffff;
        margin-right: 6px;
      }

      img {
        width: 16px;
        height: 6px;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
