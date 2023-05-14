<template>
  <div class="skeleton">
    <div class="header">
      <div class="logo"></div>
      <div class="chip"></div>
      <div class="chip accent"></div>
    </div>
    <div class="content">
      <h1>Some Title</h1>
      <p class="caption">Lorem, ipsum dolor sit.</p>
      <p>Lorem, ipsum dolor sit amet <span class="accent">consectetur</span> adipisicing elit.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem, ipsum dolor sit.</p>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  background: var(--background);
  border-radius: var(--radius);
  overflow: hidden;
  max-width: 500px;
}

.header {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto auto;
  gap: var(--space-xs);
  height: 50px;
  background: var(--background-20);
  padding: 0px var(--space);
}

.header .logo {
  width: 60px;
  height: 20px;
  background: var(--foreground);
  border-radius: var(--radius);
}

.header .chip {
  width: 40px;
  height: 20px;
  background: var(--foreground-10);
  border-radius: var(--radius);
}

h1 {
  width: max-content;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--foreground);
}

p.caption {
  background: var(--foreground-20);
  margin-bottom: 12px;
  color: transparent !important;
}

p {
  width: max-content;
  border-radius: var(--radius);
  overflow: hidden;
  line-height: 0.9;
  background: var(--foreground);
  color: transparent !important;
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  padding: var(--space);
  padding-bottom: var(--space-m);
}
</style>