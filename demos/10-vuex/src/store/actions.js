export default {
    login(context) {
        context.commit("setAuth", { value: true });
      },
      logout(context) {
        context.commit("setAuth", { value: false });
      },
}