<template>
  <v-container fluid>
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
  }
}
</script>
