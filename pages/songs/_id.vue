<template>
  <v-container>
    <nuxt-link :to="`/${section.slug}`">
      {{ section.caption }}
    </nuxt-link>
    &nbsp;/&nbsp;
    <span>
      {{ item.name }}
    </span>

    <!-- <p>Path: {{ $route.path }}</p> -->

    <v-row>
      <v-col cols="12" sm="6" order="3" order-sm="2">
        <v-card>
          <v-card-title>
            {{ item.name }}
          </v-card-title>

          <v-card-text>
            <!-- eslint-disable vue/no-v-html -->
            <div class="text--primary text-body-1" v-html="item.content" />
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
            v-if="item.band.length"
          >
            <div class="text--secondary">
              Гурт
            </div>
            <div v-for="(band) in item.band" :key="band" class="text--primary">
              {{ band }}
            </div>
          </v-card-text>
          <v-card-text v-if="item.performer">
            <div class="text--secondary">
              Выканаўцы
            </div>
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
            <v-chip v-for="(tag, index) in item.tags" :key="index" small class="ma-1">
              {{ tag }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" order="2" order-sm="1">
        <!-- eslint-disable vue/no-v-html -->
        <div
          v-if="item.audio_url && $store.state.user"
          class="audio-player mt-4"
          :height="embedHeight"
          v-html="embedCode"
        />
      <!-- eslint-enable vue/no-v-html -->
      </v-col>

      <v-col cols="12" sm="6" order="1" order-sm="3">
        <v-img
          v-if="item.thumbnail_url"
          :src="item.thumbnail_url"
          aspect-ratio="1"
        />
      </v-col>
    </v-row>
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
      if (this.item.sc_track_id) {
        return '<iframe width="100%" height="' + this.embedHeight + '" scrolling="no" frameborder="no" ' +
        'src="https://w.soundcloud.com/player/?' +
          'maxheight=' + this.embedHeight +
          '&color=%238d1802' +
          '&visual=false' + // (!this.isMobile ? 'true' : 'false') +
          '&hide_related=true' +
          '&inverse=' + (this.$vuetify.theme.dark ? 'true' : 'false') +
          '&show_artwork=false' +
          '&show_comments=false' +
          '&show_reposts=false' +
          '&show_teaser=false' +
          '&show_user=true' +
          '&auto_play=false' +
          '&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F' + this.item.sc_track_id +
          (this.item.sc_secret_token ? '&secret_token=' + this.item.sc_secret_token : '') +
        '"></iframe>'
      } else {
        return this.item.audio_embed
      }
    },

    embedHeight () {
      return this.isMobile ? 20 : 120
    },

    isMobile () {
      return this.$vuetify.breakpoint.mobile
    }
  }
}
</script>
