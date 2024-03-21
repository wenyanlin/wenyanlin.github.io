import VueLazyload from 'vue-lazyload';
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(VueLazyload, {
  loading: 'loading.gif', // picture when loading
  error: 'error.png', // picture when error
});

app.mount('#app');
