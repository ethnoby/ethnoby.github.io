<template>
  <section>
    <v-row v-if="title">
      <v-col cols="12">
        <h2>{{ title }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex || card.lg"
        :lg="2 || card.lg"
        class="pa-1 pb-1"
      >
        <v-card :to="card.toLink">
          <v-img
            :src="card.src"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            aspect-ratio="1"
            cover
          >
            <v-card-title
              class="white--text text-subtitle-1 text-md-h5 text-lg-h5"
            >
              {{ card.title }}
            </v-card-title>
            <template #placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
          <v-card-text v-if="card.text" class="text-subtitle-1 fill-height text-no-wrap">
            {{ card.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>

export default {
  name: 'CategoryGrid',
  props: {
    cards: {
      type: Array,
      default: function () {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }

  }
}
</script>
