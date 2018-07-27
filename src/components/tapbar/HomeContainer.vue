<template>
    <div>
        home
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created() {
        this.getImg();
    },
    methods:{
        getImg(){
            this.$http.get('http://47.89.21.179:8080/api/getlunbo').then(result=>{
                console.log(result);
                
            })
        }
    }
}
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: yellow;
    }
    &:nth-child(3) {
      background-color: blue;
    }
  }
}
</style>
