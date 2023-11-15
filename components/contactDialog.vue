<template>
  <client-only>


    <div class="">

      <el-dialog :destroy-on-close="true" v-model="dialogVisible" title="商务咨询" @open="getLabelInfo" width="540px"
        style="height: 684px;" class="common-dialog">
        <!-- :rules="rulesForm" -->
        <el-form ref="inputInfoRef" :model="inputInfo" @keyup.enter="submit" label-position="left" label-width="auto">
          <el-form-item label="姓名：" prop="childName">
            <el-input v-model="inputInfo.childName" show-word-limit placeholder="请输入姓名" style="height: 40px;" />
          </el-form-item>
          <el-form-item label="所在城市：" prop="rootName">
            <el-select v-model="inputInfo.rootName" style="width: 100%;height: 40px;" placeholder="请选择所在城市">
              <el-option v-for="item in cityOption" :key="item.id" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系邮箱：" prop="childName">
            <el-input v-model="inputInfo.childName" show-word-limit placeholder="请输入电子邮箱" style="height: 40px;" />
          </el-form-item>
          <el-form-item label="单位名称：" prop="childName">
            <el-input v-model="inputInfo.childName" show-word-limit placeholder="请输入单位名称" style="height: 40px;" />
          </el-form-item>
          <el-form-item label="联系电话：" prop="childName">
            <el-input v-model="inputInfo.childName" show-word-limit placeholder="请输入手机号码" style="height: 40px;" />
          </el-form-item>
          <el-form-item label="验证码：" prop="childName">
            <el-row style="width: 100%;">
              <el-col :span="17">

                <el-input v-model="inputInfo.childName" show-word-limit placeholder="请输入验证码" style="height: 40px;" />
              </el-col>
              <el-col :span="7" style="display: flex;flex-direction: row-reverse;">

                <div class="verifyBtn">获取验证码</div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="需求描述：" prop="childName" style="height: auto;margin: 8px 0;" class="need-class">
            <el-input v-model="inputInfo.childName" show-word-limit type="textarea" placeholder="请填写您的商务合作重点需求描述"
              :rows="5" />
          </el-form-item>
        </el-form>
        <template #footer>

          <div class="submit">
            提交
          </div>
        </template>
      </el-dialog>
    </div>
  </client-only>
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
// import { ElMessage, type FormInstance, type FormRules, type TabsPaneContext } from "element-plus";

const inputInfo = ref({
  rootName: "",
  childName: "",
});
const rulesForm = reactive<any>({
  rootName: [{ required: true, message: "请输入主目录名称!", trigger: "blur" }],
  childName: [{ required: true, message: "请输入子目录名称!", trigger: "blur" }],
});

const dialogVisible = ref(false);

const dialogProps = <any>ref({
  row: {
    list: [],
  },
});

const cityOption = <any>ref([{
  name: '深圳',
  id: '深圳'
}]);
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
      // addCatalogApi({ ...inputInfo.value }).then((res: any) => {
      // 	ElMessage.success("添加成功！");
      // 	dialogVisible.value = false;
      // 	emit("refreshData");
      // });
    } else {
      console.log("error", fields);
    }
  });
  // dialogVisible.value = false;
  // emit("refreshData");
};
const getLabelInfo = () => { };

const emit = defineEmits(["refreshData"]);

defineExpose({
  acceptParams,
});
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

    }
  }






  .need-class {
    .el-form-item__label-wrap {
      height: 56px;
    }
  }
}
</style>

