<template>
  <div class="thumb">
    <div class="ball">
      <div class="line" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line {
  width: 0.1em;
  height: 80%;
  background: var(--thumbLineColor, var(--thumbColor));
}

.ball {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  aspect-ratio: 1/1;
  background-color: var(--thumbColor);
  border-radius: 100%;
  outline: solid 0px var(--accent-20);
  transition: outline 0.05s;
}

.slider .track .thumb {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  --tumbSize: var(--size, 25px);
  height: 100%;
  aspect-ratio: 1/1;
  transform: translateX(calc(var(--tumbSize) - 50%));
}

.slider .track .thumb::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  width: 50%;
  height: var(--trackSize, 5px);
  background-color: var(--foreground-10);
}

.slider:has(input:focus) .track .thumb .ball {
  outline: solid 5px var(--accent-20);
}

.slider:has(input:active) .track .thumb .ball {
  outline: solid 10px var(--accent-20);
}
</style>