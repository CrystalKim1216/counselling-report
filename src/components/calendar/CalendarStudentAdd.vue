<script setup>
import { ref } from "vue";

defineProps({
  students: Object,
});

const selectedNames = ref([{ name: "0" }]);

function addField(name, fieldType) {
  fieldType.push({ name: "0" });
}
function removeField(index, fieldType) {
  fieldType.splice(index, 1);
}

function submitForm() {
  // if (!formIsValid) return;

  // const formData = {
  //   name: selectedNames.value,
  // };

  const formData = selectedNames.value.map((target) => target.name);
  console.log(formData);

  // this.$emit("save-data", formData);
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div>
      <div
        v-for="(input, index) in selectedNames"
        :key="`nameInput-${index}`"
        class="name-container"
      >
        <select v-model="input.name">
          <option disabled value="0">Please Select</option>
          <option
            v-for="student in students"
            :key="student.id"
            :value="student.id"
          >
            {{ `${student.id}. ${student.name}` }}
          </option>
        </select>
        <section class="icons">
          <div @click="addField(input, selectedNames)">
            <font-awesome-icon icon="fa-solid fa-square-plus" />
          </div>
          <div
            v-show="selectedNames.length > 1"
            @click="removeField(index, selectedNames)"
          >
            <font-awesome-icon icon="fa-solid fa-square-xmark" />
          </div>
        </section>
      </div>
    </div>
    <base-button>OK</base-button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: row;
}
.name-container {
  display: flex;
  align-items: center;
  margin: 0 10px 10px 20px;
}
select {
  width: 150px;
  margin-right: 10px;
}
.icons {
  display: flex;
  align-items: center;
}
.icons svg {
  margin-left: 5px;
  font-size: 30px;
  color: var(--color-font-soft);
}
.icons svg:hover {
  color: var(--color-font);
  cursor: pointer;
}
</style>
