<template>
  <NuxtLayout name="base-layout">
    <ClientOnly>

      <div class="banner" :style="{ backgroundImage: 'url(' + itemImg() + ')' }">
        <div class="big-title ">
          <!-- <div>

            {{ productionItem.title }}
          </div>
          <div class="small">
            数据订阅平台文案数据订阅平台文案 数据订阅平台文案
          </div> -->
        </div>
      </div>
    </ClientOnly>
    <div class="body">
      <div class="profile">
        <div class="title">
          {{ productionItem.title }}
        </div>
        <div class="content1 content">
          {{ productionItem.desc }}
        </div>
      </div>
      <div class="function">
        <div class="has-pre-title">
          产品功能
        </div>
        <div class="f-block">

          <div class="f-row" style="margin-bottom: 20px;">
            <div class="f-col" v-if="productionItem.functionList[0]">
              <!-- <div class="img"></div> -->
              <el-image class="img" src="/production/function0.svg" fit="fill" />
              <div class="word-block">
                <div class="word-title">
                  {{ productionItem.functionList[0].title }}
                </div>
                <div class="content">{{ productionItem.functionList[0].content }}</div>
              </div>
            </div>
            <div class="f-col" v-if="productionItem.functionList[1]">
              <!-- <div class="img"></div> -->
              <el-image class="img" src="/production/function1.svg" fit="fill" />
              <div class="word-block">
                <div class="word-title">
                  {{ productionItem.functionList[1].title }}
                </div>
                <div class="content">{{ productionItem.functionList[1].content }}</div>
              </div>
            </div>

          </div>
          <div class="f-row">
            <div class="f-col" v-if="productionItem.functionList[2]">
              <!-- <div class="img"></div> -->
              <el-image class="img" src="/production/function2.svg" fit="fill" />
              <div class="word-block">
                <div class="word-title">
                  {{ productionItem.functionList[2].title }}
                </div>
                <div class="content">{{ productionItem.functionList[2].content }}</div>
              </div>
            </div>
            <div class="f-col" v-if="productionItem.functionList[3]">
              <!-- <div class="img"></div> -->
              <el-image class="img" src="/production/function3.svg" fit="fill" />
              <div class="word-block">
                <div class="word-title">
                  {{ productionItem.functionList[3].title }}
                </div>
                <div class="content">{{ productionItem.functionList[3].content }}</div>
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
              <template v-for="sceneItem, index in productionItem.sceneList">

                <div class=" item" @mouseenter="sceneShow = `scene${index}`" @click="sceneShow = `scene${index}`"
                  :class="sceneShow === `scene${index}` ? 'active-item' : ''">
                  <div class="title">
                    {{ sceneItem.title }}
                  </div>
                </div>
                <div
                  v-if="index !== (productionItem.sceneList.length - 1) && sceneShow !== `scene${index}` && sceneShow !== `scene${index + 1}`"
                  class="line">
                </div>
                <div
                  v-if="index !== (productionItem.sceneList.length - 1) && !(sceneShow !== `scene${index}` && sceneShow !== `scene${index + 1}`)"
                  class="line" style="border-bottom-color: #00cdc4 ;">
                </div>
              </template>


            </div>
          </div>
          <div v-for="sceneItem, index in productionItem.sceneList" class="right-block"
            v-show="sceneShow === `scene${index}`">
            <div class="content-top">
              <div class="title">
                {{ sceneItem.title }}
              </div>
              <div class="content-word">
                {{ sceneItem.content }}
              </div>
            </div>

            <el-image class="content-img" :src="`/production/${routeId}/scene${index}.png`" fit="fill" />
          </div>


        </div>
      </div>
      <div class="advantage">
        <div class="has-pre-title">
          产品优势
        </div>
        <div class="content-wrap">
          <template v-for="advantageItem, index in productionItem.advantageList.slice(0, 3)">

            <div class="row-item">
              <div class="img-wrap">

                <el-image v-if="index !== 1" class="img" :src="`/production/adv${index}-${index}.svg`" fit="fill" />
                <el-image v-if="index === 1" style="width: 42px;height: 44px;position: relative;left:-1px" class="img"
                  :src="`/production/adv${index}-${index}.svg`" fit="fill" />
              </div>
              <div class="right-block">
                <div class="title">{{ advantageItem.title }}</div>
                <div class="content-word">{{ advantageItem.content }}</div>
              </div>
            </div>
            <div class="line" v-if="(productionItem.advantageList.slice(0, 3).length - 1) !== index"></div>
          </template>

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
import { productionInfoList } from "@/assets/text/production.json";

const route = useRoute();
let routeId = route.params.id;
let productionItem = productionInfoList.find((item) => item.id === route.params.id);
if (!productionItem) {
  productionItem = productionInfoList[productionInfoList.length - 1];
}

const sceneShow = ref('scene0');//scene1  scene2
const contactDialogRef = ref(null);
const openContactDialogClick = () => {
  contactDialogRef.value.acceptParams({})
}
const itemImg = () => {
  return getAssetsFile(`production/banner_${routeId}.png`)
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

  // background:  no-repeat;

  background-repeat: no-repeat;
  // background: v-bind("$props.size") no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  .big-title {
    position: absolute;
    top: 32.32%;
    left: 18.91%;
    height: 400px;
    // width: 512px;
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
            cursor: pointer;

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
            // height: 1px;
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
    cursor: pointer;
  }
}
</style>
