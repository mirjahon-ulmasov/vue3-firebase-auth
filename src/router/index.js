import { createRouter, createWebHistory } from 'vue-router';
import { HomePage, AboutPage, NotFoundPage, RegisterPage } from '../pages';
import { store } from '../store';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../pages/LoginPage.vue'),
  },

  {
    path: '/home/',
    name: 'HomePage',
    component: HomePage,
    children: [
      {
        path: 'create-post',
        name: 'CreatePostPage',
        component: () => import('../pages/posts/CreatePostPage.vue'),
      },
      {
        path: 'posts',
        name: 'PostsPage',
        component: () => import('../pages/posts/PostsPage.vue'),
      },
      {
        path: 'posts/:id',
        name: 'PostDetailPage',
        component: () => import('../pages/posts/PostDetailPage.vue'),
        props: true,
      },
    ],
  },
  { path: '/:catchAll(.*)', name: 'NotFoundPage', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(to => {
  const user = store.getters.getUser;
  if (to.path === '/home/create-post' && !user) return '/login';
});

export default router;
