<template>
  <client-only>


    <div class="">

      <el-dialog :destroy-on-close="true" v-model="dialogVisible" title="商务咨询" @open="getLabelInfo" width="540px"
        style="height: 684px;" class="common-dialog">
        <!-- :rules="rulesForm" -->
        <el-form ref="inputInfoRef" :model="inputInfo" :rules="rulesForm" @keyup.enter="submit" label-position="left"
          label-width="auto">
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
            <el-input v-model="inputInfo.childName" show-word-limit placeholder="请输入验证码" style="height: 40px;" />
          </el-form-item>
          <el-form-item label="需求描述：" prop="childName" style="height: auto;margin: 8px 0;" class="need-class">
            <el-input v-model="inputInfo.childName" show-word-limit type="textarea" placeholder="请填写您的商务合作重点需求描述"
              :rows="5" />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submit">确定</el-button>
          <!-- <el-button @click="check">check</el-button> -->
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

const dialogVisible = ref(true);

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

  .el-input {
    height: 40px;
  }







  .need-class {
    .el-form-item__label-wrap {
      height: 56px;
    }
  }
}
</style>

