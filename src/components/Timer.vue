<template>
  <v-card class="m-top-20">
    <template v-if="seconds > 0">
      {{time.days}}
      {{time.hours}}
      {{time.minutes}}
      {{time.seconds}}
    </template>
    <template v-else>
      STOP!
      <v-btn
      small
      @click="xxx"
      >
      DELETE
      </v-btn>
    </template>
  </v-card>
  
</template>

<script>
//import moment from 'moment'
export default {
  name: 'Timer',

  props: {
    timer: Object,
    now: Object,
    key_x: Number
  },

  data() {return {
  }},

  computed: {
    time: function () {
      const days = this.timer.diff(this.now, 'days')
      let hoursAll = this.timer.diff(this.now, 'hours')
      let minutesAll = this.timer.diff(this.now, 'minutes')
      let secondsAll = this.timer.diff(this.now, 'seconds')

      const hours = hoursAll - (days*24)
      const minutes = minutesAll - (hoursAll*60)
      const seconds = secondsAll - (minutesAll*60)
      return {days, hours, minutes, seconds}
    },
    seconds: function () {
      return this.timer.diff(this.now, 'seconds')
    },
  },

  methods:{
    xxx: function () {
      this.$emit("deleteTimer", this.key_x)
    }
  }
}
</script>