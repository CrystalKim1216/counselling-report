<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const date = route.params.date;
const displayDate =
  date.substring(0, 4) + "/" + date.substring(4, 6) + "/" + date.substring(6);

const selectedName = ref({ val: "0", isValid: true });
const content = ref({ val: "", isValid: true });

let formIsValid = true;

const props = defineProps({
  students: Object,
});

function clearNameValidity() {
  selectedName.value.isValid = true;
}

function clearContentValidity() {
  content.value.isValid = true;
}

function validateForm() {
  formIsValid = true;
  if (selectedName.value.val === "0") {
    selectedName.value.isValid = false;
    formIsValid = false;
  }
  if (content.value.val === "") {
    content.value.isValid = false;
    formIsValid = false;
  }
}

function submitForm() {
  validateForm();

  if (!formIsValid) return;

  const formData = {
    name: selectedName.value.val,
    content: content.value.val,
  };

  console.log(formData);

  // this.$emit("save-data", formData);
}
</script>

<template>
  <base-card>
    <h3>{{ displayDate }}</h3>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !selectedName.isValid }">
        <label for="name">Name</label>
        <select v-model="selectedName.val" @blur="clearNameValidity">
          <option disabled value="0">Please Select</option>
          <option
            v-for="student in props.students"
            :key="student.id"
            :value="student.id"
          >
            {{ `${student.id}. ${student.name}` }}
          </option>
        </select>
        <p v-if="!selectedName.isValid">Please select name.</p>
      </div>
      <div class="form-control">
        <label for="content">Content</label>
        <textarea
          id="content"
          rows="7"
          v-model="content.val"
          @blur="clearContentValidity"
        ></textarea>
        <p v-if="!content.isValid">Content must not be empty.</p>
      </div>
      <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
      <div class="button-wrapper">
        <base-button>REGISTER</base-button>
      </div>
    </form>
  </base-card>
</template>

<style scoped>
form {
  width: 100%;
  min-width: 500px;
}

h3 {
  margin-top: 5px;
}
.button-wrapper {
  display: flex;
}

.form-control {
  margin: 1rem 0;
}

label {
  display: block;
  font-weight: bold;
  color: var(--color-border);
  margin-bottom: 0.3rem;
}

select {
  margin-left: 5px;
  padding: 5px;
}

textarea {
  display: block;
  height: auto;
  width: 98%;
  margin: auto;
}

.invalid label {
  color: var(--color-button);
}
.invalid input,
.invalid textarea {
  border: 1px solid var(--color-button);
}
p {
  color: var(--color-button);
  margin-top: 5px;
  margin-left: 10px;
}
</style>
