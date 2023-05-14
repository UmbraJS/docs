<script setup lang="ts">
</script>

<template>
  <div class="intro">
    <div class="col">
      <h1>Foreground & Background</h1>
      <p>
        <span> All shapes exist only at the mercy of this color range. </span>
        A simple relationship between two color choices. 
        The contrast between them and a potental range of auto generated 
        colors which make up the appropriate color space of the 
        theme with very few inputs.
      </p>
      <Skeleton class="range" />
    </div>
    <div class="col">
      <h1>Accent</h1>
      <p>
        Describes an aditional variant of the foreground color used sparringly 
        to create drama in the theme. This color is resposible for 
        defining the tone and feel of the theme.
      </p>
      <Skeleton class="brand" />
    </div>
  </div>
</template>

<style lang="scss">
.intro {
  --sett: 3s ease-in-out 0.2s infinite alternate;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-xl);
  border-radius: var(--radius);
  padding: var(--space-xl);
  background: var(--background-10);
  margin-bottom: var(--space-xl);
}

.intro .col {
  display: flex;
  flex-direction: column;
  gap: var(--space);
  max-width: min-content;
}

.brand {
  span.accent, .chip.accent {
    background-color: var(--accent) !important;
    animation: accent var(--sett);
  }
}

@keyframes accent {
  0% {
    background-color: var(--background);
  }
  100% {
    background-color: var(--accent);
  }
}

.range { 
  .header {
    animation: background-20 var(--sett);
  }

  .header .logo {
    animation: foreground var(--sett);
  }

  .header .chip {
    animation: foreground-10 var(--sett);
  }

  h1 {
    color: transparent !important;
    animation: foreground var(--sett);
  }

  p.caption {
    animation: foreground-20 var(--sett);
  }

  p {
    animation: foreground var(--sett);
  }
}

@keyframes foreground {
  0% {
    background: var(--background);
  }
  100% {
    background: var(--foreground);
  }
}

@keyframes foreground-10 {
  0% {
    background: var(--background);
  }
  100% {
    background: var(--foreground-10);
  }
}

@keyframes foreground-20 {
  0% {
    background: var(--background);
  }
  100% {
    background: var(--foreground-20);
  }
}

@keyframes background-20 {
  0% {
    background: var(--background);
  }
  100% {
    background: var(--background-20);
  }
}
</style>