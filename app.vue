<script setup lang="ts">
import { myriad } from "@myriadjs/core";
import "./css/styles.css";

const theme = myriad({
  foreground: "#1c0303",
  background: "#1c0303",
  accents: ["#761adf"],
}).attach();
</script>

<template>
  <Layout>
    <NuxtPage />
  </Layout>
</template>

<style>
html {
  --elements-backdrop-background: var(--background) !important;
  --docus-header-title-color-static: var(--background-10) !important;
  --docus-body-color: var(--background-20) !important;
  --docus-body-backgroundColor: var(--background) !important;
  --typography-body-backgroundColor: var(--background) !important;
  --typography-body-color: var(--foreground) !important;

  ---13e-button-primary: var(--accent) !important;
  ---uk-p-button-secondary: var(--accent) !important;
  --elements-text-primary-color-static: var(--foreground) !important;
  --elements-border-primary-static: var(--background-10) !important;

  --color-primary-400: var(--accent) !important;
}

h1, h2, h3, h4, p, a, a .title, button, body {
  color: var(--foreground) !important;
}

a.active {
  color: var(--accent) !important;
}

.button-link {
  color: var(--accent-contrast) !important;
  background-color: var(--accent) !important;
}

.terminal {
  color: var(--foreground) !important;
  background-color: var(--background) !important;
  border: 1px solid var(--background-10) !important;
}

.terminal .header {
  background-color: var(--background-10) !important;
  border-bottom: 1px solid var(--background-10) !important;
}

.terminal .prompt {
  background-color: var(--background-20) !important;
  color: var(--foreground) !important;
}

.terminal .copied {
  background-color: var(--background-10) !important;
  color: var(--foreground) !important;
}

/* pre {
  background-color: var(--background-10) !important;
} */

/* .prose-code {
  border-color: var(--foreground) !important;
} */
</style>