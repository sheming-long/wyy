<template>
  <div class="bg-[#f7fafc] pl-[4vw] pr-[4vw]">
    <header>
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
        <div class="relative px-[3vw] flex-1 w-[80vw]">
          <label for="" class="">
            <router-link :to="{ path: '/Searchpage' }">
            <input
              type="text"
              placeholder="大家都在搜   向云端"
             
              class="text-[#000]  bg-gradient-to-r from-[#dddbfb] to-pink-50 dark:text-[#fff] placeholder-[#c4c4c4] dark:placeholder-[#575960] dark:bg-[#31333a] text-[4vw] pl-[8vw] bg-white opacity-0.2 w-[100%] h-[10vw] border-2 border-[#fff] rounded-[25px] dark:border-2 dark:border-[#31333a]"
            />
            </router-link >
          </label>
          <Icon
            icon="iconoir:search"
            class="text-[5vw] absolute top-[2.4vw] left-[5vw] text-[#9a9a9a] dark:text-[#e9e9e9]"
          />
        </div>
  
        <div
          class="font-semibold text-[4vw] dark:text-[#e9e9e9] text-[#283349]"
        
        >
          搜索
        </div>
      </div>
      <div class="flex justify-around my-5">
        <p class="flex items-center font-[600]">
          <Icon
            icon="streamline:interface-user-single-close-geometric-human-person-single-up-user"
            color="red"
            style="margin-right: 5px"
          >
          </Icon>
          歌手
        </p>
        <p style="color: #ccc">|</p>
        <p class="flex items-center font-[600]">
          <Icon
            icon="material-symbols:genres"
            color="red"
            style="margin-right: 5px"
          >
          </Icon>
          曲风
        </p>
        <p style="color: #ccc">|</p>
        <p class="flex items-center font-[600]">
          <Icon icon="entypo:note" color="red" style="margin-right: 5px">
          </Icon>
          专区
        </p>
        <p style="color: #ccc">|</p>
        <p class="flex items-center font-[600]">
          <Icon icon="typcn:microphone" color="red" style="margin-right: 5px">
          </Icon>
          识曲
        </p>
      </div>
      <div class="my-5">
        <p class="flex items-center justify-between font-[600]">
          搜索历史
          <Icon icon="bi:trash" class="text-[#bfc2c4]"> </Icon>
        </p>
        <div class="flex mt-[3vw]">
          <p
            class="h-[8vw] rounded-[4vw] bg-[#ffffff] text-[#505352]"
            style="line-height: 8vw; text-align: center"
          >
            &nbsp;&nbsp;音乐日历&nbsp;&nbsp;
          </p>
        </div>
      </div>
      <div class="my-5">
        <p class="flex items-center justify-between pl font-[600]">
          猜你喜欢
          <button @click="randomItem">
            <Icon icon="iconoir:refresh" class="text-[#bfc2c4]"></Icon>
          </button>
        </p>
        <div class="flex mt-[3vw]" style="flex-wrap: wrap;
    justify-content: space-between;">
          <p
            v-for="item in randomItems"
            :key="item.id"
            class="h-[8vw] rounded-[4vw] bg-[#ffffff] text-[#505352]"
            style="line-height: 8vw; text-align: center"
          >
            &nbsp; &nbsp;{{ item.searchWord }} &nbsp; &nbsp;
          </p>
        </div>
      </div>
    </header>

    <main>
      <div class="overflow-auto">
        <div class="w-[700vw] flex" style="justify-content: space-between;">
          <!-- 热歌榜 -->
          <div v-for="(item) in res2.slice(0, 11)" :key="item.id " class="w-[60vw] pl-[3vw] bg-[#ffffff] rounded-[5vw]">
    <div
        class="h-[12vw] border-b-[0.1vw] font-[700]"
        style="line-height: 12vw"
    >
            {{ item.name }}
  </div>
    <ul>
        <li class="h-[10vw]" v-for="(main, indexs) in item.tracks.slice(0, 20)" :key="main.id">
            <p
                class="text-[4vw] overflow-hidden overflow-ellipsis whitespace-nowrap"
                :class="{ 'font-[600]': indexs < 3 } "
                style="line-height: 10vw"
            >
                <span
                    class="mr-[5vw] font-[600]"
                    :class="{
                        'text-[red]': indexs < 3,
                        'text-[#a3a3a3]': indexs >= 3,
                    }"
                >
                    {{ indexs + 1 }}
                </span>
                {{ main.name }}
            </p>
        </li>
    </ul>
</div>

              <!-- <div class="w-[60vw] pl-[3vw] bg-[#ffffff] rounded-[5vw]">
            <div
              class="h-[12vw] border-b-[0.1vw] font-[700]"
              style="line-height: 12vw"
            ></div>
            <ul>
              <li class="h-[10vw]" v-for="(item, index) in res2" :key="item.id">
                <p
                  class="font-[4vw]"
                  :class="{ 'font-[700]': index < 3 }"
                  style="line-height: 10vw"
                >
                  <span
                    class="mr-[5vw] font-[700]"
                    :class="{
                      'text-[red]': index < 3,
                      'text-[#a3a3a3]': index >= 3,
                    }"
                  >
                    {{ index + 1 }}
                  </span>
                  {{ item.searchWord }}
                </p>
              </li>
            </ul>
          </div> -->
         
          <!-- 播客榜 -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import inedx from '@/commponent/Switch.vue';
import { fetchToplistDetail } from '@/request';
import axios from 'axios';
export default {
  data() {
    return {
      res2: [],
      rege: [], //热歌榜
      randomItems: [], //猜你喜欢榜
    };
  },

  methods: {
    home() {
        this.$router.push('/HomeView');
      },
    fetchPlaylists(cat) {
      axios
        .get(
          'https://netease-cloud-music-api-five-roan-88.vercel.app/search/hot/detail'
        )
        .then((res) => {
          this.rege = res.data.data;
        });
    },
    //猜你喜欢随机触发
    randomItem() {
      let newRege = this.rege.slice();
      let currentIndex = newRege.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = newRege[currentIndex];
        newRege[currentIndex] = newRege[randomIndex];
        newRege[randomIndex] = temporaryValue;
      }
      this.randomItems = newRege.slice(0, 5); // 将结果赋值给randomItems
    },
  },
  mounted() {},
  created() {
    Promise.all([
      axios.get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/search/hot/detail'
      ),
      fetchToplistDetail(),
    ])
      .then((responses) => {
        const res1 = responses[0].data; // 响应结果1
        const res2 = responses[1]; // 响应结果2
        this.rege = res1.data;
        this.randomItem();
        this.res2 = res2
        console.log(res2);
        // 继续处理结果
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>