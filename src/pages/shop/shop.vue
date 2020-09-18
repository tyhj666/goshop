<template>
    <div>
        <ShopHeader/>
        <div class="tab">
            <router-link to="/shop/goods">点餐</router-link>
        </div>
        <div class="tab">
            <router-link to="/shop/ratings">评价</router-link>
        </div>
        <div class="tab">
            <router-link to="/shop/info">商家</router-link>
        </div>
        <router-view/>
    </div>
</template>
<script>
import ShopHeader from '../../components/shopHeader/shopHeader.vue'
export default {
    components:{
        ShopHeader
    }
}
</script>
<style lang="stylus">

</style>