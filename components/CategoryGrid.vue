<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div><h1>{{ title }}</h1></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex" :lg="card.lg" class="pa-1 pb-1">
        <v-card class="rounded-0">
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
                class="white--text subtitle-1"
              >
                <div>
                  {{ card.title }}
                </div>
              </v-card-title>
            </v-img>
            <v-card-text v-if="card.text" class="text-body-2 fill-height text-no-wrap">
              {{ card.text }}
            </v-card-text>
          </nuxt-link>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
