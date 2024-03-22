import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://www.icn.asia/',
  lang: 'zh-CN',
  title: '洛卿',
  author: {
    name: '惟依',
    avatar: 'https://avatars.githubusercontent.com/u/79364623'
  },
  favicon: 'https://avatars.githubusercontent.com/u/79364623',
  subtitle: '天一生水 地六成之',
  description: '华风夏韵 洛水天依',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/cnlty',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'E-Mail',
      link: 'mailto:fanghsiu@126.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: true,
  },

  sponsor: {
    enable: false,
  },

  encrypt: {
    enable: true,
  },

  mediumZoom: {
    enable: true,
  },
})
