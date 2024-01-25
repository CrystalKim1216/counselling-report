<script setup>
import { useRouter, useRoute } from "vue-router";

import StudentForm from "./StudentForm.vue";
import STUDENTS_DATA from "../../assets/data/student.js";

const route = useRoute();
const id = route.params.id;
const student = STUDENTS_DATA.find((student) => student.id.toString() === id);

const router = useRouter();
function saveData(data) {
  // this.$store.dispatch("coaches/registerCoach", data);
  console.log(data);

  router.push({ name: "students" });
}
</script>

<template>
  <student-form
    title="Edit Student"
    @save-data="saveData"
    :student="student"
  ></student-form>
</template>
