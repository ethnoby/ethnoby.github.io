<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div><h1>{{ title }}</h1></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex" :lg="card.lg">
        <v-card>
          <nuxt-link
            class="text-decoration-none"
            :to="card.toLink"
          >
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100%"
              cover
            >
              <v-card-title
                class="white--text"
              >
                {{ card.title }}
              </v-card-title>
            </v-img>
          </nuxt-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'CategoryList',
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
