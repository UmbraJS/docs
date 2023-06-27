<script setup lang="ts">
const myriad = useTheme();

function accentShadeArray() {
  const obj = myriad.generated.accents
  if(!obj) return []
  return Object.keys(obj[0].shade);
}

interface ElementObj {
  element: HTMLElement,
  id: string
}

const props = defineProps<{
  selected: string[],
  highlightOffset: {
    x: number,
    y: number
  }
}>()

const elements = ref<ElementObj[]>([])
const highlight = ref({
  x: 200,
  y: 100,
  width: 0,
  height: 0
})

onMounted(() => {
  updateHighlight()
})

watch(() => props.selected, () => {
  updateHighlight()
})

function updateHighlight() {
  let x = 0
  let y = 0
  let width = 0
  let height = 0
  props.selected.forEach(id => {
    const el = elements.value.find(el => el.id === id)
    if(el) {
      const rect = el.element.getBoundingClientRect()
      x = x === 0 ? rect.x : Math.min(x, rect.x)
      y = y === 0 ? rect.y : Math.min(y, rect.y)
      width = rect.width
      height += rect.height
    }
  })

  highlight.value = {
    x: x - props.highlightOffset.x,
    y: y - props.highlightOffset.y,
    width,
    height
  }
}
</script>

<template>
  <div class="highlight" />
  <div class="range">
    <h3>Brand</h3>
    <div class="accents">
      <ColorBox
        color="accent"
        @mounted="el => {if(el) elements.push({
          element: el,
          id: 'ac'
        })}"
      />
      <ColorBox
        v-for="shade in accentShadeArray()"
        :key="shade"
        :color="'accent-' + shade"
        @mounted="el => {if(el) elements.push({
          element: el,
          id: 'ac-' + shade
        })}"
      />
      <ColorBox 
        color="contrast" 
        @mounted="el => {if(el) elements.push({
          element: el,
          id: 'co'
        })}"
      />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.highlight {
  position: absolute;
  left: calc(v-bind('highlight.x') * 1px);
  top: calc(v-bind('highlight.y') * 1px);

  min-width: 2px;
  min-height: 2px;
  height: calc(v-bind('highlight.height') * 1px);
  width: calc(v-bind('highlight.width') * 1px);

  border-radius: var(--radius);
  outline: solid 4px var(--accent);

  transition: .2s ease-in-out;
}

.range {
  display: grid;
  p {
    white-space: nowrap;
    word-spacing: var(--space-xs);
  }
  h3 {
    font-weight: bold;
    margin-bottom: var(--space-s);
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
}

.range .foreground,
.range .accents {
  flex-direction: column-reverse;
}

.range .background .colorbox:nth-of-type(1) .square,
.range .accents .colorbox:nth-last-of-type(1) .square  {
  border-top-right-radius: var(--radius);
  border-top-left-radius: var(--radius);
}

.range .foreground .colorbox:nth-of-type(1) .square,
.range .accents .colorbox:nth-of-type(1) .square {
  border-bottom-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}
</style>