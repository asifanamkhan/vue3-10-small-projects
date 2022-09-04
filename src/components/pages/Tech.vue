<template>
    <div class="w-full flex">
        <div class="m-auto">
            <div class="text-2xl text-center">
                <h2>
                    Tech (Total {{totalTech}})
                </h2>
            </div>

            <div class="py-5 px-5">
                <ul>
                    <li class="flex justify-between" v-for="(tech, index) in dcTech" :key="tech.name">
                        <div><strong>{{index+1}}. </strong> {{tech.name}}</div>
                        <span style="color: red" @click="removeTech(tech.name)">
                            <button >x</button>
                        </span>
                    </li>
                </ul>

                <form @submit.prevent="addTech" action="" class="mt-10">

                    <input ref="newTech" type="text" v-model="newTech" placeholder="add new tech" class="border rounded">
                    <button class="border rounded bg-gradient-to-r from-red-700 to pink-500 ml-2 ">Add new tech</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tech",
        data() {
            return {
                newTech: "",
                dcTech: [
                    {name: "Apple"},
                    {name: "Sony"},
                    {name: "One Plus"},
                    {name: "Vivo"},
                    {name: "Samsung"},
                ]
            }
        },
        computed: {
            totalTech() {
                return `${this.dcTech.length} tech`
            }
        },
        mounted(){
            this.$refs.newTech.focus();
        },
        methods: {
            addTech() {
                if (this.newTech === '') {
                    alert('Enter a valid tech name')
                } else {
                    this.dcTech.push({
                        name: this.newTech
                    });
                    this.newTech = '';
                }

            },
            removeTech(name) {
                this.dcTech = this.dcTech.filter(tech => name !== tech.name);
            }
        }
    }
</script>

<style scoped>

</style>