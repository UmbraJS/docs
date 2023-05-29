<script setup lang="ts">
const value = defineModel<number>()
</script>

<template>
  <input 
    v-model="value"
    class="SliderInput"
    type="range"
  >
</template>

<style lang="scss">
/* The slider itself */
input.SliderInput {
  cursor: pointer;
  --tumbSize: var(--size, 25px);
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%;
  height: var(--tumbSize);
  background: var(--foreground-20);
  outline: none;
  opacity: 1;
  border-radius: var(--radius);
}

/* Mouse-over effects */
input.SliderInput:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

input.SliderInput:focus {
  outline: var(--border-focus)
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
input.SliderInput::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  height: var(--tumbSize); /* Set a specific slider handle width */
  aspect-ratio: 1/1;
  border-radius: calc(var(--radius) * 2);
  background: var(--foreground); /* Green background */
  cursor: pointer; /* Cursor on hover */
}
</style>