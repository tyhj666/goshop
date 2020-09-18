<template>
    <div>
        <h2>欢迎来到登录页面</h2>
        <p @click="$router.back()">点我返回上一页</p>
    </div>
</template>
<script>
export default {
    methods:{
        getCode(){
            // 如果当前没有计时，启动倒计时
            if (!this.computeTime) {
               this.computeTime=30
          const intervalId =  setInterval(() => {
               this.computeTime--
               if (this.computeTime<=0) {
                    clearInterval(intervalId)
               }
            },1000)  
             // 发送异步请求
            }
           

           
        },
        // 异步登录
        login(){
        // 前台表单验证
        if (this.loginWay) {// 短信登录
            const {rightPhone, phone, code} = this
            if (!this.rightPhone) {
                //手机号不正确
            }else if (!code) {
                //
            }
        }else { // 密码登录
            const {name, pwd, captcha}=this
        }
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>