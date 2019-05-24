<template>
  <div class="home" style="backgroundColor:#fff;">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark operationbtn">
          <el-input class="widthinput" placeholder="请输入名字"></el-input>
          <el-input class="widthinput" placeholder="请输入电话"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-edit">添加</el-button>
          <el-button type="primary" icon="el-icon-share">导出报表</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      v-loading="loading"
    >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "index1-1",
  components: {},
  data() {
    return {
      userinfo: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      loading: true
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      this.postRequest("list").then(res => {
        this.userinfo = res;
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  }
};
</script>

<style lang="less" scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.operationbtn{
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 15px;
}
.widthinput{
  width: 200px;
  margin-right:10px;
}
</style>

