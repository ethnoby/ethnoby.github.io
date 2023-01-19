<template>
  <v-container fluid>
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(item, i) in carouselItems"
        :key="i"
        :src="item"
      />
    </v-carousel>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline" center>
            Вітаем<span v-if="currentUser">, {{ currentUser.displayName }}</span>
          </v-card-title>
          <v-card-text elevcation="2" class="pa-5">
            <SignIn v-if="!currentUser" />
            <v-btn v-else color="primary" @click="signOut()">
              Выйсці
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignIn from '../components/SignInBlock.vue'
export default {
  name: 'IndexPage',
  components: { SignIn },
  data: () => ({
    model: 0,
    carouselItems: [
      'https://picsum.photos/750/250',
      'https://picsum.photos/800/250',
      'https://picsum.photos/801/250'
    ]
  }),
  computed: {
    currentUser () {
      return this.$store.state.user
    }
  },
  methods: {
    signOut () {
      // eslint-disable-next-line no-console
      console.log('Signed Out')
      this.$fire.auth.signOut()
    }
  }
}
</script>
