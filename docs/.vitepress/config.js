/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  base: "/v2/",
  title:"Edgeless Wiki",
  description: "强大而优雅的半开源PE工具",
  head: [
    ['link', { rel: 'icon', href: 'https://home.edgeless.top/favicon.ico' }]
  ],
  outDir: "dist",
  themeConfig: {
    repo: "EdgelessPE/Edgeless",
    docsRepo: "https://github.com/EdgelessPE/edgeless-wiki-kernel",
    docsBranch: "master",
    editLink: {
      pattern: 'https://github.com/EdgelessPE/edgeless-wiki-kernel/edit/main/docs/:path',
      text:"在 GitHub 上编辑此页"
    },
    docsDir: "docs",
    lastUpdated: "最近更新于",
    logo: "https://home.edgeless.top/favicon.ico",
    nav: [
      { text: "首页", link: "https://home.edgeless.top" },
      { text: "下载站", link: "https://down.edgeless.top" },
    ],
    sidebar: getGuideSidebar(),
    footer: {
      message: 'MPL-2.0 Licensed | Rendered by VitePress',
      copyright: 'Copyright © 2019-2023 Cno'
    }
  },
};

function getGuideSidebar() {
  return [
    { text: "写在前面", link: "/required" },
    {
      text: "总览",
      items: [
        { text: "日志", link: "/global/log" },
        { text: "瞎扯", link: "/global/something" },
        {
          text: "感谢",
          link: "/global/thanks",
          sidebarDepth: 0,
          collapsable: false,
        },
        { text: "用户协议", link: "/global/contract" },
        { text: "捐赠列表", link: "/global/donate" },
      ],
    },
    {
      text: "FAQ",
      items: [
        { text: "PE是啥", link: "/faq/whats" },
        { text: "什么是Edgeless ME", link: "/faq/ME" },
        { text: "如何获取ISO镜像", link: "/faq/getiso" },
        { text: "如何有效地报告错误", link: "/faq/report" },
        { text: "桌面上的更多工具是啥", link: "/faq/moretools" },
        { text: "启动盘制作失败", link: "/faq/fail2burn" },
        { text: "显示器显示超出范围", link: "/faq/displayerror" },
        { text: "UEFI启动后分辨率过低", link: "/faq/resolution" },
        { text: "进不了PE或进入后黑屏", link: "/faq/entrydenied" },
        { text: "卡在93.1%，正在载入用户配置", link: "/faq/stuck" },
        { text: "进入PE后出现异常情况", link: "/faq/someerror" },
        { text: "连不了网、没有硬盘、不能触控", link: "/faq/hardwareerror" },
        // { text: "识别不了exFAT分区、分区出错", link: "/faq/diskparterror" },
        { text: "使用主题资源包时出错", link: "/faq/themeerror" },
        { text: "插件的快捷方式乱码", link: "/faq/messycode" },
        { text: "没有发现必要组件包", link: "/faq/nes" },
      ],
    },
    {
      text: "教程",
      items: [
        { text: "如何写入Edgeless到U盘", link: "/guide/burn" },
        { text: "如何从U盘启动Edgeless", link: "/guide/boot" },
        { text: "如何使用Edgeless安装系统", link: "/guide/installwindows" },
        { text: "如何使用插件包", link: "/guide/pluginpackages" },
        { text: "如何使用主题资源包", link: "/guide/themepackages" },
      ],
    },
    {
      text: "玩转Edgeless",
      items: [
        { text: "ept插件包管理工具", link: "/playground/ept" },
        { text: "LocalBoost仓库加速", link: "/playground/localboost" },
        { text: "生命周期钩子", link: "/playground/hooks" },
        { text: "官方的自定义玩法", link: "/playground/config" },
        { text: "如何添加自定义驱动", link: "/playground/driver" },
        { text: "不想用 Ventoy 启动？", link: "/playground/no-ventoy" },
        { text: "寄生启动", link: "/playground/parasitism" },
        { text: "替换镜像启动", link: "/playground/replace" },
        { text: "其他姿势启动", link: "/playground/other" },
        { text: "修改浏览器插件包", link: "/playground/browser" },
        { text: "开机欢迎音乐", link: "/playground/welcome" },
      ],
    },
    {
      text: "开发者文档",
      items: [
        { text: "须知", link: "/develop/notice" },
        { text: "GitHub", link: "/develop/GitHub" },
        { text: "API", link: "/develop/API" },
        { text: "Edgeless开发环境的搭建", link: "/develop/devenvironment" },
        {
          text: "开发插件包",
          items: [
            { text: "快速上手", link: "/develop/quickstart" },
            { text: "常规开发", link: "/develop/plugin" },
            { text: "自动构建", link: "/develop/automake" },
            { text: "暴力封装", link: "/develop/force" },
            // { text: ".net插件包", link: "/develop/net" },
          ],
        },
        {
          text: "开发主题包/资源包",
          items: [
            { text: "常规开发", link: "/develop/theme" },
            { text: "使用主题抓取套件", link: "/develop/grab" },
          ],
        },

        { text: "开发必要组件包", link: "/develop/nes" },
        { text: "开发内核", link: "/develop/kernel" },
      ],
    },
    {
      text: "合作洽谈",
      items: [
        { text: "获取授权", link: "/cooperation/permit" },
        { text: "小黑屋", link: "/cooperation/blacklist" },
        { text: "子项目", link: "/cooperation/SubProjects" },
        { text: "FirPE", link: "/cooperation/FirPE" },
        { text: "FlyPE", link: "/cooperation/FlyPE" },
        { text: "Hikari PE", link: "/cooperation/HikariPE" },
        { text: "51NB PE", link: "/cooperation/51NBPE" },
        { text: "Samarium", link: "/cooperation/Samarium" },
        { text: "HotPE", link: "/cooperation/HotPE" },
        { text: "萝卜头PE", link: "/cooperation/萝卜头PE" },
        { text: "HopePE", link: "/cooperation/HopePE" },
        { text: "HiPE", link: "/cooperation/HiPE" },
        { text: "ComPE", link: "/cooperation/ComPE" },
        { text: "斯宏信息", link: "/cooperation/斯宏信息" },
      ],
    },
    // {
    //   text: "媒体",
    //   items: [
    //     { text: "转载须知", link: "/media/notice" },
    //     { text: "官方文案", link: "/media/material" },
    //   ],
    // },
  ]
}

export default config;
