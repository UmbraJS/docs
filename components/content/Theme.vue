<script setup>
import { DyePicker } from '@myriadjs/dye';
import "@myriadjs/dye/dist/style.css"

const theme = useTheme()

function handleChange(color, name) {
  const hexColor = color.value.toHexString()
  theme.setScheme({[name]: name === "accents"
    ? [hexColor]
    : hexColor
  })
}

//const readability = ref(0)
const readability = computed({
  get: () => theme.settings.readability,
  set: (value) => theme.setThemeSettings({readability: value})
})
</script>

<template>
  <div class="theme">
    <div class="controls">
      <h1>Minimum Readability: {{ theme.settings.readability }}</h1>
      <Slider v-model="readability" />
    </div>

    <h1>Colors</h1>
    <div class="picker">
      <DyePicker
        :default="theme.scheme.background"
        @change="(color) => handleChange(color, 'background')"
      />
      <p>Background</p>
    </div>

    <div class="picker">
      <DyePicker
        :default="theme.scheme.foreground"
        @change="(color) => handleChange(color, 'foreground')"
      />
      <p>Foreground</p>
    </div>

    <div class="picker">
      <DyePicker
        :default="theme.scheme.accents[0]"
        @change="(color) => handleChange(color, 'accents')"
      />
      <p>Accent</p>
    </div>

  </div>
</template>

<style scoped lang="scss">
.controls {
  display: flex;
  flex-direction: column;
  gap: var(--space);
}

.theme {
  display: flex;
  flex-direction: column;
  gap: var(--space);

  border-radius: var(--radius);
  padding: var(--space-xl);
  background: var(--background-10);
  margin-bottom: var(--space-xl);
}

.theme .picker {
  display: flex;
  gap: var(--space);
  align-items: center;
  & > .dyepicker-wrapper {
    border: 1px solid var(--background-10);
    border-radius: var(--radius);
    overflow: hidden;
    height: 300px;
  }
}
</style>