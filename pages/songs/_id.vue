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
      <div
        v-if="item.audio_url && $store.state.user"
        class="mt-2 mb-2"
        :height="$vuetify.breakpoint.mobile ? 120 : 120"
        v-html="item.audio_embed"
      />

      <!--      && $store.state.user-->
      <!--
            <iframe width="100%"
                    height="300"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000222504&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      -->
      <!--      <iframe-->
      <!--        width="100%"-->
      <!--        height="400"-->
      <!--        scrolling="no"-->
      <!--        frameborder="no"-->
      <!--        src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F318982649&show_artwork=true&secret_token=s-mMgLl"></iframe>-->
      <!--      &lt;!&ndash;      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ethnoby" title="ethno.by" target="_blank" style="color: #cccccc; text-decoration: none;">ethno.by</a> · <a href="https://soundcloud.com/ethnoby/12a" title="в. Пачапы - А ты жаркая сонца, кала леса нізка ходзіш (жніўная)" target="_blank" style="color: #cccccc; text-decoration: none;">в. Пачапы - А ты жаркая сонца, кала леса нізка ходзіш (жніўная)</a></div> &ndash;&gt;-->

      <!--      <iframe-->
      <!--        v-if="item.audio_url"-->
      <!--        class="mt-2 mb-2"-->
      <!--        width="100%"-->
      <!--        scrolling="no"-->
      <!--        frameborder="no"-->
      <!--        :height="$vuetify.breakpoint.mobile ? 120 : 120"-->
      <!--        :src="`https://w.soundcloud.com/player/?url=${item.audio_url}&color=%238d1802&inverse=${ $vuetify.theme.dark }&auto_play=false&show_user=false&hide_related=true&show_comments=true&show_reposts=false&show_teaser=false`"-->
      <!--      />-->

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
