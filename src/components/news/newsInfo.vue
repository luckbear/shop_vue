<template>
    <div class="newsInfo">
        <div class="newsItem">
            <h3>{{news.title}}</h3>
            <p class="newsPara">
                <span>发表时间:{{news.add_time|dateFormat}}&nbsp;</span>
                <span>点击：{{news.click}}次</span>
            </p>
            <hr>
            <div class="newsContent" v-html="news.content">
            </div>
        </div>
        <comment :artId="id">
        </comment>
    </div>  
</template>

<script>
// 导入评论子组件
import comment from '../subComment/comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      news: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.news = result.body.message[0];
        } else {
          alert("获取新闻失败");
        }
      });
    }
  },
  components:{
    comment
  }

};
</script>

<style lang="less">
.newsInfo {
  .newsItem {
    padding: 0 10px;
    h3 {
      font-size: 14px;
      color: red;
      text-align: center;
    }
    .newsPara {
      font-size: 12px;
      color: #025eab;
      display: flex;
      justify-content: space-between;
    }
    img {
        width:100%;
    }
  }
}
</style>

