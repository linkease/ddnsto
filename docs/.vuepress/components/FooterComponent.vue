<template>
    <div class="footer">
        <div class="footer-content max-width">
            <div class="content_text">
                <div class="content_block">
                    <template v-for="(item, i) in menus">
                        <ul class="content_list" :key="i">
                            <li class="content_title" :title="item.title">{{ item.title }}</li>
                            <template v-for="(ole, k) in item.childer">
                                <li :key="k"><a :href="ole.value" :title="ole.label" target="_blank">{{ ole.label }}</a>
                                </li>
                            </template>
                        </ul>
                    </template>
                </div>
            </div>
            <div class="content_info" :title="`Copyright © 2019-${new Date().getFullYear()} 深圳市易有云网络科技有限责任公司 版权所有  备案号： ${beianValue} 增值电信业务经营许可 粤B2-20251165  公司地址：深圳市南山区高新南环路29号留学生创业大厦一期 2001 联系电话：13316474667`">Copyright © 2019-{{ new Date().getFullYear() }} 深圳市易有云网络科技有限责任公司 版权所有<br />
                <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">备案号： {{ beianValue }}</a>
                <a href="https://assets.koolcenter.com/linkease/VTBOL.pdf" style="margin-left: 8px;" target="_blank">增值电信业务经营许可 粤B2-20251165</a><br />
                <a>公司地址：深圳市南山区高新南环路29号留学生创业大厦一期 2001 &nbsp;&nbsp; 联系电话：13316474667</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                {
                    title: "所有产品",
                    childer: [
                        {
                            label: "易有云软件",
                            value: "https://app.linkease.com/",
                        },
                        {
                            label: "DDNSTO",
                            value: "https://www.ddnsto.com",
                        },
                        {
                            label: "iStore",
                            value: "https://doc.linkease.com/zh/guide/istore/",
                        },
                        {
                            label: "EasePi",
                            value: "https://easepi.linkease.com",
                        }
                    ]
                },
                {
                    title: "购买渠道",
                    childer: [
                        {
                            label: "KoolCenter淘宝店",
                            value: "https://koolcenter.taobao.com/"
                        }
                    ]
                },
                {
                    title: "帮助与沟通",
                    childer: [
                        {
                            label: "问题反馈",
                            value: "https://github.com/linkease/ddnsto/issues"
                        },
                        {
                            label: "商务洽谈",
                            value: "mailto:admin@linkease.com"
                        }

                    ]
                },
                {
                    title: "关于易有云",
                    childer: [
                        {
                            label: "关于我们",
                            value: "https://www.linkease.com/about/"
                        },
                        {
                            label: "联系我们",
                            value: "mailto:admin@linkease.com"
                        }
                    ]
                },
                {
                    title: "合作伙伴",
                    childer: [
                        {
                            label: "KoolCenter",
                            value: "https://www.koolcenter.com/"
                        },
                    ]
                }
            ]
        }
    },
    computed: {
        beianValue() {
            return this.$themeConfig.beian
        }
    },
}
</script>

<style lang="scss" scoped>
* {
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    word-wrap: break-word;
    outline: none;
}

.footer {
    margin-top: 100px;
    // background-color: #f4f4f4;
    min-height: 234px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .footer-content {
        display: flex;
        flex-wrap: wrap;

        .content_text {
            width: 1116px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            flex: 0 0 100%;
            border-bottom: 1.5px solid rgba(0, 0, 0, 0.7);
            margin-bottom: 10px;
            border-top: 1.5px solid rgba(0, 0, 0, 0.7);
            padding-top: 24px;
            padding-bottom: 14px;

            .content_block {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 1020px;

                .content_list {
                    margin: 0;
                    padding: 0;

                    .content_title {
                        font-size: 16px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #000000;
                        line-height: 22px;
                        padding-bottom: 22px;
                    }

                    a {
                        display: block;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #464646;
                        line-height: 20px;
                        margin-bottom: 8px;
                    }

                    a:hover {
                        color: #0060ff;
                    }
                }
            }
        }

        .content_info {
            flex: 0 0 100%;
            font-size: 12px;
            color: #8e8e8e;
            margin: 1rem 0;

            a {
                color: #8e8e8e;
            }

            a:hover {
                color: #0060ff;
            }
        }
    }
}

li {
    list-style: none;
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1440px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;
                padding-bottom: 0px;

                .content_block {
                    max-width: 100%;
                    flex-wrap: nowrap;
                    padding: 0;

                    .content_list {
                        flex: 0 0 100%;
                        max-width: 25%;
                        margin: 0;
                        padding: 0;
                        margin-bottom: 12px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1300px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;

                .content_block {
                    max-width: 100%;
                    flex-wrap: nowrap;
                    padding: 0 10px;

                    .content_list {
                        flex: 0 0 100%;
                        max-width: 25%;
                        margin: 0;
                        padding: 0;
                        margin-bottom: 12px;
                    }
                }
            }

            .content_info {
                padding-left: 10px;
            }
        }
    }
}

@media screen and (max-width: 1100px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;

                // margin: 0 80px;
                .content_block {
                    max-width: 100%;
                    flex-wrap: wrap;
                    padding: 0 10px;

                    .content_list {
                        flex: 0 0 100%;
                        max-width: 25%;
                        margin: 0;
                        padding: 0;
                        margin-bottom: 12px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width:1024px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;

                .content_block {
                    max-width: 100%;
                    flex-wrap: wrap;
                    padding: 0 120px;

                    .content_list {
                        flex: 0 0 100%;
                        max-width: 25%;
                        margin: 0;
                        padding: 0;
                        margin-bottom: 12px;

                        .content_title {
                            padding-bottom: 8px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 900px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;

                .content_block {
                    width: 100%;
                    padding: 0 20px;
                    flex-wrap: wrap;

                    .content_list {
                        flex: 0 0 100%;
                        max-width: 50%;
                        margin: 0;
                        padding: 0;
                        margin-bottom: 12px;
                    }
                }
            }

            .content_info {
                padding-left: 20px;
            }
        }
    }
}
</style>
