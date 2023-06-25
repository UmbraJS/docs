<script setup lang="ts">
const myriad = useTheme();
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
          <ColorBox color="background-10" />
          <ColorBox color="background-20" />
        </div>
        <div class="foreground">
          <ColorBox color="foreground-20" />
          <ColorBox color="foreground-10" />
          <ColorBox color="foreground" />
        </div>
      </div>
      <div class="range">
        <div class="background">
          <ColorBox color="background" />
          <ColorBox color="background-10" />
          <ColorBox color="background-20" />
        </div>
        <div class="accents">
          <ColorBox color="accent-20" />
          <ColorBox color="accent-10" />
          <ColorBox color="accent" />
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
  display: grid;
  column-gap: var(--space-s);
  grid-template-columns: auto 1fr;
  p {
    color: var(--foreground-20) !important;
  }
}

.range .background p:nth-of-type(1),
.range .foreground p:nth-last-of-type(1),
.range .accents p:nth-last-of-type(1) {
  color: var(--foreground) !important;
}

.range .background .square:nth-of-type(1) {
  border-top-right-radius: var(--radius);
  border-top-left-radius: var(--radius);
}

.range .foreground .square:nth-last-of-type(1),
.range .accents .square:nth-last-of-type(1) {
  border-bottom-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}
</style>