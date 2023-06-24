import { inverse, myriad, MyriadScheme, MyriadInput, MyriadSettings } from "@myriadjs/core";

export const useTheme = defineStore('theme', () => {
  const isDark = ref(false)
  const theme = shallowRef<MyriadInput>(myriad({
      foreground: "#00008b",
      background: "#ffffff",
      accents: ["#ff9400"],
      custom: {
        link: '#0000ff',
      },
    }, {
      readability: 4,
    }).colors.input)

  function setScheme(newScheme: MyriadScheme) {
    const m = myriad({ ...theme.value.scheme, ...newScheme }, theme.value.settings)
    theme.value = m.colors.input;
    isDark.value = m.isDark()
    return m
  }

  function setThemeSettings(newsettings: MyriadSettings) {
    const newTheme = {
      ...theme.value,
      settings: { ... theme.value.settings, ...newsettings }
    }

    console.log("hit 2")

    theme.value = newTheme
    const m = myriad(newTheme.scheme, newTheme.settings)
    isDark.value = m.isDark()
    return m
  }

  function inverse() {
    const m = myriad(theme.value.scheme, theme.value.settings).inverse()
    console.log("hit 3", m.colors.input)
    return setScheme(m.colors.input.scheme || {})
  }

  return {
    theme,
    setScheme,
    setThemeSettings,
    isDark,
    inverse,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}


