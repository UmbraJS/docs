<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos'

const blobRef: Ref<any | null> = ref(null)


const { onLoop, resume } = useRenderLoop()
resume()
onLoop(({ elapsed }) => {
  if (blobRef.value) {
    blobRef.value.material.uniforms.uTime.value = elapsed
  }
})
</script>

<template>
  <TresCanvas shadows alpha>
    <TresPerspectiveCamera :position="[0, 0, 1]" />
    <OrbitControls />
    <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" cast-shadow />
  </TresCanvas>
</template>