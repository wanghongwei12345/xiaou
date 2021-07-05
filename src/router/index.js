import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import login from '../page/login/login.vue'

import index from '../page/index/index.vue'
import home from '../page/index/components/home.vue'
import mime from '../page/index/components/mime.vue'
import shopp from '../page/index/components/shopp.vue'
import catlist from '../page/index/components/catlist.vue'

import list from '../page/list/list.vue'
import search from '../page/search/search.vue'
import detal from '../page/detal/detal.vue'
import affirm from '../page/affirm/affirm.vue'
import site from '../page/site/site.vue'
import newsite from '../page/newsite/newsite.vue'
import pay from '../page/pay/pay.vue'



const router = new VueRouter({
  routes:[{
    path:'/login',
    component:login
  },{
    path:'/register',
    component:()=> import ('../page/login/register.vue')
  },{
    path:'/index',
    component:index,
    children:[{
      path:'home',
      component:home
    },{
      path:'mime',
      component:mime
    },{
      path:'shopp',
      component:shopp
    },{
      path:'catlist',
      component:catlist
    },{
      path:'',
      redirect:'home'
    }]
  },{
    path:'/list',
    component:list
  },{
    path:"/search",
    component:search
  },{
    path:'/detal',
    component:detal
  },{
    path:'/affirm',
    component:affirm
  },{
    path:'/site',
    component:site
  },{
    path:'/newsite',
    component:newsite
  },{
    path:'/pay',
    component:pay
  },{
    path:'*',
    redirect:'/register'
  }]
})

export default router
