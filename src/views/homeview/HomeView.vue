<template  >
  <div :class="{ dark: switchCheckStatus }">
  <div class="w-[100vw] pl-[2.5vw] pr-[2.5vw]  overflow-hidden pb-[5vw]  dark:bg-gray-900 dark:text-[#fff] dark:gundong"  @click="updateOverflow"  >
    <header class=" h-[9vw] w-[100vw] top-0 z-30   ml-[-2.5vw] " >
      <button @click="drawerVisible = !drawerVisible, updateOverflow"  class="w-[9vw] h-[9vw] float-left" > <icon icon="prime:bars" class="w-[9vw] h-[9vw] float-left"  /></button>
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
    <!-- 左抽屉 -->
        <Drawer :visible.sync="drawerVisible" direction="ltr"  @自定义事件="(e) => (drawerVisible = e) " class="overflow-y: auto; ">
          <div class="h-[100%]">
               <header class="w-[80vw] h-[5vw] pt-[1vw] flex " style="margin-bottom: 12vw;">
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

               <div class="text-[3vw] text-[#9a958d]  ml-[5vw] mt-[3vw] h-[11vw] w-[60vw] relative " style="border-top: 1px solid #aa9793; line-height:11vw ">
                  受邀专享,黑胶vip低至0.27元/天!

                  <div class="h-[8vw] w-[8vw] bg-[#d94e0e] rounded-[1vw] text-[2vw] text-[#fff8dc] font-[700] " style="line-height:0vw ;display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-around;
    position: absolute;
    left: 52vw;
    top: 1vw;">
                   <span>受邀</span> 
                   <span>专享</span> 
                  </div>
               </div>
               
               </div>

    <div class=" mt-[4vw] bg-white ml-[2.5vw] pl-[5vw] pr-[5vw] w-[70vw]  dark:bg-[#2c2c2c] dark:text-[#fff]" style="border-radius: 4vw;">
					<div class="flex  justify-between items-center text-[4vw] my-3 h-[14vw] " v-for="(item) in text.one"
						:key="item.id2">
						<p class="flex items-center w-[50vw] font-[500]">
							<Icon :icon="item[0]" class=" mr-3 w-[7vw] h-[7vw] mt-[-1vw]" />
							{{ item[1] }}
						</p>
						<Icon icon="ep:arrow-right" class=" text-[#c7c7c7] text-[6vw] mt-[-1]"/>
					</div>
				</div>
        <div class=" mt-[4vw] bg-white ml-[2.5vw] pl-[5vw] pr-[5vw] w-[70vw]  dark:bg-[#2c2c2c] dark:text-[#fff]" style="border-radius: 4vw;">
          <p style="border-bottom: 1px solid #ccc; line-height:14vw " class="  h-[14vw] text-[3.5vw] text-[#c7c7c7]">音乐服务</p>
					<div class="flex  justify-between items-center text-[4vw] my-3 h-[14vw]" v-for="(item) in text.two"
						:key="item.id2">
						<p class="flex items-center w-[50vw] font-[500]">
							<Icon :icon="item[0]" class=" mr-3 w-[7vw] h-[7vw] mt-[-1vw]" />
							{{ item[1] }}
						</p>
						<Icon icon="ep:arrow-right" class=" text-[#c7c7c7] text-[6vw] mt-[-1]"/>
					</div>
				</div>



				<div class=" mt-[4vw] bg-white ml-[2.5vw] pl-[5vw] pr-[5vw] w-[70vw] relative  dark:bg-[#2c2c2c] dark:text-[#fff]" style="border-radius: 4vw;">
          <v-switch v-model="switchCheckStatus" class=" absolute left-[56vw] top-[37vw]"/>
          <p style="border-bottom: 1px solid #ccc; line-height:14vw " class="  h-[14vw] text-[3.5vw] text-[#c7c7c7]">其他</p>
					<div class="flex  justify-between items-center text-[4vw] my-3 h-[14vw]" v-for="(item) in text.three"
						:key="item.id2">
						<p class="flex items-center w-[50vw] font-[500]">
							<Icon :icon="item[0]" class=" mr-3 w-[7vw] h-[7vw] mt-[-1vw]" />
							{{ item[1] }}
						</p>
						<Icon icon="ep:arrow-right" class=" text-[#c7c7c7] text-[6vw] mt-[-1]"/>
					</div>
				</div>

        	<div class=" mt-[4vw] bg-white ml-[2.5vw] pl-[5vw] pr-[5vw] w-[70vw]  dark:bg-[#2c2c2c] dark:text-[#fff]" style="border-radius: 4vw;">
					<div class="flex  justify-between items-center text-[4vw] my-3 h-[14vw]" v-for="(item) in text.four"
						:key="item.id2">
						<p class="flex items-center w-[50vw] font-[500]">
							<Icon :icon="item[0]" class=" mr-3 w-[7vw] h-[7vw] mt-[-1vw]" />
							{{ item[1] }}
						</p>
						<Icon icon="ep:arrow-right" class=" text-[#c7c7c7] text-[6vw] mt-[-1]"/>
					</div>
				</div>
        <div class=" mt-[10vw] bg-white ml-[2.5vw] pl-[5vw] pr-[5vw] w-[70vw] h-[15vw] text-[red] text-center  dark:bg-[#2c2c2c] " style="border-radius: 4vw; line-height:15vw">
              退出登录/关闭
				</div>
    </div>
  </Drawer>
    <!-- 轮播1 -->
    <van-swipe :autoplay="3000" lazy-render class="w-[95vw] h-[35vw] mt-[5vw]">
      <van-swipe-item v-for="item in menu" :key="item.id">
        <img :src="item.pic" class="" />
      </van-swipe-item>
    </van-swipe>

    <!-- 菜单 -->
    <div class="overflow-auto dark:gundong">
      <div>
        <indexmenu class="flex justify-between mt-4 w-[200vw]" :menu="wenzi" />
      </div>
    </div>

    <!-- 轮播2 -->
    <div class="mt-[5vw]">
		<p class="text-[5vw] font-[700] mb-3 flex items-center">
			推荐歌单
			<Icon icon="ep:arrow-right-bold" width="20" />
      <button is-link @click="showPopup() ,int='推荐歌单'"   >	<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[60vw]" /></button>
		
		</p>
  <div class=" overflow-auto">
      <div class="w-[253vw] flex h-[45vw]">
        <div class='pt-[1vw] relative w-[32vw] mr-4'>
            <div class='w-[32vw] relative z-[1]'>
               <div class='w-[32vw] h-[32vw] bg-[#f3f3f3] overflow-hidden relative'>
                <transition name="abc" v-for="(item, index) in subTitle" :key="item.vls">
                    <div v-if="visiblesss === index" class="absolute top-0 left-0">
                      <img :src="item.uiElement?.image.imageUrl" alt="" class="w-[32vw] h-[32vw] rounded-[8px] bg-cover">
                     
                      <div class="absolute top-[2vw] right-[2.5vw] font-[800] text-[#fff] flex items-center">
                        <span class="absolute top-0 right-3 text-[#ffffff] whitespace-nowrap text-right"><icon
                  icon="prime:caret-right"
                  class="float-left w-[4vw] h-[4vw] text-[#ffffff] mt-[0.8vw] "
                />
                {{
                  Math.floor(
                    item.resources[0].resourceExtInfo.playCount / 10000
                  )
                }}万</span>
                      </div>
                    </div>
                </transition>
               </div>
               <p class=' text-[#3E4759]  absolute z-40 h-[2.9rem] line-clamp-2 text-[3vw] font-[700]'> {{ resourceData || (subTitle[0].uiElement?.mainTitle.title) }}</p>
            </div>
            <div class='w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-[3vw] rounded-[8px] z-[0]'></div>
         </div>
       

         <div v-for="(item) in subTitle" :key="item.id2" class=" mr-4 relative w-[32vw]">
					 <img
                :src="item.uiElement?.image.imageUrl"
                alt=""
                class="w-[32vw] h-[32vw] rounded-[4vw] z-[30] relative mt-[1vw]"
                style=" box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);"
              />
              <p class="absolute z-40 h-[2.9rem] line-clamp-2 text-[3vw] font-[700]">
                {{ item.uiElement?.mainTitle.title }}
              </p>
              <div class="absolute top-[2vw] right-[2.5vw] font-[800] text-[#fff] flex items-center z-[35]">
                        <span class="absolute top-0 right-3 text-[#ffffff] whitespace-nowrap text-right"><icon
                  icon="prime:caret-right"
                  class="float-left w-[4vw] h-[4vw] text-[#ffffff] mt-[0.8vw] "
                />
                {{
                  Math.floor(
                    item.resources[0].resourceExtInfo.playCount / 10000
                  )
                }}万</span>
                      </div>
                <div class='w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-[3vw] rounded-[8px] z-[0]'></div>
					</div>
      </div>
  </div>
		<!-- <ul class="overflow-hidden h-[40vw]">
			<div class="swiper-container2 h-[100%] w-[33%]">
				<div class="swiper-wrapper">
					<div class="swiper-slide mr-4"  >
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

			     
				</div>
			</div>
		</ul> -->
	</div>
    <!-- 新歌速递 -->
    <div class="mt-[11vw]">
      <p class="text-[5vw] font-[700] mb-3 flex items-center">
			新歌速递
			<Icon icon="ep:arrow-right-bold" width="20" />
      <button is-link @click="showPopup() ,int='新歌速递'"   >	<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[60vw]" /></button>
		</p>

      <div class="overflow-auto mt-[5vw] dark:bg-[#25272e] dark:text-[#fff]">
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
    <div class=" ">
      <div class="mt-[10vw]">
        <p class="text-[5vw] font-[700] mb-3 flex items-center">
		排行榜
			<Icon icon="ep:arrow-right-bold" width="20" />
      <button is-link @click="showPopup() ,int='排行榜'"   >	<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[65vw]" /></button>
		</p>

        <div class="overflow-auto">
          <div>
            <ranking class="w-[600vw] pt-[5vw] h-[92vw] " :king="phb" />
          </div>
        </div>
      </div>
    </div>
    <!-- 音乐日历 -->
    <div class="mt-[5vw]  dark:bg-[#25272e] dark:text-[#fff]">
      <div class="w-[95vw]">
        <p class="text-[5vw] font-[700] mb-3 flex items-center">
			音乐日历
			<Icon icon="ep:arrow-right-bold" width="20" />
      <button is-link @click="showPopup() ,int='音乐日历'"   >	<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[60vw]" /></button>
		</p>
        <div >
          <calenda
            class="bg-[#ffffff] rounded-[4vw] mt-[5vw] shadow-md border-b dark:bg-[#25272e] dark:text-[#fff] dark:shadow-[0]"
            :xxs="rili"
            :Month="currentMonth"
            :Day="currentDay"
          />
        </div>
      </div>
    </div>
    <!-- 热门话题 -->
    <div class="overflow-auto mt-[5vw]">
      <p class="text-[5vw] font-[700] mb-3 flex items-center">
			热门话题
			<Icon icon="ep:arrow-right-bold" width="20" />
      <button is-link @click="showPopup() ,int='热门话题'"   >	<Icon icon="teenyicons:more-vertical-outline" width="25" class=" ml-[60vw]" /></button>
		</p>
      <div class="overflow-auto">
            <div>
              <trendingTopics  class="w-[420vw]"
          style="display: flex; justify-content: space-between"  :playlists="subTitle"/>
            </div>
      </div>
    </div>
    
          <van-popup v-model="show" position="bottom" closeable :style="{ height: '30%' } " class=" dark:bg-[#25272e] dark:text-[#fff]">  
            <p class="text-xl mt-4 items-center pl-[5vw]" style="line-height: 2.0rem;">{{int}}</p>
            <li class=" flex text-xl mt-4 items-center pl-[5vw]" style="line-height: 2.0rem;" >
                    <Icon icon="uiw:like-o" class="mr-3" />
                    <p>优先推荐</p>
                </li>
                <li class=" flex text-xl mt-4 items-center pl-[5vw]" style="line-height: 2.0rem;" >
                    <Icon icon="uiw:heart-on" class="mr-3" />
                    <p>减少推荐</p>
                </li>
                <li class=" flex text-xl mt-4 items-center pl-[5vw]" style="line-height: 2.0rem;" >
                    <Icon icon="mingcute:more-4-line" class=" mr-3" />
                    <p>更多内容</p>
                </li>
          </van-popup>


   
  </div>
</div>
</template>

<script>
import { Toast } from 'vant';
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
      visiblesss:2,
      resourceData: '',
      switchCheckStatus: false,
      int:0,
      show: false,
      actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
      visibles: true,
      // visibles:["1","2","3"],
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
        ['直播', 'solar:chat-round-video-bold'],
        ['关注新歌', 'ph:user-fill'],
        ['一歌一遇', 'icon-park-solid:poker'],
        ['收藏家', 'ri:auction-fill'],
        ['游戏专区', 'mingcute:game-1-line'],
      ],
        text: {
				one: [
					['mdi:email-outline', '我的消息'],
					['iconamoon:cloud-thin', '云贝中心'],
					['humbleicons:bulb', '创作者中心'],
				],
				two: [
					['streamline:religion-hexagram-star-jew-jewish-judaism-hexagram-culture-religion-david', '趣测'],
					['ion:ticket-outline', '云村有票'],
					['teenyicons:box-outline', '多多西西口袋'],
					['material-symbols:local-mall-outline-rounded', '商城'],
					['simple-icons:beats', 'Beat专区'],
					['ri:bell-line', '口袋彩铃'],
					['icon-park-outline:game-three', '游戏专区']
				],
				three: [
					['arcticons:set-edit', '设置'],
					['circum:dark', '涤色模式'],
					['ri:time-line', '定时关闭'],
					['icon-park-outline:clothes-crew-neck', '个性装扮'],
					['ic:twotone-headset', '边听边存'],
					['icon-park-outline:online-meeting', '在线听歌免流量'],
					['arcticons:callsblacklist', '音乐黑名单'],
					['el:ok-circle', '青少年模式'],
					['iconoir:clock', '音乐闹钟'],
				],
        four: [
					['icon-park-outline:transaction-order', '我的订单'],
					['mdi:coupon-outline', '优惠券'],
					['mdi:customer-service', '我的客服'],
					['ph:share-fill', '分享网易云音乐'],
					['streamline:interface-file-clipboard-text-edition-form-task-checklist-edit-clipboard', '个人信息收集与使用清单'],
					['uiw:information-o', '个人信息第三方共享清单'],
					['uiw:information-o', '个人信息与隐私保护'],
					['uiw:information-o', '关于'],

				]
			},
      swiper: null,
    };
  },
   updated() {
		this.$nextTick(() => {
			this.getswiper();
		});
	},
  methods: {
    animateItems() {
    setInterval(() => {
      this.visiblesss++;
      if (this.visiblesss === 5) {
        this.visiblesss = 0;
      }
      if (this.visiblesss< 6) {
        this.resourceData = this.subTitle[this.visiblesss].uiElement.mainTitle.title;
      }
    }, 5000);
  },
    updateOverflow() {
      const body = document.querySelector('body');
      body.setAttribute('style', `overflow: ${this.drawerVisible? ' hidden' : ' visible'}`);
    },
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
    showPopup() {
      this.show = true;
    },
  },
 
  mounted() {
      this.animateItems();
      this.updateOverflow();
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

div::-webkit-scrollbar {
  width:0;
} 

div::-webkit-scrollbar-track {
 opacity: 0;
}
div::-webkit-scrollbar-thumb {
  opacity: 0;
}
/* .gundong::-webkit-scrollbar-thumb {
  --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.gundong::-webkit-scrollbar-thumb {
  --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
} */
</style>
