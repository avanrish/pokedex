import { createRouter, createWebHistory } from 'vue-router';
import { Routes } from '@/util/enum/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routes.Pokedex,
      name: 'pokedex',
      component: () => import('../views/PokedexView.vue'),
    },
    {
      path: Routes.MyTeam,
      name: 'team',
      component: () => import('../views/MyTeamView.vue'),
    },
    // TODO: 404 page
  ],
});

export default router;
