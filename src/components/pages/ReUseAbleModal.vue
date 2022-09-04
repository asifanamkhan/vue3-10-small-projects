<template>
    <section class="flex w-full">
        <div class="m-auto">
            <h1 class="text-2xl my-5 w-full">Re-Usable-Modal</h1>
            <Modal v-if="isModal1Open" @closeModal="isModal1Open=false">
                <template #title>
                    <h1 class="text-red-500">Modal-1 head</h1>

                </template>

                <template #body>
                    <h1 class="text-red-500">Modal-2 body</h1>
                </template>
            </Modal>

            <button class="border rounded px-2 mx-4 bg-red-500 text-white" @click="isModal1Open = true">Modal-2</button>


            <Modal v-if="isModal2Open" @closeModal="isModal2Open=false">
                <template #title>
                    <h1 class="text-blue-500">Modal-2 head</h1>

                </template>

                <template #body>
                    <h1 class="text-blue-500">Modal-2 body</h1>
                </template>
            </Modal>

            <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isModal2Open = true">Modal-2</button>

        </div>

    </section>
</template>

<script>
    import Modal from '../Modal'
    import {ref, onMounted, onUnmounted  } from 'vue'
    export default {
        components:{Modal},
        name: "ReUseAbleModal",

        setup(){
            const isModal1Open = ref(false);
            const isModal2Open = ref(false);

            return{
                isModal1Open,
                isModal2Open
            }
        }


    }
</script>

<style scoped>

</style>