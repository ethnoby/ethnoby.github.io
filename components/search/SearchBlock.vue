<template>
  <ais-instant-search
    :search-client="searchClient"
    :index-name="collection"
  >
    <ais-search-box>
      <template #default="{ currentRefinement, hitsPerPage, isSearchStalled, refine }">
        <v-text-field
          ref="searchbox"
          filled
          hide-details
          placeholder="Што шукаем?"
          type="search"
          :value="currentRefinement"
          @input="refine($event)"
        />
        <template v-if="isSearchStalled">
          <v-skeleton-loader
            v-for="i in hitsPerPage"
            :key="i"
            class="ma-2"
            type="article"
          />
        </template>
      </template>
    </ais-search-box>

    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Фільтр Лакацый
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ais-hierarchical-menu
            :attributes="['country', 'region', 'district']"
            :class-names="{
              'ais-HierarchicalMenu-link--selected': 'text--secondary'
            }"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <ais-stats class="v-messages text--secondary text-left mt-1 mb-6">
      <template #default="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS, query }">
        <strong>{{ nbHits }} вынікаў</strong> знойдзена для <q>{{ query }}</q> за {{ processingTimeMS }} мс.
        Старонка {{ page + 1 }}/{{ nbPages }}, па {{ hitsPerPage }} .
      </template>
    </ais-stats>

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
        <v-banner
          v-else
          icon="mdi-magnify-expand"
          icon-color="error"
        >
          Па запыце <strong><q>{{ searchQuery }}</q></strong> у нас ніц няма, спрабуйце іначай
        </v-banner>
      </template>
    </ais-pagination>

    <ais-hits :escapeHTML="false">
      <template #default="{ items }">

        <div v-for="item in items" :key="item.objectID">
          <v-expansion-panels>
            <v-expansion-panel v-if="item.content" flat accordion>
              <v-expansion-panel-header>
                <div v-on:click.stop>
                  <div class="text-h5 text-center">
                    <nuxt-link :to="`songs/${item.id}/`" class="text--primary">
                      <ais-highlight attribute="name" :hit="item" class="text-h6 text-center text--primary"/>
                    </nuxt-link>
                  </div>
                  <div v-if="item.location_uni" class="text-center mt-1 text--secondary">
<!--                    <span v-for="loc in item.location_uni" :key=loc>-->
                      <span>{{ item.location_uni.join(', ') }}</span>
<!--                    </span>-->
                  </div>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-html="item._highlightResult.content.value" class="text--primary"/>
                <div v-if="item.performer" class="caption text-center">
                  <strong class="text--secondary">Выканаўцы:</strong>
                  <ais-highlight attribute="performer" :hit="item"/>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          <div v-if="false || item.content && searchQuery && item.content.includes(searchQuery)" class="caption">
            <strong class="text--secondary">Знойдзена ў тэксце:</strong>
            <ais-snippet attribute="content" :hit="item"/>
          </div>
          </v-expansion-panels>
          <v-divider :thickness="2"
                     color="grey"
          />
        </div>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import {
  AisHierarchicalMenu,
  AisHighlight,
  AisHits,
  AisInstantSearch,
  AisPagination,
  AisSearchBox,
  AisSnippet,
  AisStats
} from 'vue-instantsearch'
import typesenseInstantsearchAdapter from './typesense'

export default {
  components: {
    AisHighlight,
    AisInstantSearch,
    AisPagination,
    AisSearchBox,
    AisSnippet,
    AisStats,
    AisHits,
    AisHierarchicalMenu
  },

  props: {
    // eslint-disable-next-line vue/require-default-prop
    collection: String
  },

  data () {
    return {
      currentPage: 1,
      searchClient: typesenseInstantsearchAdapter.searchClient
    }
  },

  computed: {

    searchQuer () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.currentPage = 1
      return this.$refs.searchbox.value
    }

  },

  methods: {
    updateQuery (query) {
      // this.$refs.searchbox.value = query
      // console.log(this.$refs.searchbox)
      // this.$refs.searchbox.keypress()
    }
  }

}
</script>
