<script setup lang="ts">
const props = defineProps(['modelValue', 'min', 'max'])
const emit = defineEmits(['update:modelValue'])

function onInput(value: any) {
  emit('update:modelValue', value)
}

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100
})
</script>

<template>
  <div class="slider">
    <SliderInput
      :min="min" 
      :max="max"
      :model-value="modelValue"
      @update:model-value="newValue => onInput(newValue)"
    />
    <div class="track">
      <SliderRange :percentage="percentage">
        <SliderThumb />
      </SliderRange>
    </div>
  </div>
</template>

<style lang="scss">
.slider {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  --size: var(--block, 25px);
  --trackSize: calc(var(--size) / 4);
  --trackColor: var(--accent-20);
  --rangeColor: var(--accent-10);
  --thumbColor: var(--accent);

  --padding: var(--space-xs);
  --inner: calc(var(--size) - var(--padding));

  width: 100%;
  min-height: var(--size);
}

.slider::after {
  content: "";
  position: absolute;
  z-index: 0;
  width: 100%;
  height: var(--trackSize);
  background-color: var(--trackColor);
  border-radius: var(--radius);
}

.slider .SliderInput {
  position: absolute;
  z-index: 10;
  width: 100%;
  opacity: 0;
}

.slider .track {
  position: relative;
  display: flex;
  align-items: center;
  pointer-events: none;

  height: calc(var(--size) / 1);
  width: 100%;
}
</style>