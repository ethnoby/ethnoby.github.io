<template>
  <v-container>
    <h1>Песні: {{ songList.length }}</h1>
    <v-list>
      <template v-for="(item, i) in songList">
        <v-list-item
          :key="i+item.id"
          :to="`songs/${item.id || item.document.id }/`"
          router
          exact
        >
          <v-list-item-icon>
            <v-icon>mdi-play</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name || item.document.name }}</v-list-item-title>
            <v-list-item-subtitle>{{
                item.location ? item.location[0] : item.document.location[0]
              }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="100+i"/>
      </template>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'SongList',
  props: {
    songList: Array
  }

  // ,
  // data: () => ({
  //   songList: []
  // })
}

</script>
