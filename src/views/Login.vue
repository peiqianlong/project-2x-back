<template>
  <div class="login-wrap">
    <div class="form-wrap">
      <!-- <div class="form-wrap-bg"></div> -->
      <div class="form-content">
        <div class="form-item">
          <p style="font-size:18px">宜选科技后台登录管理</p>
        </div>
        <!-- <div class="form-item"> -->
        <el-input placeholder="请输入账号" prefix-icon="el-icon-search" v-model="admin"></el-input>
        <el-input
          placeholder="请输入密码"
          type="password"
          prefix-icon="el-icon-search"
          v-model="password"
        ></el-input>
        <!-- </div> -->
        <div class="form-item">
          <el-button style="background:#e94719;color:#FFF;" @click="login">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import store from "store";
// import service from "@/services";
// import { apiLogin } from "@/api/user";
export default {
  name: "login",
  data() {
    return {
      admin: "",
      password: ""
    };
  },
  methods: {
    login() {
      let timestamp = Date.parse(new Date());
      if (this.admin != "" && this.password != "") {
        if (this.admin == "宜选科技" && this.password == "宜选科技") {
          var storage = window.localStorage;
          storage.token = true;
          storage.time = timestamp;
          this.$message({
            message: "登录成功",
            type: "success"
          });
          this.$router.push({
            path: "/"
          });
        } else {
          this.$message({
            type: "warning",
            message: "账号或密码不正确！"
          });
        }
      } else {
        this.$message({
          type: "warning",
          message: "账号或密码未输入！"
        });
      }
    }
  }
};
</script>

<style scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  min-width: 544px;
  min-height: 642px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://static.punchvip.cn/jiazhi/ed75a61b-f348-49e3-8327-4f047309eefc");
}
.form-wrap {
  width: 500px;
  height: 600px;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 12px;
  box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 0.01),
    -1px 1px 4px 4px rgba(0, 0, 0, 0.01);
  overflow: hidden;
  position: relative;
}

.form-wrap-bg {
  width: 100%;
  height: 200px;
  background: url("https://static.punchvip.cn/jiazhi/e3c2b72d-d2e8-4628-adf2-6fec793d2c43");
}
.form-content {
  box-sizing: border-box;
  width: 288px;
  height: 376px;
  padding: 20px 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.form-item {
  width: 288px;
}
.el-input {
  margin: 10px 0;
}
.el-button {
  width: 100%;
}
</style>