<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto flex-row gap-3 px-4">
        <li class="nav-item active">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/signup">Signup</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const fullName = computed(() => store.getters["auth/fullName"]);
const name = computed(() => store.state.auth.name);
</script>
