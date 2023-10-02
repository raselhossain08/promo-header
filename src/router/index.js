import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/./Home/HomeView.vue'
import ProductDetails from '../views/Products/ProductDetails.vue'
import ProductView from '../views/Products/Product.vue'
import LoginView from '../views/Auth/Login.vue'
import RegisterView from '../views/Auth/Register.vue'
import CartView from '../views/Cart/Cart.vue'
import DashboardView from '../views/dashboard/DashboardView.vue'
import AdvertiserView from '../views/Advertiser/Advertiser.vue'
import CommentsView from '../views/Comments/Comments.vue'
import TrackView from '../views/TrackOrder/TrackOrder.vue'

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
      path: '/dashboard',
      name: 'DashboardView',
      component: DashboardView
    }
    ,  
    {
      path: '/products',
      name: 'ProductView',
      component: ProductView
    } 
    ,{
      path: '/comments',
      name: 'CommentsView',
      component: CommentsView
    }
    ,
    {
      path: '/product-details',
      name: 'ProductDetails',
      component: ProductDetails
    }    ,

    {
      path: '/advertiser',
      name: 'AdvertiserView',
      component: AdvertiserView
    }  
    ,
    {
      path: '/track-order',
      name: 'TrackView',
      component: TrackView
    }  
    ,

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
