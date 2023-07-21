<template>
  <van-tabbar route  active-color="red"  class=" dark:bg-gray-900 dark:text-[#fff]">
    <van-tabbar-item replace to="/HomeView"
      >首页
      <template #icon>
        <Icon icon="ri:netease-cloud-music-fill" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/MvLeaderboard"
      >排行榜
      <template #icon>
        <Icon icon="ion:podium-sharp" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/PhotoWall"
      >我的
      <template #icon>
        <Icon icon="mingcute:music-line" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item  dot replace to=""
      >关注
      <template #icon >
        <Icon icon="iconoir:user-love" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to=""
        >社区
        <template #icon>
          <Icon icon="ph:wechat-logo" />
        </template>
      </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {};
</script>

<style lang="stylus" scoped>
</style>
