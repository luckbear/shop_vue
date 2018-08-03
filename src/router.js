import VueRouter from 'vue-router'

import homeCom from './components/tapbar/HomeContainer.vue'
import memberCom from './components/tapbar/MemberContainer.vue'
import shopCom from './components/tapbar/ShopCar.vue'
import searchCom from './components/tapbar/Search.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/photos/PhotoList.vue'
import photoInfo from './components/photos/PhotoInfo.vue'
import goodsList from './components/Goods/GoodsList.vue'
import goodsInfo from './components/Goods/GoodsInfo.vue'

var router = new VueRouter({
    routes: [{
            path: '/',
            redirect:'/home'
        },
        {
            path: '/home',
            component: homeCom
        },
        {
            path: '/member',
            component: memberCom
        },
        {
            path: '/shopcar',
            component: shopCom
        },
        {
            path: '/search',
            component: searchCom
        },
        {
            path:'/home/newsList',
            component:newsList
        },
        {
            path:'/home/newsInfo:id',
            component:newsInfo
        },
        {
            path:'/home/photoList',
            component:photoList
        },
        {
            path:'/home/photoInfo:id',
            component:photoInfo
        },
        {
            path:'/home/goodsList',
            component:goodsList
        },
        {
            path:'/home/goodsInfo:id',
            name:'goodsInfo',
            component:goodsInfo
        }

    ],
    linkActiveClass:"mui-active",
});

export default router