<template>
  <div class="row">
    <div class="col-md-3 offset-md-4">
      <div>
        <div>
          <h3>Login</h3>
          <hr />
        </div>
        <v-form>
          <v-text-field
            label="Username"
            :rules="[rules.maxLength(30), rules.required()]"
            v-model="fullName"
          ></v-text-field>
          <v-text-field
            label="Password"
            :rules="[rules.maxLength(30), rules.required()]"
            v-model="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            :rules="[rules.maxLength(30), passwordMatch()]"
            v-model="confirmPassword"
          ></v-text-field>
          <v-btn type="submit" variant="tonal"> Button </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRules } from "vuetify/labs/rules";

const rules = useRules();
const store = useStore();

const confirmPassword = ref();

const passwordMatch = (err) => {
  return (v) => {
    if (v !== password.value) return "Password does not Match";
    return true;
  };
};

const fullName = computed({
  get() {
    return store.getters["auth/name"];
  },
  set(val) {
    store.dispatch("auth/updateName", val);
  },
});
const password = computed({
  get() {
    return store.getters["auth/password"];
  },
  set(val) {
    store.dispatch("auth/updatePassword", val);
  },
});
const submit = () => {};
</script>
