<template>
  <v-card class="m-top-20">
    <v-row>
      <v-col cols="4">
        <v-btn
        fab
        dark
        small
        color="primary"
        class="btn"
        @click="clickBtnAddTimer()"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
      </v-col>
      <v-col cols="5" class="col-w-data">
        <v-datetime-picker
          label="Select Datetime" 
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
      <v-spacer></v-spacer>
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
  }},

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
    }
  }
}
</script>

<style scoped>
  .btn {
    margin-top: 13px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .col-w-data{
    margin-bottom: 0px;
    padding-bottom: 0px;
    padding-top: 20px;
  }
</style>