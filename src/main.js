import Vue from 'vue'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://47.89.21.179:8080'
Vue.http.options.emulateJSON = true

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import app from './App.vue'

//导入路由
import router from './router.js'


//按需导入mint-ui
// import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)
import mint from 'mint-ui'
Vue.use(mint)

//时间处理模块
import moment from 'Moment'
//定义格式化时间的全局过滤器
Vue.filter('dateFormat', (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(dateStr).format(pattern);
});

//导入预览图模块
import Vuepreview from 'vue-preview'
Vue.use(Vuepreview)

//导入并注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//创建store实例
var store = new Vuex.Store({
    state: {
        car: []
    },
    mutations: {
        //把numbox传来的商品对象添加到store中的car
        addToStore(state, goods) {
            var flag = false;
            state.car.some(item => {
                if (item.id == goods.id) {
                    //如果购物车中已经存在该商品，则只追加数量
                    item.count += goods.count
                    flag = true
                    return true
                }
            });
            //如果购物车中不存在该商品，则push进car
            if (!flag) {
                state.car.push(goods)
            };
            //把购物车商品存到localstorge
            localStorage.setItem('car',JSON.stringify(state.car))  
        },
    },
    getters: {}
})






var vm = new Vue({
    el: '#container',
    data: {

    },
    render: c => c(app),
    router,
    store
})