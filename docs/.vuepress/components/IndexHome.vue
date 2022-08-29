<template>
    <div id="main" class="desktop">
        <div class="banner">
            <a href="http://doc.linkease.com/zh/guide/ddnsto/"><img :src="homeBanner" alt=""></a>
        </div>
        <div class="part1">
            <img :src="homeDdnsto" alt="">
        </div>
        <div class="body">
            <div class="block">
                <div class="container">
                    <div class="f cover">
                        <img :src="home_pic1" alt="">
                    </div>
                    <div class="r introduction k">
                        <h3 class="number"><span class="color-ff022a">01</span></h3>
                        <h3 class="title">无需公网</h3>
                        <div class="desc">
                            当需要外网访问设备的时候，DDNSTO无需公网IP，<br />
                            不被网络环境所限制。
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="f introduction j">
                        <h3 class="number"><span class="color-0060ff">02</span></h3>
                        <h3 class="title">我们支持多种设备</h3>
                        <div class="desc">
                            我们支持各种设备：梅林路由器固件、OpenWrt、<br />群晖、威联通、Docker…
                        </div>
                    </div>
                    <div class="r cover">
                        <img :src="home_pic2" alt="">
                    </div>
                </div>
                <div class="container">
                    <div class="f cover">
                        <img :src="home_pic3" alt="">
                    </div>
                    <div class="r introduction k">
                        <h3 class="number"><span class="color-ff9e00">03</span></h3>
                        <h3 class="title">多种远程应用</h3>
                        <div class="desc">
                            远程登录SSH、远程桌面RDP/VNC、远程下载 aria2… <br />
                            多种远程应用只需一个浏览器。
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="f introduction j">
                        <h3 class="number"><span class="color-42d1c3">04</span></h3>
                        <h3 class="title">更快的响应</h3>
                        <div class="desc">
                            国内多个服务器支持，加上HTTP2.0的技术优势，<br />
                            让你拥有前所未有的远程访问体验。
                        </div>
                    </div>
                    <div class="r cover">
                        <img :src="home_pic4" alt="">
                    </div>
                </div>
            </div>
        </div>
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

#main {
    width: 100%;
    position: relative;
    margin-top: 3.125rem;

    .banner {
        max-width: 100%;
        position: relative;
        height: 100%;
        flex-wrap: nowrap;
        justify-content: space-between;
        display: block;
        width: 100%;

        a {
            display: block;

            img {
                max-width: 100%;
                height: auto;
                display: block;
            }
        }

        .f {
            flex: 0 0 100%;
            max-width: 50%;

            h3.title {
                width: 100%;
                color: #000;
                font-size: 2.375rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                margin: 0;
            }

            .desc {
                width: 100%;
                font-size: 1.275rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.83);
                margin: 1.875rem 0;
            }

            a.experience {
                display: inline-block;
                width: 9.25rem;
                line-height: 3rem;
                background-color: #0255fe;
                text-align: center;
                border-radius: 3.125rem;
                color: #fff;
            }

            a.experience:hover {
                opacity: 0.8;
            }
        }

        .r {
            // flex: 0 0 100%;
            // max-width: 50%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;

            img {
                width: 32.75rem;
                height: 23.25rem;
                max-width: 100%;
                max-height: 100%;
                // width: 43.625rem;
                // height: 31rem;
            }
        }
    }

    .part1 {
        img {
            max-width: 100%;
        }
    }

    .prise {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 20px;
        margin-top: 100px;

        .tit {
            .number {}

            .prise_title {
                font-size: 40px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: rgba(0, 0, 0, 0.83);
                line-height: 84px;
                margin-bottom: 152px;
            }
        }

        .prise_aisle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            .aisle {
                flex: 0 0 30%;
                height: 957px;
                background: #f6f8fa;
                border-radius: 8px;
                text-align: center;
                padding: 0 60px;
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
                    margin-top: 130px;
                }

                .aisle_number {
                    margin-bottom: 40px;
                    margin-top: 18px;

                    .number {
                        font-size: 100px;
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
                    width: 100%;

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

    .body {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        .block {
            max-width: 100%;
        }

        .player {
            width: 100%;
            height: 32.5rem;
            text-align: center;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin-top: 5.625rem;

            iframe {
                width: 100%;
                height: 100%;
                border: none;
                background: none;
                border-radius: 1.125rem;
                display: block;
                margin: 0 auto;
            }
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-evenly;
            margin-top: 5.625rem;
            width: 100%;

            img {
                max-width: 100%;
                border-radius: 1rem;
                box-shadow: 0 0 10px 5px #f8f8f8;
                max-width: 27.5625rem;
                max-height: 17.4375rem;
            }

            .r {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                align-content: center;
                justify-content: flex-end;
                max-width: 436px;
            }

            .f,
            .r {
                .number {
                    width: 100%;
                    height: 5.25rem;
                    font-size: 3.75rem;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #42d1c3;
                    color: #ff022a;
                    margin: 0;
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

                .title {
                    width: 100%;
                    font-size: 2.375rem;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: rgba(0, 0, 0, 0.83);
                    margin: 0.625rem 0;
                }

                .desc {
                    width: 100%;
                    font-size: 1.0625rem;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.83);
                }
            }

            .introduction {
                width: 400px;
                margin: 0 auto;
                max-width: 400px;
            }

            .j {
                margin-right: 338px;
            }

            .k {
                margin-left: 214px;
            }
        }
    }
}

.part5 {
    font-size: 3.75rem;
    font-family: PingFangSC-Medium, PingFang SC;
    color: #a4a4a4;
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1440px) {
    #main {
        .body {
            max-width: 1080px;

            .container {

                // flex-wrap: nowrap;
                img {}

                .j {
                    margin-right: 214px;
                }
            }
        }
    }
}

@media screen and (max-width: 1066px) {
    #main {
        .body {
            max-width: 1080px;

            .container {
                img {}

                .k {
                    margin-left: 160px;
                }

                .j {
                    margin-right: 160px;
                }
            }
        }

        .prise {
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
            margin: 0 74px;

            .tit {
                .number {}

                .prise_title {
                    font-size: 40px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: rgba(0, 0, 0, 0.83);
                    line-height: 84px;
                    margin-bottom: 152px;
                }
            }

            .prise_aisle {
                .aisle {
                    flex: 0 0 50%;
                    max-width: calc(50% - 20px);
                    background: #f6f8fa;
                    border-radius: 8px;
                    text-align: center;
                    padding: 0 60px;
                    margin-bottom: 1rem;
                    font-family: PingFangSC-Medium, PingFang SC;
                    padding: 0 81px;
                    position: relative;
                    margin-bottom: 200px;
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    #main {
        .body {
            max-width: 768px;

            .container {
                img {}

                .k {
                    margin-left: 160px;
                }

                .j {
                    margin-right: 200px;
                    margin-bottom: 20px;
                }
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    #main {
        .prise {
            .prise_aisle {
                .aisle {
                    height: auto;

                    .aisle_tit {
                        margin-top: 80px;
                    }

                    .aisle_number {
                        .number {
                            font-size: 40px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 950px) {
    #main {
        .prise {
            .prise_aisle {
                .aisle {
                    .aisle_tit {
                        margin-top: 70px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 920px) {
    #main {
        .prise {
            .prise_aisle {
                .aisle {
                    height: auto;

                    .aisle_number {
                        .number {
                            font-size: 40px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 850px) {
    #main {
        .prise {
            .prise_aisle {
                .aisle {
                    .aisle_tit {
                        margin-top: 50px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 800px) {
    #main {
        .prise {
            .prise_aisle {
                .aisle {
                    height: auto;
                    padding: 0;

                    .aisle_tit {
                        margin-top: 30px;
                    }

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

@media screen and (max-width: 719px) {
    #main {
        display: none;
    }
}
</style>

    