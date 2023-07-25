<template>
    <div
        class="px-[4.5vw] bg-[#F9F9FA] h-[12.5vw] fixed bottom-0 left-0 right-0 border-b-[1px] border-[#F5F8FA] flex items-center z-[1200]">
        <router-link :to="{ path: '/MusicPlayback' }" class="flex items-center"> 
            <div class="w-[10vw] h-[10vw] relative flex items-center justify-center">
                <!-- <img src="../../static/fang.png" alt="" class="absolute top-0 left-0 z-[1]" /> -->
                <img :src="Player._currentTrack?.al?.picUrl" alt="" class="w-[7vw] h-[7vw] rounded-[50%]" />
            </div>
            <div class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]">
                <span class="text-[#3E485E]">{{ Player._currentTrack.name }}</span>
                <span class="text-[#7B8591]">-{{ Player._currentTrack.name }}</span>
            </div>
        </router-link>

        <div class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw]" @click="playFn">
            <van-circle v-model="currentRate" :rate="100" :speed="100" size="5.6vw" :stroke-width="120" color="#475165"
                layer-color="#C7CBD2" />
            <Icon :icon="`${!play ? 'carbon:pause-filled' : 'ph:play-fill'}`" width="11px"
                class="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute" />
        </div>
        <!-- 播放列表 -->
        <button @click="showPopup">
            <Icon icon="iconamoon:playlist-fill" class="text-[6vw] text-[#3b4152] ml-[4.5vw]" />
        </button>
        <van-popup v-model="show" position="bottom" round>
            <Current :musicNenu="musicNenu"></Current>
        </van-popup>
    </div>
</template>

<script>
import Vue from 'vue';
import { Popup } from 'vant';
Vue.use(Popup);
import Player from './player.js';
import Current from "@/views/homeview/components/Current.vue"

export default {
    props: {
        musicNenu: {
            required: true // 可选，根据你的需求设置
        }
    },
    components: { Current },
    data() {
        return {
            show: false,
            Player: new Player(),
            //当前进度
            currentRate: 0,
            // 是否正在播放中
            play: window.$player?._playing,
            // 当前播放歌曲的进度
            progress: window.$player?._progress,
            // 当前歌曲的总时长
            duration: window.$player?._duration,
        };
    },
    methods: {
        showPopup() {
            console.log(this.musicNenu)
            this.show = true;
        },
        playFn() {
            this.play = !this.play;
            window.$player.playOrPause();
            clearInterval(this.timerId);
        },
        startTimer() {
            this.timerId = setInterval(() => {
                this.duration = window.$player?._duration
                this.progress = window.$player?._progress
                this.currentRate = (this.progress / this.duration) * 100
            }, 1000);
        }
    },
    mounted() {
        // 组件挂载后自动启动定时器
        this.startTimer();
    },
    // beforeDestroy() {
    //     // 组件销毁前清除定时器
    //     clearInterval(this.timerId);
    //     this.play = !this.play;
    //     window.$player?.playOrPause();
    // },

    created() {
        window.$player = this.Player;
    },
    computed: {
        text() {
            return this.currentRate.toFixed(0) + '%';
        },
    },
};
</script>
