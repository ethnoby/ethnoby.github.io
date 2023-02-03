<template>
  <v-container fluid>
    <h1>Песні: {{ itemsJSON.length }}</h1>
    <div v-if="$fetchState.pending" class="cards d-flex flex-wrap align-start align-self-start">
      <v-skeleton-loader
        v-for="i in 5"
        :key="i"
        class="ma-2"
        width="220"
        type="card"
      />
    </div>

    <v-list v-else>
      <template v-for="(item, i) in itemsJSON">
        <v-list-item
          :key="i"
          :to="`songs/${item.id || item.document.id }`"
          router
          exact
        >
          <v-list-item-icon>
            <v-icon>mdi-play</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name || item.document.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.location ? item.location[0] : item.document.location[0] }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="100+i" />
      </template>
    </v-list>

    <!-- <div v-else class="cards d-flex flex-wrap align-start align-self-start">
      <v-card
        v-for="card in itemsJSON"
        :key="card.id || card.document.id"
        class="ma-2"
        width="220"
      >
        <nuxt-link
          :to="`songs/${card.id || card.document.id}`"
        >
          <v-card-title class="text-caption">
            {{ card.name || card.document.name }}
          </v-card-title>
        </nuxt-link>
        <v-card-text>{{ card.perforemer }}</v-card-text>
      </v-card>
    </div> -->
  </v-container>
</template>

<script>
import client from '~/components/search/client.js'

export default {
  name: 'IndexPage',
  middleware: 'auth',

  async asyncData () {
    return {
      itemsJSON: await client.collections('songs')
        .documents()
        .export({
          include_fields: 'name, id, location'
        })
        .then((res) => {
          return JSON.parse(`[${res}]`.replace(/\n/g, ','))
        })
    }
  },

  data: () => ({
    model: 0,
    items: [],
    jsonl: '',
    // itemsJSON: [],
    carouselItems: [
      'https://picsum.photos/750/250',
      'https://picsum.photos/800/250',
      'https://picsum.photos/801/250'
    ]
  }),

  // async fetch () {
  //   const searchParameters = {
  //     q: '*',
  //     // sort_by: 'name:desc',
  //     query_by: 'name'
  //   }
  //   await client.collections('songs')
  //     .documents()
  //     .search(searchParameters)
  //     .then((results) => {
  //       this.items = results.hits
  //     })
  //     .catch((error) => {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     })

  //   this.jsonl = await client.collections('songs')
  //     .documents()
  //     .export({
  //       include_fields: 'name, id, location'
  //     })

  //   this.jsonl = `[${this.jsonl}]`.replace(/\n/g, ',') // add brackets and commas
  //   this.itemsJSON = JSON.parse(this.jsonl)
  // },

  computed: {
    // items () {
    //   console.log(this.itemsString)
    //   return JSON.parse(this.itemsString)
    // }
  }

  // mounted () {
  //   console.log('mounted!!!')
  //   this.items = client.collections('songs').documents().export()
  // }
}
</script>
