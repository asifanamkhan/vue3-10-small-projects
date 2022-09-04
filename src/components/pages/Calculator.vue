<template>

    <section class="flex w-full">
        <div class="m-auto">
            <h1 class="text-2xl text-center"></h1>
            <p class="text-3xl text-right h-20 mt-10 mb-4 w-52 overflow-x-scroll" style="direction: rtl;">{{currentNum}}</p>
            <small class="" v-if="selectedOperations">{{prevNum}} {{selectedOperations}} {{currentNum}}</small>
            <div class=" grid grid-cols-4 gap-4">
                <button @click="pressed('1')" class="p-2 rounded border shadow  h-10">1</button>
                <button @click="pressed('2')" class="p-2 rounded border shadow  h-10">2</button>
                <button @click="pressed('3')" class="p-2 rounded border shadow  h-10">3</button>
                <button @click="pressed('+')" class="p-2 rounded border shadow  h-10">+</button>
                <button @click="pressed('4')" class="p-2 rounded border shadow  h-10">4</button>
                <button @click="pressed('5')" class="p-2 rounded border shadow  h-10">5</button>
                <button @click="pressed('6')" class="p-2 rounded border shadow  h-10">6</button>
                <button @click="pressed('-')" class="p-2 rounded border shadow  h-10">-</button>
                <button @click="pressed('7')" class="p-2 rounded border shadow  h-10">7</button>
                <button @click="pressed('8')" class="p-2 rounded border shadow  h-10">8</button>
                <button @click="pressed('9')" class="p-2 rounded border shadow  h-10">9</button>
                <button @click="pressed('*')" class="p-2 rounded border shadow  h-10">*</button>
                <button @click="pressed('0')" class="p-2 rounded border shadow  h-10">0</button>
                <button @click="pressed('.')" class="p-2 rounded border shadow  h-10">.</button>
                <button @click="pressed('=')" class="p-2 rounded border shadow  h-10">=</button>
                <button @click="pressed('/')" class="p-2 rounded border shadow  h-10">/</button>
                <button @click="pressed('c')" class="p-2 rounded border shadow  h-10 col-span-4">C</button>
            </div>
        </div>
    </section>
</template>

<script>
    import {ref} from 'vue'
    import useWindowEvent from '../.././utilities/composition/useWindowEvent';
    export default {
        name: "Calculator",
        setup(){

            const operations = ['+', '-', '*', '/' ];
            const numbers = ['1','2','3','4','5','6','7','8','9','0','.'];
            const currentNum = ref("");
            const prevNum = ref("");
            const selectedOperations = ref("");


            function pressed(value) {

                if(value === '=' || value === 'Enter') {
                    calculate();
                }
                else if(value === 'c'){
                    clearScreen();
                }
                else if(operations.includes(value)){
                    applyOperations(value);
                }
                else if(numbers.includes(value)){

                    appendNumber(value);
                }

            }

            function appendNumber(value) {
                if(!(currentNum.value % 1 !== 0)){
                    currentNum.value = currentNum.value + value;
                }

            }

            function applyOperations(value) {
                calculate();
                prevNum.value = currentNum.value;
                currentNum.value = "";
                selectedOperations.value = value;
            }

            function calculate() {
                if(selectedOperations.value === "*"){
                    multiply();

                }
                else if(selectedOperations.value === "/"){
                    devide();

                }
                else if(selectedOperations.value === "-"){
                    subtract();

                }
                else if (selectedOperations.value === "+"){
                    sum();

                }

                prevNum.value = "";
                selectedOperations.value = "";

            }
            
            function multiply() {
                currentNum.value = prevNum.value * currentNum.value;
            }
            function devide() {
                currentNum.value = prevNum.value / currentNum.value;
            }
            function subtract() {
                currentNum.value = prevNum.value - currentNum.value;
            }
            function sum() {
                currentNum.value = +prevNum.value + + currentNum.value;
            }

            function clearScreen() {
                currentNum.value = "";
            }

            const handelEvent = (e) =>{pressed(e.key)};

            useWindowEvent('keydown',handelEvent);




            return {
                currentNum,
                pressed,
                selectedOperations,
                prevNum,

            }
        }
    }
</script>

<style scoped>

</style>