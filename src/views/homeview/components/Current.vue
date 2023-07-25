<template>
    <div class="pl-[5vw] pt-[5.4vw] pr-[4.5vw]">
        <div class="flex ">
            <p class="text-[5vw] font-bold">当前播放</p>
            <p style="font-size: 3vw; color: #d4d4d4; font-weight: 600; align-items: center;" class="flex">（{{ musicNenu.songs?.length }}）</p>
        </div>
        <div class="flex mt-[5.6vw] h-[10vw] justify-between mb-[3vw]" style="border-bottom: 1px solid gray;">
            <div class="flex w-[25vw] justify-between ">
                <Icon class="text-[5.8vw] text-[#acacac]" icon="icon-park-outline:loop-once" />
                <p class="text-[4vw] ">列表循环</p>
            </div>
            <div class="flex w-[30vw] justify-between">
                <Icon class="text-[5.8vw] text-[#535c6c]" icon="formkit:download" />
                <Icon class="text-[5.8vw] text-[#535c6c]" icon="material-symbols:add-ad-outline" />
                <Icon class="text-[5.8vw] text-[#535c6c]" icon="fluent-mdl2:delete" />
            </div>
        </div>
        <div>
            <ul class="h-[75vw] overflow-auto">
                <li v-for="(item, index) in musicNenu.songs" :key="item.id" class="h-[9.7vw]" @click="playNum(index)">
                    <div class=" relative ml-4 leading-[5vw] flex w-[90%] justify-between">
                        <div class="flex w-[80vw]" style="flex-direction: column;">
                            
                            <p class="text-[4.2vw] w-[60vw] flex overflow-hidden overflow-ellipsis whitespace-nowrap "
                                :class="{ 'text-[red]': index == activeIndex }">
                                <img src="/static/wave.gif" class=" w-[5vw] h-[4vw] bg-cover red-image mr-[2vw]"
                                    v-if="index == activeIndex"/>
                                  <span class="text-[3.5vw] font-[550]"> {{ item.name }} </span> &nbsp;·&nbsp; 
                                  <span style="font-size: 3vw; color:#909090 ;">{{ item.ar[0].name }}</span>
                                <span v-if="item.ar[1]" style=" color:#909090 ;"> /</span >
                                <span style="font-size: 3vw; color:#909090 ;"> {{ item?.ar[1]?.name }}</span>
                                <span v-if="item.name" style=" color:#909090 ;"> - </span>
                                <span style="font-size: 3vw; color:#909090 ;"> {{ item?.name }}</span>
                                
                                <span v-if="item.tns" class="text-[#909090] text-[3vw] " :class="{ 'text-[red]': index == activeIndex }" style="margin-left: 2vw;">
                                   ({{ item.tns[0] }})
                                </span>
                                <span v-if="item.alia" class="text-[#909090] text-[3.5vw]" :class="{ 'text-[red]': index == activeIndex }">
                                   {{ item.alia[0] }}
                                </span>
                            </p>
                        </div>
                        <div>
                            <Icon icon="ic:twotone-close" class="text-[5.2vw] text-[#b3b3b3]" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Popup } from 'vant';
Vue.use(Popup);
export default {

    props: {
        musicNenu: {
            required: true // 可选，根据你的需求设置
        }
    },
    data() {
        return {
            activeIndex: null,
            switchCheckStatus: false,
        }
    },
    methods: {
        //播放点击的
        playNum(index) {
            this.activeIndex = index;
            window.$player._replaceCurrentTrack(this.musicNenu.songs[index].id,)
        },
    }
}

</script>
<style>

.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}


</style>
