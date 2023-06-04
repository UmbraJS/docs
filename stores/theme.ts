import { myriad, MyriadInput, MyriadSettings } from "@myriadjs/core";

export const useTheme = defineStore('theme', () => {
  const scheme = ref(myriad({
    foreground: "#dcffda",
    background: "#0e0110",
    accents: ["#ffb958"],
    custom: {
      link: '#0000ff',
      warning: '#ff0000',
      success: '#00ff00',
    },
  }).colors.origin)

  const settings = ref<MyriadSettings>({
    readability: 4,
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

  function inverseScheme() {
    console.log('inverse')
    scheme.value = myriad(scheme.value, settings.value).inverse().attach().colors.origin;
  }

  function isDark() {
    return myriad(scheme.value, settings.value).isDark();
  }

  return { scheme, setScheme, settings, setThemeSettings, inverseScheme, isDark }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}


