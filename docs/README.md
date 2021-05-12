---
home: true
#heroImage: /hero.png
heroText: 远程管理，如此简单
tagline: 多种玩法，随心所欲，探索从未停止，不止于此
actionText: 立即体验 →
actionLink: /zh/guide/
features:
- title: 无需公网
  details: 当需要外网访问设备的时候，DDNSTO 无需公网IP，不被网络环境所限制
- title: 价格低廉
  details: 无需购买域名与服务器，省去服务器年费及域名购买费用
- title: 响应更快
  details: 国内多个服务器支持，加上HTTP2.0的技术优势，让你拥有前所未有的远程访问体验
footer: 版权所有 2021 易有云网络科技有限责任公司 | 粤ICP备20024441号
---

<script>
  export default{
    mounted(){
        document.querySelector(".footer").addEventListener("click", function (e) {
            window.open("https://beian.miit.gov.cn/", "_blank'")
        })
    }
}
</script>
