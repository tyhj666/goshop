<template>
     <header class="mister_header">
           <slot name="left"></slot>
           <span class="header_title">
               <!-- <span class="header_title_text ellipsis">昌平区</span> 
                   {{title}}是从其他组件接收过来的，需要在export default里面声明
               -->
               <span class="header_title_text ellipsis">{{title}}</span>
           </span>
           <slot name="right"></slot>
       </header>
</template>
<script>
// import {mapState} from 'vuex'
export default {
   props:{
       title:String
   }
//    computed:{
//        ...mapState(['address'])
//    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>