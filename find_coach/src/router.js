import { createRouter, createWebHistory } from 'vue-router';

import CoachesLists from '@/pages/coaches/CoachesLists';
import ResquestReceived from '@/pages/requests/ResquestReceived';
import CoachDetail from '@/pages/coaches/CoachDetail';
import ContactCoach from '@/pages/requests/ContactCoach';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesLists },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: null },
    { path: '/requests', component: ResquestReceived },
    { path: '/:notFound(.*)', component: null },
  ],
});

export default router;
