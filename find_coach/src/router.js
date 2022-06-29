import { createRouter, createWebHistory } from 'vue-router';

import CoachesLists from '@/pages/coaches/CoachesLists';
import ResquestReceived from '@/pages/requests/ResquestReceived';
import CoachDetail from '@/pages/coaches/CoachDetail';
import ContactCoach from '@/pages/requests/ContactCoach';
import CoachRegistration from '@/pages/coaches/CoachRegistration';
import NotFound from '@/pages/NotFound';
import UserAuth from '@/pages/auth/UserAuth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesLists },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: ResquestReceived },
    { path: '/auth', component: UserAuth },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
