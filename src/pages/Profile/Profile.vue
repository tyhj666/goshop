<template>
    <div>
        <HeaderTop title="我的"/>
        <router-link to="/login">
            <h2>去登录</h2>
        </router-link>
        <div>
        <tm-button type="danger"></tm-button>
    </div>
    </div>
    
</template>
<script>
// 读取state里面的user数据
import {mapState} from 'vuex'
import {MessageBox} from 'mint-ui'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    components:{
        HeaderTop
    },
    computed:{
      ...mapState(['userInfo'])
    },
    methods:{
        logout(){
         MessageBox.confirm('确认退出').then(
             action => {
                // 请求退出
                this.$store.dispatch('logout')
             },
             action => {
                 console.log('点击了取消')
             }
         )   
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>