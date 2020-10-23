export default {
    setAuth(state, payload) {
        state.isAuthenticated = payload.value;
      },
}