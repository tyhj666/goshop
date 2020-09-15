<template>
    <div class="star" :class="'star-'+size">
        <span class="start-item" v-for="(sc,index) in starClassess" :class="sc" :key="index"></span>
    </div>
</template>
<script>
const CLASS_ON='on'
const CLASS_HALF='half'
const CLASS_OFF='off'
export default {
    props:{
        score:Number,
        size:Number
    },
    computed:{
        starClassess () {
            const {score}=this
            const scs=[]
           // 向scs中添加n个'on'CLASS_ON
           const scoreInteger=Math.floor(score)
           for (let i = 0; i < scoreInteger; i++) { 
           CSS.push(CLASS_ON)
           }
           // 向scs中添加0/1个'half'
           if (score*10-scoreInteger*10>=5) {
               scs.push(CLASS_HALF)
           }
           // 向scs中添加n个'off'
           while(scs.length<5){
               scs.push(CLASS_OFF)
           }
            return scs
        }
    }
}
</script>
<style lang="stylus">

</style>