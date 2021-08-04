<template>
    <div id="main" class="desktop">
        <div class="banner" :style="bannerStyle">
            <div class="body">
                <div class="f">
                    <h3 class="title">
                        随时随地抵达你的<br />
                        私人网络
                    </h3>
                    <div class="desc">
                        简单、快速的内网穿透工具，不受<br />
                        网络限制，全局掌控您的私人设备
                    </div>
                    <router-link to="/zh/guide/quick.html" class="experience">
                        免费体验
                    </router-link>
                </div>
                <div class="r">
                    <img :src="banner_icon" alt="">
                </div>
            </div>
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

        <div class="body">
            <div class="player">
                <iframe :src="playerUrl" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
            </div>
        </div>

    </div>
</template>

<script>
import banner from "../public/assets/home/home_bannerbg.png"
import banner_icon from "../public/assets/home/home_bannericon.png"
import home_pic1 from "../public/assets/home/home_pic1.png"
import home_pic2 from "../public/assets/home/home_pic2.png"
import home_pic3 from "../public/assets/home/home_pic3.png"
import home_pic4 from "../public/assets/home/home_pic4.png"

export default {
    data() {
        return {
            banner,
            home_pic1,
            home_pic2,
            home_pic3,
            home_pic4,
            banner_icon,
        }
    },
    computed: {
        playerUrl() {
            return "https://player.bilibili.com/player.html?aid=931397239&bvid=BV1GM4y1g7Lz&cid=361664839&page=1"
        },
        gvUrl() {
            return "https://beian.miit.gov.cn/"
        },
        bannerStyle() {
            return {
                backgroundImage: `url(${this.banner})`
            }
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
        width: 100%;
        // height: 35.5rem;
        // height: 26.625rem;
        padding: 3.125rem 0;
        background-color: #f3edf5;
        background-size: cover;
        .body {
            max-width: 1174px;
            position: relative;
            height: 100%;
            flex-wrap: nowrap;
            justify-content: space-between;
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
    .body {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .block {
            max-width: 1174px;
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
</style>
<style lang="scss" scoped>
@media screen and (max-width: 719px) {
    #main {
        display: none;
    }
}
@media screen and (max-width: 1440px) {
    #main {
        .body {
            max-width: 1080px;
        }
    }
}
@media screen and (max-width: 1024px) {
    #main {
        .body {
            max-width: 768px;
            .container {
                img {
                }
            }
        }
    }
}
</style>

    