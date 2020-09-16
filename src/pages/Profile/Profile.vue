<template>
    <div>
        <HeaderTop title="我的"/>
        <router-link to="/login">
            <h2>去登录</h2>
        </router-link>
    </div>
</template>
<script>
// 读取state里面的user数据
import {mapState} from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    components:{
        HeaderTop
    },
    computed:{
      ...mapState(['userInfo'])
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>