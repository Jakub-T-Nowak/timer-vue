<template>
  <v-app>
      <AddTimer @click="click_x"/>
      <Timer
        v-for="(timer, index) in timers"
        :key="index"
        :timer="timer"
        :now="now"
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

  methods: {
    click_x: function (date) {
      this.timers.push(date)
      this.now = moment();
    }
  }
};
</script>

<style>

</style>
