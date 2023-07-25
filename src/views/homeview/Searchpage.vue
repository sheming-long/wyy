<template>
    <div
      class="bg-[#f7f9fe] dark:bg-[#1a1c23] pb-[4vw] pt-[15vw]"
      :class="{ 'h-screen': !userSearchKeywords.length < 1 }"
    >
      <!-- 搜索框开始 -->
      <div
        class="w-[100%] flex justify-between items-center fixed top-0 right-0 bg-[#f7f9fe] dark:bg-[#1a1c23] z-[900] px-[4vw] py-[2vw]"
      >
        <!-- 返回图标 -->
        <Icon
          icon="ph:arrow-left-light"
          width="8vw"
          class="text-[#000] dark:text-[#e9e9e9]"
          @click.native="home"
        />
        <!-- 搜索框 -->
        <div class="relative px-[3vw] flex-1">
          <label for="" class="">
           
            <input
              type="text"
              placeholder="大家都在搜   向云端"
              v-model="userSearchKeywords"
              class="text-[#000]  bg-gradient-to-r from-[#dddbfb] to-pink-50 dark:text-[#fff] placeholder-[#c4c4c4] dark:placeholder-[#575960] dark:bg-[#31333a] text-[4vw] pl-[8vw] bg-white opacity-0.2 w-[100%] h-[10vw] border-2 border-[#fff] rounded-[25px] dark:border-2 dark:border-[#31333a]"
            />
          
          </label>
          <Icon
            icon="iconoir:search"
            class="text-[5vw] absolute top-[2.4vw] left-[5vw] text-[#9a9a9a] dark:text-[#e9e9e9]"
          />
        </div>
  
        <div
          class="font-semibold text-[4vw] dark:text-[#e9e9e9] text-[#283349]"
          @click="searchHandler"
        >
          搜索
        </div>
      </div>
      <!-- 搜索框结束 -->
  
      <div v-if="userSearchKeywords.length < 1">

      </div>
      <div v-else class="w-[100vw] overflow-hidden">
        <div
          class="relative h-[10.225vw] border-b border-[#dfe0e3] dark:border-[#313138] mr-[-4vw] flex items-center ml-[8vw]"
          v-for="item in searchSuggestList"
          :key="item.id"
        >
          <Icon
            icon="iconoir:search"
            class="text-[4vw] absolute top-[3vw] left-[-6vw] text-[#9a9a9a] dark:text-[#e9e9e9]"
          />
          <p class="ml-[2vw] text-[3vw] text-[#ccc] dark:text-[rgb(152,152,155)]">
            {{ item.name == userSearchKeywords ? item.name : '' }}
            <span class="text-[#283349] dark:text-[#e9e9e9]">{{
              item.name.replace(userSearchKeywords, '')
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  import _ from 'lodash';
  
  import {
    fetchSearchDefault,
    fetchCloudsearch,
    
  } from '../../request/index';
  
  export default {
  
    data() {
      return {
        userSearchKeywords: '',
        defaultSearch: [],
        searchSuggestList: null,
        sertchMenu: ['/SingerView', '/MusicalStyleView', '/PrefectureView', ''], // 跳转页面循环数据
      };
    },
    methods: {
      // 跳转回主页
      home() {
        this.$router.push('/PlaylistPlaza');
      },
      sertchMenutwo(num) {
        this.$router.push(this.sertchMenu[num]);
      },
      async searchHandler() {
        const res2 = await fetchCloudsearch({
          keywords: this.userSearchKeywords || this.defaultSearch.showKeyword,
        });
        console.log(res2);
      },
    },
    async created() {
      const res = await fetchSearchDefault();
      this.defaultSearch = res.data.data;
    },
    watch: {
      userSearchKeywords: _.debounce(async function (keywords) {
        const res = await fetchCloudsearch(keywords);
        this.searchSuggestList = res?.data?.result?.songs.slice(0, 10);
      }, 800),
    },
  };
  </script>
  