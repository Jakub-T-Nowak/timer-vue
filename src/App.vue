<template>
  <v-app class="app">
      <AddTimer @emitAddTimer="addNewTimer"/>
      <Timer
        v-for="(timer, index) in timers"
        :key="index"
        :timerIndex="index"
        :timer="timer"
        :now="now"
        @emitDeleteTimer="deleteTimer"
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
    this.getActualTime();
    setInterval(this.getActualTime, 1000);

    let loaclStorageTimers = localStorage.getItem('localTimers');
    if (!loaclStorageTimers) {
      localStorage.setItem('localTimers', '[]');
    }
    loaclStorageTimers = JSON.parse(localStorage.getItem('localTimers'));
    this.timers = loaclStorageTimers
  },

  methods: {
    addNewTimer: function (date) {
      this.timers.push(date);
      localStorage.setItem('localTimers', JSON.stringify(this.timers));
    },
    getActualTime: function () {
      this.now = moment();
    },
    deleteTimer: function (timerIndex) {
      this.timers.splice(timerIndex, 1)
      localStorage.setItem('localTimers', JSON.stringify(this.timers));
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
