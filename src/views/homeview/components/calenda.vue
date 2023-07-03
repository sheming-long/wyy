<template>
  <div >
    <div
      v-for="item in xxs"
      :key="item.da"
      class="flex h-[20vw]"
      style="display: flex; justify-content: space-around ;"
    >
      <div
        class="flex-nowrap"
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        "
      >
        <p class="text-[#767a93] text-[3vw]">
          {{ Month }}月{{ Day }}日
        </p>
        <p
          class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[4vw] w-[70vw] leading-[5vw] font-[700]"
        >
          {{ item.title }}
        </p>
      </div>
      <img :src="item.imgUrl" alt="" class="w-[16vw] h-[16vw] rounded-[2vw] mt-[2vw]" />
    </div>
  </div>
</template>

<script>


export default {
      name:"indexmenu",
      props:["xxs","Month","Day"]
}
</script>
