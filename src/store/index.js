import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 1,
            isLoggedIn: false,
            authUser:{}
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        setIsLoggedIn (state) {
            state.isLoggedIn = true;
        },
        setAuthUser (state, payload) {
            state.isLoggedIn = payload;
        }
    }
});

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)

export default store