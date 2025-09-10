export default {
  namespaced: true,
  state() {
    return {
      name: "",
      password: "",
    };
  },
  mutations: {
    SET_NAME(state, payload) {
      state.name = payload.name;
    },
    SET_PASSWORD(state, payload) {
      state.password = payload.password;
    },
  },
  getters: {
    name(state) {
      return state.name;
    },
    password(state) {
      return state.password;
    },
  },
  actions: {
    updateName({ commit }, name) {
      commit("SET_NAME", { name });
    },
    updatePassword({ commit }, password) {
      commit("SET_PASSWORD", { password });
    },
  },
};
