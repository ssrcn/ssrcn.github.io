import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://www.icn.asia/',
  lang: 'zh-CN',
  title: '休伯利安',
  author: {
    name: '壬午',
    avatar: '/avatar.jpg',
  },
  favicon: '/favicon.ico',
  subtitle: '休伯利安启航',
  description: '永恒轮回的不沉之船',
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
