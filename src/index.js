import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import Drawer from '@/commponent/Drawer.vue';
Vue.component('Icon', Icon);
Vue.component('Drawer', Drawer);
Vue.use(Vant);
Vue.component('Icon', Icon);
const vm = new Vue({
  el: '#app', // 挂载节点
  components: { App },
  template: '<App />',
});
