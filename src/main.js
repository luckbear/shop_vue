import Vue from 'vue'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root='http://47.89.21.179:8080'
Vue.http.options.emulateJSON = true

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import app from './App.vue'

//导入路由
import router from './router.js'


//按需导入mint-ui
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)

//时间处理模块
import moment from 'Moment'
//定义格式化时间的全局过滤器
Vue.filter('dateFormat',(dateStr,pattern='YYYY-MM-DD HH:mm:ss')=>{
    return moment(dateStr).format(pattern);
})



var vm = new Vue({
    el: '#container',
    data: {

    },
    render: c => c(app),
    router,
    
})