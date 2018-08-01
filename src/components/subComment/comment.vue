<template>
    <div class="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容，最多140个字" maxlength="140" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
        <div class="cmtList" v-for="(item,i) in cmtList" :key="item.add_time">
            <p class="cmtInfo">
                <span>第{{i+1}}楼&nbsp;&nbsp;</span>
                <span>用户：{{item.user_name}}&nbsp;&nbsp;</span>
                <span>发表时间：{{item.add_time|dateFormat}}</span>
            </p>
            <div class="cmtCottent">
                {{item.content}}
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1, //默认显示第一页评论
      cmtList: [],
      msg:''
    };
  },
  created() {
    this.getCmtList();
  },
  methods: {
    getCmtList() {
      this.$http
        .get(
          "api/getcomments/" +
            this.artId +
            "?pageindex=" +
            this.pageIndex
        )
        .then(result => {
          if (result.body.status === 0) {
            this.cmtList = this.cmtList.concat(result.body.message);
          } else {
            alert("获取评论失败");
          }
        });
    },
    getMore() {
      this.pageIndex += 1;
      this.getCmtList();
    },
    addComment() {
      if (this.msg.trim().length == 0) {
        return Toast("评论内容不能为空");
      }
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(result => {
            if (result.body.status===0) {
                //把新评论组建为对象
                var newCmt = {
                    user_name:'匿名用户',
                    add_time:Date.now(),
                    content:this.msg.trim()
                };
                //把新评论手动插入评论列表
                this.cmtList.unshift(newCmt);
                this.msg='';
                Toast(result.body.message)
            } else{
                Toast('提交评论失败')
            }
        });
    }
  },
  props: ["artId"]
};
</script>

<style lang="less" scoped>
.comment {
  h3 {
    font-size: 14px;
    text-indent: 10px;
  }
  textarea {
    font-size: 12px;
    margin-bottom: 5px;
  }
  .cmtInfo {
    margin-top: 5px;
    margin-bottom: 3px;
    background-color: #ccc;
    font-size: 12px;
  }
  .cmtCottent {
    font-size: 12px;
    text-indent: 2em;
    padding: 0 8px;
  }
}
</style>

