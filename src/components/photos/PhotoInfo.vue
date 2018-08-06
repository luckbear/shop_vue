<template>
    <div>
        <div class="photoinfo">
            <h3>{{imgInfoList.title}}</h3>
            <p class="photoPara">
                <span>发表时间:&nbsp;{{imgInfoList.add_time|dateFormat}}</span>
                <span>点击：{{imgInfoList.click}}次</span>
            </p>
            <hr>
            <div class="content" v-html="imgInfoList.content">
            </div>
            <!-- 缩略图模块 -->
            <vue-preview :slides="slide1" @close="handleClose">

            </vue-preview>
        </div>
        <!-- 评论子组件 -->
        <comment :artId="id">
        </comment>
    </div>
</template>

<script>
//导入评论子组件
import comment from "../subComment/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      imgInfoList: {},
      slide1: [],
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
    this.getImgInfo();
    this.getThumb();
  },
  methods: {
    //获取图片详情
    getImgInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.imgInfoList = result.body.message[0];
        } else {
          alert("获取图片详情失败");
        }
      });
    },
    //获取缩略图数据
    getThumb() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          //   this.imgInfoList = result.body.message[0];
          this.imgUrl.forEach(element=> {
              this.slide1.push({
                  src:element,
                  msrc:element,
                  w:600,
                  h:400
              })
          });
        } else {
          alert("获取图片详情失败");
        }
      });
    },
    //关闭缩略图
    handleClose() {}
  },

  components: {
    comment
  }
};
</script>

<style lang="less" scoped>
.photoinfo {
  h3 {
    font-size: 14px;
    color: #025eab;
    text-align: center;
  }
  .photoPara {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  .content {
    font-size: 14px;
    padding: 0 10px;
  }
}
</style>