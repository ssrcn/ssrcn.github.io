import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '惟一的依',
      cloud: {
        enable: true,
      },
    },
    
    bg_image: {
      enable: true,
      url: 'https://res.vsinger.com/images/f4f10b9b6f3ed076e68f1a1849481878.png',
      dark: 'https://res.vsinger.com/images/f4f10b9b6f3ed076e68f1a1849481878.png',
      opacity: 0.35
    },

    pages: [
      {
        name: '友人帐',
        url: '/links/',
        icon: 'i-ri-user-star-line',
        color: 'dodgerblue',
      },
      {
        name: '铜雀台',
        url: '/girls/',
        icon: 'i-ri-user-heart-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2012,
      beian: {
        enable: false,
        icp: '',
      },
      icon: {
        title: '惟依',
        url: '/',
      }
    },
  },

  unocss: { safelist },
})
