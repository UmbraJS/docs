import { myriad, MyriadInput, MyriadSettings } from "@myriadjs/core";

export const useTheme = defineStore('theme', () => {
  const scheme = ref(myriad({
    foreground: "#dcffda",
    background: "#0e0110",
    accents: ["#ffb958"],
  }).colors.origin)

  const settings = ref<MyriadSettings>({
    readability: 2,
  })

  function setScheme(theme: MyriadInput) {
    scheme.value = myriad({
      ...scheme.value,
      ...theme
    }, settings.value).attach().colors.origin;
  }

  function setThemeSettings(s: MyriadSettings) {
    settings.value = s;
    scheme.value = myriad(scheme.value, settings.value).attach().colors.origin;
  }

  return { scheme, setScheme, settings, setThemeSettings }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}


