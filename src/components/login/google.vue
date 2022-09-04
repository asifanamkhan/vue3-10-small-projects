<template>
    <section class="my-5 text-center">
        <button class="border px-2 rounded" @click="loginWithGoogle">Login with Google</button>
    </section>
</template>

<script>
    import firebase from '../../utilities/firebase';
    import {

        getAuth,
        signInWithEmailAndPassword ,
        GoogleAuthProvider,
        signInWithPopup

    } from "firebase/auth";
    export default {
        name: "google",
        methods:{
            loginWithGoogle(){
                const auth = getAuth();
                const provider = new GoogleAuthProvider();
                signInWithPopup(auth, provider)
                    .then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        const token = credential.accessToken;
                        // The signed-in user info.
                        const user = result.user;

                        console.log(user.displayName);


                        this.$emit('changeTitleFromGoogle','ool');

                        this.$emit('close-login-from-google')


                    });
            },
        }
    }
</script>

<style scoped>

</style>