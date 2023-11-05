import {createApp} from 'vue';
import App from './App.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import ItCountdown from '../../src';

import Installation from './components/Installation.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Installation',
      component: Installation,
    },
  ],
});

createApp(App).use(router).use(ItCountdown).mount('#app');
