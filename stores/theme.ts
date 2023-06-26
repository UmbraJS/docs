import { myriad, MyriadScheme, MyriadGenerated, MyriadSettings } from "@myriadjs/core";


const defaultTheme = {
  name: "default",
  scheme: {
    foreground: "#000000",
    background: "#ffffff",
    accents: ["#006585"],
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

const nightshadeTheme = {
  name: "nightshade",
  scheme: {
    foreground: "#8273fd",
    background: "#030303",
    accents: ["#fdb915"],
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

const serializeNonPOJOs = (value: object | null) => {
  return JSON.parse(JSON.stringify(value));
};

export const useTheme = defineStore('theme', () => {
  const isDark = shallowRef(false)
  const active = shallowRef(defaultTheme.name)
  const generated = shallowRef<MyriadGenerated>(serializeNonPOJOs(myriad(defaultTheme.scheme, defaultTheme.settings).colors))

  function setScheme(newScheme: MyriadScheme, name?: string) {
    const m = myriad({ ...generated.value.input.scheme, ...newScheme }, generated.value.input.settings)
    generated.value = serializeNonPOJOs(m.colors);
    isDark.value = m.isDark()
    active.value = name || 'custom'
    return m
  }

  function setThemeSettings(newsettings: MyriadSettings) {
    const m = myriad(generated.value.input.scheme,  { ...generated.value.input.settings, ...newsettings })
    generated.value = serializeNonPOJOs(m.colors)
    isDark.value = m.isDark()
    return m
  }

  function inverse() {
    const m = myriad(generated.value.input.scheme, generated.value.input.settings).inverse()
    return setScheme(m.colors.input.scheme || {})
  }

  return {
    generated,
    active,
    setScheme,
    setThemeSettings,
    isDark,
    inverse,
    themes: [
      defaultTheme,
      starfishTheme,
      cyberpunkTheme,
      nightshadeTheme
    ]
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}


