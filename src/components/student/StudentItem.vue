<script setup>
import { defineEmits } from "vue";

const props = defineProps({
  id: Number,
  studentName: String,
});

const emit = defineEmits(["list-counsels", "show-details"]);

const viewCouncels = () => {
  emit("list-counsels", props.id);
};
const viewDetails = () => {
  emit("show-details", props.id);
};
</script>

<template>
  <li>
    <div class="name-container">
      <h3 @click="viewDetails">{{ `${props.id}. ${props.studentName}` }}</h3>
      <section>
        <font-awesome-icon icon="fa-regular fa-pen-to-square" />
        <font-awesome-icon
          icon="fa-solid fa-angles-right"
          @click="viewCouncels"
        />
      </section>
    </div>
  </li>
</template>

<style scoped>
li {
  min-width: 200px;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid #ccc;
  border-radius: 5px;
}

.name-container {
  display: flex;
  justify-content: space-between;
}

.name-container section {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name-container svg {
  font-size: 20px;
}
.name-container h3:hover,
.name-container svg:hover {
  cursor: pointer;
  color: var(--color-nav2);
}
</style>
