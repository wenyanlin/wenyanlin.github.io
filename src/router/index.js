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
    {
      path: '/web-design',
      name: 'web-design',
      component: () => import('../views/WebDesign.vue'),
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('../views/Research.vue'),
    },
    {
      path: '/graphic-design',
      name: 'graphic-design',
      component: () => import('../views/GraphicDesign.vue'),
    },
    {
      path: '/animation-design',
      name: 'animation-design',
      component: () => import('../views/AnimationDesign.vue'),
    },
    {
      path: '/about-me',
      name: 'about-me',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutMe.vue'),
    },
    {
      path: '/project/:projectName',
      name: 'project',
      component: () => import('../views/ProjectPage.vue'),
    },
  ]),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router;