<template>
  <v-container>
    <h1>Песні: {{ songList.length }}</h1>
    <v-list>
      <template v-for="(item, i) in songList">
        <div :key="i+item.id">
          <v-expansion-panels>
            <v-expansion-panel v-if="item.content" flat accordion>
              <v-expansion-panel-header>
                <div class="text-left">
                  <div class="d-flex text-left" @click.stop>
                    <nuxt-link :to="`/songs/${item.id}/`" class="text--secondary">
                      <span class="text-center text-body-1 text--primary">{{ item.name }}</span>
                    </nuxt-link>
                  </div>
                  <div class="text-left mt-1 text-body-2">
                    <span class="text--secondary">
                      {{
                        item.location ? item.location[0] : item.document.location[0]
                      }}
                    </span>
                  </div>
                </div>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <div class="text--primary" v-html="item.content" />
                <div v-if="item.performer" class="caption text-left">
                  <strong class="text--secondary">Выканаўцы:</strong>
                  <span>{{ item.performer }}</span>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-divider
            :thickness="2"
            color="grey"
          />
        </div>
        <v-divider :key="100+i" />
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

}

</script>
