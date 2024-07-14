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
    title: 'Актуальныя катэгорыі',
    cards: [
      {
        title: 'Гуканне Вясны',
        src: require('@/assets/img/category/gukanne.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні гукальныя', 'гуканне вясны', 'загуканні'], t: 'Гуканне Вясны' } }

      },
      {
        title: 'Вялікдзень',
        src: require('@/assets/img/category/vyalikden.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['вялікдзень', 'валачобнікі'], t: 'Вялікдзень' } }

      },
      {
        title: 'Юр\'я',
        src: require('@/assets/img/category/yurya.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['Юр\'я'], t: 'Юр\'я' } }
      },
      {
        title: 'Купалле',
        src: require('@/assets/img/category/kupalle.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['купалле'], t: 'Купалле' } }
      },
      {
        title: 'Вяселле',
        src: require('@/assets/img/category/vyaselle.png'),
        lg: 6,
        toLink: { path: '/search', query: { tag: ['песні вясельныя'], t: 'Вяселле' } },
        height: '400px'
      },
      {
        title: 'Пазаабрадавыя песні',
        src: require('@/assets/img/category/pazaabrad.png'),
        lg: 6,
        toLink: { path: '/search', query: { tag: ['песні пазаабрадавыя'], t: 'Пазаабрадавыя песні' } },
        height: '400px'
      },
      {
        title: 'Жартоўныя',
        src: require('@/assets/img/category/zhart.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні жартоўныя'], t: 'Жартоўныя' } },
        tags: ['песні жартоўныя']
      },
      {
        title: 'Калына-малына',
        src: require('@/assets/img/category/kalyna_malyna.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['playlist_kalyna-malyna'], t: 'Калына-малына' } },
        tags: ['playlist_kalyna-malyna']
      },
      {
        title: 'Лірычныя',
        src: require('@/assets/img/category/lirica.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні лірычныя'], t: 'Лірычныя' } },
        tags: ['песні лірычныя']
      },
      {
        title: 'Сіроцкія',
        src: require('@/assets/img/category/sirota.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні лірычныя'], t: 'Сіроцкія' } },
        tags: ['песні сіроцкія']
      }

    ],
    locationTitle: 'Выбраныя лакацыі',
    locationCards: [
      {
        title: '',
        src: require('@/assets/img/category/locations/zhitkavitski.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Жыткавіцкі раён', t: 'Жыткавіцкі раён' } },
        text: 'Жыткавіцкі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/lelchistki.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Лельчыцкі раён', t: 'Лельчыцкі раён' } },
        text: 'Лельчыцкі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/pinski.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Пінскі раён', t: 'Пінскі раён' } },
        text: 'Пінскі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/smargon.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Смаргонскі раён', t: 'Смаргонскі раён' } },
        text: 'Смаргонскі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/garadotski.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Гарадоцкі раён', t: 'Гарадоцкі раён' } },
        text: 'Гарадоцкі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/krasnapolski.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Краснапольскі раён', t: 'Краснапольскі раён' } },
        text: 'Краснапольскі раён'
      }
    ]
  })
}
</script>
