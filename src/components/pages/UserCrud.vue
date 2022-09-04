<template>
    <section class="flex w-full">
        <div class="m-auto">
            <div class="mt-10">

                <table>
                    <thead>
                    <tr>
                        <th class="px-4 py-2 border">Id</th>
                        <th class="px-4 py-2 border">Avatar</th>
                        <th class="px-4 py-2 border">First name</th>
                        <th class="px-4 py-2 border">Last name</th>
                        <th class="px-4 py-2 border">Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="user in state.users.data"
                        :key="user.id"
                    >
                        <td class="border px-4 py-2">{{user.id}}</td>
                        <td class="border px-4 py-2">
                            <img
                                    :src="user.avatar"
                                    alt=""
                                    class="rounded-full"
                                    width="50"
                            >
                        </td>
                        <td class="border px-4 py-2">{{user.first_name}}</td>
                        <td class="border px-4 py-2">{{user.last_name}}</td>
                        <td class="border px-4 py-2">{{user.email}}</td>
                    </tr>
                    </tbody>
                </table>

                <div class="flex justify-between mt-4">
                    <button class="px-3 py-2 border rounded " @click="prev"
                            :disabled="state.users.page === 1"
                            :class="state.users.page === 1 ? 'bg-gray-100': ''">Prev</button>
                    <button class="px-3 py-2 border rounded " @click="next"
                            :disabled="state.users.page === state.users.total_pages"
                            :class="state.users.page === state.users.total_pages ? 'bg-gray-100': ''"
                    >Next</button>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    import {onMounted, reactive} from 'vue';
    import axios from '../../../plugins/axios'
    export default {
        name: "UserCrud",
        setup() {

            const state = reactive({
                users: [],
            });

            onMounted(async () => {
                const {data} = await axios.get(`/users`)
                state.users = data;
            });

            async function next() {
                const {data} = await axios.get(`/users?page=2`)
                state.users = data;
            }

            async function prev() {
                const {data} = await axios.get(`/users?page=1`)
                state.users = data;
            }

            return {state, next, prev}
        }
    }
</script>

<style scoped>

</style>