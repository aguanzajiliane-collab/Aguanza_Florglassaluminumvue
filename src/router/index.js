
import {
  createRouter,
  createWebHistory
} from 'vue-router'

import { isLoggedIn } from '../utils/storage'

import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Cart from '../pages/Cart.vue'
import Login from '../pages/Login.vue'
import Logout from '../pages/Logout.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior: () => ({
    top: 0
  }),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/:id',
      name: 'ProductDetail',
      component: ProductDetail,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    return {
      name: 'Login',
      query: {
        redirect: to.fullPath
      }
    }
  }

  if (to.meta.guestOnly && isLoggedIn()) {
    return {
      name: 'Home'
    }
  }
})

export default router