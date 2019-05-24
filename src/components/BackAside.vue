<template>
  <div class="hello">
    <div class="logo" @click="goIndex">Logo</div>
    <!-- 初始列表选项 -->
    <div v-if="menulist">
      <el-menu
        :default-active="'1'"        
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isasidewidth"
        style="border:0"
        unique-opened
        router
      >
        <el-submenu :index="str(index)" v-for="(item , index) in  objlist(menulist)" :key="index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="item.href">{{item.children[0]}}</el-menu-item>
            <el-menu-item :index="item.href2">{{item.children[1]}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackAside",
  props: {
    isasidewidth: {
      type: Boolean,
      value: false
    },
    typeAslid: {
      type: Number,
      value: 0
    }
  },
  data() {
    return {
      width: "200px",
      menulist: [
        {
          title: "首页一",
          children: ["首页1.1", "首页1.2"],
          href:"/index1-1",
          href2:"/index1-2"
        },
        {
          title: "首页二",
          children: ["首页2.1", "首页2.2"],
          href:"/index1-3",
          href2:"/index1-4"
        },
        {
          title: "首页三",
          children: ["首页3.1", "首页3.2"],
          href:"/index1-5",
          href2:"/index1-6"
        }
      ],
      menulist1: [
        {
          title: "商城一",
          children: ["商城1.1", "商城1.2"],
          href:"/shopping1-1",
          href2:"/shopping1-2"
          
        },
        {
          title: "商城二",
          children: ["商城2.1", "商城2.2"],
          href:"/shopping1-3",
          href2:"/shopping1-4"
        },
        {
          title: "商城三",
          children: ["商城3.1", "商城3.2"],
          href:"/shopping1-5",
          href2:"/shopping1-6"
        }
      ],
      menulist2: [
        {
          title: "邮箱一",
          children: ["邮箱1.1", "邮箱1.2"],
          href:"/email1-1",
          href2:"/email1-2"
        },
        {
          title: "邮箱二",
          children: ["邮箱2.1", "邮箱2.2"],
          href:"/email1-3",
          href2:"/email1-4"
        },
        {
          title: "邮箱三",
          children: ["邮箱3.1", "邮箱3.2"],
          href:"/email1-5",
          href2:"/email1-6"
        }
      ]
    };
  },
  updated() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log("&&&&&&&&&&&&");
    },
    handleClose(key, keyPath) {
      console.log("&&&&&&&&&&&&");
    },
    str(val) {
      return val.toString();
    },
    objlist() {
      if (this.typeAslid === 0) {
        return this.menulist;
      } else if (this.typeAslid === 1) {
        return this.menulist1;
      } else if (this.typeAslid === 2) {
        return this.menulist2;
      }
    },
    goIndex(){
      this.$router.push("/home")
    }
  }
};
</script>

<style scoped>
.logo {
  width: 100%;
  height: 60px;
  color: white;
  line-height: 60px;
  cursor: pointer;
}
</style>
