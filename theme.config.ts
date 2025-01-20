import { defineThemeConfig } from "valaxy-theme-yun"

export default defineThemeConfig({
  banner: {
    enable: true,
    title: "启航",
    cloud: {
      enable: false,
    },
  },

  bg_image: {
    enable: true,
    url: "https://upload-bbs.miyoushe.com/upload/2023/09/28/73565430/ec56119782813b5011e9fddb7a2c2b04_8590650636065751456.png?x-oss-process=image//quality,q_80/auto-orient,0/interlace,1/format,png",
    dark: "https://upload-bbs.miyoushe.com/upload/2023/03/03/73565430/48f69c796fdcadf579cb613e802e21b2_4673042289353917016.png?x-oss-process=image//quality,q_80/auto-orient,0/interlace,1/format,png",
    opacity: 0.2
  },

  pages: [
    {
      name: "流光相册",
      url: "/albums",
      icon: "i-ri-gallery-line",
      color: "#006CD0"
    },
    {
      name: "友情链接",
      url: "/links",
      icon: "i-ri-user-star-line",
      color: "dodgerblue",
    },
    {
      name: "红颜列表",
      url: "/girls",
      icon: "i-ri-user-heart-line",
      color: "hotpink",
    },
  ],

  say: {
    enable: true,
    api: "/json/say.json",
    hitokoto: {
      enable: false,
      api: "https://v1.hitokoto.cn/?c=i&encode=json",
    },
  },

  notice: {
    enable: true,
    content: `<p style="color:#ee1c25">富强　民主　文明　和谐 <br> 自由　平等　公正　法治 <br> 爱国　敬业　诚信　友善</p>`,
  },

  footer: {
    since: 2020,
    icon: {
      title: "方柊",
      url: "/",
    },
    beian: {
      enable: false,
      icp: "",
    },
  },
})