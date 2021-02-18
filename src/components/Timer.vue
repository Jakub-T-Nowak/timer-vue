<template>
  <v-card>
      {{time[0]}}
      {{time[1]}}
  </v-card>
  
</template>

<script>
//import moment from 'moment'
export default {
  name: 'Timer',

  props: {
    timer: Object,
    now: Object
  },

  data() {return {
  }},

  computed: {
    time: function () {
      const days =  this.timer.diff(this.now, 'days')
      let hours =  this.timer.diff(this.now, 'hours')
      hours = hours - (days*24)
      return [days, hours]
    }
  },

  methods:{
  }
}
</script>