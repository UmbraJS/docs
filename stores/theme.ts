import { myriad, MyriadInput, MyriadSettings } from "@myriadjs/core";

export const useTheme = defineStore('theme', () => {
  const scheme = ref(myriad({
    foreground: "#dcffda",
    background: "#0e0110",
    accents: ["#ffb958"],
  }).colors.origin)

  const settings: MyriadSettings = {
    readability: 4,
  }

  function setScheme(theme: MyriadInput) {
    scheme.value = myriad({
      ...scheme.value,
      ...theme
    }, settings).attach().colors.origin;
  }

  return { scheme, setScheme }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}


