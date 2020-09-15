<template>
    <div>
        <!-- 引入路由组件 -->
        <router-view></router-view>
        <!-- 这个地方$route表示当前路由 -->
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
// 引入非路由组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// 引入分装接口函数
// import {reqAddress} from './api/index' 
export default {
//   async mounted(){
//     const result =await reqAddress()
//   },

// 上面的三行代码可以改成如下
mounted () {
   // this.$store.dispatch('getAddress') // 如果在methods方法里面写了里面的代码，这个地方的写法就按下面的写
    this.getAddress()
},
  components:{
      FooterGuide
  },
  methods:{
      ...mapActions(['getAddress'])
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
   .app
      color:red
</style>

