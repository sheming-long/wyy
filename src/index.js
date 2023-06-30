import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from './App.vue';
import Drawer from '@/commponent/Drawer.vue';
//引入vant
import Vant from 'vant';
import { ActionSheet } from 'vant';
import { Popup } from 'vant';
Vue.use(ActionSheet);
import 'vant/lib/index.css';
Vue.use(Popup);
// 引入icon
Vue.component('Icon', Icon);
Vue.component('Drawer', Drawer);
Vue.use(Vant);
const vm = new Vue({
  el: '#app', // 挂载节点
  components: { App },
  template: '<App />',
});
