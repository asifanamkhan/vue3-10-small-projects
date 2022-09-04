export default {
    data(){
        return{
            timeout: 5
        }
    },
    methods:{
        debounce(func, wait){
            console.log('mixin');
            clearTimeout(this.timeout);
            this.timeout = setTimeout(func, wait)
        }
    }

}