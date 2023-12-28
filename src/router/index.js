import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManagerView from '../views/ManagerView.vue'
import StadiumView from '../views/StadiumView.vue'
import QuestionView from '../views/QuestionView.vue'
import SignInView from '../views/SignInView.vue'
import FriendsView from '../views/FriendsView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/manager',
    name: 'manager',
    // route level code-splitting
    // this generates a separate chunk (manager.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ManagerView
  },
  {
    path: '/stadium',
    name: 'stadium',
    component: StadiumView
  },
  {
    path: '/question',
    name: 'question',
    component: QuestionView
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInView
  },
  {
    path: '/friends',
    name: 'friends',
    component: FriendsView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
