<template>
    <div class="newsList">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsLi" :key="item.id">
                <router-link :to="'/home/newsInfo'+item.id">
                    <img class="mui-media-object mui-pull-left" src="https://cn.vuejs.org/images/piio.png">
                    <div class="mui-media-body">
                        <h2 class='mui-ellipsis'>{{item.title}}</h2>
                        <p >{{item.zhaiyao}}</p>
                        <p class="newsPara"><span>发表时间:{{item.add_time|dateFormat}}</span><span>点击：{{item.click}}次</span></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            newsLi:[]
        }
    },
    created() {
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status===0) {
                    this.newsLi = this.newsLi.concat(result.body.message);
                }else {
                    Toast('加载新闻列表失败')
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.newsList {
    .mui-media-body {
        h2 {
            font-size: 15px;
        }
        .newsPara {
            font-size: 12px;
            color: #025eab;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>

