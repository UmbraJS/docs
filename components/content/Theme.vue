<template>
  <div class="theme">
<<<<<<< Updated upstream
    
=======
    <div class="controls" v-if="false">
      <Slider />
    </div>

    <div class="picker">
      <DyePicker
        :default="theme.scheme.background"
        @change="(color) => handleChange(color, 'background')"
      />
      <h1>Background</h1>
    </div>

    <div class="picker">
      <DyePicker
        :default="theme.scheme.foreground"
        @change="(color) => handleChange(color, 'foreground')"
      />
      <h1>Foreground</h1>
    </div>

    <div class="picker">
      <DyePicker
        :default="theme.scheme.accents[0]"
        @change="(color) => handleChange(color, 'accents')"
      />
      <h1>Accent</h1>
    </div>
>>>>>>> Stashed changes
  </div>
</template>

<style scoped lang="scss">

</style>