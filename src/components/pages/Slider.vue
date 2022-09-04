<template>
    <div class="absolute  w-full" v-for="(color, i) in sliders" :key="color">

        <transition name="fade">
            <div class="w-full" style="height: 350px;"

                 v-if="currentSlide === i"
                 :class="color"
            >
            </div>
        </transition>

    </div>

    <div class="absolute bottom-0 flex w-full justify-center"
         style="height: 290px; cursor: pointer">
        <div v-for="(item, i) in sliders"
             :key="item"
             class="w-4 h-4 ml-2  rounded-full"
             :class="currentSlide === i ? 'bg-gray-700': 'bg-gray-300'"
             @click="active(i)"
        >

        </div>
    </div>

</template>

<script>
    export default {
        name: "Slider",
        data() {
            return {
                currentSlide: 0,
                interval: '',
                sliders: [
                    'bg-blue-600',
                    'bg-yellow-600',
                    'bg-red-600',
                    'bg-green-600',
                ]
            }
        },
        mounted() {
            this.interval = setInterval(() => {
                if (this.currentSlide === this.sliders.length - 1) {
                    this.currentSlide = 0;
                } else {
                    this.currentSlide++;
                }
            }, 3000)
        },
        beforeUnmount() {
            clearInterval(this.interval);
        },
        methods:{
            active(i){
                this.currentSlide = i;
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: all 1s ease;
    }

    .fade-enter-from{
        opacity: 0;
        transform: translateX(-100%);
    }
    .fade-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
</style>