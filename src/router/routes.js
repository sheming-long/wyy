import indexView from '../views/IndexView.vue';
import mineView from '../views/MineView.vue'
import HomeView from '../views/homeview/HomeView.vue'
import PlaylistPlaza from "../views/homeview/PlaylistPlaza.vue"
import foo from "../views/homeview/foo.vue"
import HomePlaylist from "../views/homeview/HomePlaylist.vue"
 
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
    path : '/foo',
    component: foo
  },
  {
    path : '/HomePlaylist/:id',
    component: HomePlaylist
  },
];
