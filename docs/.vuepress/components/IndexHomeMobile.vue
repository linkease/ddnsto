<template>
    <div id="main" class="mobile">
        <router-link to="/zh/guide/quick.html" class="banner">
            <img :src="banner" alt="">
        </router-link>
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
    </div>
</template>

<script>

import banner from "../public/assets/home/modbile_home_banner.png"
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
        }
    }
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
}
</style>