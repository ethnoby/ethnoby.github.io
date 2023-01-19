<template>
  <v-container fluid>
    <!-- <h1>Аўдыётэка</h1> -->
    <div class="cards d-flex flex-wrap align-start align-self-start">
      <v-card
        v-for="(card, index) in items"
        :key="index + card.title"
        class="ma-2"
        width="320"
      >
        <v-img
          :src="card.thumbnail"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.5)"
          :aspect-ratio="16/9"
        />
        <v-card-title class="text-caption">
          {{ card.title }}
        </v-card-title>
      </v-card>
      <v-skeleton-loader
        v-for="i in 20"
        :key="i"
        class="ma-2"
        width="320"
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
          thumbnail: 'https://picsum.photos/159',
          year: '1939',
          tracks: '4',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Musical atlas. Bielorussie: Musical Folklore of the Byelorussian Polessye.',
          thumbnail: 'https://picsum.photos/155',
          year: '1981',
          tracks: '34',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Этнаграфічны ансамбль в. Ананчыцы Салігорскага р-на',
          thumbnail: 'https://picsum.photos/148',
          year: '1982',
          tracks: '18',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Календарные песни Белорусского Полесья',
          thumbnail: 'https://picsum.photos/150',
          year: '1983',
          tracks: '19',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Беларускі песенны фальклор: паўночна-усходняя зона',
          thumbnail: 'https://picsum.photos/160',
          year: '1986',
          tracks: '27',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Этнаграфічны ансамбль в. Ананчыцы Салігорскага р-на',
          thumbnail: 'https://picsum.photos/141',
          year: '1982',
          tracks: '18',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Календарные песни Белорусского Полесья',
          thumbnail: 'https://picsum.photos/152',
          year: '1983',
          tracks: '19',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Беларускі песенны фальклор: паўночна-усходняя зона',
          thumbnail: 'https://picsum.photos/161',
          year: '1986',
          tracks: '27',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: '1990 - Беларускі музычны фальклор (2 LP)',
          thumbnail: 'https://picsum.photos/170',
          year: '1990',
          tracks: '73',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Беларускі музычны фальклор (2 LP)',
          thumbnail: 'https://picsum.photos/180',
          year: '1990',
          tracks: '73',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Беларускі музычны фальклор (2 LP)',
          thumbnail: 'https://picsum.photos/201',
          year: '1990',
          tracks: '73',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Календарные песни Белорусского Полесья',
          thumbnail: 'https://picsum.photos/164',
          year: '1983',
          tracks: '19',
          to: 'IndexPage',
          subtitle: 'MUSICAL ATLAS, МУЗЫЧНАЯ СЭРЫЯ'
        },
        {
          title: 'Поют народные исполнители - деревни Орменка и Ляховка',
          thumbnail: 'https://picsum.photos/190',
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
