<template>
  <div class="w-[95vw] h-screen ml-[2.5vw] from-[#dddbfb] to-pink-200">
    <header class="fixed h-[9vw] w-[95vw] top-0 z-30 bg-[#ffffff]">
      <icon icon="prime:bars" class="w-[9vw] h-[9vw] float-left" />
      <input
        type="text"
        class="border-[none] h-[9vw] ml-3 w-[72vw] outline-sky-600 bg-gradient-to-r from-[#dddbfb] to-pink-500 rounded-[4.5vw] placeholder-indent pl-[5vw]"
        placeholder="🔍薛之谦 最近很火哦"
      />
      <icon
        icon="ri:netease-cloud-music-fill"
        class="w-[9vw] h-[9vw] float-right inline-block"
      />
    </header>

    <!-- 轮播1 -->
    <van-swipe :autoplay="3000" lazy-render class="w-[95vw] h-[35vw] mt-[14vw]">
      <van-swipe-item v-for="item in menu" :key="item.id">
        <img :src="item.pic" />
      </van-swipe-item>
    </van-swipe>

    <!-- 菜单 -->
    <div class="overflow-auto">
      <ul class="flex justify-between mt-4 w-[200vw]">
        <li v-for="item in wenzi" :key="item.tiancai" class="text-center">
          <icon
            :icon="item[1]"
            class="text-[#ff3a4c] w-[9vw] h-[9vw] ml-[16%]"
          ></icon>
          {{ item[0] }}
        </li>
      </ul>
    </div>

    <!-- 轮播2 -->
    <div class="home">
      <div class="mt-5 h-[48vw]">
        <p class="text-2xl">
          推荐歌单<icon
            icon="ant-design:right-outlined"
            class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
          />
        </p>
        <div class="swiper-container mt-3">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide relative"
              v-for="item in subTitle"
              :key="item.id"
            >
              <img
                :src="item.uiElement.image.imageUrl"
                alt=""
                class="w-[32vw] h-[32vw] rounded-[4vw]"
              />
              <p class="absolute z-40 h-[2.9rem] line-clamp-2 text-[4vw]">
                {{ item.uiElement.mainTitle.title }}
              </p>
              <span class="absolute top-0 right-3 text-[#ffffff]"
                ><icon
                  icon="prime:caret-right"
                  class="float-left w-[4vw] h-[4vw] text-[#ffffff] mt-[0.8vw]"
                />
                {{
                  Math.floor(
                    item.resources[0].resourceExtInfo.playCount / 10000
                  )
                }}万</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新歌速递 -->
    <div class="mt-[11vw]">
      <p class="text-2xl">
        新歌速递<icon
          icon="ant-design:right-outlined"
          class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
        />
      </p>

      <div class="overflow-auto mt-[5vw]">
        <div class="w-[800vw]">
          <div
            class="float-left mr-[5vw]"
            v-for="item in xinge"
            :key="item.xxx"
          >
            <li class="flex w-[95vw] h-[15vw]">
              <img
                :src="item.resources[0].uiElement.image.imageUrl"
                alt=""
                class="w-[15vw] h-[15vw] rounded-[3vw]"
              />
              <div class="xuanz">
                <p class="whitespace-nowrap text-[4vw] font-bold">
                  {{ item.resources[0].uiElement.mainTitle.title }}
                </p>
                <p class="whitespace-nowrap text-[3vw] text-[#7b7d82]">
                  <span
                    class="text-[10px]"
                    style="
                      color: red;
                      background-color: #efe6e4;
                      padding: 3px;
                      border-radius: 2px;
                    "
                    >{{ introduce[0] }}</span
                  >
                  {{ item.resources[0].uiElement.subTitle.title }}
                  -
                  {{ item.resources[0].resourceExtInfo.artists[0].name }}
                </p>
              </div>
            </li>
            <li class="flex w-[95vw] h-[15vw] mt-[5vw]">
              <img
                :src="item.resources[1].uiElement.image.imageUrl"
                alt=""
                class="w-[15vw] h-[15vw] rounded-[3vw]"
              />
              <div class="xuanz">
                <p class="whitespace-nowrap text-[4vw] font-bold">
                  {{ item.resources[1].uiElement.mainTitle.title }}
                </p>
                <p class="whitespace-nowrap text-[3vw] text-[#7b7d82]">
                  <span
                    class="text-[10px]"
                    style="
                      color: red;
                      background-color: #e6e0b9;
                      padding: 3px;
                      border-radius: 2px;
                      color: yellow;
                    "
                    >{{ introduce[1] }}</span
                  >
                  {{ item.resources[1].uiElement.subTitle.title }}
                  -
                  {{ item.resources[1].resourceExtInfo.artists[0].name }}
                </p>
              </div>
            </li>
            <li class="flex w-[95vw] h-[15vw] mt-[5vw]">
              <img
                :src="item.resources[2].uiElement.image.imageUrl"
                alt=""
                class="w-[15vw] h-[15vw] rounded-[3vw]"
              />
              <div class="xuanz">
                <p class="whitespace-nowrap text-[4vw] font-bold">
                  {{ item.resources[2].uiElement.mainTitle.title }}
                </p>
                <p class="whitespace-nowrap text-[3vw] text-[#7b7d82]">
                  <span
                    class="text-[10px]"
                    style="
                      color: red;
                      background-color: #e6e0b9;
                      padding: 3px;
                      border-radius: 2px;
                      color: yellow;
                    "
                    >{{ introduce[2] }}</span
                  >
                  {{ item.resources[2].uiElement.subTitle.title }}
                  -
                  {{ item.resources[2].resourceExtInfo?.artists[0].name }}
                </p>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
    <!-- 排行榜 -->
    <div>
      <div class="mt-10">
        <p class="text-2xl">
          排行榜<icon
            icon="ant-design:right-outlined"
            class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
          />
        </p>

        <div class="overflow-auto">
          <div class="w-[600vw] pt-[5vw]">
            <div
              class="float-left mr-[5vw] bg-[#f7eeda] h-[86vw] text-2xl rounded-[4vw]"
              v-for="(item, index) in phb"
              :key="index"
            >
              <p style="margin-top: 10vw; padding: 0 3vw">
                霸歌榜
                <icon
                  icon="ant-design:right-outlined"
                  class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
                />
                <span class="float-right text-[#929a9a] text-xl"
                  >云村用户都在听</span
                >
              </p>
              <li
                class="flex w-[95vw] h-[15vw] mt-[5vw]"
                style="padding: 0 3vw"
              >
                <img
                  :src="item.resources[0].uiElement.image.imageUrl"
                  alt=""
                  class="w-[15vw] h-[15vw] rounded-[3vw]"
                />
                <div class="xuanz relative">
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[80vw] leading-[5vw]"
                  >
                    {{ item.resources[0].uiElement.mainTitle.title }}
                  </p>
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[75vw] text-right text-[red] leading-[5vw]"
                  >
                    {{ item.resources[0].uiElement.labelText.text }}
                  </p>
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[3vw] leading-[3vw] w-[80vw]"
                  >
                    {{
                      item.resources[0].resourceExtInfo?.songData.artists[0]
                        .name
                    }}
                  </p>
                  <p
                    class="absolute text-[#cea951] text-[4vw] left-[-6vw] font-extrabold"
                  >
                    1
                  </p>
                </div>
              </li>
              <li
                class="flex w-[95vw] h-[15vw] mt-[5vw]"
                style="padding: 0 3vw"
              >
                <img
                  :src="item.resources[1].uiElement.image.imageUrl"
                  alt=""
                  class="w-[15vw] h-[15vw] rounded-[3vw]"
                />
                <div class="xuanz relative">
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[80vw] leading-[5vw]"
                  >
                    {{ item.resources[1].uiElement.mainTitle.title }}
                  </p>
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[75vw] text-right text-[red] leading-[5vw]"
                  >
                    {{ item.resources[1].uiElement.labelText.text }}
                  </p>
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[3vw] leading-[3vw] w-[80vw]"
                  >
                    {{
                      item.resources[1].resourceExtInfo?.songData.artists[0]
                        .name
                    }}
                  </p>
                  <p
                    class="absolute text-[#767a93] text-[4vw] left-[-6vw] font-extrabold"
                  >
                    2
                  </p>
                </div>
              </li>
              <li
                class="flex w-[95vw] h-[15vw] mt-[5vw]"
                style="padding: 0 3vw"
              >
                <img
                  :src="item.resources[2].uiElement.image.imageUrl"
                  alt=""
                  class="w-[15vw] h-[15vw] rounded-[3vw] bg-[100%]"
                />
                <div class="xuanz relative">
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[80vw] leading-[5vw]"
                  >
                    {{ item.resources[2].uiElement.mainTitle.title }}
                  </p>
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[75vw] text-right text-[red] leading-[5vw]"
                  >
                    {{ item.resources[2].uiElement.labelText.text }}
                  </p>
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[3vw] leading-[3vw] w-[80vw]"
                  >
                    {{
                      item.resources[2].resourceExtInfo?.songData.artists[0]
                        .name
                    }}
                  </p>
                  <p
                    class="absolute text-[#b58262] text-[4vw] left-[-6vw] font-extrabold"
                  >
                    3
                  </p>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 音乐日历 -->
    <div>
      <div class="w-[95vw]">
        <p class="text-2xl mt-[5vw] w">
          音乐日历<icon
            icon="ant-design:right-outlined"
            class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
          />
        </p>
        <div v-for="item in rili" :key="item.da" class="flex">
          <div class="flex-nowrap">
            <p >6月28日</p>
            <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[70vw] leading-[5vw]">{{item.title}}</p>
          </div>
          <img :src="item.imgUrl" alt="" class="w-[16vw] h-[16vw]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import Swiper from 'swiper';
import '../node_modules/swiper/css/swiper.css';
import BScroll from '@better-scroll/core';
import ScrollBar from '@better-scroll/scroll-bar';
BScroll.use(ScrollBar);
export default {
  data() {
    return {
      introduce: ['超71%人播放', '沉浸声', 'HI-Res'],
      rili: [],
      num: 12,
      phb: [],
      menu: [],
      subTitle: [],
      xinge: [],
      wenzi: [
        [' 每日推荐', 'ion:calendar-number'],
        ['私人漫游', 'material-symbols:radio'],
        ['歌单', 'solar:playlist-minimalistic-2-outline'],
        ['排行榜', 'icon-park-outline:ranking'],
        ['召回有礼', 'solar:gift-bold'],
        [' 每日推荐', 'ion:calendar-number'],
        ['私人漫游', 'material-symbols:radio'],
        ['歌单', 'solar:playlist-minimalistic-2-outline'],
        ['排行榜', 'icon-park-outline:ranking'],
        ['召回有礼', 'solar:gift-bold'],
      ],
      swiper: null,
    };
  },
  methods: {
    fetchPlaylists(cat) {
      axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
        )
        .then((res) => {
          this.menu = res.data.data.blocks[0].extInfo.banners;
          this.subTitle = res.data.data.blocks[1].creatives;
          this.xinge = res.data.data.blocks[5].creatives;
          this.phb = res.data.data.blocks[3].creatives;
        });

      axios
        .get(
          'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000'
        )
        .then((res) => {
          this.rili = res.data.data.calendarEvents;
        });
    },
    init() {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollX: true,
        scrollY: false,
        click: true,
        probeType: 1,
        scrollbar: {
          fade: false,
          interactive: true,
          scrollbarTrackClickable: true,
          scrollbarTrackOffsetType: 'clickedPoint', // can use 'step'
        },
      });
      this.scroll.on('scrollEnd', () => {
        console.log('scrollEnd');
      });
      this.scroll.on('scrollStart', () => {
        console.log('scrollStart');
      });
      this.scroll.on('scroll', () => {
        console.log('scroll');
      });
    },
  },

  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    this.init();
  },
  beforeDestroy() {
    this.scroll.destroy();
  },
  created() {
    // Vue组件的生命周期钩子函数，实例创建完成后自动调用
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
      )
      .then(() => {
        this.fetchPlaylists();
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.active {
  color: red;
}
.placeholder-indent::placeholder {
  text-indent: 4em;
}
li {
  list-style: none;
}
.swiper-container img,
video {
  /* max-width: 100%; */
  width: 32vw !important;
  height: 32vw !important;
  margin-right: 2vw !important;
}
.swiper-slide {
  flex-shrink: 0;
  width: 32vw !important;
  height: 32vw !important;
  margin-right: 2vw !important;
  position: relative;
  transition-property: transform;
  overflow: visible;
}

.swiper-container {
  height: 50vw !important;
}
.xuanz {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-indent: 2em;
}
.xuanz p {
  height: 7.5vw;
}
.horizontal-scrollbar-container .scroll-wrapper {
  position: relative;
  display: flex;
  align-content: center;
  width: 95vw;
  height: 50vw;
  margin-top: 5vw;
  white-space: nowrap;
  overflow: hidden;
}

.scroll-content {
  display: inline-block;
  align-self: center;
}
.scroll-item {
  opacity: 0.6;
  color: black;
  box-sizing: border-box;
  width: 95vw;
  height: 50vw;
  line-height: 50px;
  border-radius: 50%;
  font-size: 18px;
  display: inline-block;
  padding: 0 10px;
  margin: 0 10px;
}
</style>
