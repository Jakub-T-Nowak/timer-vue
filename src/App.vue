<template>
  <v-app>
      <AddTimer :msg="message"/>
  </v-app>
</template>

<script>
import AddTimer from './components/AddTimer';

export default {
  name: 'App',

  components: {
    AddTimer
  },

  data: () => ({
    message: "asdasdasasa"
  }),
};
</script>

<style>

</style>
