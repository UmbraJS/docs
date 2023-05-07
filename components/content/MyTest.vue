<template>
  <div class="card">
    <h1>Example</h1>
    <p>Example component</p>
    <slot />
  </div>
</template> 

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem;
  background: var(--background-10);
  margin-bottom: var(--space-xl);
}
</style>