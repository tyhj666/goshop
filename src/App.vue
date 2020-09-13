<template>
    <div>
        <!-- 引入路由组件 -->
        <router-view></router-view>
        <!-- 这个地方$route表示当前路由 -->
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>
<script>
// 引入非路由组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components:{
      FooterGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
   .app
      color:red
</style>

