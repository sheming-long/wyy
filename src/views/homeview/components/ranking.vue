<template>
     <div >
            <div
              class="float-left mr-[5vw] bg-[#ffffff] h-[86vw] text-2xl rounded-[4vw] shadow-md border-b"
            
              v-for="item in king"
              :key="item.king"
            >
              <p style="margin-top: 3vw; padding: 0 3vw" class=" text-[5vw] font-bold">
                霸歌榜
                <icon
                  icon="ant-design:right-outlined"
                  class="w-[6vw] h-[6vw] inline-block mt-[-1vw]"
                />
                <span class="float-right text-[#929a9a] text-xl"
                  >云村用户都在听</span
                >
              </p>
              <li
                class="flex w-[95vw] h-[15vw] mt-[5vw]"
                style="padding: 0 3vw"
              >
                <img
                  :src="item.resources[0].uiElement.image.imageUrl"
                  alt=""
                  class="w-[15vw] h-[15vw] rounded-[3vw]"
                />
                <div class="xuanz relative">
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[80vw] leading-[5vw] font-bold"
                  >
                    {{ item.resources[0].uiElement.mainTitle.title }}
                  </p>
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[75vw] text-right text-[red] leading-[5vw] "
                  >
                    {{ item.resources[0].uiElement.labelText.text }}
                  </p>
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[3vw] leading-[3vw] w-[80vw]"
                  >
                    {{
                      item.resources[0].resourceExtInfo?.songData.artists[0]
                        .name
                    }}
                  </p>
                  <p
                    class="absolute text-[#cea951] text-[5vw] left-[-6vw] font-extrabold"
                  >
                    1
                  </p>
                </div>
              </li>
              <li
                class="flex w-[95vw] h-[15vw] mt-[5vw]"
                style="padding: 0 3vw"
              >
                <img
                  :src="item.resources[1].uiElement.image.imageUrl"
                  alt=""
                  class="w-[15vw] h-[15vw] rounded-[3vw]"
                />
                <div class="xuanz relative">
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[80vw] leading-[5vw] font-bold"
                  >
                    {{ item.resources[1].uiElement.mainTitle.title }}
                  </p>
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[75vw] text-right text-[red] leading-[5vw] " 
                  >
                    {{ item.resources[1].uiElement.labelText.text }}
                  </p>
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[3vw] leading-[3vw] w-[80vw]"
                  >
                    {{
                      item.resources[1].resourceExtInfo?.songData.artists[0]
                        .name
                    }}
                  </p>
                  <p
                    class="absolute text-[#767a93] text-[5vw] left-[-6vw] font-extrabold"
                  >
                    2
                  </p>
                </div>
              </li>
              <li
                class="flex w-[95vw] h-[15vw] mt-[5vw]"
                style="padding: 0 3vw"
              >
                <img
                  :src="item.resources[2].uiElement.image.imageUrl"
                  alt=""
                  class="w-[15vw] h-[15vw] rounded-[3vw] bg-[100%]"
                />
                <div class="xuanz relative">
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[80vw] leading-[5vw] font-bold"
                  >
                    {{ item.resources[2].uiElement.mainTitle.title }}
                  </p>
                  <p 
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[75vw] text-right text-[red] leading-[5vw] "
                  >
                    {{ item.resources[2].uiElement.labelText.text }}
                  </p>
                  <p
                    class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[3vw] leading-[3vw] w-[80vw]"
                  >
                    {{
                      item.resources[2].resourceExtInfo?.songData.artists[0]
                        .name
                    }}
                  </p>
                  <p
                    class="absolute text-[#b58262] text-[5vw] left-[-6vw] font-extrabold"
                  >
                    3
                  </p>
                </div>
              </li>
            </div>
          </div>
</template>

<script>
export default {
    name:"ranking",
    props:["king"]
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