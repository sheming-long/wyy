<template>
  <div class="bg-[#927d4d] overflow-hidden">
    <!-- 头部 -->
    <div
      class="flex pl-[4vw] pr-[4vw] py-4 justify-between items-center"
      :class="`${
        scrollDistance >= 45
          ? 'fixed top-0 z-[999] right-0 left-0 bg-[#927d4d]'
          : ''
      }`"
    >
      <div class="flex w-[65vw]">
        <router-link :to="{ path: '/HomeView' }">
          <Icon
            icon="ri:arrow-left-line"
            style="font-size: 7vw"
            class="font-600 text-[5vw] text-[#fbfbf5]"
          />
        </router-link>
        <span
          class="text-[5vw] text-[#fbfbf5] font-[700]"
          v-if="scrollDistance <= 45"
        >
          {{ title }}
        </span>
        <p
          class="text-[5vw] text-[#fbfbf5] font-[700] line-clamp-2 h-[28px]"
          v-if="scrollDistance > 45"
        >
          {{ musicData.playlist?.name }}
        </p>
      </div>
      <div class="justify-between flex w-[20vw]">
        <Icon icon="ic:sharp-search" class="text-[5vw] text-[#fbfbf5]" />
        <Icon
          icon="teenyicons:more-vertical-outline"
          class="text-[5vw] text-[#fbfbf5]"
        />
      </div>
    </div>
    <!-- 头部 -->
    <!-- 中间 -->
    <div  class=" relative">
      <span
                  class="flex w-[5vw] h-[5vw] rounded-[50%] bg-[#a18f64] absolute"
                  style="align-items: center; justify-content: space-around ;left: 91vw;top: 0vw;"
                  @click="rotateElement"
                  ><Icon
                    icon="bytesize:chevron-bottom"
                    class="text-[3vw] text-[#faf8f8] rotate-component"
                    @click.native="handleArrowUpClick"
                /></span>       
      <transition name="fade" mode= "out-in"> 
     
        <div
          v-if="condition"
          class="mt-[3.8vw] pl-[4vw] pr-[4vw] flex"
          style="flex-direction: column"
          key="text1"
        >
          <div class="flex">
            <div class="mr-4 relative w-[27vw]">
              <img
                :src="musicData.playlist?.coverImgUrl"
                alt=""
                class="w-[24vw] h-[24vw] rounded-[3vw] z-[30] relative mt-[1vw]"
                style="box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5)"
              />
              <div
                class="absolute top-[2vw] right-[4vw] font-[600] text-[#fff] flex items-center z-[35]"
              >
                <span
                  class="text-[#ffffff] whitespace-nowrap text-right text-[2.3vw]"
                >
                  <icon
                    icon="solar:play-bold"
                    class="float-left text-[2.3vw] text-[#ffffff] mt-[0.8vw] pr-[1vw]"
                  />
                  {{ Math.floor(musicData.playlist?.playCount / 10000) }}万
                </span>
              </div>
              <div
                class="w-[20vw] h-[25vw] bg-[#9a8e73] absolute top-[0vw] left-[2vw] rounded-[6px] z-[0]"
              ></div>
            </div>
            <div
              class="w-[65vw] flex justify-around"
              style="flex-direction: column"
            >
              <p class="w-[60vw] flex text-[#fff] justify-between">
                <span class="text-[4vw] font-[600] w-[52vw]">
                  {{ musicData.playlist?.name }}
                </span>

                
              </p>
              <p
                class="w-[62vw] flex text-[3.5vw] text-[#d4c3a0] items-center my-1"
              >
                <span
                  class="inline-block w-[6.25vw] h-[6.25vw] rounded-[50%] bg-[black] mr-[3vw]"
                >
                  <img
                    :src="musicData.playlist?.creator.avatarUrl"
                    alt=""
                    class="rounded-[50%]"
                  />
                </span>
                <span
                  class="inline-block w overflow-hidden overflow-ellipsis whitespace-nowrap"
                  style="max-width: 35vw"
                >
                  {{ musicData.playlist?.creator.nickname }}
                </span>
                <span
                  class="flex w-[14vw] h-[5.2vw] bg-[#a38d5f] rounded-[4vw] ml-[3vw] items-center justify-between"
                >
                  &nbsp;
                  <Icon icon="ic:outline-add" /> 关注 &nbsp;
                </span>
              </p>
              <p
                class="w-[12vw] h-[5vw] bg-[#a38d5f] flex text-[2.2vw] text-[#d4c3a0] justify-around items-center rounded-[1.5vw] my-1 p-[3px] box-border"
              >
                6.0分
                <Icon icon="mingcute:right-line" />
              </p>
            </div>
          </div>
          <div class="flex pl-[4vw] pr-[4vw] mt-[3.5vw] items-center">
            <p
              class="text-[#af9d72] w-[87vw] overflow-hidden overflow-ellipsis whitespace-nowrap text-[3vw]"
            >
              {{ musicData.playlist?.description }}
            </p>
            <Icon icon="mingcute:right-line" class="text-[#af9d72]" />
          </div>
        </div>
        <div v-else key="text2">
          <p
            class="flex pl-[4vw] pr-[4vw]"
            style="justify-content: space-between"
          >
            <span class="text-[2vw] text-[#d8c7b1]"
              >喜欢这个歌单的用户也听了</span
            >
           
          </p>

          <div class="overflow-auto  pr-[4vw] mt-[4vw]">
            <div
              class="flex"
              :style="`width:${musicSlider.playlists?.length * 30 + 30}vw`"
              style="justify-content: space-around"
            >
              <div
                v-for="item in musicSlider.playlists"
                :key="item.tom"
                class="w-[32vw]"
              >
                <img
                  :src="item.coverImgUrl"
                  alt=""
                  class="w-[32vw] h-[32vw] rounded-[3vw]"
                />
                <p class="line-clamp-2 text-[#fff] text-[2vw] mt-[2vw]">
                  {{ item.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- 中间 -->

    <!-- 分享，评论和播放量 -->
    <div class="flex mt-[5vw] mb-[5vw] justify-around">
      <p
        class="w-[29vw] h-[10vw] bg-[#b7a47c] text-[3.5vw] rounded-[5vw] font-[700] text-[#fff] text-center flex leading-[10vw] justify-center items-center"
      >
        <Icon
          icon="fa:mail-forward"
          width="15"
          class="text-[#fff] mr-[1.5vw]"
        />
        {{ musicData.playlist?.shareCount }}
      </p>
      <p
        class="w-[29vw] h-[10vw] bg-[#b7a47c] text-[3.5vw] rounded-[5vw] font-[700] text-[#fff] text-center flex leading-[10vw] justify-center items-center"
      >
        <Icon
          icon="streamline:mail-chat-bubble-typing-oval-messages-message-bubble-typing-chat"
          class="text-[#fff] mr-[1.5vw]"
          width="15"
        />
        {{ musicData.playlist?.commentCount }}
      </p>
      <p
        class="w-[29vw] h-[10vw] text-[3.5vw] rounded-[5vw] font-[700] text-[#fff] text-center bg-[#fd2658] flex leading-[10vw] justify-center items-center"
      >
        <Icon
          icon="fluent:collections-24-filled"
          width="15"
          class="text-[#fff] mr-[1.5vw]"
        />
        {{ musicData.playlist?.subscribedCount }}
      </p>
    </div>

    <!-- 底部数据渲染 -->
    <div
      class="w-[100%] pl-[3vw] pr-[3vw] bg-[#ffffff]"
      style="border-top-left-radius: 3vw; border-top-right-radius: 3vw"
    >
      <header
        class="w-[107%] ml-[-3vw] h-[11vw] bg-[#f0ece6] text-[3.5vw] flex"
        style="
          border-top-left-radius: 3vw;
          border-top-right-radius: 3vw;
          justify-content: space-around;
          align-items: center;
        "
      >
        <Icon icon="mdi:movie-play-outline" class="text-[red] text-[6vw]" />
        <p style="margin-left: -15vw">
          含<span class="text-[#667a88]">24</span>首vip专属歌曲
        </p>
        <span class="flex text-[#908c84]" style="align-items: center"
          >vip仅0.22元/天
          <Icon icon="mingcute:right-line" class="text-[#af9d72]"
        /></span>
      </header>
      <div
        class="h-[15vw] flex"
        style="justify-content: space-between"
        :class="`${
          scrollDistance >= 200
            ? 'fixed top-[14vw] z-[999] right-0 left-0 w-[100%] pl-[3vw] pr-[3vw] bg-[white]'
            : ''
        }`"
      >
        <p
          class="w-[34vw] flex h-[100%]"
          style="align-items: center; justify-content: space-between"
        >
          <Icon
            icon="teenyicons:play-circle-solid"
            class="text-[6vw] text-[#ff3726]"
          />
          <span class="font-[600] text-[4vw]">播放全部</span>
          <span class="text-[#949485] text-[3vw]"
            >({{ musicmMean.songs?.length }})</span
          >
        </p>
        <p
          class="w-[16vw] flex h-[100%]"
          style="align-items: center; justify-content: space-between"
        >
          <Icon icon="clarity:download-line" class="text-[5vw] font-[600]" />
          <Icon icon="ri:menu-add-line" class="text-[5vw] font-[600]" />
        </p>
      </div>

      <div class="mt-[-3vw]">
        <li
          class="h-[11vw] flex w-[100%] mt-[5vw]"
          v-for="(item, index) in musicmMean.songs"
          :key="item.id"
          :class="{ 'pl-[3vw]': index < 9, 'ml-[1.1vw]': index >= 9 }"
        >
          <div
            class="text-[#a5a5a5] font-[3vw] h-[100%] flex"
            style="align-items: center"
          >
            {{ index + 1 }}
          </div>
          <div class="relative ml-[5vw]">
            <p
              class="overflow-hidden overflow-ellipsis whitespace-nowrap w-[75vw]"
            >
              {{ item.name }}
            </p>
            <p
              class="overflow-hidden overflow-ellipsis whitespace-nowrap w-[75vw] text-[2vw] text-[#818181]"
            >
              <span
                class="text-[10px] rounded-[10px]"
                style="
                  color: #c2ab73;
                  background-color: #fffbeb;
                  padding: 3px;
                  border-radius: 5px;
                  border: 1px solid #e5e8d0;
                  box-sizing: border-box;
                "
                >超清母带</span
              >
              <span v-if="item.ar[0]"> {{ item.ar[0].name }}</span>
              <span v-if="item.ar[1]">/{{ item.ar[1].name }}</span>
              <span v-if="item.ar[2]">/{{ item.ar[2].name }}</span>
            </p>
            <Icon
              icon="teenyicons:more-vertical-outline"
              class="text-[5vw] text-[#adadad] absolute left-[80vw] top-[3vw] z-10"
            />
          </div>
        </li>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      musicSlider: [],
      condition: true,
      id: 0,
      musicData: [],
      musicmMean: [],
      //滚动距离
      scrollDistance: null,
      //歌单标题
      title: '歌单',
    };
  },
  methods: {
    rotateElement() {
      // 切换rotate类
      const element = document.querySelector('.rotate-component');
      element.classList.toggle('rotate');
    },
    local() {
      let url = window.location.href;
      let index = url.lastIndexOf('/') + 1;
      this.id = url.slice(index);
    },
    scrollNum() {
      this.scrollDistance =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    handleArrowUpClick() {
      this.condition = !this.condition;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollNum);
  },
  beforeDestroy() {
    // 移除滚动事件监听
    window.removeEventListener('scroll', this.scrollNum);
  },
  async created() {
    this.local();
    axios
      .get(
        `https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=${this.id}`
      )
      .then((res) => {
        this.musicData = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/track/all?id=${this.id}`
      )
      .then((res) => {
        this.musicmMean = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://netease-cloud-music-api-five-roan-88.vercel.app/related/playlist?id=${this.id}`
      )
      .then((res) => {
        this.musicSlider = res.data;
        console.log(this.musicSlider);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
li {
  list-style: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.rotate-component {
  /* 添加要旋转的样式 */
  transform: rotate(0deg);
  transition: transform 0.6s ease;
}

.rotate-component.rotate {
  /* 旋转180度的样式 */
  transform: rotate(180deg);
}
</style>












