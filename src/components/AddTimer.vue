<template>
  <v-card class="m-top-20">
    <v-row style="margin: 0px; margin-left: 10px; margin-right: 10px;">
        <v-text-field
          :label="language(text.name)"
          v-model="timerName"
        ></v-text-field>
    </v-row>

    <v-row style="margin: 0px; margin-left: 10px; margin-right: 10px;">
      <v-col cols="6" style="padding: 0px;">
        <v-datetime-picker
          :label="language(text.label)" 
          v-model="datetime"
        >
          <template slot="dateIcon">
            <v-icon dark>
              mdi-calendar-month
            </v-icon>
          </template>
          <template slot="timeIcon">
            <v-icon dark>
              mdi-clock-outline
            </v-icon>
          </template>
        </v-datetime-picker>
      </v-col>
      <v-col style="padding: 0px;">
        <v-btn
          fab
          dark
          small
          :color="color"
          class="btn"
          @click="clickBtnAddTimer()"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  name: 'AddTimer',

  props: {
    msg: String
  },

  data() {return {
    datetime: "",
    timerName: "",
    text: {
      name: ['Name', 'Nazwa'],
      label: ["Select Datetime", "Wybierz czas"]
    }
  }},

  computed: {
    color: function () {
      const colorNumber = this.$root.$data.color
      if (colorNumber === 0){
        return 'blue'
      }
      else if (colorNumber === 1){
        return 'red';
      }
      return 'green'
    }
  },

  methods:{
    notifyError: function (text) {
      this.$notify({
          type:"error",
          title: "Error!",
          text: text,
          duration: 3000,
        })
    },
    clickBtnAddTimer: function () {
      const date = moment(this.datetime);
      const now = moment();

      const deltaSeconds = date.diff(now, 'seconds')
      const deltaDays = date.diff(now, 'days')
      const dateToSend = {date: this.datetime, deltaSeconds}

      if (isNaN(date)){
        this.notifyError("Data input can't be empty.");
      }
      else if (deltaSeconds < 2) {
        this.notifyError("Date can't be a past date.");
      } 
      else if (deltaDays > 365) {
        this.notifyError("Date can't be further than year.");
      }
      else {
        this.$emit('emitAddTimer', dateToSend)
      }
    },
    language: function (text) {
      return text[this.$root.$data.language]
    },
  }
}
</script>

<style scoped>
  .btn {
    margin-top: 10px;
    margin-left: 140px;
    margin-bottom: 0px;
  }
  .col-w-data{
    margin-bottom: 0px;
    padding-bottom: 0px;
    padding-top: 20px;
  }
  .x {
    margin: 0px;
    margin-left: 30px;
  }
</style>