<template>
  <div class="home">首页
    <div>
        iconfont小图标测试
        <i class="iconfont icon-icon-test2"></i>
        <i class="iconfont icon-icon-test1"></i>
        <i class="iconfont icon-icon-test"></i>
        <i class="iconfont icon-xingzhuangkaobei"></i>
        <i class="iconfont icon-shuiguo7"></i>
        <i class="iconfont icon-shuiguo"></i>
    </div>
  </div>
</template>

<script>
import { getorglist } from "../apis/api";
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  created() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      this.getRequest('admin', {
          username: 'lvcq',
          password: '123456'
      }).then(res => {
        debugger
        if (res) {
          this.$message({
            message: "数据获取成功",
            type: "success"
          });
        }else{
          this.$message({
            message: "数据获取失败",
            type: "error"
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
i{
  font-size: 28px;
  margin: 5px;
}
</style>


