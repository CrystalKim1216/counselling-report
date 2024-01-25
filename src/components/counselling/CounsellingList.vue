<script setup>
import { computed } from "vue";

import CounsellingItem from "./CounsellingItem.vue";
import COUNSEL_DATA from "../../assets/data/counsel.js";

const counsels = COUNSEL_DATA;

const props = defineProps({
  student: Object,
});

// const enteredSearchTerm = ref('');
// const activeSearchTerm = ref("");

// const availableProjects = computed(() => {
//   if (activeSearchTerm.value) {
//     return props.student.projects.filter((prj) =>
//       prj.title.includes(activeSearchTerm.value)
//     );
//   }
//   return props.student.projects;
// });

const showNameTitle = computed(() => {
  if (props.student.id) return true;
  return false;
});

const selectedCounselList = computed(() => {
  if (!props.student.id) return counsels;
  return counsels.filter((counsel) => counsel.studentId === props.student.id);
});

const hasCounsels = computed(() => {
  return selectedCounselList.value.length > 0;
});
</script>

<template>
  <base-container class="container">
    <ul v-if="hasCounsels">
      <h3 v-if="showNameTitle">{{ props.student.name }}</h3>
      <counselling-item
        v-for="counsel in selectedCounselList"
        :key="counsel.id"
        :counselling-date="counsel.date"
        :student-name="counsel.studentName"
        :student-id="counsel.studentId"
        :description="counsel.description"
        :showName="!showNameTitle"
      ></counselling-item>
    </ul>
    <h3 v-else>No counsels found.</h3>
  </base-container>
</template>

<style scoped>
.container {
  border: 2px solid var(--color-font-soft);
  padding: 0.5rem;
  min-width: 500px;
}
</style>
