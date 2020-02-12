import Vue from 'vue';

import DarkMode from '@/DarkMode.vue';
import Router from '@/router';
import Store from '@/store';
import DarkJSON from '@/config/dark-mode.json';

import '@/registerServiceWorker';
import '@/assets/css/style.css';

Vue.config.productionTip = false;

Vue.mixin({
  data: () => ({
    get dark() {
      return DarkJSON;
    },
  }),
});

new Vue({
  router: Router,
  store: Store,
  render: (dark) => dark(DarkMode),
}).$mount('#darkmode');
