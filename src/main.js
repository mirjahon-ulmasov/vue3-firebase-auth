import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import 'vue-next-select/dist/index.min.css';
import './assets/global.scss';
import { store } from './store';

import VueSelect from 'vue-next-select';
createApp(App)
  .use(router)
  .use(Antd)
  .use(store)
  .component('vue-select', VueSelect)
  .mount('#app');
