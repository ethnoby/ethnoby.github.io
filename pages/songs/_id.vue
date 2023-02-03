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
      <iframe
        v-if="item.audio_url && $store.state.user"
        class="mt-2 mb-2"
        width="100%"
        scrolling="no"
        frameborder="no"
        :height="$vuetify.breakpoint.mobile ? 120 : 120"
        :src="`https://w.soundcloud.com/player/?url=${item.audio_url}&color=%238d1802&inverse=${ $vuetify.theme.dark }&auto_play=false&show_user=false&hide_related=true&show_comments=true&show_reposts=false&show_teaser=false`"
      />

      <v-card-title>{{ item.performer }}</v-card-title>
      <!-- <v-card-subtitle>{{ item.performer }}</v-card-subtitle> -->
      <v-card-text>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="item.content" />

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
            {{ location }}
          </v-chip>
        </v-chip-group>
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
