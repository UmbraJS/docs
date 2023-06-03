<script setup lang="ts">
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function onInput(e: any) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <input 
    class="SliderInput"
    type="range"
    :value="modelValue" 
    @input="onInput"
  >
</template>

<style lang="scss" scoped>
p {
  position: absolute;
  font-size: 12rem;
}

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
  border-radius: var(--radius);
  //opacity: 0.2;
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