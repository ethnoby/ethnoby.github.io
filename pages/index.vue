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

  <v-container>
    <category-list :cards="cards" />

    <category-list :title="locationTitle" :cards="locationCards" />
  </v-container>
</template>

<script>
import imgPazaabrad from 'assets/img/category/pazaabrad.png'
import imageSpring from '../assets/img/category/gukanne.png'
import imgVialikden from '../assets/img/category/vyalikden.png'
import imgYurya from '../assets/img/category/yurya.png'
import imgKupale from '../assets/img/category/kupalle.png'
import imgVyaselle from '../assets/img/category/vyaselle.png'
import imgZhart from '../assets/img/category/zhart.png'
import imgKalyna from '../assets/img/category/kalyna_malyna.png'
import imgLirica from '../assets/img/category/lirica.png'
import imgSirota from '../assets/img/category/sirota.png'
import categoryList from '@/components/CategoryList.vue'
export default {
  components: categoryList,

  data: () => ({
    cards: [
      {
        title: 'Гуканне Вясны',
        src: imageSpring,
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні гукальныя', 'гуканне вясны', 'загуканні'] } }

      },
      {
        title: 'Вялікдзень',
        src: imgVialikden,
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['вялікдзень', 'валачобнікі'] } }

      },
      {
        title: 'Юр\'я',
        src: imgYurya,
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['Юр\'я'] } }
      },
      {
        title: 'Купалле',
        src: imgKupale,
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['купалле'] } }
      },
      {
        title: 'Вяселле',
        src: imgVyaselle,
        lg: 6,
        toLink: { path: '/search', query: { tag: ['песні вясельныя'] } },
        height: '400px'
      },
      {
        title: 'Пазаабрадавыя песні',
        src: imgPazaabrad,
        lg: 6,
        toLink: { path: '/search', query: { tag: ['песні пазаабрадавыя'] } },
        height: '400px'
      },
      {
        title: 'Жартоўныя',
        src: imgZhart,
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні жартоўныя'] } },
        tags: ['песні жартоўныя']
      },
      {
        title: 'Калына-малына',
        src: imgKalyna,
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['playlist_kalyna-malyna'] } },
        tags: ['playlist_kalyna-malyna']
      },
      {
        title: 'Лірычныя',
        src: imgLirica,
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні лірычныя'] } },
        tags: ['песні лірычныя']
      },
      {
        title: 'Сіроцкія',
        src: imgSirota,
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
        src: imageSpring,
        flex: 6,
        lg: 3,
        toLink: { path: '/search', query: { tag: ['песні гукальныя', 'гуканне вясны', 'загуканні'] } }

      }
    ]
  })
}
</script>
