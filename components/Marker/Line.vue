<script setup lang="ts">
// function newPoint(distanceFromPoint: number): Point {
//   const distance = Math.sqrt((to.value[0] - from.value[0]) ** 2 + (to.value[1] - from.value[1]) ** 2);
//   const direction = [(to.value[0] - from.value[0]) / distance, (to.value[1] - from.value[1]) / distance];
//   return [from.value[0] + direction[0] * distanceFromPoint, from.value[1] + direction[1] * distanceFromPoint];
// }

type Point = [number, number]
const props = defineProps<{
  offset?: Point | [number, number, number, number]
  from: () => HTMLElement | null | undefined,
  to: () => HTMLElement | null | undefined
}>()

const line = ref<SVGElement>()

function getCenter(rect?: DOMRect): Point {
  //get center of element
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

function percentOffset(percentage: number, room?: number) {
  if(!room) return 0
  const range = room / 2
  const decimal = percentage / 100;
  return decimal * range;
  
}

onMounted(() => {
  const fromRect = props.from()?.getClientRects()[0]
  const toRect = props.to()?.getClientRects()[0]
  
  const normalized = [
    fromRect ? -fromRect.x : 0,
    fromRect ? -fromRect.y : 0 
  ]

  function getOffset(offset?: Point): Point {
    if(!offset) return [0, 0]
    return offset
  }

  function setPoint(rect?: DOMRect , off: Point = [0, 0]): Point {
    const center = getCenter(rect)
    const offsetValue = getOffset(off)
    return [
      normalized[0] + center[0] + percentOffset(offsetValue[0], rect?.width),
      normalized[1] + center[1] + percentOffset(offsetValue[1], rect?.height)
    ]
  }

  function passedOffset(x: number, y: number): Point {
    const off = props.offset
    if(!off) return [0, 0]
    return off.length === 4 ? [off[x], off[y]] : off
  }

  from.value = setPoint(fromRect, passedOffset(0, 1))
  to.value = setPoint(toRect, passedOffset(2, 3))
})
</script>

<template>
  <MarkerDot :point="from" :size="4" />
  <MarkerDot :point="to" :size="4" />
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