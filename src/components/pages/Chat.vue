<template>

    <section class="flex w-full">
        <div class="m-auto">
            <h1 class="text-center text-2xl">Real Time Chat</h1>
            <div class="border rounded-lg">
                <div class="h-64 p-2">
                    <div class=""
                         v-for="chat in state.chats"
                         :key="chat.message"
                         :class="chat.userId === state.userId ? 'text-right' : ''"
                    >
                        {{chat.message}}
                    </div>
                </div>
                <div class="h-8 p-2">
                    <input class="p-1 border rounded shadow"
                           v-model="state.message"
                           type="text"
                           placeholder="Start Typing..."
                           @keydown.enter="addMessage"
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {onMounted, onUnmounted, reactive} from 'vue'
    import firebase from '../pages/../../components/../utilities/firebase';
    import {getDatabase, ref, onValue, set, push} from "firebase/database";
    import {getAuth} from "firebase/auth";


    export default {
        name: "Chat",
        setup() {
            const state = reactive({
                chats: {},
                message: '',
                userId: '',
            });

            onMounted(() => {
                const db = getDatabase();
                const newRed = ref(db, 'chats');
                onValue(newRed, (snapshot) => {

                    state.chats = snapshot.val();
                });


            });

            function addMessage() {
                const db = getDatabase();

                const auth = getAuth();
                state.userId = auth.currentUser.uid;

                const postListRef = ref(db, 'chats');
                const newPostRef = push(postListRef);

                set(newPostRef, {
                    name: 'asif',
                    userId: state.userId,
                    message: state.message

                });


                state.message = '';

            }

            return {state, onMounted, addMessage};
        }
    }
</script>

<style scoped>

</style>