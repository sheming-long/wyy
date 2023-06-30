<template>
  <div class="w-[100vw] pl-[2.5vw] pr-[2.5vw] mt-[-5vw] " style="background: rgb(245,117,255);
background: linear-gradient(45deg, rgba(245,117,255,1) 0%, rgba(102,229,255,1) 100%);">
    <header class="fixed h-[9vw] w-[100vw] top-0 z-30   ml-[-2.5vw]" style="background: rgb(245,117,255);
background: linear-gradient(45deg, rgba(245,117,255,1) 0%, rgba(102,229,255,1) 100%);">
      <button @click="drawerVisible = !drawerVisible"  class="w-[9vw] h-[9vw] float-left"> <icon icon="prime:bars" class="w-[9vw] h-[9vw] float-left" /></button>
    <!-- <Drawer :visible="drawerVisible" @自定义事件="(e) => (drawerVisible = e)"> -->
   
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
       <Drawer :visible.sync="drawerVisible" direction="ltr"  @自定义事件="(e) => (drawerVisible = e) " class="overflow-y: auto;">
          <div class="h-[100%]">
               <header class="w-[80vw] h-[14vw] pt-[1vw] flex">
                  <img src="https://th.bing.com/th/id/OIP.WbYdRehHUCayfya36132_wHaHa?pid=ImgDet&rs=1" alt="" class="w-[12vw] h-[12vw] rounded-[50%] bg-cover">
                  <p class="text-[6vw] font-[700] ml-[3vw] w-[15vw]" style="line-height:14vw " >麹义</p>
                  <icon icon="ant-design:right-outlined" class="w-[8vw] h-[8vw] inline-block mt-[3vw] ml-[2vw]"/>
                  <icon icon="tabler:scan" class="w-[10vw] h-[10vw] inline-block  ml-[23vw] mt-[2vw] "/>
               </header>

               <div class=" mt-[6vw] rounded-[4vw] w-[70vw] h-[30vw] pt-[2vw] ml-[2.5vw]" style="background: rgb(60,58,56);
background: linear-gradient(90deg, rgba(60,58,56,1) 0%, rgba(95,81,78,1) 100%);">
                   <p class="h-[6vw] text-[#f9e7de] font-[700] text-[4vw] " style="text-indent:1em ;">续费黑胶Vip <span class="h-[2vw] w-[10vw] rounded-[1vw] bg-[#000000] inline-block relative ml-[2vw]">
                    <span class="h-[2vw] w-[7vw] rounded-[1vw] bg-[balck] inline-block absolute left-0" style="background: rgb(227,195,191);
background: linear-gradient(90deg, rgba(227,195,191,1) 0%, rgba(255,255,255,1) 100%);"></span>
                    </span>
                    <span  class="h-[2vw] w-[10vw] rounded-[1vw] inline-block text-[#7b706f]">4v</span>
                    <span class=" h-[6vw]  border-[0.5vw ]  rounded-[3vw] text-[2vw] inline-block" style=" border: #aa9793 solid 0.25vw; line-height:6vw ; text-align: center; text-indent:0;">&nbsp;&nbsp;会员中心&nbsp;</span>
                    </p>
                <div>
                  <p class="  text-[3vw] text-[#9a958d] ml-[5vw] mt-[3vw]">礼品卡&nbsp;&nbsp;|&nbsp;&nbsp;毕业快乐</p>
               </div>

               <div class="text-[3vw] text-[#9a958d]  ml-[5vw] mt-[3vw] h-[11vw] w-[60vw]" style="border-top: 1px solid #aa9793; line-height:11vw ">
                  受邀专享,黑胶vip低至0.27元/天!
               </div>
               </div>

               
          </div>
    </Drawer>
    <!-- 轮播1 -->
    <van-swipe :autoplay="3000" lazy-render class="w-[95vw] h-[35vw] mt-[14vw]">
      <van-swipe-item v-for="item in menu" :key="item.id">
        <img :src="item.pic" class="" />
      </van-swipe-item>
    </van-swipe>

    <!-- 菜单 -->
    <div class="overflow-auto">
      <div>
        <indexmenu class="flex justify-between mt-4 w-[200vw]" :menu="wenzi" />
      </div>
    </div>

    <!-- 轮播2 -->
    <div>
		<p class="text-2xl mb-3 flex items-center">
			推荐歌单
			<Icon icon="ep:arrow-right-bold" width="20" />
			<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[200px]" />
		</p>
		<ul class="overflow-hidden h-[40vw]">
			<div class="swiper-container2 h-[100%] w-[33%]">
				<div class="swiper-wrapper">
					<div class="swiper-slide mr-4">
						<div class="w-[32vw] h-[40vw] overflow-hidden relative">
							<transition name="abc">
								<div v-if="visibles" class=" absolute top-0 left-0">
									<img alt=""
										src="http://p2.music.126.net/XsTsiy7w_IAtqLIc6kMRAg==/109951168690739808.jpg"
                     class="w-[32vw] h-[32vw] rounded-[4vw]" />
									<p class="absolute z-40 h-[2.9rem] line-clamp-2 text-[3vw] font-[700]">
										那些好听的日漫主题曲
									</p>
									<p class="absolute" style="top: 10px; right: 10px; color: white">
										<Icon icon="ion:infinite" width="20" />
									</p>
								</div>
							</transition>
							<transition name="abc">
								<div v-if="!visibles" class=" absolute top-0 left-0">
									<img alt="" src="http://p1.music.126.net/yfPmJYEpSgEMG_y5u0MtIA==/109951168649207060.jpg"
									  class="w-[32vw] h-[32vw] rounded-[4vw]" />
									<p class="absolute z-40 h-[2.9rem] line-clamp-2 text-[3vw] font-[700]">
										评论数最多的动漫音乐TOP100（长期更新）
									</p>
									<p class="absolute" style="top: 10px; right: 10px; color: white">
										<Icon icon="ion:infinite" width="20" />
									</p>
								</div>
							</transition>
						</div>
       
					</div>
			     		<div v-for="(item) in subTitle" :key="item.id2" class="swiper-slide mr-4 relative">
					 <img
                :src="item.uiElement.image.imageUrl"
                alt=""
                class="w-[32vw] h-[32vw] rounded-[4vw]"
              />
              <p class="absolute z-40 h-[2.9rem] line-clamp-2 text-[3vw] font-[700]">
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
                }}万</span>
					</div>
				</div>
			</div>
		</ul>
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
          <expressDelivery
            class="w-[800vw]"
            :express="xinge"
            :Delivery="introduce"
          />
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
            <ranking class="w-[600vw] pt-[5vw] h-[92vw]" :king="phb" />
          </div>
        </div>
      </div>
    </div>
    <!-- 音乐日历 -->
    <div>
      <div class="w-[95vw]">
        <p class="text-[5vw] font-bold mt-[5vw]">
          音乐日历<icon
            icon="ant-design:right-outlined"
            class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
          />
        </p>
        <div>
          <calenda
            class="bg-[#ffffff] rounded-[4vw] mt-[5vw] shadow-md border-b"
            :xxs="rili"
            :Month="currentMonth"
            :Day="currentDay"
          />
        </div>
      </div>
    </div>
    <!-- 热门话题 -->
    <div class="overflow-auto">
      <p class="text-[5vw] font-bold mt-[5vw]">
        热门话题<icon
          icon="ant-design:right-outlined"
          class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
        />
      </p>
      <div class="overflow-auto">
            <div>
              <trendingTopics  class="w-[420vw]"
          style="display: flex; justify-content: space-between"  :playlists="subTitle"/>
            </div>
      </div>
    </div>
    
  </div>
  
</template>

<script>
import axios from 'axios';
import Swiper from 'swiper';
import BScroll from '@better-scroll/core';
import ScrollBar from '@better-scroll/scroll-bar';
import '../../../node_modules/swiper/css/swiper.css';
import indexmenu from './components/menu.vue'; //菜单
import playlist from './components/playlist.vue'; //推荐歌单
import expressDelivery from './components/expressDelivery.vue'; //新歌速递
import ranking from './components/ranking.vue'; //排行榜
import calenda from './components/calenda.vue'; //日历
import trendingTopics from './components/trendingTopics.vue';

export default {
  
  components: {
    ranking,
    indexmenu,
    playlist,
    expressDelivery,
    calenda,
    trendingTopics,
  },
  data() {
    return {
      visibles: true,
      drawerVisible:false,
      visible: true,
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
   updated() {
		this.$nextTick(() => {
			this.getswiper();
		});
	},
  methods: {
    getswiper(){
			new Swiper('.swiper-container', {
				paginationClickable: true,
				touchMoveStopPropagation: false,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
			new Swiper('.swiper-container2', {
				paginationClickable: true,
				touchMoveStopPropagation: false,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		},
  

    fn(e) {
      this.drawerVisible = e;
    },
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
    	setInterval(() => {
			this.visibles = !this.visibles
		}, 3000);
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
  beforeDestroy() {},
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
.swiper-slide{
  overflow: visible;
}
body{
   margin-top: -5vw;
   background: rgb(175,226,244);
   background: linear-gradient(45deg, rgba(175,226,244,1) 0%, rgb(205, 224, 235) 100%);

}
*{
  margin: 0;
  padding: 0;
 
}
.abc-enter {
	transform: translateY(100%) scale(.7);
 
}

.abc-enter-active {
	transition: all ease-in-out 1s;
}

.abc-enter-to {
 
	transform: translateY(0) scale(1);
}

.abc-leave {
	transform: translateY(0) scale(1);
}

.abc-leave-active {
	transition: all ease-in-out 1s;
}

.abc-leave-to {
	transform: translateY(-100%) scale(.7);
}
</style>
