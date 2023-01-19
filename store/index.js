export const state = () => ({
  user: false
})

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (authUser) {
      // eslint-disable-next-line no-console
      console.log(authUser)
      const { uid, email, displayName, photoURL } = authUser
      const md5 = require('md5')
      const avatar = photoURL || `https://www.gravatar.com/avatar/${md5(email)}?s=32`
      state.user = { uid, email, displayName, avatar }
    } else {
      state.user = false
    }
  }
}
