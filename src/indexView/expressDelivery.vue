<template>
    <div >
          <div
            class="float-left mr-[5vw]"
            v-for="item in express"
            :key="item.ui"
          >
            <li class="flex w-[95vw] h-[15vw]">
              <img
                :src="item.resources[0].uiElement.image.imageUrl"
                alt=""
                class="w-[15vw] h-[15vw] rounded-[3vw]"
              />
              <div class="xuanz">
                <p class="whitespace-nowrap text-[4vw] font-bold">
                  {{ item.resources[0].uiElement.mainTitle.title }}
                </p>
                <p class="whitespace-nowrap text-[3vw] text-[#7b7d82]">
                  <span
                    class="text-[10px]"
                    style="
                      color: red;
                      background-color: #efe6e4;
                      padding: 3px;
                      border-radius: 2px;
                    "
                    >{{ Delivery[0] }}</span
                  >
                  {{ item.resources[0].uiElement.subTitle.title }}
                  -
                  {{ item.resources[0].resourceExtInfo.artists[0].name }}
                </p>
              </div>
            </li>
            <li class="flex w-[95vw] h-[15vw] mt-[5vw]">
              <img
                :src="item.resources[1].uiElement.image.imageUrl"
                alt=""
                class="w-[15vw] h-[15vw] rounded-[3vw]"
              />
              <div class="xuanz">
                <p class="whitespace-nowrap text-[4vw] font-bold">
                  {{ item.resources[1].uiElement.mainTitle.title }}
                </p>
                <p class="whitespace-nowrap text-[3vw] text-[#7b7d82]">
                  <span
                    class="text-[10px]"
                    style="
                      color: red;
                      background-color: #e6e0b9;
                      padding: 3px;
                      border-radius: 2px;
                      color: yellow;
                    "
                    >{{ Delivery[1] }}</span
                  >
                  {{ item.resources[1].uiElement.subTitle.title }}
                  -
                  {{ item.resources[1].resourceExtInfo.artists[0].name }}
                </p>
              </div>
            </li>
            <li class="flex w-[95vw] h-[15vw] mt-[5vw]">
              <img
                :src="item.resources[2].uiElement.image.imageUrl"
                alt=""
                class="w-[15vw] h-[15vw] rounded-[3vw]"
              />
              <div class="xuanz">
                <p class="whitespace-nowrap text-[4vw] font-bold">
                  {{ item.resources[2].uiElement.mainTitle.title }}
                </p>
                <p class="whitespace-nowrap text-[3vw] text-[#7b7d82]">
                  <span
                    class="text-[10px]"
                    style="
                      color: red;
                      background-color: #e6e0b9;
                      padding: 3px;
                      border-radius: 2px;
                      color: yellow;
                    "
                    >{{Delivery[2]}}</span
                  >
                  {{ item.resources[2].uiElement.subTitle.title }}
                  -
                  {{ item.resources[2].resourceExtInfo?.artists[0].name }}
                </p>
              </div>
            </li>
          </div>
        </div>
</template>

<script>
export default{
    name:"expressDelivery",
     props:["express","Delivery"]
}
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
</style>