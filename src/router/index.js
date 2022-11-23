import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes= [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
