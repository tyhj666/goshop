<template>
    <div class="msite">
       <!-- 首页头部 -->
       <!-- <header class="mister_header">
           <span class="header_search">
               <i class="iconfont icon_sousuo"></i>
           </span>
           <span class="header_title">
               <span class="header_title_text ellipsis">昌平区</span>
           </span>
           <span class="header_login">
               <span class="header_login_text">登录|注册</span>
           </span>
       </header> -->

       <!-- 这个地方用插槽的技术代替上面的<header>这个里面的内容 -->
       <HeaderTop title="昌平区">
            <span class="header_search" slot="left">
               <i class="iconfont icon_sousuo"></i>
           </span>
           <span class="header_login" slot="right">
               <span class="header_login_text">登录|注册</span>
           </span>
       </HeaderTop>
       <!-- 首页导航 -->
       <nav class="msite_nav">
           <div class="swiper-container">
               <div class="swiper-wrapper">
                   <div class="swiper-slide"></div>
                   <div class="swiper-slide"></div>
               </div>

               <!-- Add Pagination -->
               <div class="swiper-pagination"></div>
           </div>
       </nav>
    </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import Swiper from 'swiper'


export default {
    mounted(){
        //创建一个Swiper实例对象，来实现轮播
        new Swiper('.swiper-container',{
            loop:true,//循环轮播
            pagination:{
              el:'.swiper-pagination', 
            },
        })
    },
    components:{
        HeaderTop
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
//  @import "../../common/stylus/mixins.style"

</style>