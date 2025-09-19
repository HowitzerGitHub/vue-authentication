import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/services/firebase";
import { getErrorMessageFromCode } from "@/services/errorCodes";
import { useToast } from "vue-toastification";
const toast = useToast();

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
    async signUp({ state, dispatch }) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          state.email,
          state.password
        );

        await dispatch("user/loginUser", user, { root: true });
      } catch (error) {
        const errorCode = error.code;
        toast.error(getErrorMessageFromCode(error.message));
      }
    },
    async login({ state, dispatch }) {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          state.email,
          state.password
        );

        await dispatch("user/loginUser", user, { root: true });
      } catch (error) {
        console.log("🚀 ~ login ~ error:", error);
        const errorCode = error.code;
        toast.error(getErrorMessageFromCode(error.message));
      }
    },
  },
};
