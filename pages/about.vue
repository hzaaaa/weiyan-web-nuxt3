<template>
  <NuxtLayout name="base-layout">
    <div id="container">
      <div id="header-banner">
        <div class="content-inner">
          <div class="header-wrap">
            <div class="header-inner">
              <div><img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/about/about_us.png" alt="" /></div>
              <div class="about-us">关于我们</div>
              <div>首页 &gt; 关于我们</div>
            </div>
          </div>
        </div>
      </div>
      <div id="content-wrap" class="center">
        <div id="about">
          <div class="content-inner">
            <div class="section1">
              <div class="section1-inner">
                <div class="about-weiyan">
                  <div class="title">
                    <span>关于微言</span>
                    <span>About weiyan</span>
                  </div>
                  <p>
                    微言科技，成立于2017年，是普惠的人工智能基础设施提供商。公司基于AutoML自动建模平台及隐私计算技术，为政府、金融机构及企业提供PaaS+SaaS服务，助力其加速数字化变革。
                  </p>
                  <p>微言科技于2017年4月成立，由国际顶级投资机构软银中国领投，总部位于深圳，在北京及上海设有分支机构。</p>
                  <p>
                    微言科技拥有一支顶尖的精英服务团队，多来自FICO、平安、阿里，有超过80%的团队成员是人工智能、机器学习、风险管理、反欺诈及数据等领域的资深专家，经过市场检验，团队经验深厚。
                  </p>
                </div>
                <div class="weiyan-mission">
                  <div class="title">
                    <span>微言使命</span>
                    <span>Our mission</span>
                  </div>
                  <p>让AI引领产业发展</p>
                </div>
                <div class="weiyan-vision">
                  <div class="title">
                    <span>微言愿景</span>
                    <span>Our vision</span>
                  </div>
                  <p>让AI引领未来</p>
                </div>
              </div>
            </div>
            <div class="section2">
              <div class="section2-inner">
                <div class="culture-title"><span>微言文化</span><span>Our culture</span></div>
                <div class="culture-lists">
                  <div class="culture-item">
                    <div class="item-top">
                      <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/about/value.jpg" alt="" />
                    </div>
                    <div class="item-bottom">
                      Value
                      <div class="upside">
                        <div>长期价值</div>
                        <p>我们坚持做正确的事情，<br />为客户创造长期价值。</p>
                      </div>
                    </div>
                  </div>
                  <div class="culture-item">
                    <div class="item-top">
                      <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/about/standard.jpg" alt="" />
                    </div>
                    <div class="item-bottom">
                      Standard
                      <div class="upside">
                        <div>最高标准</div>
                        <p>我们坚持最高质量标准，<br />提供最优服务。</p>
                      </div>
                    </div>
                  </div>
                  <div class="culture-item">
                    <div class="item-top">
                      <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/about/innovation.jpg" alt="" />
                    </div>
                    <div class="item-bottom">
                      Innovation
                      <div class="upside">
                        <div>创新试错</div>
                        <p>我们坚持好奇，热爱创新，<br />拥抱技术，智慧学习。</p>
                      </div>
                    </div>
                  </div>
                  <div class="culture-item">
                    <div class="item-top">
                      <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/about/trust.jpg" alt="" />
                    </div>
                    <div class="item-bottom">
                      Trust
                      <div class="upside">
                        <div>相互信任</div>
                        <p>我们用价值、效率与信誉，<br />成为值得尊敬的伙伴。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>
<style lang="scss">
#about {
  width: 100%;
  .section1 {
    margin: 52px 0 37px;
    // width: 100%;
    width: 1170px;
    min-width: 1170px;
    background: #ffffff url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/about/map.png") no-repeat center
      center;
    background-size: 1228px 606px;
    .section1-inner {
      position: relative;
      // margin: 0 auto;
      padding: 48px 0;
      width: 1170px;
      min-width: 1170px;
      .about-weiyan {
        .title {
          span: {
            line-height: 48px;
          }
          span:first-child {
            font-size: 48px;
            color: #000000;
          }
          span:last-child {
            margin-left: 21px;
            font-weight: 300;
            font-size: 38px;
            color: #c2c4cc;
          }
        }
        p {
          margin-top: 20px;
          line-height: 26px;
          font-weight: 300;
          font-size: 16px;
          color: #3e4559;
        }
      }
      .weiyan-mission,
      .weiyan-vision {
        margin-top: 60px;
        .title {
          span: {
            display: inline-block;
          }
          span:first-child {
            line-height: 48px;
            font-size: 34px;
            color: #2d3140;
          }
          span:last-child {
            margin-left: 21px;
            line-height: 48px;
            font-weight: 300;
            font-size: 26px;
            color: #c2c4cc;
          }
        }
        p {
          margin-top: 8px;
          line-height: 40px;
          font-weight: 300;
          font-size: 28px;
          color: #8a8e99;
        }
      }

      // .weiyan-vision {
      // 	p {
      // 		line-height: 26px;
      // 		font-size: 16px;
      // 		font-weight: 300;
      // 	}
      // }
      &::after {
        position: absolute;
        right: 0;
        bottom: 111px;
        width: 502px;
        height: 260px;
        background: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/about/weiyan.png") no-repeat;
        background-size: 100% 100%;
        content: "";
      }
    }
  }
  .section2 {
    width: 100%;
    background: rgb(244 243 247 / 58%);
    .section2-inner {
      margin: 0 auto;
      padding: 100px 0;
      width: 1170px;
      min-width: 1170px;
      .culture-title {
        span:first-child {
          line-height: 48px;
          font-size: 48px;
          color: #000000;
        }
        span:last-child {
          margin-left: 21px;
          line-height: 48px;
          font-weight: 300;
          font-size: 38px;
          color: #c2c4cc;
        }
      }
      .culture-lists {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 35px;
        // tip 使用flex布局不需要
        // &::after {
        //   display: block;
        //   clear: both;
        //   content: "";
        // }
        .culture-item {
          // float: left;
          margin-right: 30px;
          width: 270px;
          min-width: 270px;
          // min-height: 370px;
          background: #ffffff;
          &:last-child {
            margin-right: 0;
          }
          .item-top {
            width: 100%;
            height: 174px;
            min-height: 170px;
            img {
              width: 100%;
            }
          }
          .item-bottom {
            position: relative;
            padding: 34px 0 99px 31px;
            line-height: 63px;
            font-size: 45px;
            color: rgb(237 238 240 / 56%);
            .upside {
              position: absolute;
              top: 64px;
              > div {
                line-height: 28px;
                font-size: 20px;
                color: #000000;
              }
              > p {
                margin-top: 20px;
                line-height: 20px;
                font-weight: 300;
                font-size: 14px;
                color: #8a8e99;
              }
            }
          }
        }
      }
    }
  }
}
</style>
