<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <div class="range">
      <div class="background">
        <div class="square" style="background: var(--background)" />
        <p>- background</p>
        <div class="square" style="background: var(--background-10)" />
        <p>- background-10</p>
        <div class="square" style="background: var(--background-20)" />
        <p>- background-20</p>
      </div>
      <div class="foreground">
        <div class="square" style="background: var(--foreground-20)" />
        <p>- foreground-20</p>
        <div class="square" style="background: var(--foreground-10)" />
        <p>- foreground-10</p>
        <div class="square" style="background: var(--foreground)" />
        <p>- foreground</p>
      </div>
    </div>
    <div class="range">
      <div class="background">
        <div class="square" style="background: var(--background)" />
        <p></p>
        <div class="square" style="background: var(--background-10)" />
        <p></p>
        <div class="square" style="background: var(--background-20)" />
        <p></p>
      </div>
      <div class="accents">
        <div class="square" style="background: var(--accent-20)" />
        <p>- accent-20</p>
        <div class="square" style="background: var(--accent-10)" />
        <p>- accent-10</p>
        <div class="square" style="background: var(--accent)" />
        <p>- accent</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  border-radius: var(--radius);
  padding: 1rem;
  background: var(--background-10);
  margin-bottom: var(--space-xl);
}

.range {
  display: grid;
  overflow: hidden;
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

.range .square {
  width: 30px;
  height: 30px;
  background-color: var(--accent);
  display: flex;
  justify-content: center;
}
</style>