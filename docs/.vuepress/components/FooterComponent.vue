<template>
    <div class="footer">
        <div class="footer-content max-width">
            <div class="content_text">
                <div class="content_block">
                    <template v-for="(item,i) in menus">
                        <ul class="content_list" :key="i">
                            <li class="content_title" :title="item.title">{{item.title}}</li>
                            <template v-for="(ole,k) in item.childer">
                                <li :key="k"><a :href="ole.value" :title="ole.label" target="_blank">{{ole.label}}</a></li>
                            </template>
                        </ul>
                    </template>
                </div>
            </div>
            <div class="content_info" title="易有云网络科技有限责任公司 Copyright © 2019-2021  备案号： 粤ICP备20024441号">易有云网络科技有限责任公司 Copyright © 2019-2021<br />
                <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">备案号： 粤ICP备20024441号</a>
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
                            label: "易有云",
                            value: "https://www.linkease.com",
                        },
                        {
                            label: "EasePi",
                            value: "https://easepi.linkease.com",
                        },
                        {
                            label: "DDNSTO",
                            value: "https://www.ddnsto.com",
                        },
                        {
                            label: "iStore",
                            value: "https://github.com/linkease/istore",
                        }
                    ]
                },
                {
                    title: "购买渠道",
                    childer: [
                        {
                            label: "官方淘宝店",
                            value: "https://koolcenter.taobao.com/"
                        }
                    ]
                },
                {
                    title: "帮助与沟通",
                    childer: [
                        {
                            label: "问题反馈",
                            value: "https://github.com/linkease/linkease/issues"
                        },
                        {
                            label: "商务洽谈",
                            value: "xiaobao@linkease.com"
                        }

                    ]
                },
                {
                    title: "关于易有云",
                    childer: [
                        {
                            label: "关于我们",
                            value: "https://doc.linkease.com/zh/guide/linkease_client/about.html"
                        },
                        {
                            label: "联系我们",
                            value: "xiaobao@linkease.com"
                        }
                    ]
                },
                {
                    title: "合作伙伴",
                    childer: [
                        {
                            label: "koolcenter",
                            value: "#"
                        },
                    ]
                }
            ]
        }
    }
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
    background-color: #f4f4f4;
    min-height: 234px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .footer-content {
        display: flex;
        flex-wrap: wrap;
        .content_text {
            width: 1384px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            flex: 0 0 100%;
            border-bottom: 1.5px solid;
            margin-bottom: 10px;
            .content_block {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 1020px;
                .content_list {
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
@media screen and(max-width:1300px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;
                .content_block {
                    width: 100%;
                    padding: 20px;
                    .content_list {
                        flex: 0 0 100%;
                        max-width: 25%;
                        margin: 0;
                        padding: 0;
                    }
                }
            }
        }
    }
}
@media screen and(max-width:1100px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;
                .content_block {
                    width: 100%;
                    padding: 20px;
                    .content_list {
                        flex: 0 0 100%;
                        max-width: 33.333%;
                        margin: 0;
                        padding: 0;
                    }
                }
            }
        }
    }
}
@media screen and(max-width:900px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;
                .content_block {
                    width: 100%;
                    padding: 20px;
                    .content_list {
                        flex: 0 0 100%;
                        max-width: 50%;
                        margin: 0;
                        padding: 0;
                    }
                }
            }
        }
    }
}
</style>