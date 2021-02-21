<template>
  <v-app class="app">
      <AddTimer @click="click_x"/>
      <Timer
        v-for="(timer, index) in timers"
        :key="index"
        :timerIndex="index"
        :timer="timer"
        :now="now"
        @deleteTimer="deleteTimer"
      />
      <notifications position="bottom center"/>
  </v-app>
  
</template>

<script>
import moment from 'moment'
import AddTimer from './components/AddTimer';
import Timer from './components/Timer';
export default {
  name: 'App',

  components: {
    AddTimer, Timer
  },

  data: () => ({
    timers: [],
    now : {}
  }),

  created () {
      setInterval(this.getActualTime, 1000);
  },

  methods: {
    click_x: function (date) {
      this.timers.push(date)
      this.now = moment();
    },
    getActualTime: function () {
      this.now = moment();
    },
    deleteTimer: function (key_x) {
      this.timers.splice(key_x, 1)
    }
  }
};
</script>

<style>
  .app{
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  .m-top-20{
    margin-top: 20px;
  }
</style>
