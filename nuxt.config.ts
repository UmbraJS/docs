export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxt/content', "@nuxt/devtools", "@pinia/nuxt"],
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
