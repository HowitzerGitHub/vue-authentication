<template>
  <div class="row">
    <div class="col-md-3 offset-md-4">
      <div>
        <div>
          <h3>Login</h3>
          <hr />
        </div>
        <v-form @submit.prevent="submit">
          <v-text-field
            label="Password"
            :rules="[rules.maxLength(30), rules.required()]"
            v-model="password"
          ></v-text-field>
          <v-text-field
            label="Email"
            :rules="[rules.email()]"
            v-model="email"
          ></v-text-field>

          <v-btn type="submit" variant="tonal" class="my-2"> Button </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRules } from "vuetify/labs/rules";
const store = useStore();
const rules = useRules();

const submit = async (event) => {
  const { valid } = await event;
  if (!valid) return;
  store.dispatch("auth/login");
};
const password = computed({
  get() {
    return store.getters["auth/password"];
  },
  set(val) {
    store.dispatch("auth/updatePassword", val);
  },
});
const email = computed({
  get() {
    return store.getters["auth/email"];
  },
  set(val) {
    store.dispatch("auth/updateEmail", val);
  },
});
</script>
