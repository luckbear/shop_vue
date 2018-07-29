import VueRouter from 'vue-router'

import homeCom from './components/tapbar/HomeContainer.vue'
import memberCom from './components/tapbar/MemberContainer.vue'
import shopCom from './components/tapbar/ShopCar.vue'
import searchCom from './components/tapbar/Search.vue'
import newsList from './components/news/newsList.vue'

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
        }
    ],
    linkActiveClass:"mui-active",
});

export default router