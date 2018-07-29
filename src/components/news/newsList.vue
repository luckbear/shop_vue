<template>
    <div class="newsList">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsLi" :key=item.id>
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://cn.vuejs.org/images/piio.png">
                    <div class="mui-media-body">
                        <span class="newsTitle">{{item.title}}</span>
                        <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                        <p class="newsPara"><span>发表时间:{{item.add_time}}</span><span>点击：{{item.click}}次</span></p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
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
            this.$http.get('http://47.89.21.179:8080/api/getnewslist').then(result=>{
                if(result.body.status===0) {
                    this.newsLi = this.newsLi.concat(result.body.message);
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.newsList {
    .mui-media-body {
        .newsTitle {
            font-size: 16px;
        }
        .newsPara {
            font-size: 13px;
            color: #025eab;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>

