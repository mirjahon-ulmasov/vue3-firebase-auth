import { createRouter, createWebHistory } from 'vue-router';
import { HomePage, AboutPage, NotFoundPage, RegisterPage } from '../pages';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage },

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

export default router;
