<template>
  <div>
    <HomeView />
  </div>
</template>

<script>
import HomeView from './views/homeview/HomeView.vue';
export default {
  components: {
    HomeView,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
