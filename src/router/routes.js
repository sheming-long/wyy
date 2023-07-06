import indexView from '../views/IndexView.vue';
import mineView from '../views/MineView.vue'
import HomeView from '../views/homeview/HomeView.vue'
import PlaylistPlaza from "../views/homeview/PlaylistPlaza.vue"
import Foo from "../views/homeview/Foo.vue"
import HomePlaylist from "../views/homeview/HomePlaylist.vue"
import login from "../views/homeview/login.vue"
export default [
  // 路径重定向
  {
    path : '/',
    redirect: '/HomeView'
  },
  {
    path : '/IndexView',
    component: indexView
  },
  {
    path : '/MineView',
    component: mineView
  },
  {
    path : '/HomeView',
    component: HomeView
  },
  {
    path : '/PlaylistPlaza',
    component: PlaylistPlaza
  },

  {
    path : '/Foo',
    component: Foo
  },
  {
    path : '/HomePlaylist/:id',
    component: HomePlaylist
  },
  {
    path : '/login',
    component: login
  },
];

