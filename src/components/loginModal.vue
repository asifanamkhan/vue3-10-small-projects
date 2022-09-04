<template>

    <section
            @click="close"
            class="z-20 h-screen w-screen bg-gray-500 fixed opacity-50 top-0">

    </section>
    <div class=" absolute inset-0">
        <div class="flex h-full">
            <div class="w-1/3 z-30 m-auto bg-white rounded p-2 shadow">
                <h1 class="text-xl text-center bold">Login</h1>
                <googleLogin @close-login-from-google="close" @changeTitleFromGoogle="title = $event"/>
                <p class="my-3 text-center" >Or</p>
                <form action="" class="p-2 my-2" @submit.prevent="submit">
                    <div class="p-2 ">
                        <div class="my-2">
                            <label for="">Email or Username</label>
                            <input v-model="email" type="text" class="rounded shadow p-2 m-2 w-full"
                                   placeholder="Enter your email or username">
                        </div>
                        <div class="my-2">
                            <label for="">Password</label>
                            <input v-model="password" type="password" class="rounded shadow p-2 m-2 w-full"
                                   placeholder="Enter your password">
                        </div>
                        <div class="my-4">
                            <button type="submit"
                                    class="w-full rounded shadow-md p-2
                                    bg-gradient-to-r from-red-700 to-pink-400
                                    text-white">
                                <span v-if="!isLoading">Login</span>
                                <span v-else="" class="spin">
                                      Loading
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    import firebase from '../utilities/firebase';
    import googleLogin from '../components/login/google'

    import {

        getAuth,
        signInWithEmailAndPassword ,
        GoogleAuthProvider,
        signInWithPopup

    } from "firebase/auth";


    export default {
        name: "loginModal",
        components: {googleLogin},

        emits: ['closeLoginModal','changeTitle','@close-login-from-google', 'changeTitleFromGoogle'],
        data() {
            return {

                email: 'somuddro250@gmail.com',
                password: 'password',
                isLoading: false,
                title:'No user found'

            }
        },

        mounted(){
            console.log('5 ' + this.title);
            this.$emit('changeTitle',this.title);
        },

        methods: {
            submit() {
                this.isLoading = true;
                const auth = getAuth();
                signInWithEmailAndPassword(auth, this.email, this.password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        console.log(user);
                        this.isLoading = false;
                        this.close();
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        this.isLoading = false;
                        this.email = '';
                        this.password = ''
                    });

            },


            close(){
                this.$emit('closeLoginModal')
            }
        }
    }
</script>

<style scoped>


</style>