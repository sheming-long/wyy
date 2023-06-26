<template>
  <div class="w-screen h-screen overflow-hidden">
    <!-- <span class="font-extrabold float-left"  data-icon="&#xe660" id="shoucang"></span> -->
    <div class="text-center font-bold h-18 text-2xl">
      <span class="font-extrabold float-left"
        ><icon icon="charm:chevron-left" /></span
      >歌单广场
    </div>
    <ul class="flex psoa">
      <li
        v-for="item in menu"
        class="min-w-[8vw] h-1.25 mr-1 text-center text-[0.1rem]"
        v-bind:class ="{ active: item.name === activeMenuItem }"
        v-on:click="toggleMenu(item.name)"
        v-bind:key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
    <ul class="flex flex-wrap justify-between mt-6">
      <li
        v-for="item in playlists"
        class="w-[30vw] mt-2 relative"
        v-bind:key="item.id"
      >
        <div class="w-[100%] h-[30vw] rounded overflow-hidden">
          <img :src="item.coverImgUrl" alt="" class="" />
        </div>
        <p class="h-[2.9rem] line-clamp-2">{{ item.name }}</p>
       <p class="absolute top-0 left-[17vw] text-[3vw]  text-center bg-orange-900 rounded-[2vw]">
         <icon icon="prime:caret-right" class=" float-left  w-[4vw] h-[4vw]" /> {{ Math.floor(item.playCount / 10000) }}万
       </p>

              
      
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      menu: [],
      activeMenuItem: '',
      playlists: [],
    };
  },
  methods: {
    toggleMenu(name) {
      this.activeMenuItem = name;
      this.fetchPlaylists(name);
    },
    fetchPlaylists(cat) {
      axios
        .get(
          'https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist',
          { params: { cat } }
        )
        .then((res) => {
          console.log(res.data.playlists);
          this.playlists = res.data.playlists;
        });
    },
  },
  created() {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot'
      )
      .then((res) => {
        this.menu = res.data.tags;
        return (this.activeMenuItem = this.menu[0].name);
      })
      .then((cat) => this.fetchPlaylists(cat))
      .catch((err) => console.log(err));
  },
};
</script>
<style>
.active {
  color: red;
}
</style>
