import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import indexView from './IndexView.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);




Vue.component('Icon', Icon);
const vm = new Vue({
  el: '#app',
  render: (h) => h(indexView),
});
