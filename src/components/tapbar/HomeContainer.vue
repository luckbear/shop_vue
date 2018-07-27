<template>
    <div>
        home
        <mt-swipe :auto="4000" v-for="item in imgList" :key="item.url">
            <mt-swipe-item><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: []
    };
  },
  created() {
    this.getImg();
  },
  methods: {
    getImg() {
      this.$http.get("http://47.89.21.179:8080/api/getlunbo").then(result => {
        console.log(result);

        if (result.body.status == 0) {
          this.imgList = result.body.message;
          console.log(this.imgList);
        }
      });
    }
  }
};
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
    img {
      width: 100%;
    }
  }
}
</style>
