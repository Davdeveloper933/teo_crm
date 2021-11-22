<template>
  <v-container
      class="section__container"
  >
  <row
      justify="center"
  >
  <v-col
      cols="12"
      class="section"
  >
    <v-row class="section__top-buttons d-flex align-center">
      <v-btn
          class="white--text add-button"
          color="#3C3F4F"
          elevation="0"
      >
        Добавить раздел
        <v-icon
            class="add-button__icon"
        >
          mdi-plus
        </v-icon>
      </v-btn>
      <v-btn
          class="white--text generate-button"
          color="#FEAC0D"
          elevation="0"
      >
        Сгенерировать
      </v-btn>
      <v-btn
          class="eye-button"
          color="#3C3F4F"
          elevation="0"
          min-width="40"
      >
        <EyeSVG/>
      </v-btn>
    </v-row>
  </v-col>
  </row>
  </v-container>
</template>

<script>
import EyeSVG from "./SVG/EyeSVG";
export default {
  name: "Sections",
  components: {EyeSVG}
}
</script>

<style scoped>

</style>