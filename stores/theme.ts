import { inverse, myriad, MyriadScheme, MyriadInput, MyriadSettings } from "@myriadjs/core";


const defaultTheme = {
  name: "default",
  scheme: {
    foreground: "#00008b",
    background: "#ffffff",
    accents: ["#ff9400"],
    custom: {
      link: '#0000ff',
    },
  },
  settings: {
    readability: 4,
  }
}

const starfishTheme = {
  name: "starfish",
  scheme: {
    foreground: "#430541",
    background: "#dedeff",
    accents: ["#ff355e"],
    custom: {
      link: '#0000ff',
    },
  },
  settings: {
    readability: 4,
  }
}

const cyberpunkTheme = {
  name: "cyberpunk",
  scheme: {
    foreground: "#773300",
    background: "#191916",
    accents: ["#aa00ff"],
    custom: {
      link: '#0000ff',
    },
  },
  settings: {
    readability: 4,
  }
}

export const useTheme = defineStore('theme', () => {
  const isDark = shallowRef(false)
  const active = shallowRef(defaultTheme.name)
  const theme = shallowRef<MyriadInput>(myriad(defaultTheme.scheme, defaultTheme.settings).colors.input)

  function setScheme(newScheme: MyriadScheme, name?: string) {
    const m = myriad({ ...theme.value.scheme, ...newScheme }, theme.value.settings)
    theme.value = m.colors.input;
    isDark.value = m.isDark()
    active.value = name || 'custom'
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
    active,
    setScheme,
    setThemeSettings,
    isDark,
    inverse,
    themes: [
      defaultTheme,
      starfishTheme,
      cyberpunkTheme
    ]
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}


