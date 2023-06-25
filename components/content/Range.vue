<script setup lang="ts">
const myriad = useTheme();

function shadeArray(color: "foreground" | "background") {
  const obj = myriad.generated[color]
  if(!obj) return []
  return Object.keys(obj.shade);
}

function accentShadeArray() {
  const obj = myriad.generated.accents
  if(!obj) return []
  return Object.keys(obj[0].shade);
}
</script>

<template>
  <div class="range-container">
    <h1>Range</h1>

    <p>
      <span> All shapes exist only at the mercy of this color range. </span>
      A simple relationship between two color choices. 
      The contrast between them defines a potental range of auto generated 
      colors which make up the appropriate color space of the 
      theme with very few inputs.
    </p>

    <div class="range-wrapper">
      <div class="range">
        <div class="background">
          <ColorBox color="background" />
          <ColorBox 
            v-for="shade in shadeArray('background')" 
            :key="shade" 
            :color="'background-' + shade" 
          />
        </div>
        <div class="foreground">
          <ColorBox color="foreground" />
          <ColorBox 
            v-for="shade in shadeArray('foreground')" 
            :key="shade" 
            :color="'foreground-' + shade"
          />
        </div>
      </div>
      <div class="range">
        <div class="background">
          <ColorBox color="background" />
          <ColorBox 
            v-for="shade in shadeArray('background')" 
            :key="shade" 
            :color="'background-' + shade"
          />
        </div>
        <div class="accents">
          <ColorBox color="accent" />
          <ColorBox 
            v-for="shade in accentShadeArray()" 
            :key="shade" 
            :color="'accent-' + shade"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.range-container {
  display: flex;
  gap: var(--space-s);
  flex-direction: column;

  border-radius: var(--radius);
  padding: var(--space-xl);
  background: var(--background-10);
  margin-bottom: var(--space-xl);
}

.range-wrapper {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
}

.range {
  display: grid;
  p {
    white-space: nowrap;
    word-spacing: var(--space-xs);
  }
}

.range .background {
  border-bottom: solid 2px var(--foreground-20);
}

.range .background,
.range .foreground,
.range .accents {
  display: flex;
  flex-direction: column;
  column-gap: var(--space-s);
  p {
    color: var(--foreground-20) !important;
  }
}

.range .foreground,
.range .accents {
  flex-direction: column-reverse;
}

.range .background p:nth-of-type(1),
.range .foreground p:nth-last-of-type(1),
.range .accents p:nth-last-of-type(1) {
  color: var(--foreground) !important;
}

.range .background .colorbox:nth-of-type(1) .square {
  border-top-right-radius: var(--radius);
  border-top-left-radius: var(--radius);
}

.range .foreground .colorbox:nth-of-type(1) .square,
.range .accents .colorbox:nth-of-type(1) .square {
  border-bottom-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}
</style>