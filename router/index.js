import { createRouter, createWebHistory } from 'vue-router'
// import SummaryView from '../apps/default/views/SummaryView.vue'
import DashBoard from '../apps/default/views/DashBoard.vue'
import ArtView from '../components/ArtView.vue'
import sampleroutes from '../apps/sample/approutes'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: SummaryView
    // },
    {
      path: '/',
      name: 'home',
      component: DashBoard
    },
    {
      path: '/Artview',
      name: 'Artview',
      component: ArtView
    },
    {
      path: "/sample",
      name: 'sample',
      component: () => import('../apps/sample/Index.vue'),
      children: sampleroutes
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }    
  
  ]
})

export default router
