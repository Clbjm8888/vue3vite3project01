<template>
  <div class="user">
    <!-- 表单 开始-->
    <el-form :model="formData" class="ElForm">
      <el-row :gutter="80">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
          <el-form-item label="帐号" label-width="60px">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
          <el-form-item label="电话" label-width="60px">
            <el-input v-model="formData.cellphone"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
          <el-form-item label="状态" label-width="60px">
            <el-select v-model="formData.enable">
              <el-option label="启用" :value="1"></el-option>
              <el-option label="禁用" :value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="conform">
        <el-button type="primary" @click="reset">重置</el-button>
        <el-button type="primary" @click="find">查找</el-button>
      </div>
    </el-form>
    <!-- 表单 结束 -->

    <!-- 分割线 -->
    <div class="divideLine"></div>

    <!-- 表格 开始-->
    <el-table
      :data="systemStore.userList"
      border
      style="width: 100%"
      @selection-change="handleSC"
      class="ElTabel"
    >
      <el-table-column type="selection" width="60" />
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column prop="name" label="名字" width="150" />
      <el-table-column prop="realname" label="真名" width="150" />
      <el-table-column prop="cellphone" label="电话号码" width="150" />
      <el-table-column prop="enable" label="状态" width="80" align="center">
        <template #="scope">
          <el-button v-if="scope.row.enable === 1" link type="success"
            >启用</el-button
          >
          <el-button v-else link type="danger">禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间" align="center">
        <template #="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="updateAt" label="修改时间" align="center">
        <template #="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <el-tooltip
          class="box-item"
          effect="light"
          content="编辑"
          placement="left"
        >
          <el-button type="primary" icon="edit" circle />
        </el-tooltip>

        <el-tooltip
          class="box-item"
          effect="light"
          content="删除"
          placement="right"
        >
          <el-button type="danger" icon="delete" circle />
        </el-tooltip>
      </el-table-column>
    </el-table>
    <!-- 表格 结束 -->

    <!-- 分割线 -->
    <div class="divideLine"></div>

    <!-- 分页器 -->
    <div class="dividePage">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[1, 2, 3, 5]"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="systemStore.userTotal"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useSystemStore } from "@/stores";

  const systemStore = useSystemStore();

  // 分页器的参数
  const pageSize = ref(1); //一页显示多少条
  const currentPage = ref(1); // 当前页

  //表单对象
  const formData = ref({
    name: "",
    cellphone: "",
    enable: 1,
  });

  // 页面初次加载时——发送网络请求
  if (systemStore.userTotal === 0) {
    systemStore.changeUserList({
      offset: (currentPage.value - 1) * pageSize.value,
      size: pageSize.value,
    });
  }

  // 表格多选框被选中时触发
  const handleSC = (value: any) => {
    console.log(value);
  };

  // 重置按扭
  const reset = () => {
    formData.value = {
      name: "",
      cellphone: "",
      enable: 1,
    };
    pageSize.value = 1;
    currentPage.value = 1;

    systemStore.changeUserList({
      offset: (currentPage.value - 1) * pageSize.value,
      size: pageSize.value,
    });
  };

  // 查找按扭
  function find() {
    systemStore.changeUserList({
      offset: (currentPage.value - 1) * pageSize.value,
      size: pageSize.value,
      ...formData.value,
    });
  }

  // 分布器事件
  //每页显示条数改变时触发
  const handleSizeChange = () => {
    systemStore.changeUserList({
      offset: (currentPage.value - 1) * pageSize.value,
      size: pageSize.value,
      ...formData.value,
    });
  };

  //点击页码时触发
  const handleCurrentChange = () => {
    systemStore.changeUserList({
      offset: (currentPage.value - 1) * pageSize.value,
      size: pageSize.value,
      ...formData.value,
    });
  };
</script>

<style scoped>
  .ElForm {
    padding: 0 20px;
  }
  .divideLine {
    height: 10px;
    width: 100%;
    background-color: #f0f2f5;
  }

  .conform {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }

  .dividePage {
    display: flex;
    justify-content: flex-end;
  }
</style>
