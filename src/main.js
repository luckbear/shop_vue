import Vue from 'vue'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './App.vue'

//导入路由
import router from './router.js'


//按需导入mint-ui
import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)



var vm = new Vue({
    el: '#container',
    data: {

    },
    render: c => c(app),
    router

})