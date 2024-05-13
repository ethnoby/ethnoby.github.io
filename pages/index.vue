<template>
  <v-container fluid>
    <category-grid :cards="cards" />
    <category-grid :title="locationTitle" :cards="locationCards" />
  </v-container>
</template>

<script>
import categoryGrid from '@/components/CategoryGrid.vue'
export default {
  components: categoryGrid,

  data: () => ({
    cards: [
      {
        title: 'Гуканне Вясны',
        src: require('@/assets/img/category/gukanne.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні гукальныя', 'гуканне вясны', 'загуканні'] } }

      },
      {
        title: 'Вялікдзень',
        src: require('@/assets/img/category/vyalikden.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['вялікдзень', 'валачобнікі'] } }

      },
      {
        title: 'Юр\'я',
        src: require('@/assets/img/category/yurya.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['Юр\'я'] } }
      },
      {
        title: 'Купалле',
        src: require('@/assets/img/category/yurya.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['купалле'] } }
      },
      {
        title: 'Вяселле',
        src: require('@/assets/img/category/vyaselle.png'),
        lg: 6,
        toLink: { path: '/search', query: { tag: ['песні вясельныя'] } },
        height: '400px'
      },
      {
        title: 'Пазаабрадавыя песні',
        src: require('@/assets/img/category/pazaabrad.png'),
        lg: 6,
        toLink: { path: '/search', query: { tag: ['песні пазаабрадавыя'] } },
        height: '400px'
      },
      {
        title: 'Жартоўныя',
        src: require('@/assets/img/category/zhart.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні жартоўныя'] } },
        tags: ['песні жартоўныя']
      },
      {
        title: 'Калына-малына',
        src: require('@/assets/img/category/kalyna_malyna.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['playlist_kalyna-malyna'] } },
        tags: ['playlist_kalyna-malyna']
      },
      {
        title: 'Лірычныя',
        src: require('@/assets/img/category/lirica.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні лірычныя'] } },
        tags: ['песні лірычныя']
      },
      {
        title: 'Сіроцкія',
        src: require('@/assets/img/category/sirota.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні лірычныя'] } },
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
        toLink: { path: '/search', query: { loc: 'Беларусь > Гомельская вобласць > Жыткавіцкі раён' } },
        text: 'Жыткавіцкі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/lelchistki.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Беларусь > Гомельская вобласць > Лельчыцкі раён' } },
        text: 'Лельчыцкі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/pinski.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Беларусь > Брэсцкая вобласць > Пінскі раён' } },
        text: 'Пінскі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/smargon.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Беларусь > Гродзенская вобласць > Смаргонскі раён' } },
        text: 'Смаргонскі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/garadotski.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Беларусь > Віцебская вобласць > Гарадоцкі раён' } },
        text: 'Гарадоцкі раён'
      },
      {
        title: '',
        src: require('@/assets/img/category/locations/krasnapolski.png'),
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { loc: 'Беларусь > Магілёўская вобласць > Краснапольскі раён' } },
        text: 'Краснапольскі раён'
      }
    ]
  })
}
</script>
