<template>
  <ais-instant-search
    :search-client="searchClient"
    :index-name="collection"
    :initial-ui-state="initialUiState"
  >
    <ais-configure :hits-per-page.camel="15" />
    <v-container fluid class="pa-0">
      <!-- <h1 v-if="title">
        {{ title }}
      </h1> -->
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="mb-4">
            <v-card-title v-if="!isMobile" class="text-subtitle-1">
              Фільтры
            </v-card-title>
            <v-card-text>
              <v-row>
                <!-- Tags search -->
                <v-col cols="12">
                  <ais-refinement-list
                    attribute="tags"
                    :limit="300"
                    :transform-items="excludeCustomPlaylist"
                    :class-names="{
                      'ais-RefinementList-item' : 'text--secondary',
                      'ais-RefinementList-showMore' : 'pl-5 mt-3 text-decoration-underline'
                    }"
                  >
                    <template
                      #default="{
                        items,
                        refine
                      }"
                    >
                      <v-select
                        v-model="selectedTags"
                        :items="items"
                        label="Жанры"
                        multiple
                        chips
                        dense
                        clearable
                        deletable-chips
                        prepend-icon="mdi-playlist-music"
                        @change="performSearch($event, refine, 'tags')"
                        @click:clear="toggleAll(items, refine, 'tags')"
                      >
                        <template #item="{ item }">
                          {{ item.value }}
                          <v-chip x-small>
                            {{ item.count }}
                          </v-chip>
                        </template>

                        <template #selection="{ item }">
                          <v-chip>
                            <span>{{ item.value }}</span>
                          </v-chip>
                        </template>
                      </v-select>
                    </template>
                  </ais-refinement-list>
                </v-col>

                <!-- Locations search -->
                <v-col cols="12">
                  <ais-refinement-list
                    attribute="location_uni"
                    :limit="300"
                    :searchable="true"
                    :class-names="{
                      'ais-RefinementList-item' : 'text--secondary',
                      'ais-RefinementList-showMore' : 'pl-5 mt-3 text-decoration-underline'
                    }"
                  >
                    <template
                      #default="{
                        items,
                        refine

                      }"
                    >
                      <v-autocomplete
                        v-model="selectedLoc"
                        :items="items"
                        :search-input.sync="locationSearchInput"
                        label="Лакацыі"
                        no-data-text="Лакацый не знойдзена"
                        item-text="label"
                        item-value="label"
                        clearable
                        chips
                        dense
                        deletable-chips
                        prepend-icon="mdi-map-marker"
                        @change="performSearch($event, refine, 'loc')"
                        @click:clear="clearSearch(selectedLoc, refine, 'loc' )"
                      >
                        <template #item="{ item }">
                          <!-- eslint-disable-next-line vue/no-v-html -->
                          <span v-html="highlightSearchTerm(item.label)" />
                          <v-chip x-small>
                            {{ item.count }}
                          </v-chip>
                        </template>
                        <template #selection="{ item }">
                          <v-chip>
                            <span>{{ item.value }}</span>
                          </v-chip>
                        </template>
                      </v-autocomplete>
                    </template>
                  </ais-refinement-list>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="mb-4">
            <v-card-title v-if="!isMobile" class="text-subtitle-1">
              Тэкставы пошук
            </v-card-title>
            <v-card-text>
              <v-row>
                <!-- Text search -->
                <v-col cols="12">
                  <ais-search-box>
                    <template #default="{ currentRefinement, hitsPerPage, isSearchStalled, refine }">
                      <v-text-field
                        ref="searchbox"
                        label="Тэкст"
                        placeholder="Які шукаем тэкст?"
                        type="search"
                        clearable
                        prepend-icon="mdi-text-search"
                        :value="currentRefinement"
                        @input="debouncedSearch($event, refine, 'q')"
                        @click:clear="clearSearch('', refine,'q')"
                      />
                      <template v-if="isSearchStalled">
                        <v-skeleton-loader
                          v-for="i in hitsPerPage"
                          :key="i"
                          type="article"
                        />
                      </template>
                    </template>
                  </ais-search-box>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card v-if="!isMobile">
            <v-card-title class="text-subtitle-1">
              Лакацыі паказаных на старонцы запісаў
            </v-card-title>
            <v-card-text>
              <v-responsive aspect-ratio="1">
                <client-only>
                  <l-map :zoom="6" :center="[53.893009, 27.567444]">
                    <l-tile-layer
                      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                      attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                    />
                    <ais-hits :escape-h-t-m-l="false">
                      <template #default="{ items }">
                        <template v-for="item in items">
                          <l-marker v-if="item.geo" :key="item.objectID" :lat-lng="item.geo">
                            <l-popup>
                              {{ item.location ? item.location[0] : item.document.location[0] }}
                            </l-popup>
                          </l-marker>
                        </template>
                      </template>
                    </ais-hits>
                  </l-map>
                </client-only>
              </v-responsive>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <ais-stats class="v-messages text--secondary text-left mt-1 mb-6">
            <template #default="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS }">
              <strong>{{ nbHits }} вынікаў</strong> знойдзена за {{ processingTimeMS }} мс.
              Старонка {{ page + 1 }}/{{ nbPages }}, па {{ hitsPerPage }} .
            </template>
          </ais-stats>

          <ais-pagination class="mb-2">
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
                @input="performPagination(currentPage, refine)"
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

          <ais-hits :escape-h-t-m-l="false">
            <template #default="{ items }">
              <div v-for="item in items" :key="item.objectID">
                <v-expansion-panels>
                  <v-expansion-panel v-if="item.content" flat accordion class="rounded-0">
                    <v-expansion-panel-header class="pa-1">
                      <v-img
                        v-if="item.thumbnail_url"
                        :src="item.thumbnail_url"
                        class="fixed-size-img mr-5 ml-1"
                      />
                      <div v-else class="placeholder fixed-size-img mr-5 ml-1" />
                      <div class="text-left">
                        <div class="d-flex text-left" @click.stop>
                          <nuxt-link :to="`songs/${item.id}/`" class="text--secondary text-decoration-none">
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
                        <div v-if="item.content && searchQuery && item.content_nohtml.includes(item._highlightResult.content_nohtml.matchedWords[0])" class="caption mt-3">
                          <strong class="text--secondary">Знойдзена ў тэксце:</strong>
                          <ais-snippet attribute="content_nohtml" :hit="item" />
                        </div>
                      </div>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                      <!--                {{ item._highlightResult }}-->
                      <!-- eslint-disable-next-line vue/no-v-html -->
                      <div class="text--primary" v-html="item._highlightResult.content.value" />
                      <div v-if="item.performer" class="caption text-left">
                        <strong class="text--secondary">Выканаўцы:</strong>
                        <ais-highlight attribute="performer" :hit="item" />
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </template>
          </ais-hits>

          <ais-pagination v-if="nbHits" class="mt-4">
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
                @input="performPagination(currentPage, refine)"
              />
            </template>
          </ais-pagination>
        </v-col>
      </v-row>
    </v-container>
  </ais-instant-search>
</template>

<script>
import {
  // AisHierarchicalMenu,
  AisConfigure,
  AisHighlight,
  AisHits,
  AisInstantSearch,
  AisPagination, AisRefinementList,
  AisSearchBox,
  AisSnippet,
  AisStats
} from 'vue-instantsearch'
import { debounce } from 'lodash'
import typesenseInstantsearchAdapter from './typesense'

export default {
  components: {
    // AisHierarchicalMenu,
    AisConfigure,
    AisHighlight,
    AisHits,
    AisInstantSearch,
    AisPagination,
    AisRefinementList,
    AisSearchBox,
    AisSnippet,
    AisStats
  },

  props: {
    // eslint-disable-next-line vue/require-default-prop
    collection: String
  },

  data () {
    return {
      currentPage: this.$route.query.p ? parseInt(this.$route.query.p) : 1,
      searchClient: typesenseInstantsearchAdapter.searchClient,
      initialUiState: {
        songs: {
          query: this.$route.query.q,
          page: this.$route.query.p ? parseInt(this.$route.query.p) : 0,
          refinementList: {
            ...(this.$route.query.tags && { tags: [this.$route.query.tags].flat() }),
            ...(this.$route.query.loc && { location_uni: [this.$route.query.loc].flat() })
          }
        }
      },
      selectedTags: this.$route.query.tags,
      tagsSearchInput: this.$route.query.tags,
      selectedLoc: this.$route.query.loc,
      locationSearchInput: this.$route.query.loc,
      title: this.$route.query.t
    }
  },

  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.mobile
    },

    searchQuery () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.$refs.searchbox.value
    },

    tags () {
      return this.items
    }

  },

  methods: {
    debouncedSearch:
      debounce(function (event, refineFunction, queryParamName) {
        this.performSearch(event, refineFunction, queryParamName)
      }, 1000
      ),

    performSearch (event, refineFunction, queryParamName) {
      const currentRoute = this.$route
      const updatedQuery = { ...currentRoute.query }
      if (event !== null && (!Array.isArray(event) || event.length !== 0)) {
        let refineValue
        if (Array.isArray(event)) {
          refineValue = event[event.length - 1]
        } else {
          refineValue = event
        }
        // update page to 1 to return to start
        this.paginationToStart(updatedQuery)

        updatedQuery[queryParamName] = event
        // update query params
        this.$router.push({
          path: currentRoute.path,
          query: updatedQuery
        })
        refineFunction(refineValue)
      }
    },

    paginationToStart (updatedQuery) {
      updatedQuery.p = 1
      this.currentPage = 1
    },

    performPagination (page, refineFunction) {
      const queryParamName = 'p'
      const currentRoute = this.$route
      const updatedQuery = { ...currentRoute.query }
      if (page !== null) {
        const refineValue = page - 1
        updatedQuery[queryParamName] = page
        this.$router.push({
          path: currentRoute.path,
          query: updatedQuery
        })
        refineFunction(refineValue)
      }
    },

    clearSearch (valueToClearRefine, refineFunction, queryParamName) {
      // remove query param
      const currentRoute = this.$route
      const updatedQuery = { ...currentRoute.query }
      delete updatedQuery[queryParamName]
      // bring pagination to start
      this.paginationToStart(updatedQuery)
      this.$router.push({
        path: currentRoute.path,
        query: updatedQuery
      })

      // clear refinement
      refineFunction(valueToClearRefine)
    },

    toggleAll (items, refine, queryParamName) {
      const currentRoute = this.$route
      const updatedQuery = { ...currentRoute.query }
      delete updatedQuery[queryParamName]
      this.$router.push({
        path: currentRoute.path,
        query: updatedQuery
      })
      items.forEach((item) => {
        if (item.isRefined) {
          refine(item.value)
        }
      })
    },

    excludeCustomPlaylist (items) {
      return items.filter(item => !item.label.match(/^playlist*/))
    },

    highlightSearchTerm (item) {
      if (!this.locationSearchInput) { return item }

      const re = new RegExp(`(${this.locationSearchInput})`, 'gi')
      const highlighted = item.replace(re, '<span class="v-list-item__mask">$1</span>')

      return highlighted
    }

  }

}
</script>

<style scoped>
.fixed-size-img {
  max-width: 60px;
  max-height: 60px;
  min-width: 60px;
  min-height: 60px;
}

.placeholder {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
