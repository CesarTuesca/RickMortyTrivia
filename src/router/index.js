import { createRouter, createWebHistory } from 'vue-router';
import GamePage from '@/components/GamePage';
import ProfilePage from '@/components/ProfilePage'; 
import Login from '@/components/Login';

const routes = [
  {
    path: '/',
    redirect: '/login'
},
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/game',
    name: 'GamePage',
    component: GamePage
  },
   {
    path: '/login',
    name: 'LoginPage',
    component: Login
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
