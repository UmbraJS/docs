<script setup>
import { DyePicker } from '@myriadjs/dye';
import "@myriadjs/dye/dist/style.css"

const theme = useTheme()
const myriad = theme.useMyriad


function handleChange(color, name) {
  const hexColor = color.value.toHexString()
  theme.setScheme({[name]: name === "accents"
    ? [hexColor]
    : hexColor
  }).attach()
}

const readability = computed({
  get: () => theme.settings.readability,
  set: (value) => theme.setThemeSettings({readability: value}).attach()
})

function assessReadability(readability) {
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

    <p>lol: {{ myriad.settings.readability }}</p>

    <div class="toggle">
      <h2>Theme is: {{ myriad.computed.isDark() ? "dark" : "light" }}</h2>
      <Toggle 
        :value="myriad.computed.isDark()"
        @change="() => myriad.computed.inverse().attach()"
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

    <!-- <h1>Colors</h1>
    <div class="picker">
      <DyePicker
        :default="myriad.computed.colors.background.color"
        @change="(color) => handleChange(color, 'background')"
      />
      <p>Background</p>
    </div>

    <div class="picker">
      <DyePicker
        :default="myriad.computed.colors.foreground.color"
        @change="(color) => handleChange(color, 'foreground')"
      />
      <p>Foreground</p>
    </div>

    <div class="picker">
      <DyePicker
        :default="myriad.computed.colors.accents[0].color"
        @change="(color) => handleChange(color, 'accents')"
      />
      <p>Accent</p>
    </div> -->
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
</style>