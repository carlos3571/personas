import 'boostrap';
import router from './router';

import 'boostrap/dist/css/boostrap.min.css'

import { createApp } from 'vue'

import App from './App.vue'
createApp(App).use(router).mount('#app')
