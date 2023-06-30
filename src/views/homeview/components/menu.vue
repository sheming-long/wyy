<template>
     <ul >
        <li v-for="item in menu" :key="item.tiancai" class="text-center">
          <icon
            :icon="item[1]"
            class="text-[#ff3a4c] w-[9vw] h-[9vw] ml-[16%]"
          ></icon>
          {{ item[0] }}
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

</style>