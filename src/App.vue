<template>
  <v-app>
    <Header/>
    <v-main class="v-main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Header from "./components/Header";
export default {
  name: 'App',
  components: {Header},
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "assets/scss/main";

</style>
