export default {
  namespaced: true,
  state() {
    return {
      name: "First",
    };
  },
  mutations: {},
  getters: {
    fullName(state) {
      return state.name + "Rajput";
    },
  },
  actions: {},
};
