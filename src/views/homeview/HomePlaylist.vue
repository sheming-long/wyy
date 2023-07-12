<template>
    <div class="bg-[#927d4d] overflow-hidden relative">
        <span class="flex w-[5vw] h-[5vw] rounded-[50%] bg-[#a18f64] items-center justify-around absolute z-[999]"
            :class="`${condition ? 'right-[15px] top-[75px]' : 'right-[15px] top-[75px]'}`">
            <Icon :icon="`${condition ? 'bytesize:chevron-bottom' : 'ep:arrow-up'}`" class="text-[3vw] text-[#faf8f8]"
                @click.native="handleArrowUpClick" />
        </span>
        <!-- 头部 -->
        <div class="flex pl-[4vw] pr-[4vw] py-4 justify-between items-center"
            :class="`${scrollDistance >= 45 ? 'fixed top-0 z-[999] right-0 left-0 bg-[#927d4d]' : ''}`">

            <div class=" flex w-[65vw]">
                <router-link :to="{ path: '/HomeView' }">
                    <Icon icon="ri:arrow-left-line" style="font-size: 7vw" class="font-600 text-[5vw] text-[#fbfbf5]" />
                </router-link>
                <span class="text-[5vw] text-[#fbfbf5] font-[700]" v-if="scrollDistance <= 45">
                    {{ title }}
                </span>
                <p class=" text-[#fbfbf5] font-[700] line-clamp-2 w-[60vw]" v-if="scrollDistance > 45">
                    <van-notice-bar scrollable :text=musicData.playlist?.name color="white" background="#927d4d" />
                </p>
            </div>
            <div class="justify-between flex w-[20vw]">
                <Icon icon="ic:sharp-search" class="text-[5vw] text-[#fbfbf5]" />
                <Icon icon="teenyicons:more-vertical-outline" class="text-[5vw] text-[#fbfbf5]" />
            </div>
        </div>
        <!-- 头部 -->
        <!-- 中间 -->
        <div class=" relative">
            <transition name="fade" mode="out-in">
                <div v-if="condition" key="div1" class="mt-[3.8vw] pl-[4vw] pr-[4vw] flex flex-col">
                    <div class="flex">
                        <div class="mr-4 relative w-[27vw]">
                            <img :src="musicData.playlist?.coverImgUrl" alt=""
                                class="w-[24vw] h-[24vw] rounded-[3vw] z-[30] relative mt-[1vw]"
                                style="box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5)" />
                            <div class="absolute top-[2vw] right-[4vw] font-[600] text-[#fff] flex items-center z-[35]">
                                <span class="text-[#ffffff] whitespace-nowrap text-right text-[2.3vw]">
                                    <icon icon="solar:play-bold"
                                        class="float-left text-[2.3vw] text-[#ffffff] mt-[0.8vw] pr-[1vw]" />
                                    {{ dataTruncation(musicData.playlist?.playCount) }}
                                </span>
                            </div>
                            <div class="w-[20vw] h-[25vw] bg-[#9a8e73] absolute top-[0vw] left-[2vw] rounded-[6px] z-[0]">
                            </div>
                        </div>
                        <div class="w-[65vw] flex justify-around" style="flex-direction: column">
                            <p class="w-[60vw] flex text-[#fff] justify-between">
                                <span class="text-[4vw] font-[600] w-[52vw]">
                                    {{ musicData.playlist?.name }}
                                </span>
                            </p>
                            <p class="w-[62vw] flex text-[3.5vw] text-[#d4c3a0] items-center my-1">
                                <span class="inline-block w-[6.25vw] h-[6.25vw] rounded-[50%] bg-[black] mr-[3vw]">
                                    <img :src="musicData.playlist?.creator.avatarUrl" alt="" class="rounded-[50%]" />
                                </span>
                                <span class="inline-block w overflow-hidden overflow-ellipsis whitespace-nowrap"
                                    style="max-width: 35vw">
                                    {{ musicData.playlist?.creator.nickname }}
                                </span>
                                <span
                                    class="flex w-[14vw] h-[5.2vw] bg-[#a38d5f] rounded-[4vw] ml-[3vw] items-center justify-between">
                                    &nbsp;
                                    <Icon icon="ic:outline-add" /> 关注 &nbsp;
                                </span>
                            </p>
                            <p
                                class="w-[12vw] h-[5vw] bg-[#a38d5f] flex text-[2.2vw] text-[#d4c3a0] justify-around items-center rounded-[1.5vw] my-1 p-[3px] box-border">
                                6.0分
                                <Icon icon="mingcute:right-line" />
                            </p>
                        </div>
                    </div>
                    <div class="flex pl-[4vw] pr-[4vw] mt-[3.5vw] items-center">
                        <p class="text-[#af9d72] w-[87vw] overflow-hidden overflow-ellipsis whitespace-nowrap text-[3vw]">
                            {{ musicData.playlist?.description }}
                        </p>
                        <Icon icon="mingcute:right-line" class="text-[#af9d72]" />
                    </div>

                </div>
                <div v-else key="div2">
                    <p class="flex  pl-[4vw] pr-[4vw]" style="justify-content: space-between;">
                        <span class="text-[2vw] text-[#d8c7b1]">喜欢这个歌单的用户也听了</span>
                    </p>
                    <div class=" overflow-auto  pl-[4vw] pr-[4vw] mt-[4vw]">
                        <div class=" flex justify-around" :style="`width:${musicSlider.playlists?.length * 30 + 30}vw`">
                            <div v-for="(item) in musicSlider.playlists" :key="item.tom" class="w-[32vw]">
                                <img :src="item.coverImgUrl" alt="" class="w-[32vw] h-[32vw] rounded-[3vw]">
                                <p class=" line-clamp-2 text-[#fff] text-[2vw] mt-[2vw]">
                                    {{ item.name }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <!-- 分享，评论和播放量 -->
        <div class="flex mt-[5vw] mb-[5vw] justify-around">
            <p
                class="w-[29vw] h-[10vw] bg-[#b7a47c] text-[3.5vw] rounded-[5vw] font-[700] text-[#fff] text-center flex leading-[10vw] justify-center items-center">
                <Icon icon="fa:mail-forward" width="15" class="text-[#fff] mr-[1.5vw]" />
                {{ dataTruncation(musicData.playlist?.shareCount) }}
            </p>
            <p
                class="w-[29vw] h-[10vw] bg-[#b7a47c] text-[3.5vw] rounded-[5vw] font-[700] text-[#fff] text-center flex leading-[10vw] justify-center items-center">
                <Icon icon="streamline:mail-chat-bubble-typing-oval-messages-message-bubble-typing-chat"
                    class="text-[#fff] mr-[1.5vw]" width="15" />
                {{ dataTruncation(musicData.playlist?.commentCount) }}
            </p>
            <p
                class="w-[29vw] h-[10vw] text-[3.5vw] rounded-[5vw] font-[700] text-[#fff] text-center bg-[#fd2658] flex leading-[10vw] justify-center items-center">
                <Icon icon="fluent:collections-24-filled" width="15" class="text-[#fff] mr-[1.5vw]" />
                {{ dataTruncation(musicData.playlist?.subscribedCount) }}
            </p>
        </div>

        <!-- 底部数据渲染 -->
        <div class="w-[100%] pl-[3vw] pr-[3vw] bg-[#ffffff] "
            style="border-top-left-radius: 3vw; border-top-right-radius: 3vw">
            <header class="w-[107%] ml-[-3vw] h-[11vw] bg-[#f0ece6] text-[3.5vw] flex  items-center justify-around"
                style="border-top-left-radius: 3vw; border-top-right-radius: 3vw;">
                <Icon icon="mdi:movie-play-outline" class="text-[red] text-[4vw]" />
                <p style="margin-left: -15vw;">
                    含
                    <span class="text-[#667a88]">
                        {{ musicData.playlist?.trackCount }}
                    </span>
                    首vip专属歌曲
                </p>
                <span class="flex text-[#908c84] items-center">
                    vip仅0.22元/天
                    <Icon icon="mingcute:right-line" class="text-[#af9d72]" />
                </span>
            </header>
            <div class="h-[15vw] flex " style="justify-content: space-between;"
                :class="`${scrollDistance >= 200 ? 'fixed top-[14vw] z-[999] right-0 left-0 w-[100%] pl-[3vw] pr-[3vw] bg-[white]' : ''}`">
                <p class="w-[34vw] flex h-[100%] items-center justify-around">
                    <Icon @click.native="playAll" icon="teenyicons:play-circle-solid" class="font-[6vw] text-[#ff3726]" />
                    <span class="font-[600] text-[3.5vw]">播放全部</span>
                    <span class="text-[#dbdbd6] text-[3vw]">
                        ({{ musicData.playlist?.trackCount }})
                    </span>
                </p>
                <p class="w-[16vw] flex h-[100%] items-center justify-around">
                    <Icon icon="clarity:download-line" class="h-[4vw]" />
                    <Icon icon="ri:menu-add-line" class="h-[4vw]" />
                </p>
            </div>

            <div class="pb-[12vw] overflow-hidden">
                <li class="h-[11vw] flex mt-[5vw]" v-for="(item, index) in musicmMean.songs " :key="item.id" :class="index == 0 ? 'mt-0' : ''" @click="playNum(index)">
                    <div class="text-[#a5a5a5] h-[100%] w-[5vw] flex" style="align-items: center;">
                        {{ index + 1 }}
                    </div>
                    <div class=" relative ml-4 leading-[5vw] flex w-[90%] justify-between">
                        <div class="flex w-[80vw]" style="flex-direction: column;">
                            <p class="text-[3vw] w-[60vw] overflow-hidden overflow-ellipsis whitespace-nowrap "
                            :class="{ 'text-[red]': index == activeIndex }" >
                                {{ item.name }}
                                <span v-if="item.tns" class="text-[#ccc]"
                                :class="{ 'text-[red]': index == activeIndex }">
                                    ({{ item.tns[0] }})
                                </span>
                                <span v-if="item.alia" class="text-[#ccc]"
                                :class="{ 'text-[red]': index == activeIndex }">
                                    {{ item.alia[0] }}
                                </span>
                            </p>
                            <p class="text-[2vw] text-[#ccc] w-[60vw] overflow-hidden overflow-ellipsis whitespace-nowrap ">
                                <span class="text-[#baa04e] text-[1.5vw] py-[1.5px] pl-[3px] mr-1 rounded"
                                    style="border: 1px solid #baa04e;">
                                    超清母带
                                </span>
                                {{ item.ar[0].name }}
                                <span v-if="item.ar[1]">
                                    /
                                </span>
                                {{ item?.ar[1]?.name }}
                                <span v-if="item.name">
                                    -
                                </span>
                                {{ item?.name }}
                            </p>
                        </div>
                        <div>
                            <Icon icon="formkit:playcircle" class="text-[5vw] text-[#ccc] absolute" style="right: 9vw; top: 3vw;"/>
                            <!-- <Icon icon="zondicons:pause-outline" /> -->
                            <Icon icon="teenyicons:more-vertical-outline" class="text-[5vw] text-[#ccc] absolute" style="right: 0;top: 3vw;" />
                        </div>
                    </div>
                </li>
            </div>
        </div>
        <Player :musicNenu="musicmMean"/>
    </div>
</template>


<script>
import Vue from 'vue';
import { Popup } from 'vant';
Vue.use(Popup);
import Player from "../../commponent/Player/Player.vue"
import axios from 'axios';
export default {
    components: { Player },
    data() {
        return {
            activeIndex: null,
            id: 0,
            musicData: [],
            musicmMean: [],
            //滚动距离
            scrollDistance: null,
            //歌单标题
            title: '歌单',
            musicSlider: [],
            condition: true,
        }
    },
    methods: {
        // 截取时间
        dataTruncation(playVolume) {
            if (playVolume > 100000000) {
                return `${(playVolume / 100000000).toFixed(2)}亿`;
            } else if (playVolume > 100000) {
                return `${(playVolume / 10000).toFixed(2)}万`;
            } else {
                return playVolume?.toString();
            }
        },
        //播放全部
        playAll() {
            window.$player.replacePlaylist(this.musicmMean.songs.map(song => song.id),
                '', '')
        },
        //播放点击的
        playNum(index){
            this.activeIndex = index;
            window.$player._replaceCurrentTrack(this.musicmMean.songs[index].id,)
        },
        handleArrowUpClick() {
            this.condition = !this.condition
        },
        //获取歌单ID
        local() {
            let url = window.location.href
            let index = url.lastIndexOf("/") + 1
            this.id = url.slice(index)
        },
        //判断滚动距离
        scrollNum() {
            this.scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
        }
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
                this.musicData = res.data
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
            })
            .catch((err) => {
                console.log(err);
            });
    },
}
</script>

<style>
.van-notice-bar {
    font-size: 5vw !important;
}

li {
    list-style: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>