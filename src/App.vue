<script setup>
import { RouterView } from "vue-router";
import TheNavigation from "./components/layout/TheNavigation.vue";
</script>

<template>
  <div class="container">
    <TheNavigation />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
}

main {
  margin-left: 200px;
  padding: 50px;
  width: 100%;
  height: 100%;
}
</style>
