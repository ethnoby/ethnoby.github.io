<template>
  <!--  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="3">
        <v-card>
          <v-card-text>Калына малына</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-text>Калына малына</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-text>Калына малына</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-text>Калына малына</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    &lt;!&ndash;    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(item, i) in carouselItems"
        :key="i"
        :src="item"
      />
    </v-carousel>
    <div class="cards d-flex flex-wrap align-start align-self-start">
      <v-skeleton-loader
        v-for="i in 20"
        :key="i"
        class="ma-2"
        width="220"
        type="card"
      />
    </div>&ndash;&gt;
  </v-container>-->

  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex" :lg="card.lg">
        <v-card>
          <nuxt-link
            :to="{ path: '/search', query: { q: text, tag: card.tags} }"
          >
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
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
import imageSpring from '../assets/img/tree-3353617_640.jpg'
export default {
  data: () => ({
    cards: [
      {
        title: 'Гуканне Вясны',
        src: imageSpring,
        flex: 6,
        lg: 3,
        tags: ['песні калядныя', 'калядоўшчыкі']
      },
      {
        title: 'Вялікдзень',
        src: '',
        flex: 6,
        lg: 3
      },
      {
        title: 'Юр\'я',
        src: '',
        flex: 6,
        lg: 3
      },
      {
        title: 'Купалле',
        src: '',
        flex: 6,
        lg: 3,
        tags: ['купалле']
      },
      {
        title: 'Вяселле',
        src: '',
        lg: 6
      }
    ]
  })
}
</script>
