<script setup lang="ts">
// @ts-ignore
import { DyePicker } from '@myriadjs/dye';
import "@myriadjs/dye/dist/style.css"

const theme = useTheme()

function changeForeground(color: any) {
  const hexColor = color.value.toHexString() as string
  theme.setScheme({
    foreground: hexColor
  }).attach()
}

function changeBackground(color: any) {
  const hexColor = color.value.toHexString()
  theme.setScheme({
    background: hexColor
  }).attach()
}

function changeAccent(color: any) {
  const hexColor = color.value.toHexString()
  theme.setScheme({
    accents: [hexColor]
  }).attach()
}

const readability = computed({
  get: () => theme.generated.input.settings.readability || 0,
  set: (value) => theme.setThemeSettings({readability: value}).attach()
})

function assessReadability(readability: number) {
  if (readability >= 0 && readability <= 3) {
    return {
      color: 'color: var(--warning)',
      text: 'bad'
    };
  } else if (readability >= 4 && readability <= 11) {
    return {
      color: 'color: var(--success)',
      text: 'good'
    };
  } else if (readability >= 12 && readability <= 16) {
    return {
      color: 'color: var(--success)',
      text: 'excellent'
    };
  } else {
    return {
      color: 'color: var(--warning)',
      text: 'insane'
    };
  }
} 
</script>

<template>
  <div class="theme">
    <div class="toggle">
      <p>Theme is: {{ theme.isDark ? "dark" : "light" }}</p>
      <Toggle 
        :value="theme.isDark"
        @change="() => theme.inverse().attach()"
      />
    </div>

    <div class="controls">
      <h1>
        Minimum Readability: {{ readability }} 
        <span :style="assessReadability(readability).color">
          {{ assessReadability(readability).text }}
        </span>
      </h1>
      <Slider 
        v-model="readability"
        min="2"
        max="20" 
      />
    </div>

    <h1>Colors</h1>
    <div class="picker">
      <DyePicker
        :default="theme.generated.input.scheme.background || '#090233'"
        @change="(color: any) => changeBackground(color)"
      />
      <p>Background</p>
    </div>

    <div class="picker">
      <DyePicker
        :default="theme.generated.input.scheme.foreground || '#090233'"
        @change="(color: any) => changeForeground(color)"
      />
      <p>Foreground</p>
    </div>

    <div class="picker">
      <DyePicker
        :default="theme.generated.input.scheme.accents?.[0] || '#090233'"
        @change="(color: any) => changeAccent(color)"
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

  h1 {
    line-height: 1.2;
  }
}

.theme .toggle {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-s);
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

.theme .picker p {
  font-weight: bold;
}
</style>