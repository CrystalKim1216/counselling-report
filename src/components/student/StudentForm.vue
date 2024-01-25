<script setup>
import { ref, defineEmits } from "vue";

const props = defineProps({
  title: String,
  student: Object,
});

const emit = defineEmits(["save-data"]);

const index = ref({ val: "", isValid: true });
const name = ref({ val: "", isValid: true });
const address = ref(props.student && props.student.address);
const phone = ref(props.student && props.student.phone);
const family = ref(props.student && props.student.family);
const memo = ref(props.student && props.student.memo);
let formIsValid = true;

function clearValidity(input) {
  this[input].isValid = true;
}

function validateForm() {
  formIsValid = true;
  if (index.value.val === "") {
    index.value.isValid = false;
    formIsValid = false;
  }
  if (name.value.val === "") {
    name.value.isValid = false;
    formIsValid = false;
  }
}

function submitForm() {
  if (!props.student) {
    validateForm();
    if (!formIsValid) return;
  }

  const formData = {
    index: props.student ? props.student.id : index.value.val,
    name: props.student ? props.student.name : name.value.val,
    phone: phone.value,
    address: address.value,
    family: family.value,
    memo: memo.value,
  };

  emit("save-data", formData);
}
</script>

<template>
  <base-card>
    <h2>{{ title }}</h2>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !index.isValid }">
        <label for="index">No.</label>
        <input
          v-if="!student"
          type="text"
          id="index"
          v-model.trim="index.val"
          @blur="clearValidity('index')"
        />
        <h3 v-else>{{ student.id }}</h3>
        <p v-if="!index.isValid">Number must not be empty.</p>
      </div>
      <div class="form-control" :class="{ invalid: !name.isValid }">
        <label for="name">Name</label>
        <input
          v-if="!student"
          type="text"
          id="name"
          v-model.trim="name.val"
          @blur="clearValidity('name')"
        />
        <h3 v-else>{{ student.name }}</h3>
        <p v-if="!name.isValid">Name must not be empty.</p>
      </div>
      <div class="form-control">
        <label for="address">Address</label>
        <input type="text" id="address" v-model.trim="address" />
      </div>
      <div class="form-control">
        <label for="phone">Phone</label>
        <input type="text" id="phone" v-model.trim="phone" />
      </div>
      <div class="form-control">
        <label for="family">Family</label>
        <input type="text" id="family" v-model.trim="family" />
      </div>
      <div class="form-control">
        <label for="memo">Memo</label>
        <textarea id="memo" rows="5" v-model="memo"></textarea>
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

h3 {
  margin-left: 0.5rem;
}

input,
textarea {
  display: block;
  width: 98%;
  margin: auto;
}

textarea {
  height: auto;
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
