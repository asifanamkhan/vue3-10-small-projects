<template>
    <nav
            class="w-full bg-gradient-to-r
            from-blue-700 to blue-500 ml-2
            px-3 py-3 text-center text-white
            mb-5"
    >

        <router-link
                class="ml-3"
                v-for="list in lists"
                :key="list.to"
                :to="list.to"
        >
            {{list.title}}
        </router-link>

        <button v-if="!isLoggedIn" class="ml-3" @click="$emit('open-login-modal')">
            Login
        </button>

        <button v-else class="ml-3" @click="logout">
            Logout
        </button>



    </nav>
</template>

<script>
    import firebase from '../utilities/firebase';
    import { getAuth, signOut  } from "firebase/auth";

    export default {
        name: "AppHeader",
        props:{"isLoggedIn":
                {
                    type:Boolean,
                    required:false,
                },
            },

        data(){
            return{
                lists:[
                    {title: "Home" , to:"/"},
                    {title: "Tech" , to:"/tech"},
                    {title: "Calender" , to:"/calender"},
                    {title: "Markdown" , to:"/markdown"},
                    {title: "Slider" , to:"/slider"},
                    {title: "Calculator" , to:"/calculator"},
                    {title: "Modal" , to:"/modal"},
                    {title: "Chat" , to:"/chat"},
                    {title: "UserCrud" , to:"/user-crud"},

                ]
            }
        },

        methods:{
            logout(){
                const auth = getAuth();
                signOut(auth).then(() => {

                }).catch((error) => {

                });
            }
        }
    }
</script>

<style scoped>

</style>