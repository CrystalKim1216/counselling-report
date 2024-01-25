<script setup>
import CounsellingList from "../components/counselling/CounsellingList.vue";

const todayDate = new Date();
const year = todayDate.getFullYear().toString();
const month = (todayDate.getMonth() + 1).toString().padStart(2, "0");
const day = todayDate.getDate().toString();
const paramDate = year + month + day;
</script>

<template>
  <div class="title">
    <h2>Counselling Report</h2>
    <router-link
      :to="{
        name: 'counselling.day.add',
        params: { date: paramDate },
      }"
    >
      <font-awesome-icon icon="fa-regular fa-pen-to-square" />
    </router-link>
  </div>
  <CounsellingList :student="{ id: null, name: null }" />
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
}
.title svg {
  font-size: 30px;
  margin-left: 15px;
  color: var(--color-nav2);
  transition: all 0.1s ease-in-out;
}
.title svg:hover {
  color: var(--color-button);
  cursor: pointer;
}
</style>
