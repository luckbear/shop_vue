<template>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
        <mt-swipe-item  v-for="item in imgList" :key="item.img">
            <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  datan() {
    return {};
  },
  props: ['imgList']
};

</script>


<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
  }
}
</style>




