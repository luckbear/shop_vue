<template>
<div class="goodsList">
    <div class="goodItem" v-for="item in goodsList" :key="item.id">
        <img :src="item.img_url">
        <h1>{{item.title}}</h1>
        <div class="info">
            <p class="price">
                <span class="nowPri">&yen;{{item.sell_price}}</span>
                <span class="oldPri">&yen;{{item.market_price}}</span>
            </p>
            <p class="num">
                <span>热卖中</span>
                <span>剩余{{item.stock_quantity}}件</span>
            </p>
        </div>
    </div>
    <!-- 加载更多按钮 -->
    <mt-button type ="danger" size="large" @click="getMore">加载更多</mt-button>
</div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
  data() {
    return {
      pageIndex: 1,
      goodsList: [],
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
      ]
    };
  },
  created() {
    this.getGoodsList(this.pageIndex);
  },
  methods: {
    getGoodsList() {
      this.$http.get("api/getgoods?pageindex=" + this.pageIndex).then(result => {
        if (result.body.status === 0) {
            if(result.body.message.length==0) return Toast('没有更多数据')
    
          result.body.message.forEach((element, index) => {
            element.img_url = this.imgUrl[index] || this.imgUrl[0];
          });
          this.goodsList = this.goodsList.concat(result.body.message);
        } else {
          alert("获取商品列表失败");
        }
      });
    },
    //获取更多
    getMore() {
      this.pageIndex += 1;
      this.getGoodsList();
    }
  }
};
</script>

<style lang="less" scoped>
.goodsList {
  display: flex;
  flex-wrap: wrap;
  padding: 17px;
  justify-content: space-between;
  .goodItem {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 265px;
    img {
      width: 100%;
    }
    h1 {
      font-size: 12px;
      line-height: 18px;
    }
    .info {
      background-color: #eee;
    }
    p {
      margin: 0;
      padding: 2px;
    }
    .price {
      .nowPri {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
      .oldPri {
        text-decoration: line-through;
        font-size-adjust: 12px;
        margin-left: 10px;
      }
    }
    .num {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
    }
  }
}
</style>
