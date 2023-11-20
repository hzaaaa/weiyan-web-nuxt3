<template>
  <NuxtLayout name="base-layout">

    <div class="banner">
      <div class="big-title ">
        <div>

          数据订阅平台文案
        </div>
        <div class="small">
          数据订阅平台文案数据订阅平台文案 数据订阅平台文案
        </div>
      </div>
    </div>
    <div class="body">
      <div class="profile">
        <div class="title">
          数据订阅平台
        </div>
        <div class="content1 content">
          WE·GATE是现代化数据集成和管理的关键工具，其为企业提供统一数据订阅服务体系。它是从顶层视角一站式的管理工具，其提供了安全性、流量管理、协议转换和监控分析等核心功能。
          <br><br>
          通过WE·GATE，企业可以更好地管理和保护其后端服务，并实现多个应用程序之间的无缝集成。技术实现方面，WE·GATE依赖于多源数据接入、安全认证、标准化数据转换、流量控制和监控分析等技术工具的实践。
        </div>
      </div>
      <div class="function">
        <div class="has-pre-title">
          产品功能
        </div>
        <div class="f-block">

          <div class="f-row" style="margin-bottom: 20px;">
            <div class="f-col">
              <!-- <div class="img"></div> -->
              <el-image class="img" src="/production/function0.png" fit="fill" />
              <div class="word-block">
                <div class="word-title">
                  数据接口管理
                </div>
                <div class="content">提供数据完整生命周期集中管理，包含接口创建、编辑、测试、监控、审计、维护等，确保接口的安全和稳定性。</div>
              </div>
            </div>
            <div class="f-col">
              <!-- <div class="img"></div> -->
              <el-image class="img" src="/production/function1.png" fit="fill" />
              <div class="word-block">
                <div class="word-title">
                  数据订阅管理
                </div>
                <div class="content">通过数据产品界面，查看提供的数据并提交订阅申请，可以定义订阅的数据源、订阅频率、数据格式等，并能随时管理更新订阅设置。</div>
              </div>
            </div>

          </div>
          <div class="f-row">
            <div class="f-col">
              <!-- <div class="img"></div> -->
              <el-image class="img" src="/production/function2.png" fit="fill" />
              <div class="word-block">
                <div class="word-title">
                  数据监控管理
                </div>
                <div class="content">通过控制台直观的查看各项数据接入输出的监控指标。提供多维度视角，用于流量分析和错误分析，确保稳定安全的提供数据服务。</div>
              </div>
            </div>
            <div class="f-col">
              <!-- <div class="img"></div> -->
              <el-image class="img" src="/production/function3.png" fit="fill" />
              <div class="word-block">
                <div class="word-title">
                  数据安全
                </div>
                <div class="content">WE.GATE的核心能力，提供加密、密钥管理、数据加密脱敏、特权用户访问控制、活动监视和审计等功能，降低数据泄露风险和简化合规性。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scene">
        <div class="has-pre-title">
          应用场景
        </div>
        <div class="content-block">
          <div class="left-block-wrap">
            <div class="left-block">
              <div class=" item" @mouseenter="sceneShow = 'insure'" @click="sceneShow = 'insure'"
                :class="sceneShow === 'insure' ? 'active-item' : ''">
                <div class="title">
                  保险数据产品订阅
                </div>
              </div>
              <div class="line"></div>
              <div class=" item" @mouseenter="sceneShow = 'finance'" @click="sceneShow = 'finance'"
                :class="sceneShow === 'finance' ? 'active-item' : ''">
                <div class="title">
                  金融数据产品订阅
                </div>
              </div>
              <div class="line"></div>
              <div class=" item" @mouseenter="sceneShow = 'marketing'" @click="sceneShow = 'marketing'"
                :class="sceneShow === 'marketing' ? 'active-item' : ''">
                <div class="title">
                  营销数据产品订阅
                </div>
              </div>


            </div>
          </div>
          <div class="right-block" v-show="sceneShow === 'insure'">
            <div class="content-top">
              <div class="title">
                保险数据产品订阅
              </div>
              <div class="content-word">
                核定载两吨以下货车评分、家庭自用车行驶评分、机动车承保异地风险评估、家庭自用车车险综合评分、二手车承保风险评估等车险相关产品服务接入。
              </div>
            </div>

            <el-image class="content-img" src="/production/scene0.png" fit="fill" />
          </div>
          <div class="right-block" v-show="sceneShow === 'finance'">
            <div class="content-top">
              <div class="title">
                金融数据产品订阅
              </div>
              <div class="content-word">
                资质评分-借款意愿、信用贷类评分、偿债能力、征信白户分、综合信用评分、信用贷类评分（贷前\贷中）等金融产品服务接入。
              </div>
            </div>

            <el-image class="content-img" src="/production/scene1.png" fit="fill" />
          </div>
          <div class="right-block" v-show="sceneShow === 'marketing'">
            <div class="content-top">
              <div class="title">
                营销数据产品订阅
              </div>
              <div class="content-word">
                运营商社交圈评级、运营商活跃度评级、兴趣广泛度评级、消费稳定度评级、社交健康度等营销产品服务接入。
              </div>
            </div>

            <el-image class="content-img" src="/production/scene2.png" fit="fill" />
          </div>
        </div>
      </div>
      <div class="advantage">
        <div class="has-pre-title">
          产品优势
        </div>
        <div class="content-wrap">
          <div class="row-item">
            <div class="img-wrap">

              <el-image class="img" src="/production/adv0-0.png" fit="fill" />
            </div>
            <div class="right-block">
              <div class="title">数据多样性</div>
              <div class="content-word">订阅平台提供多种类型的数据，涵盖了多个行业领域，从而使得用户能够综合分析多种数据，发现更多商业机会。</div>
            </div>
          </div>
          <div class="line"></div>
          <div class="row-item">
            <div class="img-wrap">
              <el-image class="img" style="height: 43px;" src="/production/adv1-1.png" fit="fill" />
            </div>
            <div class="right-block">
              <div class="title">个性化定制</div>
              <div class="content-word">订阅平台能够根据用户需求进行量身定制，提供符合用户实际需求的数据服务。</div>
            </div>
          </div>
          <div class="line"></div>
          <div class="row-item">
            <div class="img-wrap">
              <el-image class="img" src="/production/adv2-2.png" fit="fill" />
            </div>
            <div class="right-block">
              <div class="title">产品优势三</div>
              <div class="content-word">这里有一段话待补充，这里有一段话待补充，这里有一段话待补充，这里有一段话待补充，这里有一段话待补充。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="title">全线产品持续上新，期待与您合作</div>
      <div class="btn" @click="openContactDialogClick">
        立即联系
      </div>
      <contactDialog ref="contactDialogRef"></contactDialog>
    </div>
  </NuxtLayout>
</template>

<script setup  lang="ts">

const sceneShow = ref('insure');//finance  marketing
const contactDialogRef = ref(null);
const openContactDialogClick = () => {
  contactDialogRef.value.acceptParams({})
}

onMounted(() => {

  nextTick(() => {
    // debugger
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
})
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;

}

.banner {
  // min-height: 500px;
  height: 820px;
  width: 100%;

  background: url("@/assets/image/production/banner.png") no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  .big-title {
    position: absolute;
    top: 32.32%;
    left: 18.91%;
    height: 400px;
    width: 512px;
    font-size: 60px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.4;
    -webkit-background-clip: text;


    // -webkit-text-fill-color: transparent;
    .small {
      margin-top: 32px;
      font-size: 32px;
      font-family: PingFang SC-Light, PingFang SC;
      font-weight: 300;
      color: #EEF1F1;
      line-height: 1.4;
      -webkit-background-clip: text;
      text-wrap: wrap
    }
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
      margin-top: 76px;
      text-align: center;
    }

    .content {

      font-size: 16px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #151717;
      line-height: 1.4;
      -webkit-background-clip: text;
      margin-top: 57px;
      margin-bottom: 95px;
    }


  }

  .has-pre-title {
    display: flex;
    align-items: center;
    font-size: 26px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #151717;
    line-height: 1.4;
    -webkit-background-clip: text;
    margin-bottom: 50px;

    &::before {
      display: block;
      width: 4px;
      height: 22px;
      background: #00CDC4;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      content: '';
      margin-right: 10px;
    }
  }

  .function {


    .f-block {
      margin-bottom: 90px;

      .f-row {
        display: flex;
        justify-content: space-between;


        .f-col {
          width: 590px;
          height: 160px;
          background: #FFFFFF;
          border-radius: 2px 2px 2px 2px;
          opacity: 1;
          border: 1px solid #C2E6E5;

          display: flex;

          .img {
            width: 50px;
            height: 50px;
            margin: 40px 18px 0 32px;

          }

          .word-block {
            flex: 1;
            margin-right: 15px;

            .word-title {
              margin-top: 33px;
              font-size: 20px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #151717;
              line-height: 1.4;
              -webkit-background-clip: text;
            }

            .content {
              margin-top: 11px;

              font-size: 15px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #505353;
              line-height: 24px;
              -webkit-background-clip: text;
            }
          }
        }
      }

    }
  }

  .scene {
    .content-block {
      margin-bottom: 90px;
      height: 380px;
      display: flex;

      .left-block-wrap {
        width: 278px;
        margin-right: 39px;


        .left-block {
          width: 270px;
          height: 100%;
          background: rgba(238, 254, 253, 0.8);
          border-radius: 2px 2px 2px 2px;
          opacity: 1;

          .active-item {

            background-color: #00cdc4 !important;
            position: relative;


            .title {

              color: #FFFFFF !important;

            }

            &::after {
              position: absolute;
              right: -16px;
              top: calc(50% - 4px);
              width: 16px;
              height: 8px;
              // background-color: #00cdc4;
              border: solid;
              border-left-width: 8px;
              border-right-width: 8px;
              border-top-width: 4px;
              border-bottom-width: 4px;
              border-color: transparent transparent transparent #00cdc4;
              content: '';

              box-sizing: border-box;
            }
          }

          .item {
            width: 100%;
            height: 80px;


            display: flex;
            justify-content: center;
            align-items: center;

            .title {
              font-size: 20px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #505353;
              line-height: 1.4;
              -webkit-background-clip: text;
            }
          }

          .line {
            width: 270px;
            height: 1px;
            opacity: 1;
            border-bottom: 1px solid #B8DEDB;
          }
        }
      }

      .right-block {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;

        .content-top {
          // display: flex;
          flex: 1;

          .title {
            font-size: 20px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #151717;
            line-height: 1.4;
            -webkit-background-clip: text;
          }

          .content-word {
            margin-top: 10px;
            font-size: 16px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #505353;
            line-height: 24px;
            -webkit-background-clip: text;
          }
        }

        .content-img {
          height: 260px;
          // background-color: goldenrod;
        }
      }
    }

  }

  .advantage {
    .content-wrap {
      // height: 376px;
      background: #FFFFFF;
      border-radius: 2px 2px 2px 2px;
      opacity: 1;
      border: 1px solid #C2E6E5;
      width: 100%;
      margin-bottom: 91px;

      .row-item {
        height: 124px;
        display: flex;

        .img-wrap {
          width: 108px;


          .img {
            width: 40px;
            height: 40px;
            margin-left: 37px;
            margin-top: 37px;
            // background-color: red;
          }
        }

        .right-block {
          flex: 1;

          .title {
            margin-top: 27px;
            margin-bottom: 10px;
            height: 28px;
            font-size: 20px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #151717;
            line-height: 1.4;
            -webkit-background-clip: text;
          }

          .content-word {
            height: 22px;
            font-size: 16px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #505353;
            line-height: 24px;
            -webkit-background-clip: text;
          }
        }
      }

      .line {
        // width: 1092px;
        margin-left: 108px;
        height: 0px;
        opacity: 1;
        border-bottom: 1px solid #C2E6E5;
      }
    }
  }

}

.bottom {
  height: 260px;
  width: 100%;

  background: url("@/assets/image/production/bottom-bg.png") no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 36px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.4;
    -webkit-background-clip: text;
    margin-top: 69px;
    margin-bottom: 29px;
  }

  .btn {
    width: 160px;
    height: 44px;
    border-radius: 4px 4px 4px 4px;
    opacity: 1;
    border: 1px solid #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 1.4;
    -webkit-background-clip: text;
  }
}
</style>
