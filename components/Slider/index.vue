<script setup>
// const { min = 0, max = 100 } = defineProps<{
//   min: number,
//   max: number
// }>()

const slider = ref(50)
</script>

<template>
  <div class="slider">
    <SliderInput
      v-model="slider"
      :min="0" 
      :max="100"
    />
    <div class="track">
      <SliderRange :percentage="slider">
        <SliderThumb :offset="percentage" />
      </SliderRange>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  --size: var(--block, 25px);
  --trackSize: calc(var(--size) / 2);
  --padding: var(--space-xs);
  --inner: calc(var(--size) - var(--padding));

  width: 100%;
  min-height: var(--size);
}

.slider::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: var(--foreground-20);
  border-radius: var(--radius);
}

.slider .SliderInput {
  position: absolute;
  z-index: 1;
  width: 100%;
  opacity: 0;
}

.slider .track {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  pointer-events: none;

  //padding: 0px calc(var(--padding) / 2);
  height: calc(var(--size) / 1);
  width: 100%;
  //background: var(--background-20);
  //border-radius: var(--radius);
}

/* .slider:has(input:focus) .track {
  outline: var(--border-focus);
  border-radius: 50px;
} */
</style>