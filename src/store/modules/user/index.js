import router from "@/router/router";
export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: "",
      user: undefined,
    };
  },
  mutations: {
    SET(state, payload) {
      state[payload.key] = payload.value;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    localId(state) {
      return state.user?.reloadUserInfo?.localId;
    },
    accessToken(state) {
      return state.user?.accessToken;
    },
    expirationTime(state) {
      return state.user?.stsTokenManager?.expirationTime;
    },
    refreshToken(state) {
      return state.user?.stsTokenManager?.refreshToken;
    },
  },
  actions: {
    loginUser({ commit }, userDetails) {
      commit("SET", { value: userDetails, key: "user" });
      commit("SET", { value: true, key: "isLoggedIn" });
      router.push("/home");
    },
  },
};
