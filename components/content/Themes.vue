<script setup lang="ts">
const theme = useTheme()
</script>

<template>
  <div class="themes">
    <h1>Selected theme: {{ theme.active }}</h1>

    <div class="pallets">
      <Pallet
        v-for="t in theme.themes"
        :key="t.name"
        :theme="t"
        :class="{active: theme.active === t.name}"
        @click="() => theme.setScheme(t, t.name).attach()"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.themes {
  display: flex;
  flex-direction: column;
  gap: var(--space);

  border-radius: var(--radius);
  padding: var(--space-xl);
  background: var(--background-10);
  margin-bottom: var(--space-xl);
}

.themes .pallets {
  display: flex;
  gap: var(--space);
}

.themes .pallet {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  background: var(--background);
  border-radius: var(--radius);
  overflow: hidden;
  outline: 1px solid var(--foreground-20);
  width: 12em;
}

.themes .pallet:not(.active) {
  cursor: pointer;
}

.themes .pallet.active {
  outline: 3px solid var(--accent);
}

.themes .label {
  height: 3em;
  padding: 0.7em;
}

.themes .label p {
  font-weight: bold;
}

.themes .shades {
  width: 3em;
  grid-row: span 2;
}

.themes .box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
}

.themes .box p {
  font-weight: bold;
  color: var(--accent-contrast) !important;
}

.themes .accent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: re;
}
</style>