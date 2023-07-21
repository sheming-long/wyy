<template>
  <div>
    <div class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101] text-[4.2vw] font-[600]">
      MV排行榜-{{ tab[active] }}
    </div>

    <div>
      <van-tabs v-model="active" animated>
        <van-tab
          :title="tab[index]"
          v-for="(item, index) in tab"
          :key="item.id"
        >
          <div v-for="(item, indexs) in MVNum.data" :key="item.one" class=" mt-[4.63vw]">
            <div class="w-[92vw] mb-[6vw] mx-[4vw]">
              <div class="w-[100%] h-[52vw] relative rounded-[3vw] overflow-hidden mb-[2.7vw]">
                <img :src="item.cover" class="w-[100%] h-[52vw] bg-black" @click="$router.push(`/videoPlayerView/${item.id}`);" />
                <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                  <Icon icon="solar:play-bold" color="#fdffff" class="mr-[0.5vw] text-[2.6vw]" />
                  {{dataTruncation(item.playCount)}}
                </div>
              </div>
            </div>
            <div class="flex h-[5vw] mb-[1.5vw] w-[92vw] px-[4vw]" style="line-height: 5vw;">
              <span class="w-[5.3vw] text-[#999999]  mr-[2.8vw] text-center flex text-[600]" style="font-size: 4.54vw;" :class="indexs<=2 ? 'text-[red]':''">
                {{ indexs + 1 }}
              </span>
              <span class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">
                {{item.name}}
              </span>
            </div>
            <div class="flex h-[4vw] items-center  px-[4vw] line-clamp-1" style="line-height: 4vw;">

              <!-- {item.lastRank === index + 1 ? ( -->
                            <div class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center" v-if="item.lastRank === index + 1 ">
                              -
                            </div>
                 
                          <!-- {item.lastRank === -1 ? ( -->
                            <div class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center" v-if="item.lastRank === -1">
                              <Icon
                                icon="ic:outline-fiber-new"
                                class="text-[#51986d] text-[5vw]"
                              />
                            </div>
                        
                          <!-- {item.lastRank > index + 1 ? ( -->
                            <div class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center" v-if="item.lastRank > index + 1">
                              <Icon
                                icon="maki:triangle"
                                class="text-[#f05357]"
                              />
                            {{item.lastRank - (index + 1)}}
                            </div>
                        
                          <!-- {item.lastRank < index + 1 && item.lastRank != -1 ? ( -->
                            <div class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center" v-if="item.lastRank < index + 1 && item.lastRank != -1">
                              <Icon
                                icon="maki:triangle"
                                class="text-[#57b5e4]"
                                style="transform: rotate(180deg);"
                              />
                             {{ index + 1 - item.lastRank}}
                            </div>
                         
              <span class=" text-[#999999] text-[2vw] mr-[2.8vw] text-center flex " style="min-width: 10vw;" v-for="itemss in item.mv.artists" :key="itemss.s" 
              >
                 {{ itemss.name}}
              </span>
              
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>


<script>
import { MVTop } from '@/request';
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      res:[],
      active: 0,
      MVNum: [],
      tab: ['内地', '港台', '欧美', '韩国', '日本'],
    };
  },
  async mounted() {
    await this.fetchData(this.active);
    console.log(this.active);
  },
  watch: {
    active(newIndex) {
      this.fetchData(newIndex);
    },
  },
  methods: {
    async fetchData(index) {
      const res = await MVTop(this.tab[index]);
      this.MVNum = res.data;
      console.log(this.MVNum, index);
    },
    dataTruncation(playVolume) {
      if (playVolume > 100000000) {
        return `${Math.floor(playVolume / 100000000)}亿`;
      } else if (playVolume > 100000) {
        return `${Math.floor(playVolume / 10000)}万`;
      } else {
        return playVolume.toString();
      }
    },
  },
};
</script>