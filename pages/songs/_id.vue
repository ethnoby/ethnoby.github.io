<template>
  <v-container fluid>
    <nuxt-link :to="`/${section.slug}`">
      {{ section.caption }}
    </nuxt-link>
    &nbsp;/&nbsp;
    <span>
      {{ item.name }}
    </span>

    <!-- <p>Path: {{ $route.path }}</p> -->
    <v-card>
      <v-card-title>
        <h1>{{ item.name }}</h1>
      </v-card-title>

      <v-img
        v-if="item.thumbnail_url"
        :src="item.thumbnail_url"
        aspect-ratio="1"
      />

      <v-card-text>
        <!-- eslint-disable vue/no-v-html -->
        <div class="text--primary" v-html="item.content" />

        <div
          v-if="item.audio_url && $store.state.user"
          class="mt-4 mb-2"
          :height="embedHeight"
          v-html="embedCode"
        />
        <!-- eslint-enable vue/no-v-html -->
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
  },

  computed: {
    embedCode () {
      if (this.item.sc_secret_token && this.item.sc_track_id) {
        return '<iframe width="100%" height="' + this.embedHeight + '" scrolling="no" frameborder="no" ' +
        'src="https://w.soundcloud.com/player/?' +
          'maxheight=' + this.embedHeight +
          '&color=%238d1802' +
          '&visual=false' +
          '&hide_related=false' +
          '&inverse=' + (this.$vuetify.theme.dark ? 'true' : 'false') +
          '&show_artwork=false' +
          '&show_comments=false' +
          '&show_reposts=false' +
          '&show_teaser=false' +
          '&show_user=false' +
          '&auto_play=false' +
          '&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F' + this.item.sc_track_id +
          '&secret_token=' + this.item.sc_secret_token +
        '"></iframe>'
      } else {
        return this.item.audio_embed
      }
    },

    embedHeight () {
      return this.$vuetify.breakpoint.mobile ? 20 : 120
    }
  }
}
</script>
