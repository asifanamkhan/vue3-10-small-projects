<template>
    <div class="w-full flex">
        <div class="py-5 px-5 m-auto">
            <h1 class="text-2xl my-2 text-center">
                Vue Calender
            </h1>

            <section class="mx-2 my-2 flex justify-between">
                <p class="font-bold">{{currentMonthName}}</p>
                <p class="font-bold">{{currentYear}}</p>

            </section>


            <section class="flex my-2">
                <p class="text-center" style="width: 14.28%" v-for="day in days" :key="day">
                    {{day}}
                </p>
            </section>

            <section class="flex flex-wrap">
                <p class="text-center" style="width: 14.28%" v-for="num in startDay()" :key="num">

                </p>
                <p class="text-center" style="width: 14.28%"
                   v-for="num in daysInMonth()"
                   :key="num"
                   :class="currentDateClass(num)"
                >
                    {{num}}
                </p>
            </section>

            <section class="flex justify-between m-2">
                <button class="px-2 border rounded" @click="prev()">Prev</button>
                <button class="px-2 border rounded" @click="next()">Next</button>
            </section>

        </div>
    </div>

</template>

<script>
    export default {
        name: "Calendar",
        data() {
            return {
                currentDate: new Date().getDate(),
                currentMonth: new Date().getMonth(),
                currentYear: new Date().getFullYear(),
                days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

            }
        },

        created() {
            console.log(this.currentMonth);
            console.log(this.currentYear);
            console.log(this.startDay());
        },

        computed: {
            currentMonthName() {
                return new Date(
                    this.currentYear,
                    this.currentMonth,
                ).toLocaleString("default", {month: "long"});
            }
        },

        methods: {
            daysInMonth() {

                return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
            },

            startDay() {
                return new Date(this.currentYear, this.currentMonth, 1).getDay();
            },

            next() {
                if (this.currentMonth === 11) {
                    this.currentMonth = 0;
                    this.currentYear++;
                }
                else {
                    this.currentMonth++;
                }

            },

            prev() {
                if (this.currentMonth === 0) {
                    this.currentMonth = 11;
                    this.currentYear--;
                }
                else {
                    this.currentMonth--;
                }

            },

            currentDateClass(num) {

                const calenderFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();

                if (calenderFullDate === new Date().toDateString()) {
                    return 'inline-block bg-blue-600 rounded-full text-white'
                }

            }
        },

    }
</script>

<style scoped>

</style>