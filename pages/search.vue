<template>
  <v-container fluid>
    <SearchBlock
      collection="songs_test_type"
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
