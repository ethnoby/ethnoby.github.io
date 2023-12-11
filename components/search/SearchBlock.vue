<template>
  <ais-instant-search
    :search-client="searchClient"
    :index-name="collection"
    :initial-ui-state="initialUiState"
  >
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4">
          <ais-search-box>
            <template #default="{ currentRefinement, hitsPerPage, isSearchStalled, refine }">
              <v-text-field
                ref="searchbox"
                placeholder="Які шукаем тэкст?"
                type="search"
                clearable
                prepend-icon="mdi-text-search"
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
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <ais-refinement-list
            class="mb-2"
            attribute="tags"
            :class-names="{
              'ais-RefinementList-item' : 'text--secondary',
              'ais-RefinementList-showMore' : 'pl-5 mt-3 text-decoration-underline'
            }"
          >
            <template
              #default="{
                items,
                refine,
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
                @change="refine($event)"
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

        <v-col cols="12" sm="6" md="4">
          <ais-hierarchical-menu
            :attributes="['country', 'region', 'district']"
            :class-names="{
              // 'ais-HierarchicalMenu-link': 'text--secondary',
              'ais-HierarchicalMenu-link--selected': 'text--secondary',
              'ais-HierarchicalMenu-list': 'mb-2'
            }"
          >
            <template
              #default="{
                items,
                refine,
              }"
            >
              <v-select
                :items="items"
                label="Лакацыі"
                multiple
                chips
                dense
                clearable
                deletable-chips
                prepend-icon="mdi-map-marker"
                @select.prevent="refine(item.value)"
              />
            </template>
          </ais-hierarchical-menu>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="8">
          <ais-stats class="v-messages text--secondary text-left mt-1 mb-6">
            <template #default="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS, query }">
              <strong>{{ nbHits }} вынікаў</strong> знойдзена для <q>{{ query }}</q> за {{ processingTimeMS }} мс.
              Старонка {{ page + 1 }}/{{ nbPages }}, па {{ hitsPerPage }} .
            </template>
          </ais-stats>
        </v-col>
        <v-col cols="12" md="4">
          <ais-hits-per-page
            :items="[
              { label: '10 hits per page', value: 10, default: true },
              { label: '25 hits per page', value: 25 },
              { label: '50 hits per page', value: 50 },
              { label: '100 hits per page', value: 100 },
            ]"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
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

          <ais-hits :escape-h-t-m-l="false">
            <template #default="{ items }">
              <div v-for="item in items" :key="item.objectID">
                <v-expansion-panels>
                  <v-expansion-panel v-if="item.content" flat accordion>
                    <v-expansion-panel-header>
                      <v-img
                        v-if="item.thumbnail_url"
                        :src="item.thumbnail_url"
                        class="mr-6"
                        max-width="60px"
                      />
                      <div class="text-left">
                        <div class="d-flex text-left" @click.stop>
                          <nuxt-link :to="`songs/${item.id}/`" class="text--secondary">
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
                        <div v-if="item._highlightResult.content_nohtml.matchedWords.length">
                          {{ item._highlightResult.content_nohtml.matchedWords }}
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

          <ais-pagination class="mt-6">
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
        </v-col>

        <v-col cols="12" md="6">
          <v-responsive height="75vh">
            <client-only>
              <l-map :zoom="6" :center="[53.893009, 27.567444]">
                <l-tile-layer
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                />
                <ais-hits :escape-h-t-m-l="false">
                  <template #default="{ items }">
                    <template v-for="item in items">
                      <l-marker v-if="item.geo" :key="item.objectID" :lat-lng="geoToArray(item.geo)">
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
        </v-col>
      </v-row>
    </v-container>
  </ais-instant-search>
</template>

<script>
import {
  AisHierarchicalMenu,
  AisHighlight,
  AisHits,
  AisHitsPerPage,
  AisInstantSearch,
  AisPagination, AisRefinementList,
  AisSearchBox,
  AisSnippet,
  AisStats
} from 'vue-instantsearch'
import typesenseInstantsearchAdapter from './typesense'

export default {
  components: {
    AisHierarchicalMenu,
    AisHighlight,
    AisHits,
    AisHitsPerPage,
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
      currentPage: 5,
      searchClient: typesenseInstantsearchAdapter.searchClient,
      initialUiState: {
        songs: {
          query: this.$route.query.q,
          // query_by: 'name, content, performer, location, content_nohtml',
          refinementList: {
            ...(this.$route.query.tag && { tags: this.$route.query.tag })
          }
        }
      },
      selectedTags: this.$route.query.tag
    }
  },

  computed: {

    searchQuery () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.currentPage = 1
      return this.$refs.searchbox.value
    },

    tags () {
      return this.items
    }

  },

  methods: {
    geoToArray (geo) {
      return geo.split(',')
    },

    updateQuery (query) {
      // this.$refs.searchbox.value = query
      // console.log(this.$refs.searchbox)
      // this.$refs.searchbox.keypress()
    }

    // objectToValues (object) {
    //   object
    // }

  }

}
</script>
