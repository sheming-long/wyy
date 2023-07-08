import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from './App.vue';
import Drawer from '@/commponent/Drawer/index';
import router from '@/router/index';
// 引入switch
import Switch from './commponent/Switch.vue';
Vue.component('v-switch', Switch);
import  Dialog  from './commponent/Dialog';
import { ActionSheet, NoticeBar, Popup, Button, Area,Swipe,SwipeItem } from 'vant';
import 'vant/lib/index.css';

Vue.use(ActionSheet);
Vue.use(NoticeBar);
Vue.use(Popup);
Vue.use(Button);
Vue.use(Area);
Vue.use(Swipe);
Vue.use(SwipeItem);
// 引入icon
Vue.component('Icon', Icon);
Vue.component('Drawer', Drawer);

const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});


