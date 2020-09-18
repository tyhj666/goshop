<template>
    
</template>
<script>
import {mapState} from 'vuex'
export default {
    mounted(){
        // 从后台获取数据并保存到state中
        this.$store.dispatch('getShopGoods')
    },
    computeds:{
        ...mapState(['goods'])
    }
}
</script>
<style lang="stylus">

</style>