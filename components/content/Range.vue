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

const elements = ref<ElementObj[]>([])
const selected = ref<string[]>(['bg', 'bg-10'])

const highlight = ref({
  x: 200,
  y: 100,
  width: 0,
  height: 0
})

onMounted(() => {
  updateHighlight()
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
</script>

<template>
  <div ref="containerRef" class="range-container">
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
        <li @mouseover="selected = ['bg', 'bg-10']">background</li>
        <li @mouseover="selected = ['bg-20', 'bg-30']">panel background</li>
        <li @mouseover="selected = ['bg-30', 'fg-30', 'fg-20']">borders</li>
        <li @mouseover="selected = ['ac-30', 'ac-20', 'ac-10', 'ac']">solid backgrounds</li>
        <li @mouseover="selected = ['fg-20', 'fg-10', 'fg']">text & icons</li>
      </ul>

      <div class="range-wrapper">
        <div class="highlight" />
        <div class="range">
          <h3>Base</h3>
          <div class="background">
            <ColorBox
              color="background"
              @mounted="el => {if(el) elements.push({
                element: el,
                id: 'bg'
              })}"
            />
            <ColorBox
              v-for="shade in shadeArray('background')"
              :key="shade"
              :color="'background-' + shade"
              @mounted="el => {if(el) elements.push({
                element: el,
                id: 'bg-' + shade
              })}"
            />
          </div>
          <div class="foreground">
            <ColorBox
              color="foreground"
              @mounted="el => {if(el) elements.push({
                element: el,
                id: 'fg'
              })}"
            />
            <ColorBox
              v-for="shade in shadeArray('foreground')"
              :key="shade"
              :color="'foreground-' + shade"
              @mounted="el => {if(el) elements.push({
                element: el,
                id: 'fg-' + shade
              })}"
            />
          </div>
        </div>
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
            <ColorBox color="contrast" />
          </div>
        </div>
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