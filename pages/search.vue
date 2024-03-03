<template>
  <v-container fluid>
    <SearchBlock
      collection="songs_test"
    />
  </v-container>
</template>

<script>
import SearchBlock from '~/components/search/SearchBlock'

export default {
  components: {
    SearchBlock
  }
}
</script>
