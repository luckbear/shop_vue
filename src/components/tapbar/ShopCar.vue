<template>
    <div class="shopCar-Container">
        <div class="mui-card" v-for="item in goodsList" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner shopGoods">
                    <mt-switch v-model="item.selected" @change="changeSeleced({id:item.id,selected:item.selected})"></mt-switch>
                    <img src="https://i1.mifile.cn/a1/pms_1496997930.13622399!220x220.jpg" alt="">
                    <div>
                        <h2>{{item.title}}</h2>
                        <p  class="info">
                            <span class="red">{{item.sell_price}}</span>
                            <shopNumbox :goodsCount="item.count" :goodsId="item.id"></shopNumbox>
                            <a @click.prevent="remove(item.id)">删除</a>
                        </p>
                    </div>
                </div>  
            </div>
        </div>
        <!-- 结算信息模块 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>总计（不含运费）：</p>
                    <div class="priCount">已勾选商品<span class="red">{{$store.getters.getSelCount.count}}</span>件，总价：<span class="red">￥{{$store.getters.getSelCount.price}}</span>
                    <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//导入numbox组件
import shopNumbox from "../subComment/shopCarNumbox.vue";

export default {
  data() {
    return {
      goodsList: this.$store.state.car,
      selected: true
    };
  },
  created() {
    // this.getGoodsList();
  },
  methods: {
    //根据store中所有商品的id获取商品列表
    // getGoodsList() {
    //   var idArr = [];
    //   this.$store.state.car.forEach(element => idArr.push(element.id));
    //   if (idArr.length <= 0) {
    //     return;
    //   }
    //   this.$http
    //     .get("api/goods/getshopcarlist/" + idArr.join(","))
    //     .then(result => {
    //       console.log(result);
    //       if (result.body.status === 0) {
    //         this.goodsList = result.body.message;
    //       } else {
    //         this.goodsList = this.$store.state.car;
    //       }
    //     });
    // },
    changeSeleced(goods) {
      this.$store.commit("updateSelected", goods);
    },
    remove(id){
        this.$store.commit('removeGoods',id)
    }
  },
  components: {
    shopNumbox
  }
};
</script>

<style lang="less" scoped>
.shopCar-Container {
  .red {
    color: red;
    font-weight: bold;
  }
  .shopGoods {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 100%;
    }
    h2 {
      font-size: 14px;
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mui-numbox {
        height: 30px;
      }
    }
  }
  .priCount {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
