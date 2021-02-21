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
    title: 'DDNSTO 内网穿透',
    // 网站的描述
    description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程文件管理',
    head: [
        [
            'link', { rel: 'icon', href: '/favicon.png' }
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
                    { text: '安装', link: '/zh/guide/' },
                    { text: '文档', link: '/zh/docs/' },
                    { text: '登录后台', link: 'https://www.ddnsto.com/app/#/weixinlogin' },
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
                                ["", "入门"],
                                ["preview", "功能预览"],
                                ["koolshare_merlin", "Koolshare Merlin"],
                                ["koolshare_lede", "Koolshare Lede"],
                                ["openwrt_install", "Openwrt"],
                                ["synology", "群晖"],
                                ["qnap", "威联通"],
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
