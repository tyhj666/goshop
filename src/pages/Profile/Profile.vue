<template>
    <div>
        <HeaderTop title="我的"/>
        <router-link to="/login">
            <h2>去登录</h2>
        </router-link>
    </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    components:{
        HeaderTop
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>