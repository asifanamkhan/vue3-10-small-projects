import {onMounted, onUnmounted  } from 'vue'

export default function useWindowEvent(eventName, handelEvent) {
    onMounted(()=> {window.addEventListener(eventName,handelEvent)});

    onUnmounted(()=> {window.removeEventListener(eventName,handelEvent)});

}