<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-img contain max-height="60" src="https://ethno.by/assets/images/ethno.by-logo-c-tr.png" alt="" />
      <v-list>
        <v-list-item
          to="/"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Галоўная</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-subheader>
          Абраныя раздзелы
        </v-subheader>
        <v-list-item
          v-for="(item, i) in favoriteItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action v-if="!currentUser">
            <v-icon color="grey" title="Залагіньцеся каб пабачыць змест раздзела">
              mdi-lock
            </v-icon>
          </v-list-item-action>
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
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn
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
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-menu offset-y>
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
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-notebook-heart-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Упадабанае</v-list-item-title>
          </v-list-item>
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-bookmark-box-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Мае калекцыі</v-list-item-title>
          </v-list-item>
          <v-divider />
          <!-- <v-subheader>SETTINGS</v-subheader> -->
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
    <!-- <v-footer
      app
    >
      <span>&copy; Ethno.by {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      favoriteItems: [
        {
          icon: 'mdi-playlist-music',
          title: 'Песні',
          to: '/songs'
        },
        {
          icon: 'mdi-violin',
          title: 'Найгрышы',
          to: '/tunes'
        },
        {
          // icon: 'mdi-dance-ballroom',
          icon: 'mdi-shoe-print',
          title: 'Танцы',
          to: '/dances'
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
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Ethnoby'
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
      window.location = '/login'
    }
  }
}
</script>
