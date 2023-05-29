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
</script>

<template>
  <div class="theme">
    <div class="controls" v-if="true">
      <Slider />
    </div>

    <div class="picker">
      <DyePicker
        :default="theme.scheme.background"
        @change="(color) => handleChange(color, 'background')"
      />
      <h1>Background</h1>
    </div>

    <div class="picker">
      <DyePicker
        :default="theme.scheme.foreground"
        @change="(color) => handleChange(color, 'foreground')"
      />
      <h1>Foreground</h1>
    </div>

    <div class="picker">
      <DyePicker
        :default="theme.scheme.accents[0]"
        @change="(color) => handleChange(color, 'accents')"
      />
      <h1>Accent</h1>
    </div>

  </div>
</template>

<style scoped lang="scss">
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