<script setup>
// import { defineProps, defineEmits } from "vue";

defineProps({
  counsellingDate: String,
  studentId: Number,
  studentName: String,
  description: String,
  showName: Boolean,
});

// const emit = defineEmits(["list-projects"]);

// const viewProjects = () => {
//   emit("list-projects", props.id);
// };
</script>

<template>
  <li>
    <div class="name-container">
      <h4>{{ counsellingDate }}</h4>
      <h3 v-if="showName">{{ studentName }}</h3>
      <p>{{ description }}</p>
    </div>
  </li>
</template>

<style scoped>
li {
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid #ccc;
  border-radius: 5px;
}

h3 {
  margin-bottom: 10px;
}
</style>
