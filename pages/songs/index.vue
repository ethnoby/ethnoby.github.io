<template>
  <v-container fluid>
    <song-list
      :song-list="itemsJSON"
      :title="title"
    />
  </v-container>
</template>

<script>
import client from '~/components/search/client.js'
import songList from '~/components/SongList'

export default {
  name: 'IndexPage',
  components: {
    songList
  },
  // middleware: 'auth',

  async asyncData () {
    return {
      itemsJSON: await client.collections('songs_test')
        .documents()
        .export({
          include_fields: 'name, id, location, content, performer'
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
    count: 67,
    title: 'Песні'
    // itemsJSON: [],
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
