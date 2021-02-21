<template>
  <v-card class="m-top-20 height-40">
    <v-row>
      <p>{{language(text.color)}}:</p>
      <v-btn-toggle
        v-model="toggleColor"
        mandatory
      >
        <v-btn x-small color="blue" class="btn">
          <v-icon v-if="toggleColor === 0" class="icon">mdi-check</v-icon>
        </v-btn>
        <v-btn x-small color="red" class="btn">
          <v-icon v-if="toggleColor === 1" class="icon">mdi-check</v-icon>
        </v-btn>
        <v-btn x-small color="green" class="btn">
          <v-icon v-if="toggleColor === 2" class="icon">mdi-check</v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-spacer></v-spacer>
      <p>{{language(text.language)}}:</p>
      <v-btn-toggle
        v-model="toggleLanguage"
        mandatory
      >
        <v-btn x-small class="btn">
          EN
        </v-btn>
        <v-btn x-small class="btn">
          PL
        </v-btn>
      </v-btn-toggle>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {return {
    toggleColor: 0,
    toggleLanguage: 0,
    text: {
        color: ['Color', 'Kolor'],
        language: ['Language', 'Język']
    }
  }},

  watch: {
    toggleColor: function () {
      this.$root.$data.color = this.toggleColor
    },

    toggleLanguage: function () {
      this.$root.$data.language = this.toggleLanguage
    }
  },

  methods:{
    language: function (text) {
      return text[this.$root.$data.language]
    }
  }
}
</script>


<style scoped>
  .row {
    margin: 0px;
    padding: 10px;
  }
  .btn {
    width: 10px !important;
    min-width: 10px !important;
  }
  .icon {
    color: white;
  }
  p {
    margin: 0px 10px 0px 0px !important;
  }
  .height-40 {
    height: 40px;
  }
</style>