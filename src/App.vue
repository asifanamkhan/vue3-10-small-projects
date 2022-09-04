<template>
    <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true"/>
        <h1 class="text-center text-2xl" >{{title}}</h1>
    <router-view></router-view>

    <login-modal v-if="isLoginOpen" @closeLoginModal="isLoginOpen = false" @changeTitle="title = $event" />

</template>

<script>

    import AppHeader from "./components/AppHeader";
    import LoginModal from "./components/loginModal";
    import firebase from './utilities/firebase';
    import {getAuth, onAuthStateChanged } from "firebase/auth";

    export default {
        emits: ['changeTitle'],
        name: 'App',
        components: {LoginModal, AppHeader},
        data(){
            return{

                isLoginOpen: false,
                // isLoggedIn: false,
                // authUser:{},
                title:'No user found'
            }
        },
        mounted(){
            const auth = getAuth();

            onAuthStateChanged(auth, (user) => {
                if (user) {

                    this.$store.commit('setIsLoggedIn');
                    this.$store.commit('setAuthUser', user);

                    //this.isLoggedIn = true;
                    //this.authUser = user;
                    //const uid = user.uid;
                    //console.log(uid);
                    // ...
                } else {
                    this.isLoggedIn = false;
                    this.authUser = {};
                    console.log('no user');
                }
            });


        },



    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }
</style>
