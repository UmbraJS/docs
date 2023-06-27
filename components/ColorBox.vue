<script setup lang="ts">
const props = defineProps<{
  color: string
}>()

const emit = defineEmits<{
  mounted: [el: HTMLElement | null] // named tuple syntax
}>()

const squareRef = ref<HTMLElement | null>(null)

onMounted(() => {
  emit("mounted", squareRef.value)
})

const subdue = computed(() => {
  return props.color.includes("-")
})

const colorToken = computed(() => {
  return props.color === "contrast" 
    ? "accent-contrast" 
    : props.color
})
</script>

<template>
  <div class="colorbox" :class="{subdue}">
    <div 
      ref="squareRef" 
      class="square"
      :style="{background: `var(--${colorToken})`}" 
    />
    <p>- {{ color }}</p>
  </div>
</template>

<style scoped lang="scss">
.colorbox {
  display: flex;
  gap: var(--space-s);
}

.range .square {
  width: 30px;
  height: 30px;
  background-color: var(--accent);
  display: flex;
  justify-content: center;
}

.colorbox p {
  text-transform: capitalize;
}

.colorbox.subdue p {
  color: var(--foreground-10) !important;
}

.colorbox:not(.subdue) p {
  font-weight: normal;
}
</style>