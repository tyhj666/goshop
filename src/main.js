/* eslint-disable eslint no-trailing-spaces */
// eslint-disable-next-line eslint no-trailing-spaces
/* eslint-disable no-new */
/* eslint-disable eslint no-trailing-spaces */
/**
 * 入口js
 */
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import './mock/mockServer'// 加载mockServer即可
// 配置路由,路由配置好以后，会增加四个标签router-view,router-link,keep....和两个属性$router和$routers

import router from './router'
// import store from './store'
// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
new Vue({
  el: '#app',
  render: h => h(App),
  router // 使用vue-router
  // store // 使用vuex
})
