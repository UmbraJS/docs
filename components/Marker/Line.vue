<script setup lang="ts">
// function newPoint(distanceFromPoint: number): Point {
//   const distance = Math.sqrt((to.value[0] - from.value[0]) ** 2 + (to.value[1] - from.value[1]) ** 2);
//   const direction = [(to.value[0] - from.value[0]) / distance, (to.value[1] - from.value[1]) / distance];
//   return [from.value[0] + direction[0] * distanceFromPoint, from.value[1] + direction[1] * distanceFromPoint];
// }

type Point = [number, number]
const props = defineProps<{
  offset?: Point | [number, number, number, number]
}>()

const line = ref<SVGElement>()

function cordinates(rect?: DOMRect): Point {
  if(!rect) return [0, 0]
  return [
    rect.x + rect.width / 2, 
    rect.y + rect.height / 2
  ]
}

const angle = computed(() => {
  const dy = to.value[1] - from.value[1]
  const dx = to.value[0] - from.value[0]
  const angle = Math.atan2(dy, dx); // angle in radians
  return angle * 180 / Math.PI; // angle in degrees
})

const stroke = ref(2)
const color = ref('var(--foreground)')

const from = ref<Point>([0, 0])
const to = ref<Point>([0, 0])

const distance = computed(() => {
  return Math.hypot(from.value[0] - to.value[0], from.value[1] - to.value[1])
})

function offset(distance: number, room?: number) {
  if(!room) return 0
  return percentOf(distance, room / 2)
}

function percentOf(value: number, percent: number) {
  return value * (percent / 100)
}

onMounted(() => {
  const fromRect = document.querySelector('[data-from]')?.getClientRects()[0]
  const fromCords = cordinates(fromRect)

  const toRect = document.querySelector('[data-to]')?.getClientRects()[0]
  const toCords = cordinates(toRect)
  
  const normalized = [
    fromRect ? -fromRect.x : 0,
    fromRect ? -fromRect.y : 0 
  ]

  function getOffset(offset?: Point): Point {
    if(!offset) return [0, 0]
    return offset
  }

  function setPoint(cords: Point, off: Point = [0, 0]): Point {
    const offsetValue = getOffset(off)
    return [
      normalized[0] + cords[0] + offset(offsetValue[0], toRect?.width),
      normalized[1] + cords[1] + offset(offsetValue[1], toRect?.height)
    ]
  }

  function passedOffset(x: number, y: number): Point {
    const off = props.offset
    if(!off) return [0, 0]
    return off.length === 4 ? [off[x], off[y]] : off
  }

  from.value = setPoint(fromCords, passedOffset(0, 1))
  to.value = setPoint(toCords, passedOffset(2, 3))
})
</script>

<template>
  <MarkerDot :point="from" />
  <MarkerDot :point="to" />
  <svg ref="line" :viewBox="`0 0 ${distance} 100`" xmlns="http://www.w3.org/2000/svg">
    <path :d="`M 0 50 L ${distance} 50`" :stroke="color" :stroke-width="stroke" />
  </svg>
</template>

<style scoped>
svg {
  width: calc(v-bind(distance) * 1px);
  height: 100px;
  position: absolute;
  left: calc(v-bind("from[0]") * 1px);
  top: calc(v-bind("from[1]") * 1px - 50px);
  transform: rotateZ(calc(v-bind(angle) * 1deg));
  transform-origin: 0% 50%;
}
</style>