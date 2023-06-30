<template>
       <div >
        <p class="text-[5vw] font-bold">
          推荐歌单<icon
            icon="ant-design:right-outlined"
            class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
          />
        </p>
        <div class="swiper-container mt-3">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide relative"
              v-for="item in playlists"
              :key="item.id"
            >
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
                }}万</span
              >
            </div>
          </div>
        </div>
      </div>
</template>

<script>


export default {
   name:"playlist",
   props:["playlists"]
}
</script>
<style scoped>
    .swiper-container img,
video {
  /* max-width: 100%; */
  width: 32vw !important;
  height: 32vw !important;
  margin-right: 2vw !important;
}
.swiper-slide {
  flex-shrink: 0;
  width: 32vw !important;
  height: 32vw !important;
  margin-right: 2vw !important;
  position: relative;
  transition-property: transform;
  overflow: visible;
}

.swiper-container {
  height: 50vw !important;
}
</style>