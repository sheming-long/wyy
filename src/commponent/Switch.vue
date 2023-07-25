<template>
    <div class="w-[50px] h-[30px] rounded-[15px] " :class="`${value ? 'bg-red-700' : 'bg-black'}`" @click="asd">
        <div class="w-[30px] h-[30px] rounded-[15px] bg-white transition-all"
            :class="`${value ? 'translate-x-[20px]' : 'translate-x-0'}`">
        </div>
    </div>
</template>
<script>
import store from 'storejs';
export default {
    props: {
        value: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        asd() {
            this.toggle()
            this.chanse()
        },
        chanse() {
            if(store.get('dark')){
                store.set('dark', false)
            }else{
                store.set('dark', true)
            }
        },
        toggle() {
            this.$emit('input', !this.value);
        },
    },
    created() {
        if (store.get('dark') == undefined) {
            store.set('dark', false)
        }
    }
};
</script>
