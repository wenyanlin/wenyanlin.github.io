import VueLazyload from 'vue-lazyload';
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fab);
library.add(fas);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(VueLazyload, {
  loading: 'loading.gif', // picture when loading
  error: 'error.png', // picture when error
});

app.mount('#app');