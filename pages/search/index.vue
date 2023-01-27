<template>
  <v-container fluid>
    <ais-instant-search
      :search-client="searchClient"
      index-name="companies"
    >
      <ais-search-box>
        <template #default="{ currentRefinement, isSearchStalled, refine }">
          <v-text-field
            filled
            hide-details
            placeholder="Што шукаем?"
            type="search"
            :value="currentRefinement"
            @input="refine($event)"
          />
          <span :hidden="!isSearchStalled">Loading...</span>
        </template>
      </ais-search-box>
      <ais-stats class="v-messages text--secondary text-left mt-1 mb-6">
        <template #default="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS, query }">
          Page {{ page + 1 }}/{{ nbPages }} with {{ hitsPerPage }} hits per page  -
          {{ nbHits }} hits retrieved in {{ processingTimeMS }}ms for <q>{{ query }}</q>
        </template>
      </ais-stats>
      <ais-hits>
        <div slot="item" slot-scope="{ item }">
          <h4>{{ item.company_name }}</h4>
          <pre>{{ item.company_name }}</pre>
          <v-divider class="mt-2 mb-2" />
        </div>
      </ais-hits>
    </ais-instant-search>
  </v-container>
</template>

<script>
import { AisInstantSearch, AisSearchBox, AisStats, AisHits } from 'vue-instantsearch'
import typesenseInstantsearchAdapter from './typesense'

export default {
  components: {
    AisInstantSearch,
    AisSearchBox,
    AisStats,
    AisHits
  },

  data () {
    return {
      searchClient: typesenseInstantsearchAdapter.searchClient
    }
  }
}
</script>
