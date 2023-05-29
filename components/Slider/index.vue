<script setup>
const slider = ref(50)

const percentage = computed(() => {
  return `${slider.value}%`
})
</script>

<template>
  <div class="slider">
    <p>{{ slider }}</p>
    <SliderInput
      v-model="slider"
      min="0" 
      max="100" 
    />
    <div class="track">
      <div class="range">
        <div class="thumb" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider .track {
  display: flex;
  align-items: center;

  //padding: 0px calc(var(--padding) / 2);
  height: var(--size);
  background: var(--background-20);
  border-radius: var(--radius);
}

.slider:has(input:focus) .track {
  outline: var(--border-focus);
}

.slider .track .range {
  --offset: calc(var(--size) - v-bind(percentage));
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(--foreground-20);
  width: calc(v-bind(percentage));
  //min-width: var(--size);
  height: 100%;
  border-radius: var(--radius);
  //border-top-left-radius: var(--radius);
  //border-bottom-left-radius: var(--radius);
}

.slider .track .thumb {
  --offset: calc(var(--size) - v-bind(percentage));
  //opacity: 0.4;
  height: 100%;
  aspect-ratio: 1/1;
  background: var(--foreground);
  transform: translateX(calc(var(--size) - v-bind(percentage)));
  cursor: pointer;

  border-radius: var(--radius);
  //border-top-right-radius: var(--radius);
  //border-bottom-right-radius: var(--radius);
}

.slider {
  --size: var(--block, 25px);
  --padding: var(--space-xs);
  --inner: calc(var(--size) - var(--padding));
  width: 100%;
  min-height: var(--size);
}
</style>