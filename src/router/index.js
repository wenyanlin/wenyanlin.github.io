import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import Home from '@/views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts([
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:
      {
        layout: 'MainLayout',
      }
    },
    // {
    //   path: '/ProductCategory',
    //   name: 'ProductCategory',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/ProductCategory.vue'),
    // },
  ]),
})

export default router;