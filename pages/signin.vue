<template>
  <v-container fluid>
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
  components: { SignIn },
  computed: {
    currentUser () {
      return this.$store.state.user
    }
  },
  methods: {
    signOut () {
      this.$fire.auth.signOut()
    }
  }
}
</script>
