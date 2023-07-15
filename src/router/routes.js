import indexView from '../views/IndexView.vue';
import mineView from '../views/MineView.vue'
import HomeView from '../views/homeview/HomeView.vue'
import PlaylistPlaza from "../views/homeview/PlaylistPlaza.vue"
import Foo from "../views/homeview/Foo.vue"
import HomePlaylist from "../views/homeview/HomePlaylist.vue"
import login from "../views/homeview/login.vue"
import PhotoWall from "../views/homeview/PhotoWall.jsx"
import fangdou from "../views/homeview/fangdou.vue"
import xuanzeqijsx from "../views/homeview/xuanzeqi.jsx"
import BianJizliao from "../views/homeview/BianJizliao.vue"
import Searchpage from "../views/homeview/Searchpage.vue"
import MusicPlayback from "../commponent/MusicPlayback/MusicPlayback.vue"
import MvLeaderboard from "../views/homeview/MvLeaderboard.vue"
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
  {
    path:'/PhotoWall',
    component:() => import (/* webpackChunkName:'jsx' */'@/views/homeview/PhotoWall')
  },
  {
    path : '/fangdou',
    component: fangdou
  },
  {
    path : '/xuanzeqijsx',
    component: xuanzeqijsx
  },
  {
    path : '/BianJizliao',
    component: BianJizliao
  },
  {
    path : '/Searchpage',//搜索
    component: Searchpage
  },
  {
    path : '/MusicPlayback',//音乐界面
    component: MusicPlayback
  },
  {
    path : '/MvLeaderboard',//
    component: MvLeaderboard
  },

    // 视频播放器
    {
      path: '/videoPlayerView/:id',
      component: () => import(/* webpackChunkName:'rest' */'../commponent/videoPlayerView/videoPlayerView.vue')
    },
];

