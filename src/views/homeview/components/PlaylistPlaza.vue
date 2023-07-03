<template>
  <div class="bg-[#f7fafc] pl-[4vw] pr-[4vw]">
    <header>
      <div
        class="flex relative"
        style="justify-content: space-around; align-items: center"
      >
        <router-link :to="{ path: '/HomeView' }">
          <Icon
            icon="ph:arrow-left-thin"
            style="font-size: 7.5vw"
            class="font-bold"
          />
        </router-link>
        <input
          type="text"
          name=""
          id=""
          placeholder="大家都在搜　向云端"
          class="rounded-3xl h-[30px] pl-2 bg-gradient-to-r from-[#dddbfb] to-pink-50 w-[80%]"
          style="border: 1px solid #ccc; text-indent: 2em"
        />
        <Icon
          icon="ic:sharp-search"
          class="absolute"
          style="left: 12vw; top: 2vw"
        />
        <button class="text-[16px] ml-[10px]">搜索</button>
      </div>
      <div class="flex justify-around my-5">
        <p class="flex items-center">
          <Icon
            icon="streamline:interface-user-single-close-geometric-human-person-single-up-user"
            color="red"
            style="margin-right: 5px"
          >
          </Icon>
          歌手
        </p>
        <p style="color: #ccc">|</p>
        <p class="flex items-center">
          <Icon
            icon="material-symbols:genres"
            color="red"
            style="margin-right: 5px"
          >
          </Icon>
          曲风
        </p>
        <p style="color: #ccc">|</p>
        <p class="flex items-center">
          <Icon icon="entypo:note" color="red" style="margin-right: 5px">
          </Icon>
          专区
        </p>
        <p style="color: #ccc">|</p>
        <p class="flex items-center">
          <Icon icon="typcn:microphone" color="red" style="margin-right: 5px">
          </Icon>
          识曲
        </p>
      </div>
      <div class="my-5">
        <p class="flex items-center justify-between">
          搜索历史
          <Icon icon="bi:trash" class="text-[#bfc2c4]"> </Icon>
        </p>
        <div class="flex mt-[3vw]">
          <p
            class="h-[8vw] rounded-[4vw] bg-[#ffffff]"
            style="line-height: 8vw; text-align: center"
          >
            &nbsp;&nbsp;音乐日历&nbsp;&nbsp;
          </p>
        </div>
      </div>
      <div class="my-5">
        <p class="flex items-center justify-between pl">
          猜你喜欢
          <button @click="randomItem">
            <Icon icon="iconoir:refresh" class="text-[#bfc2c4]"></Icon>
          </button>
        </p>
        <div class="flex mt-[3vw]">
          <p
            v-for="item in randomItems"
            :key="item.id"
            class="h-[8vw] rounded-[4vw] bg-[#ffffff]"
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
                class="font-[4vw] overflow-hidden overflow-ellipsis whitespace-nowrap"
                :class="{ 'font-[700]': indexs < 3 } "
                style="line-height: 10vw"
            >
                <span
                    class="mr-[5vw] font-[700]"
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