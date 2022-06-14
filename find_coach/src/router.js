import { createRouter, createWebHistory } from 'vue-router';

import CoachesLists from '@/pages/coaches/CoachesLists';
import ResquestReceived from '@/pages/requests/ResquestReceived';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesLists },
    {
      path: '/coaches/:id',
      component: null,
      children: [{ path: '/contact', component: null }],
    },
    { path: '/register', component: null },
    { path: '/requests', component: ResquestReceived },
    { path: '/:notFound(.*)', component: null },
  ],
});

export default router;
