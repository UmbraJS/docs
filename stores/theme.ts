import { myriad, MyriadScheme, MyriadInput, MyriadGenerated, MyriadSettings } from "@myriadjs/core";


const settings = {
  readability: 4,
  foreground: {
    shade: [17, 27, 40],
  },
  background: {
    shade: [4, 8, 17],
  },
  accents: {
    shade: [17, 27, 40],
  },
}

const defaultTheme = {
  name: "default",
  settings,
  scheme: {
    foreground: "#000000",
    background: "#ffffff",
    accents: ["#006585"],
    custom: {
      link: '#0000ff',
    },
  }
}

const cherryberryTheme = {
  name: "cherryberry",
  scheme: {
    foreground: "#430541",
    background: "#f4f5fa",
    accents: ["#ff355e"],
    custom: {
      link: '#0000ff',
    },
  },
  settings: {
    readability: 4,
    foreground: {
      shade: [17, 27, 40],
    },
    background: {
      shade: [12, 27, 40],
    },
    accents: {
      shade: [17, 27, 40],
    },
  }
}

const nightshadeTheme = {
  name: "nightshade",
  scheme: {
    foreground: "#b1d1fc",
    background: "#030303",
    accents: ["#000088"],
    custom: {
      link: '#0000ff',
    },
  },
  settings: {
    readability: 4,
    foreground: {
      shade: [12, 20, 35],
    },
    background: {
      shade: [12, 24, 40],
    },
    accents: {
      shade: [12, 24, 40],
    },
  }
}

const cyberpunkTheme = {
  name: "cyberpunk",
  scheme: {
    foreground: "#ffe0de",
    background: "#110022",
    accents: ["#ff0303"],
    custom: {
      link: '#0000ff',
    },
  },
  settings: {
    readability: 4,
    foreground: {
      shade: [12, 20, 35],
    },
    background: {
      shade: [12, 24, 40],
    },
    accents: {
      shade: [12, 24, 40],
    },
  }
}

const serializeNonPOJOs = (value: object | null) => {
  return JSON.parse(JSON.stringify(value));
};

export const useTheme = defineStore('theme', () => {
  const isDark = shallowRef(false)
  const active = shallowRef(defaultTheme.name)
  const generated = shallowRef<MyriadGenerated>(serializeNonPOJOs(myriad(defaultTheme.scheme, defaultTheme.settings).colors))

  function setScheme(newTheme: {
    scheme: MyriadScheme,
    settings?: MyriadSettings
  }, name?: string) {
    const m = myriad({ ...generated.value.input.scheme, ...newTheme.scheme }, newTheme.settings ?  newTheme.settings : generated.value.input.settings)
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
    return setScheme(m.colors.input || {})
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
      cherryberryTheme,
      cyberpunkTheme,
      nightshadeTheme
    ]
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}


