<template :imgUrlList="imgArray">
    <div>
        <!-- 横向滚动条 -->
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in categoryList" :key="item.id" @tap="getImgList(item.id)">
                    {{item.title}}
                </a>
            </div>
        </div>
        <div class="mediaItem">
            <!-- mint-ui的懒加载 -->
            <ul>
                <router-link v-for="item in imgList" :key="item.id" :to="'/home/photoInfo'+item.id" tag="li">
                    <img v-lazy="item.img_url">
                    <div class="info">
                        <h3>{{item.title}}</h3>
                        <span>{{item.zhaiyao}}</span>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
// 导入mui的js文件
import Mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      categoryList: [],
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
      ]
    };
  },
  created() {
    this.getImgCategory();
    this.getImgList(0);
  },
  mounted() {
    //   初始化scroll组件
    Mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    //   获取分类列表
    getImgCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({
            title: "全部",
            id: 0
          });
          this.categoryList = result.body.message;
        } else {
          alert("获取失败");
        }
      });
    },
    // 获取具体数据
    getImgList(cateId) {
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach((element, index) => {
            element.img_url = this.imgUrl[index] || this.imgUrl[0];
          });
          this.imgList = result.body.message;
        } else {
          alert("获取失败");
        }
      });
    }
  },
  props: ["imgUrlList"]
};
</script>

<style lang="less" scoped>
.mediaItem {
  ul {
    list-style: none;
    padding: 10px;
  }
  li {
      position: relative;
      margin-bottom: 10px;
      background-color: #ccc;
      position: relative;
      box-shadow: 0 0 9px #999;
  }
  img {
    width: 100%;
    vertical-align: middle;
  }
  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .info {
      color: #fff;
      background-color:rgba(0, 0, 0, 0.4);
      position: absolute;
      bottom: 0;
      padding: 0 10px;
    //   max-height: 88px;
      overflow: hidden;
      h3{
          font-size: 13px;
      }
      span{
          font-size: 12px;
      }
  }
}
</style>

