<template>
  <v-container>
    <h1>Песні: {{ songList.length }}</h1>
    <song-list-pagination />
  </v-container>
</template>

<script>
import SongListPagination from '@/components/SongListPagination'
export default {
  name: 'SongList',
  components: {
    SongListPagination
  },
  props: {
    songList: Array
  }
}

</script>
