<template>
  <v-col class="fields pt-4">
    <v-row color="#3C3F4F" class="pb-4 justify-space-between align-baseline">
<!--      <v-row class="d-flex justify-space-between">-->
<!--        <v-col cols="24">-->
            <v-col class="d-flex align-center">
        <v-icon color="white">{{ icons.mdiFormatListBulleted }}</v-icon>
        <v-toolbar-title class="white--text fields__title">
          Единица измерения
          <span class="fields__translation">(Unit_of_measurement)</span>
        </v-toolbar-title>
            </v-col>
<!--        </v-col>-->
        <v-spacer></v-spacer>
        <v-col class="col-xl-2 d-flex justify-end">
          <v-btn
              color="transparent"
              elevation="0"
              class="fields__btn icon-btn px-0"
              :max-width="'30px'"
              :min-width="'30px'"
          >
          <img :src="require(`@/assets/img/icons/chevron.backward.svg`)" alt="arrow-left">
          </v-btn>
          <v-btn
              class="fields__btn icon-btn px-0"
              elevation="0"
              :max-width="'30px'"
              :min-width="'30px'"
          >
            <img :src="require(`@/assets/img/icons/bomb.svg`)" alt="">
          </v-btn>
          <v-btn
              class="fields__btn icon-btn px-0"
              elevation="0"
              :max-width="'30px'"
              :min-width="'30px'"
          >
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-col>
<!--      </v-row>-->
    </v-row>
    <v-row
        class="fields__item align-center white--text mx-0 mt-0"
        v-for="(field,index) in fields"
        :key="index"
    >
<!--      <v-icon color="white">mdi-menu</v-icon>-->
      <div>
        <img :src="require(`@/assets/img/icons/list.svg`)" alt="">
      </div>
      <h3 class="fields__item__value">
        {{ field.name }}
        <span class="fields__item__translation">({{ field.en }})</span>
      </h3>
    </v-row>
  </v-col>
</template>

<script>
import { mdiFormatListBulleted } from '@mdi/js';
export default {
  name: "Fields",
  data () {
    return {
      icons: {
        mdiFormatListBulleted
      },
      fields: [
        {
          name: 'Наименование',
          en: 'Name'
        },
        {
          name: 'Наименование',
          en: 'Name'
        },
        {
          name: 'Наименование',
          en: 'Name'
        },
        {
          name: 'Наименование',
          en: 'Name'
        },
        {
          name: 'Наименование',
          en: 'Name'
        },
        {
          name: 'Наименование',
          en: 'Name'
        },
        {
          name: 'Наименование',
          en: 'Name'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>