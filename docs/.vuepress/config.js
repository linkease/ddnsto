module.exports = ctx => ({
    host: "0.0.0.0",
    port: 8080,
    dest: "build",
    // 部署站点的基础路径
    base: "/",
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': 'public/assets/'
            }
        }
    },
    // 站点标题
    title: 'DDNSTO',
    // 网站的描述
    description: 'DDNSTO 内网穿透,如此简单',
    head: [
        [
            'link', { rel: 'icon', href: '/logo.png' }
        ]
    ],
    // 多语言
    locales: {
        '/': {
            lang: 'zh-CN',
            // title: 'DDNSTO',
            description: 'DDNSTO内网穿透'
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
                    { text: '指南', link: '/zh/guide/' },
                    { text: '文档', link: '/zh/docs/' },
                    { text: '下载', link: '/zh/download/' },
                    { text: '登录后台', link: 'https://www.ddnsto.com/#/weixinlogin' },
                ],
                sidebar: {
                    '/zh/guide/': [
                        {
                            title: "测试",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                ["", "介绍"],
                                "show",
                                "view",
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
})
