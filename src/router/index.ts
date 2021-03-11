import { createRouter, createWebHistory } from 'vue-router'
import TechnologyList from '../views/TechnologyList.vue'
import TechnologyDetails from '../views/TechnologyDetails.vue'

const routes = [
  {
    path: '/',
    name: 'TechnologyList',
    component: TechnologyList
  },
  {
    path: '/technology/:id',
    name: 'TechnologyDetails',
    props: true,
    component: TechnologyDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
