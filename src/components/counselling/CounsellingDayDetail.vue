<script setup>
import CounsellingDayForm from "./CounsellingDayForm.vue";
import STUDENTS_DATA from "../../assets/data/student.js";

const students = STUDENTS_DATA.map((student) => {
  return { id: student.id, name: student.name };
});

const saveData = (data) => {
  console.log(data);
  // this.$store.dispatch("coaches/registerCoach", data);
  this.$router.replace("/");
};
</script>

<template>
  <section>
    <h2>Today's Counselling</h2>
    <counselling-day-form
      @save-data="saveData"
      :students="students"
    ></counselling-day-form>
  </section>
</template>
