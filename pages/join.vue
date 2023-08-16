<template>
  <NuxtLayout name="base-layout">
    <section class="banner">
      <div class="banner-inner">
        <div class="banner-inner-img">
          <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/join/join_us.png" alt="" />
        </div>
        <div class="banner-inner-title">加入我们</div>
      </div>
    </section>
    <section class="join">
      <div class="why">
        <div class="why-inner">
          <div class="inner-title"><span>为何选择微言科技</span><span>Why choose weiyan</span></div>
          <div class="why-inner-content">
            <div class="left">
              <div class="top">
                <h3>选择你的行业</h3>
                <p>巴菲特说，人生就像滚雪球，最重要之事是发现够湿的雪和一道够长的山坡，加入微言科技，让人工智能成为你的舞台。</p>
              </div>
              <div class="bottom">INDUSTRY</div>
            </div>
            <div class="middle">
              <div class="top">
                <h3>选择你的企业</h3>
                <p>
                  微言科技，由国际领先机构软银中国领衔投资，是普惠的人工智能基础设施提供商。我们致力于以前沿的人工智能技术提升产业效率，赋予产业平等获取AI的能力。我们提供具有竞争力的薪酬，我们深信“微言人是微言的一切”，尽力为你的成长与愉悦创造条件。
                </p>
              </div>
              <div class="bottom">ENTERPRISR</div>
            </div>
            <div class="right">
              <div class="top">
                <h3>选择你的同伴</h3>
                <p>
                  在微言，你可以与来自FICO、BAT、阿里、高盛、平安等顶级机构的达人一起工作。在微言，我们崇尚知识分享，我们建立导师机制，我们鼓励员工试错与创造。在微言，你有机会选择与不同行业、不同领域、不同项目组成员紧密合作，迅速成长为某一领域的达人。
                </p>
              </div>
              <div class="bottom">COMPANION</div>
            </div>
          </div>
        </div>
      </div>
      <div class="motto">
        <div class="motto-inner">
          <div class="inner-title"><span>微言人才座右铭</span><span>Our motto</span></div>
          <div class="motto-inner-content">
            <div class="motto-inner-content-item">
              <div class="icon">
                <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/join/transparency.png" alt="" />
              </div>
              <h5>透 明</h5>
              <p>我们分享信息、分享进程、<br />分享挑战，共同面对。</p>
            </div>
            <div class="motto-inner-content-item">
              <div class="icon">
                <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/join/trust.png" alt="" />
              </div>
              <h5>信 任</h5>
              <p>我们立志成为可信赖的伙伴，<br />设立管理流程，更依赖自我驱动。</p>
            </div>
            <div class="motto-inner-content-item">
              <div class="icon">
                <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/join/value.png" alt="" />
              </div>
              <h5>价 值</h5>
              <p>我们以服务客户为导向，<br />以创造价值为骄傲。</p>
            </div>
            <div class="motto-inner-content-item">
              <div class="icon">
                <img src="https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/join/integrity.png" alt="" />
              </div>
              <h5>操 守</h5>
              <p>我们敬畏风险、法律、道德标准，<br />做正确的事，做值得尊敬的选择。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="recruit">
        <div class="recruit-inner">
          <div class="inner-title"><span>招聘信息</span><span>Recruitment Information</span></div>
          <div class="recruit-inner-content">
            <div class="header">
              <h1 class="position">招聘岗位</h1>
              <h1 class="site">工作地点</h1>
              <h1 class="time">更新时间</h1>
              <h1 class="detail">查看详细</h1>
            </div>
            <div class="group">
              <div v-for="(item, index) in jobList" :key="index" :class="['pannel', index & 1 ? 'single1' : 'single0']">
                <div class="pannel-heading">
                  <div class="position">{{ item.position }}</div>
                  <div class="site">{{ item.site }}</div>
                  <div class="time">{{ item.time }}</div>
                  <div class="detail" @click="clickItem(item)"><span :class="{ active: item.active }"></span></div>
                </div>
                <div class="pannel-collapse" :class="{ active: item.active }">
                  <dl>
                    <dt>职位描述：</dt>
                    <dd v-for="(subItem, subIndex) in item.describe" :key="subIndex">{{ subItem }}</dd>
                    <dt>岗位要求：</dt>
                    <dd v-for="(subItem, subIndex) in item.require" :key="subIndex">{{ subItem }}</dd>
                  </dl>
                  <div class="email">
                    <span>请将您的简历发送至 zhourunyu@weiyankeji.cn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
onMounted(() => {});
function clickItem(item) {
  item.active = !item.active;
}
let jobList = reactive(<any>[
  {
    position: "财务管理部——财务经理",
    site: "深圳",
    time: "2021-8-5",
    describe: [
      "全面负责财务部的日常管理工作，建立和完善公司的财务管理制度，制订财务核算体系和财务监控体系，进行有效的内部控制；",
      "按时高质量报送月度财务报表，确保公司财务税务合规；",
      "参与公司经营工作的分析和决策，制定、维护、改进、监督执行公司财务管理程序和政策，制定年度、季度财务计划；",
      "掌握公司财务状况、经营成果和资金变动情况，参与公司预算的编制与测算，监督预算执行情况，为公司经营决策提供及时有效的财务分析；",
      "对业务经营活动中的财务收支风险进行评估、跟踪等，会签涉及财务收支的重大业务计划、经济合同、经济协议等，以满足风险控制的要求；",
      "协调公司同银行、工商、税务等政府部门的关系，建立相匹配的企业资质和财税制度，合理利用相关政策，维护公司利益；",
      "服从总部财务管理部领导，遵守总部制定的集团各项规章制度及政策，并按时高质量提交总部要求的各项报表及汇报；",
    ],
    require: [
      "有3年以上四大会计师事务所经验，2年以上互联网金融行业相关经验的优先，拥有中级证，有注册会计师优先考虑；",
      "具有丰富的财务管理经验，熟悉国家会计及税务法规、财务分析模型、融资理论等，有较强的风控控制意识；",
      "较强的人际沟通能力，较强的学习能力，能够拥抱变化，快速深入研究行业和业务，并做出相应的财务分析和决策；",
      "有良好跨部门沟通和协调能力、快速融入团队文化；",
      "有团队管理经验；",
      "能接受压力工作；",
    ],
  },
  // {
  //   position: '金融产品部——供应链金融产品经理/总监',
  //   site: '北京或上海',
  //   time: '2017-7-20',
  //   describe: [
  //     '根据公司战略，结合金融市场及公司的实际情况，开展供应链金融业务；',
  //     '负责与IT等部门沟通，推动金融产品的上线运营；',
  //     '负责与分控部门，征信部门等业务部门沟通，协调风控征信实施；',
  //     '负责跟进核心客户的供应链金融业务链条，完成供应链金融业务发展目标；',
  //     '持续跟踪行业和市场变化，研究线上供应链金融产品和服务的创新模式，提出优化和改进建议；'
  //   ],
  //   require: [
  //     '对供应链业务的应用场景、业务特点和市场状况有专业的见解和独到的创意；对供应链金融有了解，并有一定的实施理念；',
  //     '具有在线供应链产品系统化经验，具有供应链金融创新互联网平台经验者优先；',
  //     '具有高度的事业心、责任心和团队精神；',
  //     '优秀的沟通、演讲和谈判技巧；',
  //     '对特别优秀者可适当放宽年龄、学历、工作年限要求；'

  //   ]
  // },
  // {
  //   position: '金融产品部——风险政策高级经理/总监',
  //   site: '北京或上海',
  //   time: '2017-7-20',
  //   describe: [
  //     '负责风险管理部政策制定及产品政策制定、优化，制定、审核和更新风险流程、政策，包括审批/授信/调额，完善风险定价，并建立完善管理文档；',
  //     '负责设计信贷资产的监控平台，并对资产信用表现进行监控分析；',
  //     '负责信用风险策略在决策流程中的实施；',
  //     '与产品、市场等合作部门沟通协作，推动风险政策与策略在具体系统层面进行落实，并及时了解业务部门需求、变化，在合理控制风险前提下推动业务发展；'

  //   ],
  //   require: [
  //     '本科以上学历，经济、数学、统计、计算机、信息科学等相关专业优先考虑；',
  //     '2年以上在金融机构，特别是关于审批/授信/调额的风控策略制定/管理/实施经验；',
  //     '独立负责过至少一个信贷产品的风控策略；',
  //     '优秀的沟通、演讲和谈判技巧；',
  //     '良好的分析思维和项目管理能力；'
  //   ]
  // },
  // {
  //   position: '金融产品部——贷后和催收主管/经理',
  //   site: '北京或上海',
  //   time: '2017-7-20',
  //   describe: [
  //     '跟踪客户回款情况建立贷后客户评价规则，协助风险政策经理搭建分控体系；',
  //     '贷后的催收、诉讼工作；',
  //     '制订贷后管理制度，完善贷后管理流程、规范；',
  //     '完成对不良贷款的催收管理与核销申报；',
  //     '定期对于已有发生风险的信用数据进行整理、分析；'
  //   ],
  //   require: [
  //     '大专以上学历；',
  //     '有相关从业经验及银行、小贷公司或P2P处置资产经验者优先考虑；',
  //     '熟悉催收流程及催收方式方法；',
  //     '具备一定法律知识；'
  //   ]
  // },
  // {
  //   position: '金融产品部——金融产品运营主管/经理',
  //   site: '北京或上海',
  //   time: '2017-7-20',
  //   describe: [
  //     '负责金融产品的具体操作，制作信贷产品流程和相关制度；',
  //     '负责金融产品的贷后管理，制作贷后管理流程和相关制度；',
  //     '配合金融产品经理的工作；'
  //   ],
  //   require: [
  //     '2年（含）以上信贷工作经验，具有较强的协作能力、分析能力和风险识别能力；',
  //     '优秀的沟通和谈判技巧；',
  //     '具有高度的事业心、责任心和团队精神，工作积极主动，有良好的职业操守，无不良记录；'
  //   ]
  // },
  // {
  //   position: '金融产品部——信贷审核专员/主管',
  //   site: '北京或上海',
  //   time: '2017-7-20',
  //   describe: [
  //     '按照公司的风控政策要求进行反欺诈审核；',
  //     '审核借款人提交贷款申请资料的真实性和完整性；',
  //     '通过电话、网络等方式对借款人进行征信调查及审核；',
  //     '对审核过程中发现的问题提出缓释建议；',
  //     '高效完成上级主管安排的其他事务；'
  //   ],
  //   require: [
  //     '全日制大专（含）以上学历，具有良好的沟通能力；',
  //     '具有1年以上银行、小贷公司或P2P信贷审核工作经验；',
  //     '具有一定的信贷分析和风险识别能力；',
  //     '工作积极主动，责任心强，有良好的职业操守，无不良记录；'
  //   ]
  // },
  {
    position: "互联网研发部——Java高级开发工程师",
    site: "北京、上海、深圳",
    time: "2021-8-5",
    describe: [
      "负责资金或资产相关系统关键模块的详细设计，并开发实现；",
      "负责相关系统的技术架构设计工作，以及产品间的接口设计；",
      "负责制订相关系统技术解决方案，负责与相关组织或者部门沟通协调，进行技术对接；",
    ],
    require: [
      "2年以上Java开发工作经验，优秀应届毕业生亦可，有互联网金融平台技术研发工作经验优先；",
      "Java编程基础扎实，掌握常用数据结构、算法、设计模式；",
      "熟悉数据库知识，熟练掌握SQL语言，了解数据库设计、优化；",
      "熟悉web开发，熟练使用springMVC,spring，struts，Mybatis或hibernate等框架；",
      "掌握TCP/IP,HTTP,HTTPS等协议，熟悉加密签名原理和常用算法；",
      "熟练使用eclipse，IntelliJ等IDE工具，maven、gradle、svn、git等常用持续集成和版本控制工具；",
      "学习能力强，善于交流，有团队合作精神；",
      "能承受工作压力，为人踏实肯干，对待工作认真负责；",
    ],
  },
  {
    position: "互联网研发部——Android高级工程师",
    site: "北京、上海、深圳",
    time: "2021-8-5",
    describe: ["负责公司金融产品Android端的核心功能开发；", "Android端的架构改进、性能优化等技术工作；"],
    require: [
      "计算机相关专业大学本科以上学历，具有扎实的计算机基础理论知识；",
      "扎实的java编程基础，对面向对象编程思想有深入理解；",
      "两年以上的Android开发经验，熟悉Android相关开发、界面机型适配、调试与优化工具；",
      "熟悉基于Http/Tcp/Udp的网络协议，自定义控件的开发；",
      "具有大型互联网公司工作经验者优先，有知名APP开发经验者优先；",
      "具有较好的团队合作精神、主动性与责任心；",
      "拥有有github作品和技术博客者优先；",
    ],
  },
  {
    position: "互联网研发部——iOS高级工程师",
    site: "北京、上海、深圳",
    time: "2021-8-5",
    describe: ["负责公司金融产品iOS端的核心功能开发与升级；", "iOS端的架构改进、性能优化等技术工作；"],
    require: [
      "计算机相关专业大学本科以上学历，具有扎实的计算机基础理论知识；",
      "两年以上的iOS开发经验，熟悉iOS相关开发、界面机型适配、调试与优化工具；",
      "熟悉基于Http/Tcp/Udp的网络协议，自定义控件的开发；",
      "具有大型互联网公司工作经验者优先，有知名APP开发经验者优先；",
      "具有较好的团队合作精神、主动性与责任心；",
      "拥有有github作品和技术博客者优先；",
    ],
  },
  {
    position: "互联网研发部——PHP高级工程师",
    site: "北京、上海、深圳",
    time: "2021-8-5",
    describe: [
      "负责资金或资产相关产品以及服务的设计和实现；",
      "负责人金融核心运营平台的设计和实现；",
      "负责相关系统的技术架构设计工作，以及产品间的接口设计；",
    ],
    require: [
      "计算机相关专业, 大专及以上学历；",
      "熟练使用php语言,并且有3年以上php开发经验；",
      "了解各种主流php框架的使用及其原理，熟悉laravel框架者优先；",
      "熟练使用mysql等数据库,熟悉其常用优化方式；",
      "熟悉Linux/unix环境下开发以及常用指令；",
      "了解基本的web前端开发(js,html,css)；",
      "熟悉memcache,redis,mongodb等nosql组件者优先；",
      "熟悉python,shell等其他后端开发语言者优先；",
    ],
  },
  {
    position: "互联网研发部——高级web前端开发工程师",
    site: "北京、上海、深圳",
    time: "2021-8-5",
    describe: ["负责资金以及资产相关网站前端以及app内嵌页面的开发和维护；", "负责公共组件的开发以及产品性能的优化；"],
    require: [
      "计算机相关专业, 及以本科上学历；",
      "具有扎实的html,css,javascript基础；",
      "具备3年以上互联网产品Web前端开发经验；",
      "熟练使用jquery,熟悉bootstrap；",
      "熟悉Web标准,熟悉用户体验相关知识,具有处理网页兼容性的能力；",
      "熟悉前端开发框架者(如angular,react,vue)；",
      "了解nodejs并有相关开发经验者优先；",
      "了解php,python等后端开发语言者优先；",
    ],
  },
  {
    position: "互联网研发部——产品经理",
    site: "北京、上海、深圳",
    time: "2021-8-5",
    describe: [
      "参与公司新产品的整体发展战略与产品的规划，包括但不限于资金端、资产端、运营相关产品；",
      "负责组织并推进公司用户及商业产品的开发，包括用户行为、产品分析、产品创意与立项、产品规划与需求分析等；",
      "根据公司的战略规划和业务需求独立完成产品原型和需求文档，能清晰说明产品设计的目的、业务逻辑和产品流程；",
      "引导完成产品的界面、功能、流程设计，协调开发人员进行开发工作，推动及协调产品的开发进度，把控项目质量；",
      "研究相关竞争对手产品特性，分析行业市场动态；",
      "出具新产品的运营策略，并把控整体的运营方向；",
    ],
    require: [
      "本科以上学历，2年以上产品工作经验，有成功金融产品经历者优先；",
      "具备清晰缜密的逻辑思维能力，有较强的数据分析能力，具有良好的团队协作和沟通表达能力；",
      "有很好的沟通能力和协调能力，能高效顺畅的与业务、设计、研发、运营团队沟通；",
      "熟练使用Axure、Word、PPT等常用办公软件；",
      "自我驱动、有极强的责任心，对自己的产品负责到底；",
    ],
  },
  {
    position: "互联网研发部——高级测试工程师",
    site: "北京、上海、深圳",
    time: "2021-8-5",
    describe: [
      "根据产品需求进行系统、模块测试，包括测试设计、执行、BUG提交和追踪，测试报告等；",
      "调研、使用、开发测试工具和自动测试框架、自动测试脚本，进行自动化测试，提升测试效率；",
      "对项目开发流程和工具进行优化，提高RD和整个项目的交付效率，能够协助开发定位问题；",
      "根据项目过程中的体验对产品提出改进建议以提升用户感受，对项目质量风险进行评估和把控，给出解决方案；",
    ],
    require: [
      "具有2年以上软件测试经验，有大型项目测试经验，熟悉软件工程、软件测试理论和方法，熟知相关的测试流程、测试文档标准和软件工程学原理，精通测试用例设计方法，能主动进行技术钻研；",
      "能熟练地应用一门或几门以下的技术进行软件测试：（1）主流测试工具(QTP、LoadRunner、jmeter等)（2）Perl/Python/PHP/Java（3）MySql/Oracle及相关数据库技术；",
      "有流程优化，技术创新意识，不断优化产品迭代方式，并主动通过技术手段提升测试效率；",
      "有撰写自动化测试工具以及搭建自动化测试平台的实战经验，有自动化测试经验，设计用例并编写代码实现自动化测试优先；",
      "熟练使用linux操作系统，有shell脚本编写能力；",
      "工作认真负责，有快速学习的能力，有一定互联网公司工作经验优先；",
    ],
  },
  {
    position: "高级UI设计师",
    site: "北京、上海、深圳",
    time: "2021-8-5",
    describe: [
      "负责产品的界面设计，并为新功能、公司新产品提供创意及设计方案；",
      "参与产品讨论，从视觉设计和用户体验的角度提出建议与解决方案；",
      "参与产品整体视觉风格及规范的制定；",
      "配合工程师共同创建用户界面，跟进设计还原，保证最终设计质量；",
      "关注设计流行趋势，保持设计敏锐度；",
    ],
    require: [
      "本科以上学历，2年以上工作经验，有扎实的美术功底和App/Web相关设计经验；",
      "能够独立完成设计方案，具有较好的设计表现能力和良好的沟通能力；",
      "具有较强的产品意识和学习能力；",
      "爱设计、爱生活、性格好、具有很好的团队合作精神；",
      "熟练掌握PS、AI、Sketch等设计工具；",
    ],
  },
]);
</script>
<style scoped lang="scss">
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-image: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/about/header_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  &-inner {
    display: flex;
    align-items: flex-end;
    width: 1170px;
    &-img {
      height: 68px;
      img {
        height: 100%;
      }
    }
    &-title {
      margin-left: 28px;
      font-size: 36px;
      color: #ffffff;
    }
  }
}
.join {
  .inner-title {
    margin-bottom: 40px;
    span {
      font-size: 48px;
      &:last-child {
        margin-left: 20px;
        font-weight: 300;
        font-size: 38px;
        color: #c2c4cc;
      }
    }
  }
  .why {
    width: 100%;
    height: 805px;
    background-image: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/join/why_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    &-inner {
      margin: 0 auto;
      padding-top: 100px;
      width: 1170px;
      &-content {
        display: flex;
        justify-content: space-between;
        .left,
        .middle,
        .right {
          display: flex;
          flex-direction: column;
          width: 370px;
          height: 526px;
          .top,
          .bottom {
            padding: 28px 28px 40px;
            border: 5px solid #ebeef7;
            h3 {
              margin-bottom: 20px;
              line-height: 36px;
              font-weight: 400;
              font-size: 34px;
            }
            p {
              line-height: 30px;
              font-weight: 300;
              font-size: 16px;
              color: #5f636d;
            }
          }
          .top {
            margin-bottom: 30px;
          }
          .bottom {
            flex-grow: 1;
            color: #8a8e99;
          }
        }
      }
    }
  }
  .motto {
    width: 100%;
    height: 550px;
    background-image: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/join/motto_bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    &-inner {
      margin: 0 auto;
      padding-top: 100px;
      width: 1170px;
      .inner-title {
        span:first-child {
          color: #ffffff;
        }
      }
      &-content {
        display: flex;
        justify-content: space-between;
        &-item {
          box-sizing: border-box;
          padding: 40px 0 40px 32px;
          border: 1px solid rgb(240 240 240 / 50%);
          width: 270px;
          height: 270px;
          .icon {
            width: 60px;
            height: 60px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          h5 {
            margin-top: 44px;
            line-height: 28px;
            font-weight: 400;
            font-size: 20px;
            color: #ffffff;
          }
          p {
            margin-top: 10px;
            line-height: 20px;
            font-weight: 300;
            font-size: 14px;
            color: #ffffff;
          }
        }
      }
    }
  }
  .recruit {
    &-inner {
      margin: 0 auto;
      padding: 100px 0 132px;
      width: 1170px;
      &-content {
        .position {
          padding-left: 120px;
          width: 500px;
        }
        .site {
          width: 166px;
        }
        .time {
          width: 163px;
        }
        .detail {
          width: 73px;
        }
        .header {
          display: flex;
          border-bottom: 1px solid #edeef0;
          h1 {
            line-height: 60px;
            font-weight: 400;
            font-size: 18px;
          }
        }
        .group {
          .single0 {
            background-color: #fafafa;
          }
          .single1 {
            background-color: #edeef0;
          }
          .pannel {
            &-heading {
              display: flex;
              div {
                line-height: 60px;
                font-size: 16px;
                color: #0d0d0d;
              }
              .detail {
                text-align: center;
                span {
                  display: inline-block;
                  width: 15px;
                  height: 11px;
                  background-image: url("https://fecdn.weiyankeji.cn/project/simple/wywebsite/1.16/images/join/arrow.png");
                  background-repeat: no-repeat;
                  transition: transform 0.5s ease;
                  &.active {
                    transform: rotate(-90deg);
                  }
                }
              }
            }
            &-collapse {
              display: none;
              padding: 48px 138px 96px;
              background-color: #ffffff;
              &.active {
                display: block;
              }
              dt {
                margin: 28px 0 4px;
                line-height: 28px;
                font-size: 20px;
                color: #686767;
              }
              dd {
                margin-bottom: 8px;
                line-height: 20px;
                font-size: 14px;
                color: #666666;
              }
              .email {
                padding-top: 44px;
                span {
                  display: inline-block;
                  padding: 0 20px;
                  border: 1px solid #34c1af;
                  height: 40px;
                  line-height: 40px;
                  text-align: center;
                  font-weight: 300;
                  font-size: 16px;
                  color: #34c1af;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
