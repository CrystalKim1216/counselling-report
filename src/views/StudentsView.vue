<script setup>
import { ref } from "vue";

import StudentsList from "../components/student/StudentsList.vue";
import StudentDetail from "../components/student/StudentDetail.vue";
import CounsellingList from "../components/counselling/CounsellingList.vue";

import STUDENTS_DATA from "../assets/data/student.js";

const students = STUDENTS_DATA;

const selectedStudent = ref({ id: null, name: null });
const modalStudent = ref(null);

const selectStudent = (id) => {
  selectedStudent.value.id = id;
  selectedStudent.value.name = students.find(
    (student) => student.id === id
  ).name;
};

const showDialog = ref(false);
const showStudent = (id) => {
  modalStudent.value = students.find((student) => student.id === id);
  showDialog.value = true;
};
// const addStudent = (day) => {
//   console.log(day);
//   showDialog.value = true;
// };
const closeModal = () => {
  showDialog.value = false;
};
</script>

<template>
  <!-- modal : student info -->
  <base-dialog :show="showDialog" @close="closeModal">
    <!-- modal header -->
    <template v-slot:header>
      <div class="modal-title">
        <h2>
          {{ modalStudent && `${modalStudent.id}. ${modalStudent.name}` }}
        </h2>
        <router-link
          :to="{ name: 'student.edit', params: { id: modalStudent.id } }"
        >
          <font-awesome-icon icon="fa-solid fa-gear" />
        </router-link>
      </div>
    </template>
    <!-- modal content -->
    <student-detail :student="modalStudent"></student-detail>
  </base-dialog>

  <!-- content -->
  <div class="title">
    <h2>Students</h2>
    <router-link :to="{ name: 'student.add' }">
      <font-awesome-icon icon="fa-solid fa-user-plus" />
    </router-link>
  </div>
  <base-container class="section">
    <!-- student list -->
    <students-list
      :students="students"
      :selected="selectedStudent"
      @list-counsels="selectStudent"
      @show-details="showStudent"
    ></students-list>
    <!-- student counsel list -->
    <counselling-list :student="selectedStudent"></counselling-list>
  </base-container>
</template>

<style scoped>
.modal-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 0.5rem;
}
.modal-title svg {
  font-size: 1.5rem;
}
.title {
  display: flex;
  align-items: center;
}
.title svg {
  margin-left: 15px;
  font-size: 25px;
  color: var(--color-nav2);
  transition: all 0.1s ease-in-out;
}
.title svg:hover {
  color: var(--color-button);
}

.section {
  display: flex;
}
</style>
