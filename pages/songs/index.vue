<template>
  <v-container fluid>
    <category-grid :title="title" :cards="cards" />
    <category-grid :title="locationTitle" :cards="locationCards" />
  </v-container>
</template>

<script>
import categoryGrid from '@/components/CategoryGrid.vue'
export default {
  components: categoryGrid,

  data: () => ({
    // title: 'Актуальныя жанры',
    cards: [
      {
        title: 'Касарскія',
        src: require('@/assets/img/category/kasarskia.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tags: ['песні сенакосныя / касарскія / пакосныя'], t: 'Касарскія' } }

      },
      {
        title: 'Жніўныя',
        src: require('@/assets/img/category/zhniuniya.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tags: ['песні жніўныя', 'жніво'], t: 'Жніўныя' } }

      },
      {
        title: 'Восеньскія',
        src: require('@/assets/img/category/vosenskiya.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tags: ['песні восеньскія'], t: 'Восеньскія' } }
      },
      {
        title: 'Хрэсбінныя',
        src: require('@/assets/img/category/radzini.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tags: ['песні радзінныя/хрэсбінныя'], t: 'Радзінныя/хрэсбінныя' } }
      },
      {
        title: 'Вяселле',
        src: require('@/assets/img/category/vyaselle.jpg'),
        lg: 6,
        toLink: { path: '/search', query: { tags: ['песні вясельныя'], t: 'Вяселле' } },
        height: '400px'
      },
      {
        title: 'Пазаабрадавыя',
        src: require('@/assets/img/category/pazaabrad.jpg'),
        lg: 6,
        toLink: { path: '/search', query: { tags: ['песні пазаабрадавыя'], t: 'Пазаабрадавыя песні' } },
        height: '400px'
      },
      {
        title: 'Жартоўныя',
        src: require('@/assets/img/category/zhart.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tags: ['песні жартоўныя'], t: 'Жартоўныя' } },
        tags: ['песні жартоўныя']
      },
      {
        title: 'Калына-малына',
        src: require('@/assets/img/category/kalyna_malyna.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tags: ['playlist_kalyna-malyna'], t: 'Калына-малына' } },
        tags: ['playlist_kalyna-malyna']
      },
      {
        title: 'Лірычныя',
        src: require('@/assets/img/category/lirica.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tags: ['песні лірычныя'], t: 'Лірычныя' } },
        tags: ['песні лірычныя']
      },
      {
        title: 'Рэкруцкія',
        src: require('@/assets/img/category/recrut.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tags: ['песні рэкруцкія', 'песні салдацкія'], t: 'Рэкруцкія' } },
        tags: ['песні рэкруцкія']
      },
      {
        title: 'Калядныя',
        src: require('@/assets/img/category/kalyadi.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tags: ['песні калядныя', 'абрады і святы зімовыя', 'каляды', 'калядоўшчыкі'], t: 'Калядныя' } },
        tags: ['песні калядныя', 'абрады і святы зімовыя', 'каляды', 'калядоўшчыкі']
      },
      {
        title: 'Масленічныя',
        src: require('@/assets/img/category/maslenka.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tags: ['масленіца'], t: 'Масленічныя' } },
        tags: ['масленіца']
      }
    ],
    locationTitle: 'Абраныя лакацыі',
    locationCards: [
      {
        title: '',
        src: require('@/assets/img/category/locations/zhitkavitski.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Жыткавіцкі раён', t: 'Жыткавіцкі раён' } },
        text: 'Жыткавіцкі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/lelchistki.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Лельчыцкі раён', t: 'Лельчыцкі раён' } },
        text: 'Лельчыцкі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/pinski.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Пінскі раён', t: 'Пінскі раён' } },
        text: 'Пінскі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/smargon.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Смаргонскі раён', t: 'Смаргонскі раён' } },
        text: 'Смаргонскі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/garadotski.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Гарадоцкі раён', t: 'Гарадоцкі раён' } },
        text: 'Гарадоцкі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/krasnapolski.jpg'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Краснапольскі раён', t: 'Краснапольскі раён' } },
        text: 'Краснапольскі раён'
      }
    ]
  })
}
</script>
