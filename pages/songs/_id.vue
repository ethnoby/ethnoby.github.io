<template>
  <v-container>
    <!-- <nuxt-link :to="{ path: `/${section.slug}`}" class="mb-1 link-pointer">
      {{ section.caption }}
    </nuxt-link>
    &nbsp;/&nbsp;
    <span>
      {{ item.name }}
    </span> -->
    <h1 class="text-h4 text-lg-h2 mb-2">
      {{ item.name }}
    </h1>

    <v-row>
      <v-col cols="12" sm="6" order="3" order-sm="2">
        <v-card>
          <!-- <v-card-title>
            {{ item.name }}
          </v-card-title> -->

          <v-card-text>
            <!-- eslint-disable vue/no-v-html -->
            <div class="text--primary text-body-1" v-html="item.content" />
            <!-- eslint-enable vue/no-v-html -->
          </v-card-text>
        </v-card>

        <v-card class="mt-4 mb-4">
          <v-card-text
            class="text--secondary"
          >
            <div>Жанры / тэгі</div>
            <nuxt-link
              v-for="(tag, index) in item.tags"
              :key="index"
              :to="{
                path: '/search',
                query: { tags: [tag] /*, t: tag*/ }
              }"
            >
              <v-chip small class="ma-1 cursor-pointer">
                {{ tag }}
              </v-chip>
            </nuxt-link>
          </v-card-text>

          <v-card-text
            v-if="item.band.length"
          >
            <div class="text--secondary">
              Калектывы
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
            <div>Год запісу ці першага релізу</div>
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
        </v-card>

        <location-card
          v-if="item.location && isMobile"
          :item="item"
        />
      </v-col>

      <v-col cols="12" order="2" order-sm="1">
        <!-- eslint-disable vue/no-v-html -->
        <div
          v-if="item.audio_url && $store.state.user"
          class="audio-player"
          :height="embedHeight"
          v-html="embedCode"
        />
        <div
          v-if="item.video_url && videoId && $store.state.user"
          class="video-player mt-4"
        >
          <youtube :video-id="videoId" player-width="100%" player-height="100%" />
        </div>

      <!-- eslint-enable vue/no-v-html -->
      </v-col>

      <v-col cols="12" sm="6" order="1" order-sm="3">
        <v-card v-if="item.thumbnail_url" class="mb-4">
          <v-img
            :src="item.thumbnail_url"
            aspect-ratio="1"
          />
        </v-card>

        <location-card
          v-if="item.location && !isMobile"
          :item="item"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { getIdFromURL } from 'vue-youtube-embed'
import client from '~/components/search/client.js'
import LocationCard from '~/components/LocationCard'
export default {
  components: {
    LocationCard
  },

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

    videoId () {
      return getIdFromURL(this.item.video_url)
    },
    embedHeight () {
      return this.isMobile ? 120 : 120
    },

    isMobile () {
      return this.$vuetify.breakpoint.mobile
    }

  }
}
</script>
<style lang="scss">
.cursor-pointer {
  cursor: pointer;
}

.link-pointer {
  padding: 1px;
  display: inline-block;
}

.video-player {
  position: relative;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
