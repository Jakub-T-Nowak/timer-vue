<template>
  <v-card class="m-top-20" style="margin-top: 20px;">
    <v-row>
      <v-col cols="4">
        <v-btn
        fab
        dark
        small
        color="primary"
        style="margin-top: 13px; margin-left: 20px; margin-bottom: 10px;"
        @click="clickBtn()"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
      </v-col>
      <v-col cols="5" style="margin-bottom: 0px; padding-bottom: 0px; padding-top: 20px;">
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
    clickBtn: function () {
      const date = moment(this.datetime);
      const now = moment();

      const deltaSeconds = date.diff(now, 'seconds')
      const deltaDays = date.diff(now, 'days')
      const dateToSend = {date, deltaSeconds}

      if (isNaN(date)){
        this.$notify({
          type:"error",
          title: "Error!",
          text: "Data input can't be empty.",
          duration: 3000,
        })
      }
      else if (deltaSeconds < 2) {
        this.$notify({
          type:"error",
          title: "Error!",
          text: "Date can't be past.",
          duration: 3000,
        })
      } else if (deltaDays > 365) {
        this.$notify({
          type:"error",
          title: "Error!",
          text: "Date can't be further than year.",
          duration: 3000,
        })
      }
      else {
        this.$emit('click', dateToSend)
      }
    }
  }
}
</script>