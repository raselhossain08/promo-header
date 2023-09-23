import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/./Home/HomeView.vue'
import ProductDetails from '../views/Products/ProductDetails.vue'
import ProductView from '../views/Products/Product.vue'
import LoginView from '../views/Auth/Login.vue'
import RegisterView from '../views/Auth/Register.vue'
import CartView from '../views/Cart/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    }  ,     
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    }  ,  
    {
      path: '/products',
      name: 'ProductView',
      component: ProductView
    }
    ,
    {
      path: '/product-details',
      name: 'ProductDetails',
      component: ProductDetails
    }    ,

    {
      path: '/cart',
      name: 'CartView',
      component: CartView
    }
    ,
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
