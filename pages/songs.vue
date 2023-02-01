<template>
  <v-container fluid>
    <h1>Песні</h1>
    <SearchBlock
      collection="songs"
    />
  </v-container>
</template>

<script>
import SearchBlock from '~/components/search/SearchBlock'

export default {
  components: {
    SearchBlock
  },

  middleware: 'auth'
}
</script>
