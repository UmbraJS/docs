<script setup>
import { myriad } from "@myriadjs/core";
import { DyePicker } from '@myriadjs/dye';
import "@myriadjs/dye/dist/style.css"

const theme = useTheme()

function handleChange(color, name) {
  const test = {
    ...theme.scheme,
    [name]: name === "accents" ? [color.value] :color.value
  }
  theme.setScheme(test)
  myriad(test).attach()
}
</script>

<template>
  <div class="theme">
    <div class="picker">
      <h1>Background</h1>
      <DyePicker
        :default="theme.scheme.background"
        @change="(color) => handleChange(color, 'background')"
      />
    </div>

    <div class="picker">
      <h1>Foreground</h1>
      <DyePicker
        :default="theme.scheme.foreground"
        @change="(color) => handleChange(color, 'foreground')"
      />
    </div>

    <div class="picker">
      <h1>Accent</h1>
      <DyePicker
        :default="theme.scheme.accents[0]"
        @change="(color) => handleChange(color, 'accents')"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.theme {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: var(--radius);
  padding: var(--space-xl);
  background: var(--background-10);
  margin-bottom: var(--space-xl);
}

.theme .picker {
  display: flex;
  flex-direction: column;
  gap: var(--space);
  & > .dyepicker-wrapper {
    border: 1px solid var(--background-10);
    border-radius: var(--radius);
    overflow: hidden;
    height: 300px;
  }
}
</style>