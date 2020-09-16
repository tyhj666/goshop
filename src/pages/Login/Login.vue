<template>
    <div>
        <h2>欢迎来到登录页面</h2>
        <p @click="$router.back()">点我返回上一页</p>
        <img src="http://localhost:4000/captcha" alt="captcha" @click="getCaptcha">
    </div>
</template>
<script>
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import {reqPwdLogin, reqSendCode, reqSms} from '../../api'
export default {
    methods:{
        //获取图片验证码
        getCaptcha(event){
            //每次指定的src要不一样,只有ajax请求存在跨域
            event.target.src='http://localhost:4000/captcha?time='+Date.now()
        },
       async getCode(){
            // 如果当前没有计时，启动倒计时
            if (!this.computeTime) {
               this.computeTime=30
           this.intervalId =  setInterval(() => {
               this.computeTime--
               if (this.computeTime<=0) {
                    clearInterval(intervalId)
               }
            },1000)  
             // 发送异步请求
            const result= await reqSendCode(this.phone)
            if (result.code===1) {
                // 显示提示
               this.showAlert(result.msg)
                // 停止倒计时
                if (this.computeTime) {
                    this.computeTime=0
                    clearInterval(this.intervalId)
                    this.intervalId=0
                }
            }
            }
           

           
        },
        // 异步登录
         async login(){
        // 前台表单验证
        if (this.loginWay) {// 短信登录
            const {rightPhone, phone, code} = this
            if (!this.rightPhone) {
                //手机号不正确
            }else if (!code) {
                //
            }

            // 发送ajax请求短信登录
            const result= await reqSmsLogin(phone,code)
            if (ruesult.code===0) {
                const user=result.data
            }else{
                const msg=result.msg
            }
        }else { // 密码登录
            const {name, pwd, captcha}=this
            const result= await reqSmsLogin(phone,code)
            if (ruesult.code===0) {
                const user=result.data
            }else{
                const msg=result.msg
            }
        }

        // 根据结果数据处理
        if (result.code===0) {
            const user=result.data
            // 将user保存到vuex的state
            this.$store.dispatch('recordUser',user)
            // 去个人中心界面
            this.$router.replace('/profile')
        }
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>