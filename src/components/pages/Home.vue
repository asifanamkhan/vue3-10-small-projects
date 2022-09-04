<template>
    <div class="w-full flex">
        <h1 class="text-2xl text-center m-auto">
            Vue 3 Apps
        </h1>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
           return{
               store: this.$store.state,
           }
        },

        mounted(){
            console.log(this.$store.state);
        }
    }
</script>

<style scoped>

</style>