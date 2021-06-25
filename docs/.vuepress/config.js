module.exports = {
    host: "0.0.0.0",
    port: 8080,
    dest: "build",
    // 部署站点的基础路径
    base: "/",
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': 'public/assets/',
                '@components': 'components/'
            }
        }
    },
    // 站点标题
    title: 'DDNSTO 内网穿透',
    // 网站的描述
    description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理',
    head: [
        [
            'link', { rel: 'icon', href: '/favicon.png' }
        ],
        [
            'meta', { name: "keywords", content: "DDNSTO,内网穿透,设备原理,远程下载,远程开机,远程桌面,远程文件管理" }
        ],
        [
            'script', { src: "/script/analytics.js" }
        ]
    ],
    // 多语言
    locales: {
        '/': {
            lang: 'zh-CN',
            // title: 'DDNSTO',
            description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理'
        },
    },
    themeConfig: {
        // 站点logo
        logo: '/image/logo.png',
        // 页面配置
        locales: {
            // 中文
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    { text: '首页', link: '/' },
                    { text: '安装', link: '/zh/guide/' },
                    { text: '文档', link: '/zh/docs/' },
                    { text: '博客', link: '/post/' },
                    {
                        text: '视频号', items: [
                            { text: '哔哩哔哩', link: 'https://space.bilibili.com/626572404' },
                            { text: '头条号', link: 'https://bit.ly/3cFVAuY' },
                        ]
                    },
                    {
                        text: '反馈', items: [
                            { text: '问题反馈', link: 'https://github.com/linkease/ddnsto/issues' },
                            { text: '问卷调查', link: 'https://wj.qq.com/s2/8425787/8a6b/' },
                            //{ text: '公开吐槽', link: 'https://support.qq.com/products/311539' },
                            { text: '联系我们', link: '/zh/guide/about' },
                            { text: '更新日志', link: 'https://github.com/linkease/ddnsto/blob/master/CHANGELOG.md' },
                        ]
                    },
                    { text: '控制台', link: '/app/#/login', target: "_blank" },
                ],
                sidebar: {
                    '/zh/guide/': [
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
                                ["cloudapp", "远程教学"],
                                ["opensource", "开源代码"],
                                ["question", "常见问题"],
                                ["about", "联系我们"],
                            ]
                        },
                    ],
                    '/zh/docs/': [
                        {
                            title: "文档",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "基础信息"],
                                ["Scene", "使用场景"],
                            ]
                        },
                    ]
                }
            },
        },
        // 最后更新时间
        // lastUpdated: 'Last Updated', // string | boolean
        // 搜索
        // search: false,
        // searchMaxSuggestions: 10
    },
    plugins: [
        ['@vuepress/blog',
            {
                directories: [
                    {
                        id: 'post',
                        title: "博客",
                        dirname: '_posts',
                        path: '/post/',
                        itemPermalink: '/post/:year/:month/:day/:slug',
                        layout: "BlogLayout",
                        pagination: {
                            prevText: "上一页",
                            nextText: "下一页",
                            lengthPerPage: 10,
                            layout: "BlogLayout",
                        },
                    },
                ],
                frontmatters: [
                    {
                        // Unique ID of current classification
                        // Decide that the frontmatter keys will be grouped under this classification
                        id: "tag",
                        keys: ['tag', 'tags'],
                        // Path of the `entry page` (or `list page`)
                        path: '/tag/',
                        // Layout of the `entry page`
                        title: "标签",
                        // layout: "BlogLayout",
                        scopeLayout: 'BlogLayout',
                        pagination: {
                            prevText: "上一页",
                            nextText: "下一页",
                            lengthPerPage: 10,
                            layout: "BlogLayout",
                        },
                    },
                ],
            },
        ],
    ],
}