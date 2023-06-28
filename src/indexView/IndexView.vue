<template>
  <div class="w-[95vw]  ml-[2.5vw] from-[#dddbfb] to-pink-200 bg-[#f7f9fe]">
    <header class="fixed h-[9vw] w-[95vw] top-0 z-30 bg-[#f7f9fe]">
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
        <img :src="item.pic" class=""/>
      </van-swipe-item>
    </van-swipe>

    <!-- 菜单 -->
    <div class="overflow-auto">
       <div >
          <indexmenu class="flex justify-between mt-4 w-[200vw]  " :menu = "wenzi" />
       </div>
    </div>

    <!-- 轮播2 -->
    <div class="home">
        <div>
          <playlist class="mt-5 h-[48vw]" :playlists= "subTitle"/>
        </div>
    </div>
    <!-- 新歌速递 -->
    <div class="mt-[11vw]">
      <p class="text-[5vw] font-bold">
        新歌速递<icon
          icon="ant-design:right-outlined"
          class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
        />
      </p>

      <div class="overflow-auto mt-[5vw]">
          <div>
               <expressDelivery class="w-[800vw]" :express="xinge" :Delivery="introduce"/>
          </div>
      </div>
    </div>
    <!-- 排行榜 -->
    <div>
      <div class="mt-10">
        <p class="text-[5vw] font-bold">
          排行榜<icon
            icon="ant-design:right-outlined"
            class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
          />
        </p>

        <div class="overflow-auto">
            <div>
                <ranking class="w-[600vw] pt-[5vw] h-[92vw]"  :king="phb"/>
            </div>
        </div>
      </div>
    </div>
    <!-- 音乐日历 -->
    <div>
      <div class="w-[95vw]">
        <p class=" text-[5vw] font-bold mt-[5vw] ">
          音乐日历<icon
            icon="ant-design:right-outlined"
            class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
          />
        </p>
        <div class=" bg-[#ffffff] rounded-[4vw] mt-[5vw] shadow-md border-b">
            <div v-for="item in rili" :key="item.da" class="flex" style="display: flex;
    justify-content: space-around;">
          <div class="flex-nowrap" style="display: flex;
    flex-direction: column;
    justify-content: space-around;">
            <p class="text-[#767a93] text-[3vw]">{{ currentMonth }}月{{ currentDay }}日</p>
            <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[70vw] leading-[5vw] font-[700]">{{item.title}}</p>
          </div>
          <img :src="item.imgUrl" alt="" class="w-[16vw] h-[16vw] rounded-[2vw]"/>
        </div>
        </div>
      </div>

     
    </div>
       <!-- 热门话题 -->
    <div class=" overflow-auto">
       <p class=" text-[5vw] font-bold mt-[5vw] ">
          热门话题<icon
            icon="ant-design:right-outlined"
            class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
          />
        </p>
        <div class=" overflow-auto ">
           <div class=" w-[420vw]" style="display: flex;
    justify-content: space-between;">
              <div  v-for="item in subTitle"
              :key="item.id"
              class="w-[60vw] h-[35vw] rounded-[4vw] float-left "
              style="display: flex;
    flex-direction: column;
    align-items: center;
        justify-content: space-around;">
                 <div>
      <div class="flex justify-between items-center text-2xl  font-extrabold">
      
      </div>
      <div class="bg-[#949996] w-[60vw] h-[30vw] rounded-[2vw] px-[3vw] flex flex-col justify-evenly">
          <div class="flex text-[#fff] items-center">
            <Icon icon="icon-park-solid:topic" width="5vw" height="5vw" />
            <span> 最令你感动的那首情歌</span> 
          </div>
          <span class="text-[2vw] text-[#ccc]">484万热度</span>
          <div class=" overflow-hidden h-[15vw] flex items-end justify-between " >
            <div class="text-[3vw] w-[40vw] h-[10vw] text-[#fff]">Saint-Denis:今日份的感动  “我希望我们两个之间的爱</div>
            <img :src="item.uiElement.image.imageUrl" alt="" class="h-[15vw] w-[15vw]" >
          </div>
      </div>
    </div>

              </div>
           </div>
        </div>
    </div>
   
  </div>
</template>

<script>
import axios from 'axios';
import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css';
import indexmenu from './menu.vue';//菜单
import playlist from './playlist.vue';//推荐歌单
import expressDelivery from "./expressDelivery.vue"//新歌速递
import ranking from "./ranking.vue"//排行榜

export default {
  components: {
   ranking,
   indexmenu,
   playlist,
   expressDelivery,
   
  },
  data() {
    return {
       currentMonth: '',
      currentDay: '',
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
    
  },

  mounted() {
    const date = new Date();
    this.currentMonth = date.getMonth() + 1; // 月份从 0 开始，所以需要加1
    this.currentDay = date.getDate();
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  
  },
  beforeDestroy() {
   
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
.van-swipe {
    border-radius: 4vw;
    position: relative;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    cursor: grab;
    -webkit-user-select: none;
    user-select: none;
}
</style>
