<template>
  <client-only>


    <div class="">

      <el-dialog :destroy-on-close="true" v-model="dialogVisible" title="商务咨询" @open="getLabelInfo" width="540px"
        style="height: 684px;" class="common-dialog">
        <!-- :rules="rulesForm" -->
        <el-form ref="inputInfoRef" :model="inputInfo" :rules="rulesForm" @keyup.enter="submit" label-position="left"
          :hide-required-asterisk="true" label-width="auto">
          <el-form-item label="姓名：" prop="username">
            <el-input v-model="inputInfo.username" show-word-limit placeholder="请输入姓名" style="height: 40px;" />
          </el-form-item>
          <el-form-item label="所在城市：" prop="city">
            <el-select v-model="inputInfo.city" style="width: 100%;height: 40px;" placeholder="请选择所在城市">
              <el-option v-for="item in cityOption" :key="item.id" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系邮箱：" prop="contactEmail">
            <el-input v-model="inputInfo.contactEmail" show-word-limit placeholder="请输入电子邮箱" style="height: 40px;" />
          </el-form-item>
          <el-form-item label="单位名称：" prop="companyName">
            <el-input v-model="inputInfo.companyName" show-word-limit placeholder="请输入单位名称" style="height: 40px;" />
          </el-form-item>
          <el-form-item label="联系电话：" prop="contactTelnumber">
            <el-input v-model="inputInfo.contactTelnumber" show-word-limit placeholder="请输入手机号码" style="height: 40px;" />
          </el-form-item>
          <el-form-item label="验证码：" prop="verifyCode">
            <el-row style="width: 100%;">
              <el-col :span="17">

                <el-input v-model="inputInfo.verifyCode" show-word-limit placeholder="请输入验证码" style="height: 40px;" />
              </el-col>
              <el-col :span="7" style="display: flex;flex-direction: row-reverse;">

                <div class="verifyBtn" @click="getVerifyCodeClick">获取验证码</div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="需求描述：" prop="feedback" style="height: auto;margin: 8px 0;" class="need-class">
            <el-input v-model="inputInfo.feedback" show-word-limit type="textarea" placeholder="请填写您的商务合作重点需求描述"
              :rows="5" />
          </el-form-item>
        </el-form>
        <template #footer>

          <div class="submit" @click="submit">
            提交
          </div>
        </template>
      </el-dialog>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
// import { ref, reactive } from "vue";
// import { ElMessage, type FormInstance, type FormRules, type TabsPaneContext } from "element-plus";

const inputInfo = ref({
  username: '',
  city: '',
  contactEmail: '',
  companyName: '',
  contactTelnumber: '',
  verifyCode: "",
  feedback: "",
});

// 邮箱
const emailRegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const validateEmail = (rule: any, value: any, callback: any) => {
  if (rule.required) {
    if (!value || value.length === 0) {
      callback(new Error("请输入邮箱!"));
    } else {
      // if(!projectEstablishFormRef.value) return
      // projectEstablishFormRef.value.validateField('projectName', ())
      if (!emailRegExp.test(value)) {
        callback(new Error("邮箱格式有误！"));
      } else {
        callback();
      }
    }
  } else {
    if (!value || value.length === 0) {
      callback();
    } else {
      // if(!projectEstablishFormRef.value) return
      // projectEstablishFormRef.value.validateField('projectName', ())
      if (!emailRegExp.test(value)) {
        callback(new Error("邮箱格式有误！"));
      } else {
        callback();
      }
    }
  }
};
// ** 电话号
const mobileRegExp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
const validateMobile = (rule: any, value: any, callback: any) => {
  if (rule.required) {
    if (!value || value.length === 0) {
      callback(new Error("请输入电话!"));
    } else {
      // if(!projectEstablishFormRef.value) return
      // projectEstablishFormRef.value.validateField('projectName', ())
      if (!mobileRegExp.test(value)) {
        callback(new Error("电话号码格式有误！"));
      } else {
        callback();
      }
    }
  } else {
    if (!value || value.length === 0) {
      callback();
    } else {
      // if(!projectEstablishFormRef.value) return
      // projectEstablishFormRef.value.validateField('projectName', ())
      if (!mobileRegExp.test(value)) {
        callback(new Error("电话号码格式有误！"));
      } else {
        callback();
      }
    }
  }
};

const rulesForm = reactive<any>({
  username: [{ required: true, message: "请输入姓名!", trigger: "blur" }],
  contactEmail: [{ required: true, validator: validateEmail, trigger: "blur" }],
  contactTelnumber: [{ required: true, validator: validateMobile, trigger: "blur" }],

  verifyCode: [{ required: true, message: "请输入验证码!", trigger: "blur" }],
  feedback: [{ required: true, message: "请输入需求描述!", trigger: "blur" }],
});

const dialogVisible = ref(false);

const dialogProps = <any>ref({
  row: {
    list: [],
  },
});
const getVerifyCodeClick = () => {
  let formEl = <any>inputInfoRef.value;
  if (!formEl) return;
  formEl.validateField("contactTelnumber", async (valid, fields) => {
    if (valid) {
      console.log('inputInfo', inputInfo.value)
      queryVerifyCode();
    } else {
      console.log("error", fields);
    }
  });
}
const queryVerifyCode = async () => {
  let params = <any>{
    contactTelnumber: inputInfo.value.contactTelnumber
  }
  let { data, code, msg } = <any>await $fetch(`http://172.16.1.44:8189/sms/send `, {
    method: 'post',
    body: params
  })
  if (code === 200) {

    ElMessage.success("短信已发送");
  } else {
    ElMessage.error(msg);

  }
}

const acceptParams = (params: any) => {
  dialogProps.value = params;
  dialogVisible.value = true;


};

const inputInfoRef = <any>ref(null);
// 提交
const submit = async () => {
  let formEl = <any>inputInfoRef.value;
  if (!formEl) return;
  formEl.validate(async (valid, fields) => {
    if (valid) {
      console.log('inputInfo', inputInfo.value)
      let params = <any>{
        ...inputInfo.value
      }
      let { data, code, msg } = <any>await $fetch(`http://172.16.1.44:8189/opinionsFeedback/add `, {
        method: 'post',
        body: params
      })

      if (code === 200) {

        ElMessage.success("信息提交成功");
        dialogVisible.value = false;
        // inputInfoRef.value.resetFields()
      } else {
        ElMessage.error(msg);

      }
    } else {
      console.log("error", fields);
    }
  });


};
const getLabelInfo = () => { };

const emit = defineEmits(["refreshData"]);

defineExpose({
  acceptParams,
});
const cityOption = <any>ref([])
const getCityList = async () => {
  let params = <any>{
    pid: 1,// 0查询所有国家 1查询中国
    sorts: 'pinyin asc,pinyin asc'
  }
  let { data } = <any>await $fetch(`http://172.16.1.44:8189/world/area/list`, {
    method: 'get',
    query: params
  })

  cityOption.value = data;

}
getCityList();

</script>

<style lang="scss" scoped>
.verifyBtn {
  width: 100px;
  height: 40px;
  border-radius: 2px 2px 2px 2px;
  opacity: 1;
  border: 1px solid #00CDC4;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-family: PingFangSC-Regular-, PingFangSC-Regular;
  font-weight: normal;
  color: #00CDC4;
  line-height: 22px;
  cursor: pointer;
}

:deep(.el-dialog) {
  box-sizing: border-box;

  * {
    box-sizing: border-box;

  }

  background: url("@/assets/image/production/dialog-bg.png") no-repeat;
  background-position: center;
  background-size: cover;

  .el-dialog__header {
    height: 90px;
    margin-right: 0;

    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0 !important;

    .el-dialog__title {
      font-size: 26px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 1.4;
      -webkit-background-clip: text;
    }

    .el-dialog__headerbtn {
      top: 17px !important;
      right: 30px !important;
      width: 16px !important;
      height: 16px !important;

      .el-dialog__close {
        color: #fff !important;

      }
    }
  }

  .el-dialog__body {
    padding: 32px 30px 28px;
  }

  .el-input {
    height: 40px;
  }

  .el-dialog__footer {
    padding: 0;
    display: flex;
    justify-content: center;

    .submit {
      width: 140px;
      height: 40px;
      background: #00CDC4;
      border-radius: 4px 4px 4px 4px;
      opacity: 1;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 16px;
      font-family: PingFangSC-Medium-, PingFangSC-Medium;
      font-weight: normal;
      color: #FFFFFF;
      line-height: 22px;
      cursor: pointer;

    }
  }






  .need-class {
    .el-form-item__label-wrap {
      height: 56px;
    }
  }
}
</style>

