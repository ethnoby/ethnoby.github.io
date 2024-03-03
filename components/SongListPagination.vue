<template>
  <ais-instant-search
    :search-client="searchClient"
    :index-name="collection"
  >
    <ais-pagination>
      <template
        #default="{
          nbPages,
          nbHits,
          refine
        }"
      >
        <v-pagination
          v-if="nbHits"
          v-model="currentPage"
          :length="nbPages"
          :total-visible="7"
          @input="refine(currentPage-1)"
        />
      </template>
    </ais-pagination>

    <ais-hits :escape-h-t-m-l="false">
      <template #default="{ items }">
        <div v-for="item in items" :key="item.objectID">
          <v-expansion-panels>
            <v-expansion-panel v-if="item.content" flat accordion>
              <v-expansion-panel-header>
                <div class="text-left">
                  <div class="d-flex text-left" @click.stop>
                    <nuxt-link :to="`/songs/${item.id}/`" class="text--secondary">
                      <ais-highlight attribute="name" :hit="item" class="text-center text-body-1 text--primary" />
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
                <div class="text--primary" v-html="item._highlightResult.content.value" />
                <div v-if="item.performer" class="caption text-left">
                  <strong class="text--secondary">Выканаўцы:</strong>
                  <ais-highlight attribute="performer" :hit="item" />
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-divider
            :thickness="2"
            color="grey"
          />
        </div>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import {
  AisInstantSearch,
  AisHits,
  AisPagination,
  AisHighlight
} from 'vue-instantsearch'
import typesenseInstantsearchAdapter from './search/typesense'

export default {
  name: 'SongListPagination',
  components: {
    AisInstantSearch,
    AisPagination,
    AisHits,
    AisHighlight
  },
  props: {
    songList: Array
    // eslint-disable-next-line vue/require-default-prop
    // collection: String
  },
  data () {
    return {
      currentPage: 1,
      collection: 'songs_test',
      searchClient: typesenseInstantsearchAdapter.searchClient
    }
  }

}

</script>
