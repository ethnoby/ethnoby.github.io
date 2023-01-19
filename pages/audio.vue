<template>
  <v-container fluid>
    <!-- <h1>Аўдыётэка</h1> -->
    <div class="cards d-flex flex-wrap align-start align-self-start">
      <v-card
        v-for="card in items"
        :key="card.title"
        class="ma-2"
        width="220"
      >
        <v-img
          :src="card.thumbnail"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.5)"
          aspect-ratio="1"
        />
        <v-card-title class="text-caption">
          {{ card.title }}
        </v-card-title>
        <v-card-text>{{ card.year }}</v-card-text>
      </v-card>
      <v-skeleton-loader
        v-for="i in 20"
        :key="i"
        class="ma-2"
        width="220"
        type="card"
      />
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Ф. Стэсь, М. Усцінаў (дуда) - Беларуская вясельная мелодыя і танец',
          thumbnail: 'https://ethno.by/.cache/images/thumbs/805536160.jpg',
          year: '1939',
          tracks: '4',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Musical atlas. Bielorussie: Musical Folklore of the Byelorussian Polessye.',
          thumbnail: 'https://ethno.by/.cache/images/thumbs/560037111.jpg',
          year: '1981',
          tracks: '34',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Этнаграфічны ансамбль в. Ананчыцы Салігорскага р-на',
          thumbnail: 'https://ethno.by/.cache/images/thumbs/568741127.jpg',
          year: '1982',
          tracks: '18',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Календарные песни Белорусского Полесья',
          thumbnail: 'https://ethno.by/.cache/images/thumbs/393801517.jpg',
          year: '1983',
          tracks: '19',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Беларускі песенны фальклор: паўночна-усходняя зона',
          thumbnail: 'https://ethno.by/.cache/images/thumbs/561967402.jpg',
          year: '1986',
          tracks: '27',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: '1990 - Беларускі музычны фальклор (2 LP)',
          thumbnail: 'https://ethno.by/.cache/images/thumbs/492703758.jpg',
          year: '1990',
          tracks: '73',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Поют народные исполнители - деревни Орменка и Ляховка',
          thumbnail: 'https://ethno.by/.cache/images/thumbs/520047774.jpg',
          year: '1978',
          tracks: '73',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        }
      ]
    }
  }
}
</script>
