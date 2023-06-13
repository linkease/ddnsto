// npm run build --domain=kooldns.com
// npm run build --domain=kooldns.com
const getBulldDomain = () => {
  // "kooldns.cn"
  // "kooldns.com"
  // "tocmcc.cn"
  return process.env.npm_config_domain || "";
};
const getBeianDomainUrl = () => {
  switch (getBulldDomain()) {
    case "kooldns.cn":
    case "kooldns.com":
    case "tocmcc.cn":
    case "ddnsto.com":
      return "https://www.ddnsto.com/app/#/login";
    default:
      return "/app/#/login";
  }
};
const getBeianDomain = () => {
  switch (getBulldDomain()) {
    case "kooldns.cn":
      return "粤ICP备20024441号-1";
    case "kooldns.com":
      return "粤ICP备20024441号-3";
    case "tocmcc.cn":
      return "粤ICP备20024441号-6";
    default:
      return "粤ICP备20024441号";
  }
};
const getTitle = () => {
  switch (getBulldDomain()) {
    case "ddnsto.com":
      return "DDNSTO - 深圳市易有云网络科技有限责任公司";
    case "kooldns.cn":
      return "DDNSTO远程控制";
    case "kooldns.com":
      return "DDNSTO远程控制";
    case "tocmcc.cn":
      return "DDNSTO-家庭网络监控";
    default:
      return "DDNSTO远程控制";
  }
};
module.exports = {
  host: "0.0.0.0",
  port: 8080,
  dest: "build",
  // 部署站点的基础路径
  base: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.ddnsto.com/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@assets": "public/assets/",
        "@posts": "public/posts/",
        "@components": "components/",
      },
    },
  },
  // 站点标题
  title: getTitle(),
  // 网站的描述
  description:
    "DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理",
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "DDNSTO,内网穿透,设备原理,远程下载,远程开机,远程桌面,远程文件管理",
      },
    ],
    ["script", { src: "/script/analytics.js" }],
    [
      'script', { src: "/script/google-analytics.js" }
    ],
    [
      "script",
      {
        src: "https://assets.koolcenter.com/linkease-navigation-script/main.js?v=6",
        defer: true,
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://assets.koolcenter.com/linkease-navigation-script/main.css?v=6",
      },
    ],
  ],
  // 多语言
  locales: {
    "/": {
      lang: "zh-CN",
      // title: 'DDNSTO',
      description:
        "DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理",
    },
  },
  themeConfig: {
    // 站点logo
    logo: "/image/logo.png",
    // 页面配置
    locales: {
      // 中文
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [
          { text: "首页", link: "/" },
          {
            text: "价格",
            link: "https://doc.linkease.com/zh/guide/ddnsto/pay.html",
          },
          { text: "文档", link: "https://doc.linkease.com/zh/guide/ddnsto/" },
          // { text: '价格', link: '/#allprise', target: '_self', rel: 'allprise' },
          //   { text: "场景", link: "/zh/docs/" },
          { text: "公告", link: "/notice/" },
          //   {
          //     text: "视频号",
          //     items: [
          //       {
          //         text: "哔哩哔哩",
          //         link: "https://space.bilibili.com/626572404",
          //       },
          //       { text: "头条号", link: "https://bit.ly/3cFVAuY" },
          //     ],
          //   },
          //   {
          //     text: "合作洽谈",
          //     // value: "/about",
          //     // target: "_self",
          //     link: "/zh/partner/",
          //   },
          {
            text: "关于我们",
            // items: [
            //     { text: '问题反馈', link: 'https://github.com/linkease/ddnsto/issues' },
            //     { text: '问卷调查', link: 'https://wj.qq.com/s2/8425787/8a6b/' },
            //     //{ text: '公开吐槽', link: 'https://support.qq.com/products/311539' },
            //     { text: '更新日志', link: 'https://github.com/linkease/ddnsto/blob/master/CHANGELOG.md' },
            //     { text: '关于我们', link: 'https://doc.linkease.com/zh/guide/about/' },
            // ],
            link: "https://www.linkease.com/about",
          },
          {
            text: "控制台",
            link: getBeianDomainUrl(),
            target: "_blank",
          },
        ],
        sidebar: {
          "/zh/guide/": [
            {
              title: "安装指南",
              // 显示所有页面的标题链接
              displayAllHeaders: true,
              // 展开状态
              collapsable: true,
              sidebarDepth: 2,
              children: [
                ["", "介绍"],
                ["quick", "快速入门"],
                ["preview", "功能预览"],
                ["koolshare_merlin", "详细教程"],
                ["Authentication", "身份验证"],
                ["cloudapp", "远程教学"],
                ["synology", "群晖玩法"],
                ["scene", "更多玩法"],
                ["opensource", "开源代码"],
                ["question", "常见问题"],
                ["about", "联系我们"],
              ],
            },
          ],
          "/zh/docs/": [
            {
              title: "场景",
              // 显示所有页面的标题链接
              displayAllHeaders: true,
              // 展开状态
              collapsable: true,
              sidebarDepth: 2,
              children: [["", "使用场景"]],
            },
          ],
        },
      },
    },
    // 最后更新时间
    // lastUpdated: 'Last Updated', // string | boolean
    // 搜索
    // search: false,
    // searchMaxSuggestions: 10
    beian: getBeianDomain(),
    domain: getBulldDomain(),
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            title: "博客",
            dirname: "_posts",
            path: "/post/",
            itemPermalink: "/post/:year/:month/:day/:slug",
            layout: "BlogLayout",
            pagination: {
              prevText: "上一页",
              nextText: "下一页",
              lengthPerPage: 10,
              layout: "BlogLayout",
              sorter: (prev, next) => {
                const dayjs = require("dayjs");
                const prevTime = dayjs(prev.frontmatter.date);
                const nextTime = dayjs(next.frontmatter.date);
                return prevTime - nextTime > 0 ? -1 : 1;
              },
            },
          },
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            // Decide that the frontmatter keys will be grouped under this classification
            id: "tag",
            keys: ["tag", "tags"],
            // Path of the `entry page` (or `list page`)
            path: "/tag/",
            // Layout of the `entry page`
            title: "标签",
            // layout: "BlogLayout",
            scopeLayout: "BlogLayout",
            pagination: {
              prevText: "上一页",
              nextText: "下一页",
              lengthPerPage: 10,
              layout: "BlogLayout",
              sorter: (prev, next) => {
                const dayjs = require("dayjs");
                const prevTime = dayjs(prev.frontmatter.date);
                const nextTime = dayjs(next.frontmatter.date);
                return prevTime - nextTime > 0 ? -1 : 1;
              },
            },
          },
        ],
      },
    ],
  ],
};
