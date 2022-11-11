<template>
  <div>
    <div id="index_header">
      <div class="header" id="header_nav">
        <div class="header-top">
          <div class="header-tl">
            <a href="/index.html"
              ><img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/index/logo.png" alt=""
            /></a>
            <span>普惠的人工智能基础设施提供商</span>
          </div>
          <div class="fr">
            <a href="index.html">首页</a>
            <a href="/about.html" class="">关于我们</a>
            <a href="/team.html" class="">微言团队</a>
            <!-- <a href="/solution.html" class="">解决方案<i></i></a> -->
            <a href="/dynamic.html" class="">微言动态</a>
            <a href="/join.html" class="router-link-active">加入我们</a>
          </div>
        </div>
      </div>
    </div>

    <div>
      <slot />
    </div>

    <div id="index_footer">
      <div class="footer">
        <div class="footer-detail">
          <div class="left">
            About us
            <div>
              <h6>关于<i>微言</i></h6>
              <p>
                微言科技，成立于2017年，是普惠的人工智能基础设施提供商。公司基于AutoML自动建模平台及隐私计算技术，为政府、金融机构及企业提供PaaS+SaaS服务，助力其加速数字化变革。微言科技已经获得包括软银中国在内的顶级投资机构投资，目前在北京、上海及深圳均设有分支机构。
              </p>
            </div>
          </div>
          <div class="center">
            Quick line
            <div>
              <h6>快速链接</h6>
              <ul>
                <li><a href="/about.html">关于我们</a></li>
                <li><a href="/team.html">微言团队</a></li>
                <li><a href="/dynamic.html">微言动态</a></li>
                <li><a href="/join.html">加入我们</a></li>
              </ul>
            </div>
          </div>
          <div class="right">
            Contact us
            <div>
              <h6>联系我们</h6>
              <div class="contact-info">
                <div class="weiyan-code">
                  <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/index/code.png" alt="" />
                </div>
                <div class="address">
                  <p><span>深圳总部：</span>深圳市福田区凯丰路10号国际金融科技城13层</p>
                  <p><span>上海分公司：</span>上海市黄浦区外滩街道四川中路33号创业大楼617室</p>
                  <p><span>北京分公司：</span>北京市西城区黄寺大街甲23号院北广大厦A口6层634</p>
                  <!-- <p><span>广州分公司：</span>广州高新技术产业开发区科丰路85号2007房</p> -->
                  <div><span>T：0755-8279 5265</span><span>E：BD@weiyankeji.cn</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom_center">
          <div>
            Copyright&copy;2021 深圳微言科技有限责任公司 版权所有
            <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备17076300号-1</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
