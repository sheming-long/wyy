<template>
  <div style="background: rgb(174,243,247);
     background: linear-gradient(180deg, rgba(174,243,247,1) 0%, rgba(113,118,120,1) 100%); color: white;" >
    <!-- 头部 -->
   <div >
    <div
      class="flex justify-between pl-[5.5vw] pr-[5.5vw] pt-[5.2vw] items-center"
    >
      <div @click="goBack">
        <span>
          <Icon
            icon="ep:arrow-right"
            class=""
            style="transform: rotate(90deg); font-size: 6vw"
        /></span>
      </div>
      <div
        class="flex text-[3.8vw] w-[65vw] flex-wrap justify-center items-center flex-col"
      >
        <p>{{ currentMusic.name }}</p>
        <p class="text-[#ccc]">
          {{ currentMusic.ar[0].name }}
          {{ currentMusic.ar[1]?.name }}
          <span
            class="text-white py-[0.8vw] pr-[1.2vw] font-bold pl-[1.2vw] bg-[#575f5c] rounded-md"
          >
            关注
          </span>
        </p>
      </div>
      <div>
        <Icon icon="ri:share-circle-line" style="font-size: 6vw" />
      </div>
    </div>

    <!-- 唱片 -->
    <div
        class="w-[100vw] h-[130vw] flex items-center flex-wrap px-[6vw] justify-center overflow-hidden relative internalShadow"
        v-if="lyricsSwitching" @click="lyricsSwitching = !lyricsSwitching">
        <div class="absolute top-0 transition-all duration-1000" :style="{ top: -lineHieght + 'vw' }">
          <div v-for="(line, index) in lyricLines" :key="index"
            class="text-[hsla(0,0%,88.2%,.8)] line-clamp-2 w-[100%] h-[12vw] px-[4vw] flex justify-center text-center"
            :style="{ color: index === lineIndex ? '#fff' : 'hsla(0,0%,88.2%,.7)' }">{{ line.txt }}</div>
        </div>

      </div>
    <div v-else class="relative h-[94vw] mb-[25vw]">
      <img
        src="/static/1.png"
        alt=""
        class="absolute w-[71vw] left-[15%] top-[27%] z-10"
        @click="lyricsSwitching = !lyricsSwitching"
      />
      <img
        :src="currentMusic.al?.picUrl"
        alt=""
        class="w-[50vw] absolute z-[5] rounded-[50%] left-[26%] top-[39%] rotate"
      />
      <img
        src="/static/4.png"
        alt=""
        class="absolute w-[22vw] left-[50%] right-[50%] top-[10%] z-20"
      />
    </div>
    

    <div class="pl-[10vw] pr-[12.6vw] flex justify-between mb-[2vw]">
      <Icon class="text-[5.6vw]" icon="ph:heart-light" />
      <Icon class="text-[5.6vw]" icon="iconoir:download-circle" />
      <Icon class="text-[5.6vw]" icon="pepicons-pop:music-note-single-circle" />
      <Icon class="text-[5.6vw]" icon="uil:comment-lines" />
      <Icon class="text-[5.6vw]" icon="teenyicons:more-vertical-outline" />
    </div>

    <div class="h-[8vw] w-[100vw] flex items-center px-[5vw] mt-[8vw]">
            <div class="  scale-[0.8] opacity-80">
                {{ timeModification( progress) }}
            </div>
            <vue-slider v-model="progress" :duration="0" :process="true" tooltip="none" :drag-on-click="true"
                :min="0" :max=" duration" :interval="0.1" class="flex-1 mx-[2.5vw]" @dragging="jkl" @drag-start="jkl"/>
            <div class=" scale-[0.8] opacity-50">
                {{ timeModification( duration) }}
            </div>
        </div>

    <div class="flex pl-[10vw] pr-[10vw] justify-between items-center " style=" padding-bottom: 4.5vw">
      <!-- 播放模式 -->
      <Icon class="text-[5vw]" icon="ps:random" />
      <!-- 上一首 -->
      <Icon
        class="text-[5vw]"
        icon="carbon:skip-back-filled"
        @click.native="before"
      />
      <!-- 开始 -->
      <Icon
        v-if="this.play"
        class="text-[16vw]"
        icon="octicon:play-24"
        @click.native="playFn"
      />
      <!-- 暂停 -->
      <Icon
        v-else
        class="text-[16vw]"
      
        icon="carbon:pause-outline"
        @click.native="playFn"
      />
      <!-- 下一首 -->
      <Icon
        class="text-[5vw]"
        icon="fluent:next-16-filled"
        @click.native="nextMusic"
      />
      <!-- 列表 -->
      <Icon class="text-[5vw]" icon="iconamoon:playlist-fill" />
    </div>
   </div>


  </div>
</template>

<script>
import Vue from 'vue';
import store from 'storejs';
import { Progress } from 'vant';
Vue.use(Progress);
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import player from '../Player/player.js';
Vue.use(player)
Vue.use(Progress);
export default {
  components: {
    VueSlider,
  },

  data() {
    return {
      lineHieght:$player.lineHieght,
      lyricLines:$player.lyricLines,
      lineIndex:$player.lineIndex,
      // 切换图标
      lyricsSwitching : false,
      index: 0,
      // 歌单列表
      musicmMean: 0,
      // 当前歌曲
      currentMusic: 0,
      // 是否正在播放中
      play: window.$player?._playing,
      //当前进度
      currentRate: 0,
      // 当前歌曲的总时长
      duration:$player._duration,
      // 当前播放歌曲的进度
      progress:$player.progress,

      value: 0, //进度条值
      mian:0,
    };
  },
  methods: {

    handleDragStart() {
    // 在拖拽开始时触发的逻辑
    this.dragging = true;
  },
  handleDragEnd() {
    // 在拖拽结束时触发的逻辑
    this.dragging = false;
  },
    jkl(){
      $player.progress=this.progress
    },
    timeModification(time) {
      const minutes = Math.floor(time / 60);
      return `${String(minutes).padStart(2, '0')}:${String(
        Math.floor(time % 60)
      ).padStart(2, '0')}`;
    },
  
    
    

    // 回到上一个页面
    


    goBack() {
      window.$player.playOrPause();
      clearInterval(this.timerId );
      window.history.back();
    },
    // 引入页面
    chuancan() {
      const data = localStorage.getItem('musicmMean');
      this.main = JSON.parse(data);
      const suanshu = localStorage.getItem('_current');
      this.index = suanshu;
      this.musicmMean = this.main?.songs;
      this.currentMusic = this.main?.songs[suanshu];
    },
    // 上一首
    before() {
      if (this.index > 0) {
        this.index--;
        window.$player._replaceCurrentTrack(
          this.musicmMean[this.index]?.id,
          '',
          ''
         
        );
        this.currentMusic = this.main?.songs[this.index]
        this.play =false
     
        window.$player._replaceCurrentTrack(this.musicmMean[this.index].id)
        // clearInterval(this.timerId );
      }
      console.log(this.index);
    },
   
    // 下一首
    nextMusic() {
      if (this.index < this.musicmMean.length) {
        this.index++;
        window.$player._replaceCurrentTrack(
          this.musicmMean[this.index]?.id,
          '',
          ''
        );
        this.currentMusic = this.main?.songs[this.index]
        this.play =false
        window.$player._replaceCurrentTrack(this.musicmMean[this.index].id)
        // clearInterval(this.timerId );
       
      }
      console.log(this.index);
    },
   
    // 播放和暂停
    playFn() {
      this.play = !this.play;
      window.$player.playOrPause();
      
    },
   
    startTimer() {
            this.timerId = setInterval(() => {
                this.duration =$player._duration
                this.progress =$player.progress
                this.lyricLines = $player.lyricLines
                this.lineIndex=$player.lineIndex
                this.lineHieght=$player.lineHieght
                console.log(this.duration,this.progress ,this.play ,$player.progress,$player.lineHieght );
            }, 1000);
        },
        // 转化时间
  },
  watch: {
    '$player._playing': {
      immediate: true,
      handler(newVal) {
        // 处理值变化的逻辑
        if (newVal) {
          // _playing 值为 true，表示正在播放音乐
          this.play = true;
        
        } else {
          // _playing 值为 false，表示暂停或未播放音乐
          this.play = false;

        }
      },
    },
  },
  mounted() {
    // 组件挂载后自动启动定时器
   
    
    // this.timeModification()
  },
  created() {
    this.startTimer();
    this.chuancan();
    window.$player._replaceCurrentTrack(this.musicmMean[this.index].id)
  },
};
</script>
<style>
@keyframes Rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.rotate {
  animation: Rot 10s linear infinite; /* 持续时间为5秒，线性匀速，无限循环 */
}

</style>
