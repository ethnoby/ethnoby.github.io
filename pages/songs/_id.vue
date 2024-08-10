<template>
  <v-container>
    <nuxt-link :to="{ path: `/${section.slug}`}" class="mb-1 link-pointer">
      {{ section.caption }}
    </nuxt-link>
    &nbsp;/&nbsp;
    <span>
      {{ item.name }}
    </span>

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
        </v-card>

        <v-card class="mt-4">
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

          <v-card-text v-if="item.location && !item.geo" class="text--secondary">
            <div>Месца паходжання</div>
            <div class="text--primary">
              {{ item.location[0] }}
            </div>
          </v-card-text>
        </v-card>

        <v-card v-if="item.location" class="mt-4">
          <v-card-text v-if="item.location" class="text--secondary">
            <div>Месца паходжання</div>
            <div class="text--primary">
              {{ item.location[0] }}
            </div>
            <div v-if="checkGeoArray" class="text--secondary">
              {{ item.geo }}
            </div>
          </v-card-text>

          <div v-if="checkGeoArray" id="map-wrap" style="height: 300px;">
            <client-only>
              <l-map :zoom="6" :center="item.geo">
                <l-tile-layer
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                />
                <l-marker :lat-lng="item.geo" />
              </l-map>
            </client-only>
          </div>

          <!--          No need second map  -->
          <!--          <v-img-->
          <!--            v-if="item.geo && item.geo.length"-->
          <!--            :src="`https://maps.googleapis.com/maps/api/staticmap?\-->
          <!--              zoom=6\-->
          <!--              &scale=2\-->
          <!--              &size=600x400\-->
          <!--              &language=be\-->
          <!--              &center=Minsk\-->
          <!--              &markers=size:tiny%7Ccolor:0x8d1802%7C${ item.geo }-->
          <!--              &key=AIzaSyBRXbNJRwZdkuDuGH3ES3aBbPkznjNB9c0\-->
          <!--              &style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.country%7Cvisibility:on&style=feature:administrative.country%7Celement:geometry%7Ccolor:0xbe7c7e%7Cvisibility:on&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:administrative.locality%7Celement:geometry%7Cvisibility:on&style=feature:administrative.locality%7Celement:labels%7Cvisibility:on&style=feature:administrative.province%7Celement:geometry%7Ccolor:0xbe7c7e%7Cvisibility:on%7Cweight:2&style=feature:landscape.natural%7Celement:geometry%7Cvisibility:on&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&key=AIzaSyBRXbNJRwZdkuDuGH3ES3aBbPkznjNB9c0-->
          <!--              `-->
          <!--            "-->
          <!--          />-->
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
        <div
          v-if="item.video_url && $store.state.user"
          class="mt-4"
        >
          <youtube :video-id="videoId" player-width="100%" />
        </div>

      <!-- eslint-enable vue/no-v-html -->
      </v-col>

      <v-col cols="12" sm="6" order="1" order-sm="3">
        <v-card>
          <v-img
            v-if="item.thumbnail_url"
            :src="item.thumbnail_url"
            aspect-ratio="1"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { getIdFromURL } from 'vue-youtube-embed'
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

    videoId () {
      return getIdFromURL(this.item.video_url)
    },
    embedHeight () {
      return this.isMobile ? 20 : 120
    },

    isMobile () {
      return this.$vuetify.breakpoint.mobile
    },

    checkGeoArray () {
      return this.item.geo !== null && ![0, 0].every(v => this.item.geo.includes(v))
    }

  }
}
</script>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.link-pointer {
  padding: 1px;
  display: inline-block;
}
</style>
