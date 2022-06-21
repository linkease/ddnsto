<template>
    <div id="main" class="desktop">
        <div class="prise" id="allprise">
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

        </div>
    </div>
</template>
<script>

import icon_check from "../public/assets/home/icon_check.png"
import icon_dot from "../public/assets/home/icon_dot.png"
import prise1 from "../public/assets/home/prise1.png"
import prise2 from "../public/assets/home/prise2.png"
export default {
    data() {
        return {
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
    .prise {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 20px;
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
                img {
                }

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
                img {
                }

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
                .number {
                }

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
                img {
                }

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
                    padding: 0px;
                    .image {
                        left: 14px;
                    }
                    .aisle_tit {
                        margin-top: 50px;
                    }
                    .function {
                        padding: 0 20px;
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
@media screen and (max-width: 550px) {
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
                    margin-bottom: 100px;
                    .image {
                        top: -40px;
                        left: 8px;
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
@media screen and (max-width: 430px) {
    #main {
        .prise {
            .tit {
                .prise_title {
                    font-size: 30px;
                    margin-bottom: 20px;
                }
            }
            margin: 0 20px;
            .prise_aisle {
                .aisle {
                    flex: 0 0 100%;
                    max-width: 100%;
                    margin-bottom: 200px;
                    .image {
                        left: 16px;
                    }
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
@media screen and (max-width: 400px) {
    #main {
        .prise {
            .tit {
                .prise_title {
                    font-size: 30px;
                    margin-bottom: 20px;
                }
            }
            margin: 0 20px;
            .prise_aisle {
                .aisle {
                    flex: 0 0 100%;
                    max-width: 100%;
                    margin-bottom: 200px;
                    .image {
                        left: 16px;
                        top: -88px;
                    }
                    .aisle_tit {
                        margin-top: 80px;
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
                    margin-bottom: 100px;
                    .image {
                        top: -40px;
                        left: 8px;
                    }

                    .aisle_tit {
                        font-size: 18px;
                    }

                    .aisle_number {
                        .number {
                            font-size: 30px;
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

    