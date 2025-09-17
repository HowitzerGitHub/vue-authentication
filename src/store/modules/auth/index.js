import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/services/firebase";

export default {
  namespaced: true,
  state() {
    return {
      name: "",
      password: "",
      email: "",
    };
  },
  mutations: {
    SET(state, payload) {
      state[payload.key] = payload.value;
    },
  },
  getters: {
    name(state) {
      return state.name;
    },
    password(state) {
      return state.password;
    },
    email(state) {
      return state.email;
    },
  },
  actions: {
    updateName({ commit }, name) {
      commit("SET", { value: name, key: "name" });
    },
    updatePassword({ commit }, password) {
      commit("SET", { value: password, key: "password" });
    },
    updateEmail({ commit }, email) {
      commit("SET", { value: email, key: "email" });
    },
    signUp({ state, dispatch }) {
      createUserWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch("user/loginUser", user, { root: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
    login({ state, dispatch }) {
      signInWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch("user/loginUser", user, { root: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
  },
};
