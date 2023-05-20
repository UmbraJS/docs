import { myriad, Myriad } from "@myriadjs/core";

export const useTheme = defineStore('theme', () => {
  const scheme = ref(myriad({
    foreground: "#dcffda",
    background: "#0e0110",
    accents: ["#ffb958"],
  }).colors.origin)

  function setScheme(theme: Myriad) {
    scheme.value = theme;
  }

  return { scheme, setScheme }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}


