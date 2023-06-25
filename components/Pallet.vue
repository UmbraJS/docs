<script setup lang="ts">
import { myriad, MyriadScheme } from "@myriadjs/core";

const props = defineProps<{
  theme: {
    name: string,
    scheme: MyriadScheme,
    settings: {
      readability: number
    }
  }
}>()

const palletRef = ref<HTMLElement | null>(null)

onMounted(() => {
  myriad(props.theme.scheme, props.theme.settings).attach(palletRef.value!)
})
</script>

<template>
  <div
    ref="palletRef"
    class="pallet"
  >
    <div class="shades">
      <div class="box" style="background: var(--background-10)" />
      <div class="box" style="background: var(--background-20)" />
    </div>
    <div class="label">
      <p>{{ theme.name }}</p>
    </div>
    <div class="accent">
      <div class="box" style="background: var(--accent-20)" />
      <div class="box" style="background: var(--accent-10)" />
      <div class="box" style="background: var(--accent)">
        <p>A</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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