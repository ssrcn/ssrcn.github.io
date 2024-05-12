import { defineValaxyConfig } from 'valaxy'
import { addonLightGallery } from 'valaxy-addon-lightgallery'
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
      title: '为世界上所有的美好而战',
      cloud: {
        enable: false,
      },
    },
  
    bg_image: {
      enable: true,
      // https://res.vsinger.com/images/f4f10b9b6f3ed076e68f1a1849481878.png
      // https://upload-bbs.miyoushe.com/upload/2024/03/21/162867316/553c623e38e0a6a65885570b8d3c20dd_7134508366031977457.png
      // https://upload-bbs.miyoushe.com/upload/2023/11/20/73565430/78d5f594efe73e6b5bd7324deaaf44bf_4984281465701639136.png
      url: 'https://upload-bbs.miyoushe.com/upload/2023/09/28/73565430/ec56119782813b5011e9fddb7a2c2b04_8590650636065751456.png?x-oss-process=image//quality,q_80/auto-orient,0/interlace,1/format,png',
      dark: 'https://upload-bbs.miyoushe.com/upload/2023/03/03/73565430/48f69c796fdcadf579cb613e802e21b2_4673042289353917016.png?x-oss-process=image//quality,q_80/auto-orient,0/interlace,1/format,png',
      opacity: 0.5
    },

    pages: [
      {
        name: '友人帐',
        url: '/links',
        icon: 'i-ri-user-star-line',
        color: 'dodgerblue',
      },
      {
        name: '相册',
        url: '/albums',
        icon: 'i-ri-gallery-line',
        color: 'skyblue',
      },
      {
        name: '铜雀台',
        url: '/girls',
        icon: 'i-ri-user-heart-line',
        color: 'hotpink',
      },
    ],

    say: {
      enable: true,
      api: '/json/say.json',
      hitokoto: {
        enable: false,
        api: '',
      },
    },

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
  
  addons: [
    addonLightGallery(),
  ],
})
