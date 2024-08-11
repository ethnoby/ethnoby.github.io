<template>
  <v-app dark>
    <!--
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in favoriteItems"
          :key="i"
          :to="item.to"
          router
          exact
          :disabled="item.disabled"
        >
          <v-list-item-action>
            <v-icon :disabled="item.disabled">
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-subheader>
          Усе раздзелы
        </v-subheader>
        <v-list-item
          v-for="(item, i) in allItems"
          :key="20+i"
          :to="item.to"
          router
          exact
          disabled
        >
          <v-list-item-action>
            <v-icon disabled>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    -->

    <v-app-bar
      fixed
      app
      :clipped-left="clipped"
    >
      <!-- :color="$vuetify.breakpoint.mobile ? '#8d1802' : false"
      :dark="$vuetify.breakpoint.mobile"
    > -->
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->

      <nuxt-link
        to="/"
      >
        <v-img
          class="mx-0"
          src="https://ethnoby.org/assets/images/ethnoby-logo-c.png"
          alt="Ethnoby"
          max-height="60"
          max-width="240"
          contain
        />
      </nuxt-link>
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        class="ml-3"
        icon
        to="/"
        router
        exact
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        icon
        to="/search"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.prevent="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-menu v-if="!$vuetify.breakpoint.mobile" offset-y>
        <template #activator="{ on }">
          <v-btn
            icon
            color="primary"
            dark
            v-on="on"
          >
            <v-avatar
              v-if="currentUser"
              size="32"
            >
              <img
                :src="currentUser.avatar"
                :alt="currentUser.displayName"
                :title="currentUser.displayName"
              >
            </v-avatar>
            <v-icon v-else>
              mdi-account
            </v-icon>
          </v-btn>
        </template>

        <v-list v-if="currentUser">
          <v-list-item two-line>
            <v-list-item-avatar>
              <img
                :src="currentUser.avatar"
                :alt="currentUser.displayName"
                :title="currentUser.displayName"
              >
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ currentUser.displayName }}</v-list-item-title>
              <v-list-item-subtitle>{{ currentUser.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click.prevent="signOut">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Выйсці</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-list-item to="/signin">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Увайсці</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <!--
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Маё абранае</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    -->
    <v-bottom-navigation v-if="$vuetify.breakpoint.mobile" fixed app class="bottom-nav">
      <v-btn @click="goBack">
        <span>Назад</span>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-btn
        class="ml-3"
        icon
        to="/"
        router
        exact
      >
        <span>Галоўная</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/search">
        <span>Пошук</span>

        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn to="/signin">
        <span>Профіль</span>
        <v-avatar
          v-if="currentUser"
          size="24"
        >
          <img
            :src="currentUser.avatar"
            :alt="currentUser.displayName"
            :title="currentUser.displayName"
          >
        </v-avatar>
        <v-icon v-else>
          mdi-account
        </v-icon>
      </v-btn>
    </v-bottom-navigation>
    <app-footer v-if="showFooter" />
  </v-app>
</template>

<script>
import AppFooter from '~/components/AppFooter'
export default {
  name: 'DefaultLayout',
  components: {
    AppFooter
  },

  data () {
    return {
      title: 'Песні',
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      showFooter: false,
      favoriteItems: [
        {
          icon: 'mdi-playlist-music',
          title: 'Песні',
          to: '/songs',
          disabled: false
        },

        {
          icon: 'mdi-violin',
          title: 'Найгрышы',
          to: '/nopage',
          disabled: true
        },
        {
          // icon: 'mdi-dance-ballroom',
          icon: 'mdi-shoe-print',
          title: 'Танцы',
          to: '/nopage',
          disabled: true
        }
      ],
      allItems: [
        {
          icon: 'mdi-music-box-multiple',
          title: 'Аўдыётэка',
          to: '/audio'
        },
        {
          icon: 'mdi-filmstrip-box-multiple',
          title: 'Відэатэка',
          to: '/video'
        },
        {
          icon: 'mdi-image-multiple',
          title: 'Фотатэка',
          to: '/pictures'
        },
        {
          icon: 'mdi-bookshelf',
          title: 'Кнігі',
          to: '/books'
        },
        {
          icon: 'mdi-newspaper-variant-multiple',
          title: 'Прэса',
          to: '/press'
        },
        {
          icon: 'mdi-tshirt-crew',
          title: 'Прадметы',
          to: '/press'
        }
      ]
    }
  },

  computed: {
    currentUser () {
      return this.$store.state.user
    }
  },

  methods: {
    signOut () {
      this.$fire.auth.signOut()
      window.location = '/signin'
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.bottom-nav {
  z-index: 400;
}
</style>
