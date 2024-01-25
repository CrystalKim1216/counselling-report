<script setup>
import { ref, defineEmits } from "vue";

import StudentItem from "./StudentItem.vue";

const props = defineProps({
  students: Object,
});

const selectedId = ref("");

const emit = defineEmits(["list-counsels", "show-details"]);

const selectStudent = (id) => {
  selectedId.value = id;
  emit("list-counsels", id);
};

const showStudent = (id) => {
  emit("show-details", id);
};
</script>
<!-- @list-counsels="$emit('list-counsels', $event)" -->

<template>
  <ul>
    <student-item
      v-for="student in props.students"
      :key="student.id"
      :student-name="student.name"
      :id="student.id"
      @list-counsels="selectStudent"
      @show-details="showStudent"
      :class="{ selected: student.id === selectedId }"
    ></student-item>
  </ul>
</template>

<style scoped>
.selected {
  border: 1px solid var(--color-nav2);
  background-color: var(--color-nav-soft);
  transition: all 0.3s ease-in;
}
</style>
