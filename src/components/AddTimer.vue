<template>
  <v-card class="add-timer">
    <v-row>
      <v-col cols="4">
        <v-btn
        fab
        dark
        small
        color="indigo"
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
      //const timeValidation = moment(date).isBefore(now);

      const delta = date.diff(now, 'days')
      console.log(delta)
      if (delta < 0) {
        this.$notify({
          type:"error",
          title: "Error!",
          text: "Date can't be past.",
          duration: 3000,
        })
      } else if (delta > 365) {
        this.$notify({
          type:"error",
          title: "Error!",
          text: "Date can't be further than year.",
          duration: 3000,
        })
      }
      else {
        this.$emit('click', date)
      }
    }
  }
}
</script>


<style scoped>
.add-timer {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
</style>
