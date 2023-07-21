<template>
 <div class="w-screen">
  
        <!-- <component :is="currentComponent" /> -->
        <!-- 内置组件 component组件的is属性指向谁就渲染谁 -->
        <!-- 声明式导航 -->
        <!-- <router-link to="/IndexView">go to index</router-link> -->
        <router-link :to="{ path: '/HomeView' }"></router-link>
        <router-view />
        <!-- 播放器 -->
        <!-- <Player v-if="showPlayer" class="fixed bottom-0 bg-[#fff] z-[30]" /> -->
        <Menu v-if="showMenu"></Menu>

    </div>
</template>
<script>
import Player from './commponent/Player/Player.vue';
import Menu from '@/commponent/navigation/navigation.vue';
import store from 'storejs';
export default {
    components: { Player, Menu },
    data(){
        return{
            switchCheckStatus: store.get('dark'),
        }
    },
    computed: {
        showPlayer() {
            // 在这里根据你的逻辑判断是否在当前页面显示播放器组件
            return this.$route.path !== '/MusicPlayerView';
        },
    showMenu() {
      if (
        this.$route.path === '/HomeView' || // 首页
        this.$route.path === '/MvLeaderboard' || // 排行榜
        this.$route.path === '/PhotoWall' // 我的
      ) {
        return true;
      }
      
    },
  },
}

</script>



<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
