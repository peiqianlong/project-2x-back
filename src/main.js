// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 请求封装
import {postRequest, getRequest,uploadFileRequest,putRequest,deleteRequest} from './units/request'
Vue.prototype.postRequest = postRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.uploadFileRequest = uploadFileRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.deleteRequest = deleteRequest


// echarts图
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
