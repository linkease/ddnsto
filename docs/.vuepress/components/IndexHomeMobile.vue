<template>
    <div id="main" class="mobile">
        <!-- <router-link to="/zh/guide/quick.html" class="banner">
            <img :src="banner" alt="">
        </router-link> -->
        <div class="banner">
            <a href="http://doc.linkease.com/zh/guide/ddnsto/"><img :src="homeBanner" alt=""></a>
        </div>
        <div class="part1">
            <img :src="homeDdnsto" alt="">
        </div>
        <div class="container">
            <div class="cover">
                <img :src="home_pic1" alt="">
            </div>
            <div class="introduction">
                <h3 class="title">
                    <span class="number color-ff022a">01</span>
                    无需公网
                </h3>
                <div class="desc">
                    当需要外网访问设备的时候，DDNSTO无需
                    公网IP，不被网络环境所限制。
                </div>
            </div>
        </div>
        <div class="container">
            <div class="cover">
                <img :src="home_pic2" alt="">
            </div>
            <div class="introduction">
                <h3 class="title">
                    <span class="number color-0060ff">02</span>
                    我们支持多种设备
                </h3>
                <div class="desc">
                    我们支持各种设备：梅林路由器固件、OpenWrt、群晖、威联通、Docker…
                </div>
            </div>
        </div>
        <div class="container">
            <div class="cover">
                <img :src="home_pic3" alt="">
            </div>
            <div class="introduction">
                <h3 class="title">
                    <span class="number color-ff9e00">03</span>
                    多种远程应用
                </h3>
                <div class="desc">
                    远程登录SSH、远程桌面RDP/VNC、远程下载 aria2…
                    多种远程应用只需一个浏览器。
                </div>
            </div>
        </div>
        <div class="container">
            <div class="cover">
                <img :src="home_pic4" alt="">
            </div>
            <div class="introduction">
                <h3 class="title">
                    <span class="number color-42d1c3">04</span>
                    更快的响应
                </h3>
                <div class="desc">
                    国内多个服务器支持，加上HTTP2.0的技术优势，
                    让你拥有前所未有的远程访问体验。
                </div>
            </div>
        </div>

        <!-- <div class="prise" id="allprise1">
            <div class="tit">
                <h3 class="number"><span class="color-42d1c3 part5 f">05</span></h3>
                <div class="prise_title">DDNSTO价格说明</div>
            </div>
            <div class="prise_aisle">
                <div class="aisle">
                    <div class="aisle_tit">免费通道</div>
                    <div class="aisle_number">
                        <span class="number">0</span>
                        <span>元/月</span>
                        <span>(每个用户可以试用1条免费通道)</span>
                    </div>
                    <div class="function">
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>4 Mbps带宽</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>5 个自定义域名</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>远程SSH</span>
                        </div>
                    </div>

                </div>
                <div class="aisle">
                    <img :src="prise1" alt="" class="image">
                    <div class="aisle_tit">会员通道</div>
                    <div class="aisle_number">
                        <span class="number">4.33</span>
                        <span>元/月</span>
                        <span>(按月支付)</span>
                    </div>
                    <div class="function">
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>4 Mbps带宽</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>12 个自定义域名</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>远程SSH</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>远程桌面</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>远程下载</span>
                        </div>
                    </div>

                </div>
                <div class="aisle">
                    <img :src="prise2" alt="" class="image">
                    <div class="aisle_tit">高级通道</div>
                    <div class="aisle_number">
                        <span class="number">14.9</span>
                        <span>元/月</span>
                        <span>(按月支付)</span>
                    </div>
                    <div class="function">
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>8 Mbps带宽（即将上线）</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>15 个自定义域名</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>远程SSH</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>远程桌面</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>远程下载</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>websocket支持</span>
                        </div>
                        <div class="list">
                            <img :src="icon_check" alt="">
                            <span>8 Mbps</span>
                        </div>
                        <div class="list">
                            <img :src="icon_dot" alt="">
                            <span>第三方客户端RDP（开发中）</span>
                        </div>
                        <div class="list">
                            <img :src="icon_dot" alt="">
                            <span>APP相册备份（开发中）</span>
                        </div>
                        <div class="list">
                            <img :src="icon_dot" alt="">
                            <span>APP文件管理（开发中）</span>
                        </div>
                    </div>

                </div>
            </div>

        </div> -->
    </div>
</template>

<script>

import home_pic1 from "../public/assets/home/home_pic1.png"
import home_pic2 from "../public/assets/home/home_pic2.png"
import home_pic3 from "../public/assets/home/home_pic3.png"
import home_pic4 from "../public/assets/home/home_pic4.png"

import homeBanner from "../public/assets/home/pic_banner@2x.png"
import homeDdnsto from "../public/assets/home/pic_blue@2x.png"
import icon_check from "../public/assets/home/icon_check.png"
import icon_dot from "../public/assets/home/icon_dot.png"
import prise1 from "../public/assets/home/prise1.png"
import prise2 from "../public/assets/home/prise2.png"
export default {
    data() {
        return {
            home_pic1,
            home_pic2,
            home_pic3,
            home_pic4,
            homeBanner,
            homeDdnsto,
            icon_check,
            icon_dot,
            prise1,
            prise2

        }
    },
}

</script>
<style lang="scss" scoped>
#main * {
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    word-wrap: break-word;
    outline: 0;
}

@media screen and (min-width: 719px) {
    #main {
        display: none;
    }
}

#main {
    width: 100%;
    position: relative;
    margin-top: 3.125rem;

    .banner {
        position: relative;
        width: 100%;
        display: block;

        img {
            max-width: 100%;
            display: block;
        }
    }

    .part1 {
        img {
            max-width: 100%;
        }
    }

    .container {
        width: 100%;

        .cover {
            width: 100%;
            padding: 1.25rem;
            text-align: center;

            img {
                margin: 0 auto;
                max-width: 100%;
                border-radius: 1rem;
                box-shadow: 0 0 10px 5px #f8f8f8;
            }
        }

        .introduction {
            padding: 0 20px;
            text-align: center;
            margin-bottom: 20px;

            h3.title {
                margin: 20px 0;
                font-size: 32px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: rgba(0, 0, 0, 0.83);

                .number {
                    width: 38px;
                    font-size: 32px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #ff022a;
                }

                span.color-ff022a {
                    color: #ff022a;
                }

                span.color-0060ff {
                    color: #0060ff;
                }

                span.color-ff9e00 {
                    color: #ff9e00;
                }

                span.color-42d1c3 {
                    color: #42d1c3;
                }
            }

            .desc {
                font-size: 18px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.83);
            }
        }
    }

    .prise {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        margin: 0 74px;
        margin-top: 100px;

        .tit {
            .number {
            }

            .prise_title {
                font-size: 40px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: rgba(0, 0, 0, 0.83);
                line-height: 84px;
                margin-bottom: 54px;
            }
        }

        .prise_aisle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            .aisle {
                flex: 0 0 100%;
                // height: 957px;
                background: #f6f8fa;
                border-radius: 8px;
                text-align: center;
                margin-bottom: 1rem;
                font-family: PingFangSC-Medium, PingFang SC;
                position: relative;
                margin-bottom: 200px;

                .image {
                    width: 90%;
                    position: absolute;
                    top: -110px;
                    left: 22px;
                    right: 0;
                    bottom: 0;
                }

                .aisle_tit {
                    font-size: 28px;
                    color: rgba(0, 0, 0, 0.83);
                    margin-top: 200px;
                }

                .aisle_number {
                    margin-bottom: 40px;
                    margin-top: 18px;

                    .number {
                        font-size: 40px;
                        color: rgba(0, 0, 0, 0.83);
                    }

                    span {
                        display: block;
                        font-size: 18px;
                        color: rgba(0, 0, 0, 0.63);
                    }
                }

                .function {
                    text-align: left;
                    padding: 0 140px;

                    .list {
                        margin: 20px 0;

                        img {
                            width: 24px;
                            margin-right: 8px;
                        }

                        span {
                            font-size: 18px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            color: rgba(0, 0, 0, 0.63);
                        }
                    }
                }
            }
        }
    }

    .part5 {
        font-size: 3.75rem;
        font-family: PingFangSC-Medium, PingFang SC;
        color: #a4a4a4;
    }
}

@media screen and (min-width: 500px) {
    #main {
        .prise_aisle {
            .aisle {
                padding: 0;
            }
        }
    }
}
@media screen and (max-width: 620px) {
    #main {
        .prise {
            .prise_aisle {
                .aisle {
                    height: auto;
                    padding: 0;

                    .aisle_number {
                        .number {
                            font-size: 40px;
                        }
                    }
                    .function {
                        padding: 0 20px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 600px) {
    #main {
        .prise {
            .prise_aisle {
                .aisle {
                    .aisle_tit {
                        margin-top: 110px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 500px) {
    #main {
        .prise {
            .prise_aisle {
                .aisle {
                    margin-bottom: 180px;
                    .aisle_tit {
                        margin-top: 58px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 430px) {
    #main {
        .prise {
            .tit {
                .prise_title {
                    font-size: 30px;
                }
            }
            margin: 0 20px;
            .prise_aisle {
                .aisle {
                    margin-bottom: 280px;
                    .aisle_tit {
                        margin-top: 80px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 400px) {
    #main {
        .prise {
            margin: 0 20px;
            .tit {
                .prise_title {
                    line-height: 60px;
                }
            }
            .prise_aisle {
                .aisle {
                    margin-bottom: 180px;
                    .image {
                        top: -88px;
                    }
                    .aisle_tit {
                        margin-top: 90px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 300px) {
    #main {
        .prise {
            margin: 0 20px;
            .tit {
                .number {
                }

                .prise_title {
                    font-size: 20px;
                    line-height: 24px;
                }
            }

            .prise_aisle {
                .aisle {
                    padding: 0;
                    .image {
                    }

                    .aisle_tit {
                        font-size: 18px;
                    }

                    .aisle_number {
                        .number {
                            font-size: 20px;
                        }

                        span {
                            display: block;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}
</style>