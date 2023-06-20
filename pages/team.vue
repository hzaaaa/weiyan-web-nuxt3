<template>
  <NuxtLayout name="base-layout">
    <div id="container">
      <div id="header-banner">
        <div class="content-inner">
          <div class="header-wrap">
            <div class="header-inner">
              <div class="team">
                <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/our_team.png" alt="" />
              </div>
              <div class="about-us">微言团队</div>
              <div>首页 &gt; 微言团队</div>
            </div>
          </div>
        </div>
      </div>
      <div id="content-wrap" class="center">
        <div id="team">
          <div class="content-inner">
            <div class="team-profile">
              <div class="team-inner">
                <div class="team-left">
                  <div class="title"><span>微言团队</span><span>Our team</span></div>
                  <p>
                    微言科技拥有一支顶尖的精英服务团队，多来自FICO、平安、阿里，有超过80%的团队成员是人工智能、机器学习、风险管理、反欺诈及数据等领域的资深专家，经过市场检验，团队经验深厚。
                  </p>
                </div>
                <div class="team-right">
                  <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/team2.jpg" alt="" />
                </div>
              </div>
            </div>

            <div class="team-show">
              <div class="group">
                <div class="group-inner">
                  <div class="team-content">
                    <img :src="teamLeaderList[index].img" alt="" />
                    <div class="person-summary">
                      <h3>{{ teamLeaderList[index].name }}</h3>
                      <h3>{{ teamLeaderList[index].position }}</h3>
                      <p v-html="teamLeaderList[index].desc"></p>
                      <!-- <h3>姚志平 William Yao </h3>
              <h3>董事长</h3>
              <p>世界首屈一指的风控专家。历任平安陆金所首席风控官、平安集团高级副总裁；台新国际银行（台湾）首席风控官、高级副总裁、零售信贷委员会主席，帮助台新走出双卡风暴；美洲银行（美国）副总裁，负责Collection/Recovery Models；汇丰银行（美国）高级风控经理，模型团队负责人，专注于次优人群房屋、汽车及信用贷款；美国FICO公司高级科学家，Super Score Technology发明者，建立Transaction Score, Third Generation Falcon International Fraud Model；第一资本Capital One（美国）高级统计学家，负责Pattern Variables & Transaction Score。</p> -->
                    </div>
                  </div>
                  <ul class="team-leader" @mouseover="onMouseOver">
                    <li class="yao" :class="{ active0: isActive == 0 }"></li>
                    <li class="huang" :class="{ active1: isActive == 1 }"></li>
                    <!-- <li class="cheng"></li>
            <li class="qiu"></li>
            <li class="dang"></li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
interface TeamLeader {
  img: string;
  name: string;
  position: string;
  desc: string;
}

const teamLeaderList = ref<TeamLeader[]>([
  {
    img: "https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/yzp.png",
    name: "姚志平 William Yao ",
    position: "董事长",
    desc: "世界首屈一指的风控专家，人工智能应用研究学者。<br>历任陆金所首席风控官，平安集团高级副总裁；台新国际银行（台湾）高级副总裁，首席风控官，零售信贷委员会主席；汇丰银行（美国）高级风控经理，模型团队负责人；美洲银行（美国）副总裁，负责Collection/Recovery Models；美国FICO公司高级科学家，Super Score Technology发明者；第一资本CapitalOne（美国）高级统计学家。",
  },
  {
    img: "https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/hc.png",
    name: "黄聪 Cong Huang",
    position: "创始人 CEO",
    desc: "人工智能领域专家，2008年毕业于美国耶鲁大学，拥有统计学博士学位；2003年毕业于中国科学技术大学，拥有数学学士学位。<br>作为创始团队核心成员，筹建平安陆金所，亲历平台从零至一过程；麦肯锡高级咨询顾问，为众多机构提供人工智能数字化转型咨询服务；曾就职于英国伦敦高盛公司欧洲总部；曾就职于中国人民银行金融研究所，为央行宏观审慎监管提供决策依据；美国哥伦比亚大学统计系助理教授，研究方向为数据挖掘和机器学习，是大数据领域专家。",
  },
  // ,
  // {
  // 	img: 'https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/cwh.png',
  // 	name: '陈苇杭',
  // 	position: '合伙人',
  // 	desc: '机构金融业务专家。曾任职平安陆金所，在机构金融领域有深厚的经验，与160多家银行和金融机构建立良好合作关系。曾主导同业对接陆金所固定收益类产品（CDS）超过40亿元；主导国内第一、第二单私募公积金资产证券化业务全流程；为平安银行信用卡100亿ABS优先级、泰隆银行小微贷ABS劣后级和奇瑞汽车ABS优先级对接机构资金。大连海事大学海商法硕士，北京交通大学物流管理学士。'
  // },
  // {
  // 	img: 'https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/qt.png',
  // 	name: '邱天',
  // 	position: '合伙人',
  // 	desc: '互联网金融营销运营专家。历任小赢科技（赢众通）副总经理，营销运营负责人，建立并管理公关、品牌、流量运营、用户运营等核心职能，在不到两年间，成功打造出互金行业一线品牌；亚马逊（中国）电商平台高级运营经理；麦肯锡公司7年，为超过30家世界500强与中国领先企业打造市场与品牌战略。《中国的数字化转型》作者。沃顿商学院MBA，北京大学经济学硕士，复旦大学经济学学士。'
  // },
  // {
  // 	img: 'https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/dyf.png',
  // 	name: '党毅斐',
  // 	position: '合伙人',
  // 	desc: '互联网金融产品及运营专家。历任小赢科技（赢众通）副总经理，主导机构资金引入，成功建立“增信＋资管通道”模式；主导理财端MGM、渠道推广，引进并打造人均引进投资过亿的团队；主导黄金新产品上线和推广，跻身一线互联网黄金产品平台；华润集团战略管理业务总监，指导旗下多家子公司的战略规划、转型及业务运营跟踪和管理；医药电商企业健一网董事，负责战略规划、对外融资和日常管理监控；麦肯锡公司5年，帮助超过20家国内外领先企业。上海交通大学企业管理硕士，管理工程学士。'
  // }
]);

let isActive = ref(0);
let index = ref(0);

const onMouseOver = (event) => {
  //Array.from() 转化数组      children  Ul元素的子元素节点li的集合 此时arr是一个包含li的数组  每个li实际上一是个信息对象的集合
  const arr = Array.from(event.currentTarget.children);
  const currentIndex = arr.indexOf(event.target);
  index.value = currentIndex;
  isActive.value = currentIndex;
};
</script>
<style scoped lang="scss">
#team {
  div.team-profile {
    display: flex;
    overflow: hidden;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    color: #ffffff;
    .team-inner {
      // padding: 100px 0;
      display: flex;
      // overflow: hidden;
      flex-direction: row;
      justify-content: space-between;
      margin: 100px 0;
      width: 1170px;
      min-width: 1170px;
      min-height: 380px;
      .team-left {
        // float: left;
        margin: 54px 72px 0 0;
        width: 470px;
        min-width: 470px;
        .title {
          span:first-child {
            line-height: 48px;
            font-size: 48px;
            color: #2d3140;
          }
          span:last-child {
            // margin-left: 21px;
            line-height: 48px;
            font-weight: 300;
            font-size: 38px;
            color: #c2c4cc;
          }
        }
        p {
          margin-top: 40px;
          line-height: 30px;
          font-weight: 300;
          font-size: 16px;
          color: #5f636d;
        }
      }
      .team-right {
        float: left;
        width: 628px;
        min-width: 628px;
        height: 380px;
        img {
          width: 100%;
        }
      }
    }
  }
  div.team-show {
    overflow: hidden;
    padding-bottom: 118px;
    width: 100%;
    height: 550px;
    min-height: 550px;
    color: #ffffff;
    .group {
      height: 100%;
      background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/banner_bg.jpg") no-repeat;
      background-size: cover;
      .group-inner {
        margin: 0 auto;
        width: 1170px;
        min-width: 1170px;
        height: 100%;
        .team-content {
          overflow: hidden;
          position: relative;
          height: 100%;
          img {
            // float: left;
            // margin: 60px 0 0 103px;
            position: absolute;
            left: 103px;
            bottom: 0;
            width: 350px;
            min-width: 350px;
            // height: 490px;
            min-height: 490px;
          }
          .person-summary {
            //float: left;
            // margin: 80px 30px 0 600px;
            position: absolute;
            left: calc(600 / 1170) * 100%;
            top: calc(80 / 550) * 100%;
            width: 540px;
            min-width: 540px;
            h3 {
              line-height: 50px;
              font-weight: 400;
              font-size: 28px;
            }
            h3:nth-child(2) {
              color: #00cdc4;
            }
            p {
              margin-top: 37px;
              line-height: 26px;
              font-weight: 300;
              font-size: 14px;
            }
          }
        }
        ul {
          padding-left: calc(370 / 1170) * 100%;
          li {
            float: left;
            position: relative;
            bottom: 100px;
            list-style: none;
            margin-right: 18px;
            width: 219px;
            min-width: 219px;
            height: 120px;
            min-height: 120px;
            cursor: pointer;
            transition: all 0.2s linear;
            &:last-child {
              margin-right: 0;
            }

            // &:hover {
            // 	bottom: 109px;
            // }
            &.yao {
              background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/yzp_b.jpg") no-repeat;
              background-size: 100% 100%;

              // &:hover {
              // 	background: url('https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/yzp_l.jpg') no-repeat;
              // 	background-size: 100% 100%;
              // }
            }
            &.huang {
              background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/hc_b.jpg") no-repeat;
              background-size: 100% 100%;

              // &:hover {
              // 	background: url('https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/hc_l.jpg') no-repeat;
              // 	background-size: 100% 100%;
              // }
            }
            &.cheng {
              background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/cwh_b.jpg") no-repeat;
              background-size: 100% 100%;

              // &:hover {
              // 	background: url('https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/cwh_l.jpg') no-repeat;
              // 	background-size: 100% 100%;
              // }
            }
            &.dang {
              background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/dyf_b.jpg") no-repeat;
              background-size: 100% 100%;

              // &:hover {
              // 	background: url('https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/dyf_l.jpg') no-repeat;
              // 	background-size: 100% 100%;
              // }
            }
            &.qiu {
              background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/qt_b.jpg") no-repeat;
              background-size: 100% 100%;

              // &:hover {
              // 	background: url('https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/qt_l.jpg') no-repeat;
              // 	background-size: 100% 100%;
              // }
            }
            &.active0 {
              bottom: 109px;
              background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/yzp_l.jpg") no-repeat;
              background-size: 100% 100%;
            }
            &.active1 {
              bottom: 109px;
              background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/hc_l.jpg") no-repeat;
              background-size: 100% 100%;
            }
            &.active2 {
              bottom: 109px;
              background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/cwh_l.jpg") no-repeat;
              background-size: 100% 100%;
            }
            &.active3 {
              bottom: 109px;
              background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/qt_l.jpg") no-repeat;
              background-size: 100% 100%;
            }
            &.active4 {
              bottom: 109px;
              background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/team/dyf_l.jpg") no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
    }
  }
}
</style>
