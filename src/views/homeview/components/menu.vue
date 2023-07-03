<template>
     <ul >
        <li v-for="item in menu" :key="item.tiancai" class="text-center text-[3vw] text-[#717579] flex w-[18vw]" style="display: flex;
    flex-direction: column;
    align-items: center;">
          <!-- <icon
            :icon="item[1]"
            class="text-[#ff3a4c] w-[9vw] h-[9vw] ml-[16%]"
          ></icon> -->

            <img :src="item.iconUrl" alt="" class="w-[9vw] h-[9vw]  red-image">
          {{ item.name }}
        </li>
      </ul>
</template>

<script>
    export default({
        name:"indexmenu",
        props:["menu"]
    })
</script>

<style scoped>
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}

</style>