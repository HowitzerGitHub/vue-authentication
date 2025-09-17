<script setup>
import Navbar from "@/components/navbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div><RouterView></RouterView></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
