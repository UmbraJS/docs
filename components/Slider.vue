<script setup>
const slider = ref(0)
</script>

<template>
  <div class="slider">
    <p>{{ slider }}</p>
    <input 
      id="myRange"
      v-model="slider"
      type="range"
      min="0" 
      max="100" 
    >
    <div class="track">
      <div class="range">
        <div class="thumb" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.slider .track {
  display: flex;
  align-items: center;

  //padding: 0px calc(var(--padding) / 2);
  height: var(--size);
  background: var(--background-20);
  border-radius: var(--radius);
}

.slider .track .range {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(--foreground-20);
  width: calc(v-bind(slider) * 1%);
  min-width: var(--size);
  height: 100%;
  border-radius: var(--radius);
}

.slider .track .thumb {
  opacity: 0.5;
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: calc(var(--radius));
  background: var(--foreground);
  cursor: pointer;
}


.slider {
  --size: var(--block, 25px);
  --padding: var(--space-xs);
  --inner: calc(var(--size) - var(--padding));
  width: 100%;
  min-height: var(--size);
}

/* The slider itself */
.slider input {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%;
  height: 5px;
  background: var(--foreground-20);
  outline: none;
  opacity: 1;
  border-radius: var(--radius);
}

/* Mouse-over effects */
.slider input:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider input::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  aspect-ratio: 1/1;
  border-radius: calc(var(--radius) * 2);
  background: var(--foreground); /* Green background */
  cursor: pointer; /* Cursor on hover */
}
</style>