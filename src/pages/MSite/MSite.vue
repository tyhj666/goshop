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
       <HeaderTop :title="address.name">
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
import {mapState} from 'vuex'

export default {
    data (){
        return {
            baseImageUrl:'https://fuss10.elemecdn.com/'
        }
    },
    mounted(){
        this.$store.dispatch('getCategorys')
        this.$store.dispatch('getShops')
    },
    components:{
        HeaderTop
    },
    watch:{
        categorys (value){//如果执行了这个函数，说明categorys数组中有数据了
           //创建一个Swiper实例对象，来实现轮播
        // new Swiper('.swiper-container',{
        //     loop:true,//循环轮播
        //     pagination:{
        //       el:'.swiper-pagination', 
        //     },
        // })

        // 界面更新就立即创建swiper对象的回调函数
        this.$nextTick(() => { // 一旦完成界面更新，立即调用
             new Swiper('.swiper-container',{
            loop:true,//循环轮播
            pagination:{
              el:'.swiper-pagination', 
            },
        })
        })
        }
    },
    computed:{
       ...mapState(['address','categorys']),
       /**
        * 根据categorys一维数组生成一个2维数组
        * 小数组中的元素个数最大是8个
        */
       categorysArr(){
           const {categorys} =this
           //准备空的二维数组
           const arr = []
           //准备一个小数组（最大长度是8）
           let minArr = []
           //遍历categorys
           categorys.forEach(c => { 
               if (minArr.length===8) {
                   minArr = []
               }

               if(minArr.length===0){
                   arr.push(minArr)
               }

               //将当前分类保存到小数组中
               minArr.push(c)
           });
           return arr
       }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
//  @import "../../common/stylus/mixins.style"

</style>