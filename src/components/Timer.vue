<template>
  <v-card class="m-top-20 height">
    <template v-if="seconds > 0">
      <v-row class="row">

        <template
          v-for="(value, index) in time"  
        >
        <div :key="index">
          <v-chip
            :color="color" 
            label
            class="chip"  
          >
            {{value}}
          </v-chip>
          <p class="par">
            {{language(timeLabel[index])}}
          </p>
        </div>
        </template>
      <v-btn
        fab
        dark
        small
        color="error"
        class="btn-del"
        
        @click="deleteBtn"
      >
        <v-icon dark>
          mdi-close
        </v-icon>
      </v-btn>

      </v-row>
    </template>

    <template v-else>
      <v-row justify="center" class="m-top-20">
        {{language(text.info)}}
      </v-row>
      <v-row  justify="center" class="m-top-10">
        <v-btn
          small
          class="btn"
          @click="deleteBtn"
          
        >
          {{language(text.delete)}}
        </v-btn>
        <v-btn
          small
          class="btn"
          @click="resetBtn"
        >
          {{language(text.reset)}}
        </v-btn>
      </v-row>
      
    </template>
  </v-card>
  
</template>

<script>
import moment from 'moment'
export default {
  name: 'Timer',

  props: {
    timer: Object,
    now: Object,
    timerIndex: Number
  },

  data() {return {
    timeLabel: [
      ['day', 'dni'], 
      ['hours', 'godz'],
      ['min', 'min'],
      ['sec', 'sek']
    ],
    countEndDate: "",
    text: {
      info: ['Counting ended.', 'Odliczanie zakończone.'],
      delete: ['DELETE', 'USUŃ'],
      reset: ['RESET', 'WZNÓW']
    }
  }},

  created () {
      this.countEndDate = this.timer.date;
  },

  computed: {
    time: function () {
      const date = moment(this.countEndDate);
      const days = date.diff(this.now, 'days');
      let hoursAll = date.diff(this.now, 'hours');
      let minutesAll = date.diff(this.now, 'minutes');
      let secondsAll = date.diff(this.now, 'seconds');

      const hours = hoursAll - (days*24);
      const minutes = minutesAll - (hoursAll*60);
      const seconds = secondsAll - (minutesAll*60);
      return [days, hours, minutes, seconds];
    },
    seconds: function () {
      const timer = moment(this.countEndDate);
      return timer.diff(this.now, 'seconds');
    },
    color: function () {
      const colorNumber = this.$root.$data.color
      if (colorNumber === 0){
        return 'rgb(173,216,230)'
      }
      else if (colorNumber === 1){
        return 'rgb(255,204,200)';
      }
      return 'rgb(153,251,150)'
    }
  },

  methods:{
    deleteBtn: function () {
      this.$emit("emitDeleteTimer", this.timerIndex);
    },
    language: function (text) {
      return text[this.$root.$data.language]
    },
    resetBtn: function () {
      const dateNow = moment();
      const newEndOfCountingDate = dateNow.add(this.timer.deltaSeconds, 'seconds');
      this.countEndDate = newEndOfCountingDate;
    }
  }
}
</script>

<style scoped>
  .chip{
    margin-top: 20px;
    margin-left: 20px;
    height: 50px !important;
    min-width: 50px;
    display: block;
    text-align: center;
  }
  .row {
    margin: 0px;
  }
  .height {
    height: 105px;
  }
  .btn-del {
    margin-top: 25px;
    margin-left: 60px;
  }
  .par {
    margin-left: 20px;
    text-align: center;
  }
  .btn {
    width: 120px;
    margin-left: 8px;
    margin-right: 8px;
  }
</style>