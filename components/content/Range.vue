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

interface ElementObj {
  element: HTMLElement,
  id: string
}

const containerRef = ref<HTMLElement | null>(null)
const conatinerRect = ref<DOMRect | undefined | null>(null)

const elements = ref<ElementObj[]>([])
const selected = ref<string[]>(['bg', 'bg-10'])

const highlight = ref({
  x: 200,
  y: 100,
  width: 0,
  height: 0
})

function updateContainer() {
  conatinerRect.value = containerRef.value?.getBoundingClientRect()
}

onMounted(() => {
  updateContainer()
  updateHighlight()
  if(!document) return
  document.addEventListener('resize', () => {
    updateContainer()
    //updateHighlight()
  })
})

watch(selected, () => {
  updateHighlight()
})

function updateHighlight() {
  const containerRect = containerRef.value?.getBoundingClientRect()

  let x = 0
  let y = 0
  let width = 0
  let height = 0
  selected.value.forEach(id => {
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
    x: x - containerRect!.x,
    y: y - containerRect!.y,
    width,
    height
  }
}

interface AliasedColors {
  colors: string[],
  name: string
}

const aliasedColors = ref<AliasedColors[]>([
  {
    colors: ['bg', 'bg-10', 'co', 'ac-60'],
    name: 'background'
  },
  {
    colors: ['bg-20', 'bg-30', 'ac-50', 'ac-40'],
    name: 'panel background'
  },
  {
    colors: ['bg-30', 'fg-30', 'fg-20', 'ac-20', 'ac-30', 'ac-40'],
    name: 'borders'
  },
  {
    colors: ['ac-30', 'ac-20', 'ac-10', 'ac'],
    name: 'solid backgrounds'
  },
  {
    colors: ['fg-20', 'fg-10', 'fg', 'ac-20', 'ac-10', 'ac'],
    name: 'text & icons'
  }
])

</script>

<template>
  <div 
    ref="containerRef" 
    class="range-container"
    @mousemove="updateContainer"
  >
    <h1>Range</h1>

    <p>
      12 shades split in 3 groups <span> All shapes exist only at the mercy of this color range. </span>
      A simple relationship between two color choices. 
      The contrast between them defines a potental range of auto generated 
      colors which make up the appropriate color space of the 
      theme with very few inputs. Background, foreground, accent.
    </p>

    <div class="someclass">
      <ul class="aliases">
        <li 
          v-for="aliased in aliasedColors"
          :key="aliased.name"
          @mouseover="selected = aliased.colors"
        >
          {{ aliased.name }}
        </li>
      </ul>

      <div class="range-wrapper">
        <BaseRange
          :selected="selected"
          :highlight-offset="{
            x: conatinerRect?.x || 0,
            y: conatinerRect?.y || 0
          }"
        />
        <AccentRange
          :selected="selected"
          :highlight-offset="{
            x: conatinerRect?.x || 0,
            y: conatinerRect?.y || 0
          }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.aliases li {
  font-weight: bold;
  cursor: pointer;
  background: var(--background);
  padding: var(--space-s) var(--space-s);
  border-radius: var(--radius);
  transition: .1s;
}

.aliases li:hover {
  background: var(--accent-50);
  color: var(--accent);
}

.aliases li:active {
  background: var(--accent-40);
  color: var(--accent-contrast);
}


.aliases {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.someclass {
  display: grid;
  gap: var(--space-xl);
  grid-template-columns: 1fr 1fr;
}

.highlight {
  position: absolute;
  left: calc(v-bind('highlight.x') * 1px);
  top: calc(v-bind('highlight.y') * 1px);

  //background: var(--link-20);
  min-width: 2px;
  min-height: 2px;
  height: calc(v-bind('highlight.height') * 1px);
  width: calc(v-bind('highlight.width') * 1px);

  border-radius: var(--radius);
  //opacity: 0.3;
  outline: solid 4px var(--link);

  transition: .2s ease-in-out;
}

.range-container {
  position: relative;
  display: flex;
  gap: var(--space);
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