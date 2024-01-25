<script setup>
defineProps({
  student: Object,
});
</script>

<template>
  <div>
    <section>
      <h3>Address</h3>
      <p v-if="student.address">{{ student.address }}</p>
      <p v-else>-</p>
    </section>
    <section>
      <h3>Phone</h3>
      <p v-if="student.phone">{{ student.phone }}</p>
      <p v-else>-</p>
    </section>
    <section>
      <h3>Family</h3>
      <p v-if="student.family">{{ student.family }}</p>
      <p v-else>-</p>
    </section>
    <section>
      <h3>Memo</h3>
      <p v-if="student.memo">{{ student.memo }}</p>
      <p v-else>-</p>
    </section>
  </div>
</template>

<style scoped>
div {
  margin-top: 0.5rem;
}

section {
  margin: 0 1rem 1rem 1rem;
}

section p {
  margin-left: 0.5rem;
  word-wrap: break-word;
}
</style>
