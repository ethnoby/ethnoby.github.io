<template>
  <v-container fluid>
    <ais-instant-search
      :search-client="searchClient"
      index-name="songs"
    >
      <ais-search-box>
        <template #default="{ currentRefinement, isSearchStalled, refine }">
          <v-text-field
            ref="searchbox"
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
          {{ nbHits }} вынікаў знойдзена для <q>{{ query }}</q> за {{ processingTimeMS }} мс.
          Старонка {{ page + 1 }}/{{ nbPages }}, па {{ hitsPerPage }} .
        </template>
      </ais-stats>

      <ais-pagination>
        <template
          #default="{
            nbPages,
            refine
          }"
        >
          <v-pagination
            v-model="currentPage"
            :length="nbPages"
            :total-visible="7"
            @input="refine(currentPage-1)"
          />
        </template>
      </ais-pagination>

      <ais-hits>
        <template #default="{ items }">
          <div v-for="item in items" :key="item.objectID">
            <h4 class="h4">
              {{ item.__position }}.
              <ais-highlight attribute="name" :hit="item" />
            </h4>

            <iframe
              v-if="item.audio_url"
              class="mt-2 mb-2"
              width="100%"
              height="120"
              scrolling="no"
              frameborder="no"
              :src="`https://w.soundcloud.com/player/?url=${item.audio_url}&color=%238d1802&inverse=true&auto_play=false&show_user=false`"
            />

            <div v-if="item.performer" class="caption text-left">
              <strong class="text--secondary">Выканаўцы:</strong>
              <ais-highlight attribute="performer" :hit="item" />
            </div>

            <div v-if="false || item.content && searchQuery && item.content.includes(searchQuery)" class="caption">
              <strong class="text--secondary">Знойдзена ў тэксце:</strong>
              <ais-snippet attribute="content" :hit="item" />
            </div>

            <v-expansion-panels v-if="item.content" flat accordion>
              <v-expansion-panel>
                <v-expansion-panel-header hide-actions>
                  <v-icon>
                    mdi-text-box-check-outline
                  </v-icon>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <div v-html="item.content" />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-chip-group
              v-if="item.location"
              active-class="primary--text"
              column
            >
              <v-chip
                v-for="(location, location_index) in item.location"
                :key="location_index"
                small
              >
                <ais-highlight
                  :attribute="'location.' + location_index"
                  :hit="item"
                />
              </v-chip>
            </v-chip-group>

            <v-divider class="mt-2 mb-2" />
          </div>
        </template>
      </ais-hits>
    </ais-instant-search>
  </v-container>
</template>

<script>
import { AisHighlight, AisInstantSearch, AisSearchBox, AisPagination, AisSnippet, AisStats, AisHits } from 'vue-instantsearch'
import typesenseInstantsearchAdapter from './typesense'

export default {
  components: {
    AisHighlight,
    AisInstantSearch,
    AisPagination,
    AisSearchBox,
    AisSnippet,
    AisStats,
    AisHits
  },

  data () {
    return {
      currentPage: 1,
      searchClient: typesenseInstantsearchAdapter.searchClient
    }
  },

  computed: {

    searchQuery () {
      return this.$refs.searchbox.value
    }

  }

}
</script>
