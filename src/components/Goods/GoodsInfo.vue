<template>
<div class="goodsInfo">
    <!-- 轮播图卡片 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <slider :imgList="imgList">
            </slider>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
        <div class="mui-card-header">{{goodsInfo.title}}</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p class="price">
                    <span>市场价：<del>￥{{goodsInfo.market_price}}</del></span>&nbsp;&nbsp;
                    <span class="nowPri">销售价：￥{{goodsInfo.sell_price}}</span>
                </p>
                <p class="num">
                    购买数量: <numBox :maxNum="goodsInfo.stock_quantity"> </numBox>
                </p>
                <p class="car">
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="moveBall">加入购物车</mt-button>
                </p>
                <transition @before-enter="beforeEnter" @enter="enter" @enter-after="enterAfter">
                    <div class="ball" v-show="fullBall"></div>
                </transition>
                
            </div>
        </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p>商品货号：{{goodsInfo.goods_no}}</p>
                <p>库存情况：{{goodsInfo.stock_quantity}}</p>
                <p>上架时间：{{goodsInfo.add_time}}</p>
            </div>
        </div>
    </div>
    <mt-button type="primary" size="large" plain>图文介绍</mt-button>
    <mt-button type="danger" size="large" plain>商品评论</mt-button>
</div>
</template>

<script>
//导入轮播图组件
import slider from "../subComment/slider.vue";
//导入数字选择框
import numBox from "../subComment/numBox.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsInfo: {},
      imgList: [],
      imgUrl: [
        "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/459469/pexels-photo-459469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/113734/pexels-photo-113734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/45164/mare-animal-nature-ride-45164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/1267681/pexels-photo-1267681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/681847/pexels-photo-681847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/8800/snow-restaurant-mountains-sky.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/1267257/pexels-photo-1267257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        "https://images.pexels.com/photos/1267323/pexels-photo-1267323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
      ],
      fullBall: false
    };
  },
  created() {
    this.getGoodsInfo();
    this.creatImgList();
  },
  methods: {
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsInfo = result.body.message[0];
        } else {
          alert("获取商品详情失败");
        }
      });
    },
    //生成图片列表
    creatImgList() {
      this.imgUrl.forEach(element => {
        this.imgList.push({
          img: element
        });
      });
    },
    //加入购物车
    moveBall() {
      this.fullBall = !this.fullBall;
    }
  },
  components: {
    slider,
    numBox
  }
};
</script>

<style lang="less" scoped>
.goodsInfo {
  .car {
    position: relative;
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 76px;
    left: 65px;
  }
}
</style>

