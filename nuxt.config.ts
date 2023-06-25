import vue from '@vitejs/plugin-vue'

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxt/content', "@nuxt/devtools", "@pinia/nuxt"],

  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  vite: {
    vue: {
      script: {
         propsDestructure: true
      }
    }
  },

  devtools: {
    enabled: true
  }
})
