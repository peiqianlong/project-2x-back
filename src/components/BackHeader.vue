<template>
  <div class="headertop">
    <div class="hello">
      <div class="navigation" @click="Fold('foldtype')">
        <i :class="icon ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right'"></i>
      </div>
      <div class="navigation" @click="Fold('index')">
        <i class="el-icon-menu"></i>
        <span>首页</span>
      </div>
      <div class="navigation" @click="Fold('shoppingtype')">
        <i class="el-icon-goods"></i>
        <span>商城</span>
      </div>
      <div class="navigation" @click="Fold('email')">
        <i class="el-icon-message"></i>
        <span>邮箱</span>
      </div>
    </div>
    <div class="signout">
      <div class="userimg"></div>
      <div class="username" v-on:click="rightshow = !rightshow">Admin(管理员)</div>
      <el-button
        type="primary"
        style="height:35px; line-height:0px;margin:auto"
        @click="outLogin"
      >登出</el-button>
    </div>
    <transition name="fade">
      <div class="rightPro" v-if="rightshow">个人信息页面</div>
    </transition>
  </div>
</template>

<script>
import { debuglog } from "util";
export default {
  name: "BackHeader",
  props: {},
  data() {
    return {
      rightshow: false,
      icon:true
    };
  },
  methods: {
    Fold(val) {
      if(val === 'foldtype'){
        this.icon = !this.icon
      }
      this.$emit("flod", val);
    },
    outLogin() {
      localStorage.clear();
      this.$router.push("/login");
    }
    // 弹出右边个人信息
  }
};
</script>

<style scoped>
.headertop {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hello {
  display: flex;
  height: 100%;
}
.navigation {
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
i {
  font-size: 28px;
}
.signout {
  display: flex;
  align-items: center;
}
span {
  line-height: 20px;
  height: 20px;
}
.userimg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  background: url("../assets/logo.png") no-repeat center;
}
.username {
  margin-right: 15px;
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
.rightPro {
  position: fixed;
  width: 260px;
  height: 100%;
  background: #ccc;
  right: 0;
  top: 60px;
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
