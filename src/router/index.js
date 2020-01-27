import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '@/components/catalog/Catalog'
import Home from '../components/Home'
import Cart from '../components/cart/Cart'
import Sign from '../components/reg/Sign'
import Reg from '../components/reg/Reg'
import Personal from '../components/reg/Personal'
import Personal_info from '../components/reg/Personal_info'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base:
  process.env.BASE_URL,
  routes:[
   
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inf',
      name: 'inf',
      component: Personal_info
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/sign',
      name: 'sign',
      component: Sign
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    }
    
  ]
})