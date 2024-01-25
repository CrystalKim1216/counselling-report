<template>
  <div class="button">
    <div class="button__inner-circle"></div>
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
.button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  margin: 10px 10px 15px auto;
  border-radius: 2px;
  border: 2px solid var(--color-button);
  color: var(--color-button);
  text-decoration: none;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.button button {
  color: var(--color-button);
  text-transform: uppercase;
  position: relative;
  transition: all 0.45s ease-Out;
}
.button__inner-circle {
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  background: var(--color-button);
  position: absolute;
  transition: all 0.5s ease-Out;
  top: 20px;
  left: 70px;
}

.button:hover .button__inner-circle {
  width: 200%;
  height: 500%;
  opacity: 1;
  top: -70px;
  left: -70px;
}

.button:hover button {
  letter-spacing: 1px;
  color: var(--color-cream);
}
</style>
