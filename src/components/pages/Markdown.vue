<template>
    <div class="w-full flex">
        <div class="m-auto">
            <h1 class="text-2xl mb-4">Markdown app</h1>

            <section class="flex flex-wrap h-screen">
                <article class="w-1/2 border">
                    <textarea class="w-full h-full" placeholder="type here" :value="text" @input="update"></textarea>
                </article>
                <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
            </section>
        </div>
    </div>

</template>

<script>
    import marked from "marked";
    import deBounce from "../../utilities/mixin/de-bounce"

    export default {
        mixins: [deBounce],
        name: "markdown",
        data() {
            return {
                text: "",
            }
        },
        computed: {
            markedText() {
                return marked(this.text)
            }
        },
        methods: {
            update(e) {
                //console.log(this.timeout);
                const task = () => this.text = e.target.value;
                this.debounce(task, 500);

            },

        }
    }
</script>

<style scoped>

</style>