import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from './App.vue';
import Drawer from '@/commponent/Drawer/index';
import router from '@/router/index';
// 引入switch
import Switch from './commponent/Switch.vue';
Vue.component('v-switch', Switch);


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
  // render:(h)=>h(App)
  router,
});


