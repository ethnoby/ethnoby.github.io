<template>
  <v-container fluid>
    <nuxt-link :to="`/${section.slug}`">
      {{ section.caption }}
    </nuxt-link>
    &nbsp;/&nbsp;
    <span>
      {{ item.name }}
    </span>

    <h1>{{ item.name }}</h1>
    <!-- <p>Path: {{ $route.path }}</p> -->
    <v-card>
      <v-card-text>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="text--primary" v-html="item.content" />

        <div
          v-if="item.audio_url && $store.state.user"
          class="mt-4 mb-2"
          :height="$vuetify.breakpoint.mobile ? 120 : 120"

          v-html="item.audio_embed"
        />
      </v-card-text>
      <v-divider />

      <v-card-text v-if="item.performer" class="text--secondary">
        <div>Месца паходжання</div>
        <div class="text--primary">
          {{ item.location[0] }}
        </div>
      </v-card-text>

      <v-card-text
        v-if="item.band"
        class="text--secondary"
      >
        <div>Гурт</div>
        <div v-for="(band) in item.band" :key="band" class="text--primary">
          {{ band }}
        </div>
      </v-card-text>
      <v-card-text
        v-if="item.performer"
        class="text--secondary"
      >
        <div>Выканаўцы</div>
        <div class="text--primary">
          {{ item.performer }}
        </div>
      </v-card-text>
      <v-card-text
        v-if="item.record_author"
        class="text--secondary"
      >
        <div>Аўтары запісу</div>
        <div class="text--primary">
          {{ item.record_author }}
        </div>
      </v-card-text>
      <v-card-text
        v-if="item.record_date"
        class="text--secondary"
      >
        <div>Дата запісу (пры адсутнасці - год першага релізу)</div>
        <div class="text--primary">
          {{ item.record_date }}
        </div>
      </v-card-text>
      <v-card-text
        v-if="item.albums"
        class="text--secondary"
      >
        <div>Альбомы, дзе публікаваўся запіс</div>
        <div v-for="(album) in item.albums" :key="album" class="text--primary">
          {{ album }}
        </div>
      </v-card-text>
      <v-card-text
        v-if="item.albums"
        class="text--secondary"
      >
        <div>Жанры / тэгі</div>
        <div class="text--primary">
          {{ item.tags.join(', ') }}
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import client from '~/components/search/client.js'

export default {
  async asyncData ({ params, redirect }) {
    return {
      // section: 'songs',
      item: await client.collections('songs').documents(params.id).retrieve()
    }
  },

  data () {
    return {
      // item: null,
      section: {
        slug: 'songs',
        caption: 'Песні'
      }
    }
  },

  head () {
    return {
      title: this.item.name
    }
  }
}
</script>
