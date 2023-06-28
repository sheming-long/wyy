import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import indexView from './indexView/IndexView.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import BScroll from '@better-scroll/core';
import ScrollBar from '@better-scroll/scroll-bar';

Vue.use(Vant);




Vue.component('Icon', Icon);
const vm = new Vue({
  el: '#app',
  render: (h) => h(indexView),
});
