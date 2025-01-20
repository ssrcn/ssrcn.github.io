import { defineValaxyConfig } from "valaxy"
import { UserThemeConfig } from "valaxy-theme-yun"
// addon
import { addonLightGallery } from "valaxy-addon-lightgallery"

// add icons what you will need
const safelist = [
  "i-ri-home-line",
]

// User Config
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts
  // siteConfig: {},

  theme: "yun",

  // see theme.config.ts or write in themeConfig
  // themeConfig in theme.config.ts
  // themeConfig: {},

  unocss: { safelist },

  addons: [
    addonLightGallery(),
  ],
})
