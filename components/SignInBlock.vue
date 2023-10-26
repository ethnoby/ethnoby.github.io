<template>
  <div>
    <div id="firebaseui-auth-container" />
    <div id="loader">
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    const firebaseui = require('firebaseui')
    // const functions = require('firebase-functions')
    // const admin = require('firebase-admin')

    // functions.auth.user().onCreate(async (user) => {
    //   if (user.providerData.find(d => d && d.providerId === 'facebook.com') || user.providerData === 'facebook.com') {
    //     try {
    //       await admin.auth().updateUser(user.uid, {
    //         emailVerified: true
    //       })
    //       console.log('emailVerified: true', user)
    //     } catch (err) {
    //       console.log('err when verifying email', err)
    //     }
    //   }
    // })
    require('firebaseui/dist/firebaseui.css')
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(this.$fire.auth)
    const uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,
        // this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
        this.$fireModule.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: '/',
      tosUrl: '/', // Terms of service url.
      privacyPolicyUrl: '/', // Privacy policy url.
      callbacks: {
        signInSuccessWithAuthResult () {
          // eslint-disable-next-line no-console
          console.log('Successfully signed in', this.$fireModule)
          // window.location = '/'
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none'
        }
      }
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
