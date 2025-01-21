import { defineSiteConfig } from "valaxy"

export default defineSiteConfig({
  url: "https://lovelty.cn",
  lang: "zh-CN",
  title: "Love天依",
  author: {
    name: "方柊",
    avatar: "/avatar.jpg",
  },
  favicon: "/favicon.ico",
  subtitle: "华风夏韵 洛水天依",
  description: "Chase",
  social: [
    {
      name: "RSS",
      link: "/atom.xml",
      icon: "i-ri-rss-line",
      color: "orange",
    },
    {
      name: "GitHub",
      link: "https://github.com/ssrcn",
      icon: "i-ri-github-line",
      color: "#6e5494",
    },
    {
      name: "E-Mail",
      link: "mailto:fanghsiu@126.com",
      icon: "i-ri-mail-line",
      color: "#8E71C1",
    },
    {
      name: "Travelling",
      link: "https://www.travellings.cn/go.html",
      icon: "i-ri-train-line",
      color: "var(--va-c-text)",
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

  statistics: {
    enable: true, 
  },
})
