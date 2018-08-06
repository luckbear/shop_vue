<template>
<div class="goodsInfo">
    <!-- 动画小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-show="fullBall" ref="ball"></div>
    </transition>
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
                    购买数量:&nbsp;&nbsp;<numBox :maxNum="goodsInfo.stock_quantity" @getSelectNum="getSelectNum"> </numBox>
                </p>
                <p class="car">
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="addToCar">加入购物车</mt-button>
                </p>                
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
      fullBall: false,
      seclectNum: 1, //numBox子组件选中的商品数量，默认为1
      selected:true 
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
    addToCar() {
      this.fullBall = !this.fullBall;
      var goodsOfCar = {
        id: this.id,
        count:this.seclectNum,
        price:this.goodsInfo.sell_price,
        selected:this.selected
      };
      this.$store.commit('addToStore',goodsOfCar)
    },

    //半程动画开始
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    //动画进行时
    enter(el, done) {
      el.offsetHeight;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const carPosition = document
        .getElementById("carBadge")
        .getBoundingClientRect();

      const xDis = carPosition.left - ballPosition.left;
      const yDis = carPosition.top - ballPosition.top;

      el.style.transform = `translate(${xDis}px,${yDis}px)`;
      el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,0.68)";
      done();
    },
    //动画结束
    afterEnter(el) {
      this.fullBall = !this.fullBall;
    },
    //获取子组件传过来的商品数量
    getSelectNum(num) {
      this.seclectNum = num;
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
  position: relative;
  .num {
    display: flex;
    align-items: center;
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 360px;
    left: 77px;
    z-index: 11;
  }
}
</style>

