<script setup lang="ts">
const props = defineProps({
  value: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['change'])

const pressed = ref(props.value)

function handleChange() {
  pressed.value = !pressed.value
  emit('change', pressed.value)
}
</script>

<template>
  <button 
    class="toggle" 
    :class="{pressed}"
    :aria-pressed="pressed"
    @click="handleChange"
  >
    <div class="knob">
      <Icon v-if="pressed" name="material-symbols:light-mode" />
      <Icon v-else name="material-symbols:mode-night" />
    </div>
  </button>
</template>

<style scoped lang="scss">
button.toggle {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: var(--space-s, 10px);
  background: var(--foreground-20);
  border-radius: var(--radius);

  height: var(--block, 40px);
}

button.toggle.pressed {
  background: var(--foreground-10);
  svg {
    color: var(--background);
  }
}

button.toggle .knob {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>