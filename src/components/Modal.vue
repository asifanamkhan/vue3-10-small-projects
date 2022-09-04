<template>
    <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed opacity-50 top-0 left-0">
    </section>
    <div class=" absolute inset-0">
        <div class="flex h-full">
            <div class="w-1/3 z-30 m-auto bg-white rounded p-2 shadow">
                <div class="p-2 border">
                    <h1 class="text-2xl">
                        <slot name="title"></slot>
                    </h1>
                    <main>
                        <slot name="body"></slot>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref, onMounted, onUnmounted  } from 'vue'

    export default {
        name: "Modal",
        setup( _ , {emit}){

           function close(){
                emit('closeModal')
           }

           return {
               close
           }

        }
    }
</script>

<style scoped>

</style>