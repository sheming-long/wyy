<template  >
  
  <div :class="{ dark: switchCheckStatus }">
   
  <div class="w-[100vw] pl-[2.5vw] pr-[2.5vw]  overflow-hidden pb-[5vw] bg-[#f7f9fe]  dark:bg-gray-900 dark:text-[#fff] dark:gundong "  @click="updateOverflow"  >
   
    <header class=" h-[9vw] w-[100vw] top-0 z-30   ml-[-2.5vw] mt-[3vw]" >
      <button @click="drawerVisible = !drawerVisible, updateOverflow"  class="w-[9vw] h-[9vw] float-left" > <icon icon="prime:bars" class="w-[9vw] h-[9vw] float-left"  /></button>
    <!-- <Drawer :visible="drawerVisible" @自定义事件="(e) => (drawerVisible = e)"> -->
      <router-link :to="{ path: '/PlaylistPlaza' }">
        <input
          type="text"
          name=""
          id=""
          placeholder="大家都在搜　向云端"
          class="rounded-3xl h-[9vw] pl-2 bg-gradient-to-r from-[#dddbfb] to-pink-50 w-[80%]"
          style="border: 1px solid #ccc; text-indent: 2em"
        />
        <Icon
          icon="ic:sharp-search"
          class="absolute"
          style="left: 12vw; top: 5.5vw"
        />
        <Icon icon="lucide:scan"  class=" absolute"  style="left: 82vw; top: 5.5vw"/>
        
    </router-link>
      <icon
        icon="bytesize:microphone"
        class="w-[9vw] h-[9vw] float-right inline-block"
      />
    </header>
 
    <!-- 左抽屉 -->
        <Drawer :visible.sync="drawerVisible" direction="ltr"  @自定义事件="(e) => (drawerVisible = e) " class=" Drawer">
          <template #header>
            <div class=" pl-[7.5vw]  w-[89vw] flex justify-between items-center  pr-[4vw] mt-[6vw] fixed top-[-7vw] left-[-4vw] z-50 bg-[#ffffff]  dark:bg-gray-900 h-[14vw]">
                <div class="flex justify-between items-center">
                   <img class="w-[6.67vw] h-[6.94vw] rounded-[50%] mr-[2.87vw]" src="https://th.bing.com/th/id/OIP.WbYdRehHUCayfya36132_wHaHa?pid=ImgDet&rs=1" alt="">
                 <div class="flex items-center">
                  <span class="text-[black] dark:text-[#ffffff]">麹义</span>
                   <icon icon="ep:arrow-right-bold"  width="15" class="text-[black] dark:text-[#ffffff]"/>
                   </div>
            </div><icon icon="lucide:scan-line"  width="20" class="text-[black] dark:text-[#ffffff]"/></div>   
      </template>
              <div class="pl-[4vw] pr-[4vw] overflow-hiddenbg-[#ededed] pt-[8vw]  ">
             <!-- 黑胶 -->
             <div class="  rounded-[4vw] w-[72vw] h-[30vw] pt-[2vw] ml-[2.5vw] mt-[5vw] pl-[1vw]" style="background: rgb(60,58,56);
background: linear-gradient(90deg, rgba(60,58,56,1) 0%, rgba(95,81,78,1) 100%);">
                   <p class="h-[6vw] text-[#f9e7de] font-[700] text-[4vw] ml-[1vw]" style="text-indent:1em ;">续费黑胶Vip <span class="h-[2vw] w-[10vw] rounded-[1vw] bg-[#000000] inline-block relative ml-[2vw]">
                    <span class="h-[2vw] w-[7vw] rounded-[1vw] bg-[balck] inline-block absolute left-0" style="background: rgb(227,195,191);
background: linear-gradient(90deg, rgba(227,195,191,1) 0%, rgba(255,255,255,1) 100%);"></span>
                    </span>
                    <span  class="h-[2vw] w-[10vw] rounded-[1vw] inline-block text-[#7b706f]">4v</span>
                    <span class=" h-[6vw]  border-[0.5vw ]  rounded-[3vw] text-[2vw] inline-block" style=" border: #aa9793 solid 0.25vw; line-height:6vw ; text-align: center; text-indent:0;">&nbsp;&nbsp;会员中心&nbsp;</span>
                    </p>
                <div>
                  <p class="  text-[3vw] text-[#9a958d] ml-[6vw] mt-[3vw]">礼品卡&nbsp;&nbsp;|&nbsp;&nbsp;毕业快乐</p>
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
                <div class="mb-[4.17vw] bg-[#ffffff] dark:bg-[#202020] rounded-xl px-[4.26vw] mt-[4.17vw]">
                            <div class="h-[12.69vw] border-[#f3f3f3] border-b-[1px] dark:border-[#373737] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon class="text-[black]  dark:text-[white]" icon="solar:letter-linear" width="15"/>
                                    <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">消息中心</p>
                                </div>
                                <icon icon="ep:arrow-right-bold" color="white" width="15" />
                            </div>
                            <div class="h-[12.69vw] border-[#f3f3f3] border-b-[1px] dark:border-[#373737]  flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon class="text-[black]  dark:text-[white]" icon="simple-icons:shell"  width="15"/>
                                    <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">云贝中心</p>
                                </div>
                                <icon  class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="white" width="15" />
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon  class="text-[black]  dark:text-[white]" icon="streamline:interface-lighting-light-bulb-on-lighting-light-shine-incandescent-bulb-lights" width="15" />
                                    <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">创作者中心</p>
                                </div>
                                <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="white" width="15" />
                            </div>
                        </div>
                        <!-- 音乐服务 -->
                        <div class="mb-[4.17vw] bg-[#ffffff] dark:bg-[#202020] rounded-xl  pr-[4vw]">
                            <div class="h-[10vw] pl-[4.26vw] border-[#f3f3f3] border-b-[1px] dark:border-[#373737] text-[#ccc] leading-[10vw] w-[77vw] text-[3.5vw]">音乐服务</div>      
                            <div class="px-[4.26vw]">
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="emojione-monotone:dotted-six-pointed-star" width="15"/>
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">趣测</p>
                                    </div>
                                    <div class="flex">
                                        <span class=" text-[0.8vw] mr-[2.78vw] text-[#8f8f8f] dark:text-[#9c9c9c]">点击查看今日运势</span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="white" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="emojione-monotone:admission-tickets" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">云村有票</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="system-uicons:cube" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">多多西西口袋</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon  class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="solar:bag-4-outline" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">商城</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon  class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="streamline:interface-signal-square-heart-line-stats-beat-square-graph" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">Beat专区</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[#8f8f8f] dark:text-[#9c9c9c] text-[1.6vw] mr-[2.78vw] ">顶尖制作邀你创作</span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="ri:bell-line" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">口袋彩铃</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon  class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="mingcute:game-2-line" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">游戏专区</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[#8f8f8f] dark:text-[#9c9c9c] text-[1.6vw] mr-[2.78vw] ">音乐浇潘治愈花园</span>
                                        <icon  class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 其他 -->
                          <div class="mb-[4.17vw] bg-[#ffffff] dark:bg-[#202020] rounded-xl">
                            <div class="h-[10vw] pl-[4.26vw] border-[#f3f3f3] border-b-[1px] dark:border-[#373737]  text-[#ccc] leading-[10vw] text-[3.5vw]">其他</div>      
                            <div class="px-[4.26vw]">
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="icon-park-outline:setting-one" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">设置</p>
                                    </div>
                                    <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="emojione-monotone:admission-tickets" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">浅色模式</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <v-switch v-model="switchCheckStatus" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="system-uicons:cube" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">定时关闭</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="solar:bag-4-outline" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">个性装扮</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="streamline:interface-signal-square-heart-line-stats-beat-square-graph" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">边听边存</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[#8f8f8f] dark:text-[#9c9c9c] text-[1.6vw] mr-[2.78vw] ">在线听歌免流量</span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="ri:bell-line" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">添加Siri捷径</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="mingcute:game-2-line" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">音乐黑名单</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                    
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="mingcute:game-2-line" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">青少年模式</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[#8f8f8f] dark:text-[#9c9c9c] text-[1.6vw] mr-[2.78vw] ">未开启</span>
                                        <icon  class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                    
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="mingcute:game-2-line" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">音乐闹钟</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        

                        <div class="mb-[4.17vw] bg-[#ffffff] dark:bg-[#202020] rounded-xl">
                            <div class="px-[4.26vw]">
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="icon-park-outline:setting-one" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">我的客服</p>
                                    </div>
                                    <icon  class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="emojione-monotone:admission-tickets" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">我的订单</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon class="text-[black]  dark:text-[white]" icon="system-uicons:cube" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">优惠券</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="solar:bag-4-outline" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">分享网易云音乐</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon  class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="streamline:interface-signal-square-heart-line-stats-beat-square-graph" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">边听边存</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[#8f8f8f] dark:text-[#9c9c9c] text-[1.6vw] mr-[2.78vw] ">个人信息</span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="ri:bell-line" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">个人信息第三方共享清单</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[black]  dark:text-[white] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon  class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="mingcute:game-2-line" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">个人与隐私保护</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                        <icon class="text-[black]  dark:text-[white]" icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                    
                                </div>
                                <div class="h-[12.69vw] flex justify-between items-center">
                                    <div class="flex items-center">
                                        <Icon  class="text-[black]  dark:text-[white]" icon="mingcute:game-2-line" width="15" />
                                        <p class="ml-[3vw] text-[black]  dark:text-[white] text-[3.5vw]">关于</p>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[#8f8f8f] dark:text-[#9c9c9c] text-[1.6vw] mr-[2.78vw] ">未开启</span>
                                        <icon  class="text-[black]  dark:text-[white]"  icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                    </div>
                                    
                                </div>
                              
                            </div>
                        </div>
                        <div class="bg-[#ffffff] dark:bg-[#202020]  rounded-xl h-[12vw] w-[77vw] text-center pt-[2vw]">
                          <p class="text-[#db4353] text-[4vw]">退出登录</p>
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
        <indexmenu class="flex justify-between mt-4 w-[200vw]" :menu="menus" />
      </div>
    </div>

    <!-- 轮播2 -->
    <div class="mt-[5vw]" >
		<p class="text-[5vw] font-[700] mb-3 flex items-center text-[#4a4c51] dark:text-[#dededf]">
			推荐歌单
			<Icon icon="ep:arrow-right-bold" width="20" />
      <button is-link @click="showPopup() ,int='推荐歌单'"   >	<Icon icon="teenyicons:more-vertical-outline"  class=" ml-[60vw] h-[4vw]" /></button>
		
		</p>
  <div class=" overflow-auto" :id="id">
      <div class="w-[253vw] flex h-[45vw]">
        <div class='pt-[1vw] relative w-[32vw] mr-4'>
            <div class='w-[32vw] relative z-[1]'>
               <div class='w-[32vw] h-[32vw] bg-[#f3f3f3] overflow-hidden relative'>
                <transition name="abc" v-for="(item, index) in subTitle" :key="item.vls">
                    <div v-if="visiblesss === index" class="absolute top-0 left-0">
                      <img :src="item.uiElement?.image.imageUrl" alt="" class="w-[32vw] h-[32vw] rounded-[8px] bg-cover">
                     
                      <div class="absolute top-[2vw] right-[2.5vw] font-[800] text-[#fff] flex items-center">

                        <Icon icon="jam:infinite" class="w-[8vw] h-[5vw] "/>
                  
                      </div>
                    </div>
                </transition>
               </div>
               <p class=' text-[#4d505e]  absolute z-40 h-[2.9rem] line-clamp-2 text-[3vw] mt-[1vw] dark:text-[#dededf]'> {{ resourceData || (subTitle[0]?.uiElement?.mainTitle.title) }}</p>
            </div>
            <div class='w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-[3vw] rounded-[8px] z-[0] dark:bg-[#25272f]'></div>
         </div>
       
        
          <div v-for="(item ,index) in subTitle" :key="item.id2" class=" mr-4 relative w-[32vw]" >
            <router-link :to="{ path:`/HomePlaylist/${id[index]}` } " class=" flex relative">
            <img
                :src="item.uiElement?.image.imageUrl"
                alt=""
                class="w-[32vw] h-[32vw] rounded-[4vw] z-[30] relative mt-[1vw]"
                style=" box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);"
              />
              <p class="absolute z-40 h-[2.9rem] line-clamp-2 text-[3vw]  text-[#4d505e] mt-[1vw] dark:text-[#dededf] " style="top: 33vw;">
                {{ item.uiElement?.mainTitle.title }}
              </p>
              <div class="absolute top-[2vw] right-[3vw] font-[600] text-[#fff] flex items-center z-[35]">
                        <span class=" text-[#ffffff] whitespace-nowrap text-right"><icon
                        icon="solar:play-bold"
                        class="float-left w-[4vw] h-[3vw] text-[#ffffff] mt-[0.8vw] pr-[1vw] "
                />
                {{
                  Math.floor(
                    item.resources[0].resourceExtInfo.playCount / 10000
                  )
                }}万</span>
                      </div>
               
                      <div class='w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-[3vw] rounded-[8px] z-[0] dark:bg-[#25272f]'></div>
                    </router-link>
					</div>
      
        
      </div>
  </div>
	
	</div>
    <!-- 新歌速递 -->
    <div class="mt-[5vw]">
      <p class="text-[5vw] font-[700] mb-3 flex items-center text-[#4a4c51] dark:text-[#dededf]">
			新歌速递
			<Icon icon="ep:arrow-right-bold" width="20" />
      <button is-link @click="showPopup() ,int='新歌速递'"   >	<Icon icon="teenyicons:more-vertical-outline" class=" ml-[60vw] h-[4vw]" /></button>
		</p>

      <div class="overflow-auto mt-[5vw] dark:bg-gray-900 dark:text-[#fff]">
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
      <div class="mt-[5vw]">
        <p class="text-[5vw] font-[700] mb-3 flex items-center text-[#4a4c51] dark:text-[#dededf]">
		排行榜
			<Icon icon="ep:arrow-right-bold" width="20" />
      <button is-link @click="showPopup() ,int='排行榜'"   >	<Icon icon="teenyicons:more-vertical-outline" class=" ml-[65vw] h-[4vw]" /></button>
		</p>

        <div class="overflow-auto">
          <div>
            <ranking class="w-[600vw] pt-[5vw] h-[92vw] " :king="phb" />
          </div>
        </div>
      </div>
    </div>
    <!-- 音乐日历 -->
    <div class="mt-[5vw] ">
      <div class="w-[95vw]">
        <p class="text-[5vw] font-[700] mb-3 flex items-center  text-[#4a4c51] dark:text-[#dededf]">
			音乐日历
			<Icon icon="ep:arrow-right-bold" width="20" />
      <button is-link @click="showPopup() ,int='音乐日历'"   >	<Icon icon="teenyicons:more-vertical-outline"  class=" ml-[60vw] h-[4vw]" /></button>
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
      <p class="text-[5vw] font-[700] mb-3 flex items-center  text-[#4a4c51] dark:text-[#dededf]">
			热门话题
			<Icon icon="ep:arrow-right-bold" width="20" />
      <button is-link @click="showPopup() ,int='热门话题'"   >	<Icon icon="teenyicons:more-vertical-outline"  class=" ml-[60vw] h-[4vw]" /></button>
		</p>
      <div class="overflow-auto">
            <div>
              <trendingTopics  class="w-[420vw]"
          style="display: flex; justify-content: space-between"  :playlists="subTitle"/>
            </div>
      </div>
    </div>
    
          <van-popup v-model="show" position="bottom" closeable :style="{ height: '30%' } " class=" dark:bg-[#25272e] dark:text-[#fff]">  
            <p class="text-xl mt-4 items-center pl-[5vw]" style="line-height: 2.0rem; border-bottom: 0.1vw solid gray;">{{int}}</p>
            <li class=" flex text-xl mt-4 items-center pl-[5vw]" style="line-height: 2.0rem;" >
                    <Icon icon="uiw:like-o" class="mr-3 text-[3.5vw]" />
                    <p>优先推荐</p>
                </li>
                <li class=" flex text-xl mt-4 items-center pl-[5vw]" style="line-height: 2.0rem;" >
                    <Icon icon="uiw:heart-on" class="mr-3 text-[3.5vw]" />
                    <p>减少推荐</p>
                </li>
                <li class=" flex text-xl mt-4 items-center pl-[5vw]" style="line-height: 2.0rem;" >
                    <Icon icon="mingcute:more-4-line" class= "text-[3.5vw] mr-3" />
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
      id:[],
      menus: [],
      visiblesss: 2,
      resourceData: '',
      switchCheckStatus: false,
      int: 0,
      show: false,
      actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
      visibles: true,
      // visibles:["1","2","3"],
      drawerVisible: false,
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
      swiper: null,
    };
  },
  updated() {
    this.$nextTick(() => {
      this.getswiper();
    });
  },
  methods: {
    changeID(){
            this.id = []
            for(let i=0;i<this.subTitle.length;i++){
                this.id.push(parseInt(this.subTitle[i].creativeId))
            }
        },
    animateItems() {
      setInterval(() => {
        this.visiblesss++;
        if (this.visiblesss === 5) {
          this.visiblesss = 2;
        }
        if (this.visiblesss < 6) {
          this.resourceData =
            this.subTitle[this.visiblesss]?.uiElement?.mainTitle.title;
        }
      }, 5000);
    },
    updateOverflow() {
      const body = document.querySelector('body');
      body.setAttribute(
        'style',
        `overflow: ${this.drawerVisible ? ' hidden' : ' visible'}`
      );
    },
    getswiper() {
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
          this.changeID()
        });
      axios
        .get(
          'https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/dragon/ball'
        )
        .then((res) => {
          this.menus = res.data.data;
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
      this.visibles = !this.visibles;
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
.swiper-slide {
  overflow: visible;
}
body {
  margin-top: -5vw;
  background: rgb(175, 226, 244);
  background: linear-gradient(
    45deg,
    rgba(175, 226, 244, 1) 0%,
    rgb(205, 224, 235) 100%
  );
}

.abc-enter {
  transform: translateY(100%) scale(0.7);
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
  transform: translateY(-100%) scale(0.7);
}

div::-webkit-scrollbar {
  width: 0;
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

.Drawer::-webkit-scrollbar {
  width: 0;
}
.Drawer::-webkit-scrollbar-thumb {
  opacity: 0;
}
.Drawer::-webkit-scrollbar-track {
  opacity: 0;
}
</style>
