<template>
    <el-container style="height:100%;">
      <el-aside class="styleone" :style="{width : asidewidth}" v-if="hideslid">
        <BackAside ref="sild" :isasidewidth="isasidewidth" :typeAslid="typeAslid"></BackAside>
      </el-aside>
      <el-container>
        <el-header v-if="hideslid" style>
          <BackHeader @flod="flod"></BackHeader>
        </el-header>
        <el-main>
          <el-row v-if="hideslid">
            <el-col :span="24" class="titpath">
              <div class="grid-content bg-purple-dark">
                <el-breadcrumb separator-class="el-icon-arrow-right" >
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item v-if="$route.name == '首页' ? false : true ">{{$route.name == "首页" ? "" : $route.name}}</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </el-col>
          </el-row>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
</template>
<script>
export default {
  name: "app",
  components: {
    BackAside : resolve => require(["./BackAside"],resolve),
    BackHeader : resolve => require(["./BackHeader"],resolve),
  },
  data() {
    return {
      asidewidth: "200px",
      isasidewidth: false,
      typeAslid: 0,
      hideslid: true
    };
  },
  updated() {
    this.urlpath();
  },
  methods: {
    //改变左侧导航栏
    flod(val) {
      // this.$refs.sild.menulistobj(this.typeAslid)
      if (val === "foldtype") {
        if (this.asidewidth === "200px") {
          this.asidewidth = "70px";
          this.isasidewidth = true;
        } else {
          this.asidewidth = "200px";
          this.isasidewidth = false;
        }
      } else if (val === "shoppingtype") {
        this.typeAslid = 1;
      } else if (val === "email") {
        this.typeAslid = 2;
      } else if (val === "index") {
        this.typeAslid = 0;
      }
    },
    // 判断是否登陆隐藏侧边栏
    urlpath() {
      if (this.$router.currentRoute.name === "login") {
        this.hideslid = false;
      } else {
        this.hideslid = true;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  transition: width 0.5s linear 0s;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.styleone {
  width: 200px;
  background-color: rgb(84, 92, 100);
}
.titpath {
  height: 46px;
  background: #fff;
  border-bottom: 1px solid skyblue;
  display: flex;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  padding-left: 30px;
  margin-bottom: 24px;
}
.grid-content {
  // 禁止文字选择
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  span {
    display: inline-block;
    margin: 0 3px;
    cursor: pointer;
  }
  span:hover {
    color: #2d8cf0;
  }
}
</style>
