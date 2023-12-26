import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://www.fanghsiu.tk/',
  lang: 'zh-CN',
  title: '惟一的依',
  author: {
    name: '惟依',
    avatar: 'https://avatars.githubusercontent.com/u/79364623'
  },
  subtitle: 'Chase',
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
      link: 'https://github.com/MeetLTY',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'E-Mail',
      link: 'fanghsiu@126.com',
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
})
