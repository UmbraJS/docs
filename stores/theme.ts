import { inverse, myriad, MyriadInput, MyriadSettings } from "@myriadjs/core";

interface Variant {
  settings: MyriadSettings
  scheme: MyriadInput
}

interface Theme {
  name: string
  dark: Variant
  light: Variant
}

const defaultCustom = {
  link: '#0000ff',
  warning: '#ff0000',
  success: '#00ff00'
}

const defaultSettings: MyriadSettings = {
  readability: 2,
}

const darkVariant: Variant = {
  settings: defaultSettings,
  scheme: {
    foreground: "#dcffda",
    background: "#0e0110",
    accents: ["#ffb958"],
    custom: defaultCustom
  },
}

const lightVariant: Variant = {
  settings: defaultSettings,
  scheme: {
    foreground: "#0e0110",
    background: "#dcffda",
    accents: ["#ffb958"],
    custom: defaultCustom,
    inverse: darkVariant
  },
}

const myriadTheme: Theme = {
  name: 'myriad',
  dark: darkVariant,
  light: lightVariant,
}

const starfishTheme: Theme = {
  name: 'starfish',
  dark: darkVariant,
  light: lightVariant,
}

const themes = [
  myriadTheme,
  starfishTheme
]

export const useTheme = defineStore('theme', () => {
  const isDark = ref(false)
  const theme = shallowRef<Theme>(myriadTheme)

  function setScheme(newScheme: MyriadInput) {
    const combinedScheme = { ...scheme.value, ...newScheme };
    theme.value = combinedScheme;
    const m = myriad(combinedScheme, settings.value)
    isDark.value = m.isDark()
    return m
  }

  function setThemeSettings(newsettings: MyriadSettings) {
    const combinedSettings = { ...settings.value, ...newsettings };
    settings.value = combinedSettings;
    const m = myriad(scheme.value, combinedSettings)
    isDark.value = m.isDark()
    return m
  }

  function toggleThemeVariant() {
    //get index of current theme
    
  }

  function inverse() {
    const m = myriad(scheme.value, settings.value).inverse()
    return setScheme(m.colors.origin)
  }

  return {
    scheme,
    setScheme,
    setThemeSettings,
    settings,
    isDark,
    inverse,
    themes
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}


