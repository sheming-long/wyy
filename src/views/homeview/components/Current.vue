<template>
    <div class="pl-[5vw] pt-[5.4vw] pr-[4.5vw]">
        <div class="flex ">
            <p class="text-[5vw] font-bold">当前播放</p>
            <p>（{{ musicNenu.songs?.length }}）</p>
        </div>
        <div class="flex mt-[5.6vw] mb-[4.7vw] justify-between">
            <div class="flex w-[25vw] justify-between">
                <Icon class="text-[5.8vw] text-[#acacac]" icon="icon-park-outline:loop-once" />
                <p class="text-[4vw] ">列表循环</p>
            </div>
            <div class="flex w-[30vw] justify-between">
                <Icon class="text-[5.8vw] text-[#acacac]" icon="formkit:download" />
                <Icon class="text-[5.8vw] text-[#acacac]" icon="material-symbols:add-ad-outline" />
                <Icon class="text-[5.8vw] text-[#acacac]" icon="fluent-mdl2:delete" />
            </div>
        </div>
        <div>
            <ul class="h-[75vw] overflow-auto">
                <li v-for="(item, index) in musicNenu.songs" :key="item.id" class="h-[9.7vw]" @click="playNum(index)">
                    <div class=" relative ml-4 leading-[5vw] flex w-[90%] justify-between">
                        <div class="flex w-[80vw]" style="flex-direction: column;">
                            
                            <p class="text-[4.2vw] w-[60vw] flex overflow-hidden overflow-ellipsis whitespace-nowrap "
                                :class="{ 'text-[red]': index == activeIndex }">
                                <Icon icon="iconamoon:playlist-fill" class="text-[6vw] text-[red] mr-[3vw]"
                            v-if="index == activeIndex"/>
                                {{ item.name }}
                                <span v-if="item.tns" class="text-[#ccc]" :class="{ 'text-[red]': index == activeIndex }">
                                    ({{ item.tns[0] }})
                                </span>
                                <span v-if="item.alia" class="text-[#ccc]" :class="{ 'text-[red]': index == activeIndex }">
                                    {{ item.alia[0] }}
                                </span>
                            </p>
                        </div>
                        <div>
                            <Icon icon="ic:twotone-close" class="text-[4.2vw]" />
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
