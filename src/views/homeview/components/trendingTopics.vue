<template>
     <div
         
        >
          <div
            v-for="item in playlists"
            :key="item.id"
            class="w-[60vw] h-[35vw] rounded-[4vw] float-left"
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
            "
          >
            <div>
              <div
                class="flex justify-between items-center text-2xl font-extrabold"
              ></div>
              <div
                class="bg-[#949996] w-[60vw] h-[30vw] rounded-[2vw] px-[3vw] flex flex-col justify-evenly"
              >
                <div class="flex text-[#fff] items-center">
                  <Icon icon="icon-park-solid:topic" width="5vw" height="5vw" />
                  <span> 最令你感动的那首情歌</span>
                </div>
                <span class="text-[2vw] text-[#ccc]">484万热度</span>
                <div
                  class="overflow-hidden h-[15vw] flex items-end justify-between"
                >
                  <div class="text-[3vw] w-[40vw] h-[10vw] text-[#fff]">
                    Saint-Denis:今日份的感动 “我希望我们两个之间的爱
                  </div>
                  <img
                    :src="item.uiElement.image.imageUrl"
                    alt=""
                    class="h-[15vw] w-[15vw]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>


export default{
 
   name:"trendingTopics",
   props:["playlists"]

}
</script>
