<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <v-card-text>
          <v-img contain src="https://ethno.by/assets/images/ethno.by-logo-c-tr.png" alt="" />
        </v-card-text>
      </v-card>
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
</template>

<script>
import SignIn from '../components/SignInBlock.vue'
export default {
  name: 'IndexPage',
  components: { SignIn },
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
