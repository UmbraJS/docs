import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl';

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxt/content', "@nuxt/devtools", "@pinia/nuxt", "@tresjs/nuxt"],

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
    },
    plugins: [
      glsl()
    ]
  },

  devtools: {
    enabled: true
  }
})
