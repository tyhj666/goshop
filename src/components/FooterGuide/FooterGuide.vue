<template>
    <div class="footer_guide">
        <!-- 
            对象语法的使用，是类名确定，但是根据业务要不要加是使用对象语法,给对应的连接添加点击的
            监听事件
        -->
        <a href="javascript:;" class="guide_item" :class="{on:'/msite'===$router.path}" @click="goTo('/msite')">
            <span class="item_icon">
                <i class="iconfont icon-waimai"></i>
            </span>
            <span>外卖</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on:'/search'===$router.path}" @click="goTo('/search')">
            <span class="item_icon">
                <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on:'/order'===$router.path}" @click="goTo('/order')">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$router.path}" @click="goTo('/profile')">
            <span class="item_icon">
                <i class="iconfont icon-geren"></i>
            </span>
            <span>我的</span>
        </a>
    </div>
</template>
<script>
export default {
    methods:{
        goTo(path){
            //根据点击事件来切换页面的路由
            this.$router.replace(path)
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
      
</style>