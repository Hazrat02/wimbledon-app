import { createRouter, createWebHistory } from 'vue-router'


import DeshboardView from '../views/Deshboard/DeshboardView.vue'
import KycView from '../views/Deshboard/KycView.vue'
import DepositView from '../views/Deshboard/DepositView.vue'

import TransactionView from '../views/Deshboard/TransactionView.vue'
import AccountView from '../views/Deshboard/AccountView.vue'








import LoginComponent from './../views/auth/Login.vue';
import RegisterComponent from '../views/auth/Register.vue';
import ForgetComponent from '../views/auth/Forget.vue' 
import authenticated from '../midleware/auth.js';
import { logout } from "../midleware/auth.js";
import { setloading } from '../utils/extra'
import axios from 'axios';



const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [



   
    {
      path: '/login',
      name: 'login',
   
      component:LoginComponent,
      meta:{
      requiresGuest:true,
      },
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:RegisterComponent,
      meta:{
        requiresGuest:true,
      },
    },
    {
      path: '/forget',
      name: 'forget',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:ForgetComponent,
      meta:{
        // Layout:AuthLayout,
      },
    },
    


    // user Deshboard--------------------------------------------------
    {
      path: '/',
      name: 'dashboard',

      component:DeshboardView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/kyc',
      name: 'kyc',

      component:KycView,
      meta:{
        requiresAuth:true,
      },
    },

    {
      path: '/deposit',
      name: 'deposit',

      component:DepositView,
      meta:{
        requiresAuth:true,
      },
    },

    {
      path: '/transaction',
      name: 'transaction',

      component:TransactionView,
      meta:{
        requiresAuth:true,
      },
    },
    
    {
      path: '/account',
      name: 'account',

      component:AccountView,
      meta:{
        requiresAuth:true,
      },
    },




    
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },

})




router.beforeEach((to, from, next) => {
  // Function to check if the JWT token is expired
  function isTokenExpired(token) {
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = tokenData.exp * 1000; // Convert expiration time to milliseconds
    return Date.now() >= expirationTime;
  }
  const jwtToken = localStorage.getItem('token');
  if (jwtToken && isTokenExpired(jwtToken)) {
    // Clear the localStorage and redirect to the login page
    localStorage.removeItem('token');
    logout();
    next('/login');
  } else {
    // Allow navigation to the next route
    
  // Check if the route requires authentication and user is not authenticated
  if (to.meta.requiresAuth && !authenticated()) {
    // Redirect to login page or any other desired route
    next('/login');
  } else {
    // Check if the route requires a guest (unauthenticated user) and user is authenticated
    if (to.meta.requiresGuest && authenticated()) {
      next('/');
    } else {
      // https://api.wimbeldoninvestments.com/
      // http://127.0.0.1:8000
      // axios.defaults.baseURL='https://api.wimbeldoninvestments.com/';
      axios.defaults.baseURL='https://backend.wimbledoninvestments.com/';
      axios.defaults.headers.common['Authorization']='bearer'+localStorage.getItem('token');
     

      next();
      setloading(true);
    
    }
  }
  }
})






export default router
