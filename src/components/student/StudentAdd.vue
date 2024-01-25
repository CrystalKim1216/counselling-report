<script setup>
import StudentForm from "./StudentForm.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function saveData(data) {
  // this.$store.dispatch("coaches/registerCoach", data);
  console.log(data);

  router.push({ name: "students" });
}
</script>

<template>
  <student-form title="New Student" @save-data="saveData"></student-form>
</template>
