<template>
    <div>
        <!-- 横向滚动条 -->
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a class="mui-control-item mui-active" v-for="item in categoryList" :key="item.id">
                    {{item.title}}
                </a>
            </div>
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
      imgList: []
    };
  },
  created() {
    this.getImgCategory();
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
      this.$http.get("api/getimgcategory" + cateId).then(result => {
        if (result.body.status === 0) {
          this.imgList = result.body.message;
        } else {
          alert("获取失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>

