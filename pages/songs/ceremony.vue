<template>
  <v-container fluid>
    <song-list :song-list="itemsJSON" />
  </v-container>
</template>

<script>
import client from '~/components/search/client.js'
import songList from '~/components/SongList'

export default {
  name: 'CeremonySongsPage',
  components: {
    songList
  },
  // middleware: 'auth',

  async asyncData () {
    return {
      itemsJSON: await client.collections('songs')
        .documents()
        .export({
          filter_by: 'tags:=песні абрадавыя',
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
    count: 67
    // itemsJSON: [],
  }),

  computed: {

  }

}
</script>
