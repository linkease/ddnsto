# EasyExplorer 解决了什么痛点？
* APP 备份文件到家里，走 P2P 省流量
* APP 看家里存的视频
* 增量备份，只传改动的数据
* 全平台相互管理与备份，一个都不能少（路由器，NAS，手机，电脑)

# 重要，一定要运行一个非手机端的程序，手机才能完整的体验！！！
下面是各种非手机平台的安装办法　

# Windows 安装教程
### 程序地址
[Windows 桌面版本](https://firmware.koolshare.cn/binary/EasyExplorerLatest/EasyExplorer.exe)

### 安装与绑定账号

前期因为 Windows 还没有购买代码签名证书，所以会弹出安全提示，请仍然运行！

![初始化配置](https://github.com/koolshare/ddnsto/raw/master/doc/img/win01.png "初始化配置")
![桌面菜单](https://github.com/koolshare/ddnsto/raw/master/doc/img/win02.png "桌面菜单")

# MAC 安装教程
### 程序地址
[MAC 桌面版本](https://firmware.koolshare.cn/binary/EasyExplorerLatest/EasyExplorer.dmg)

### 安装与绑定账号

要记得，把 EasyExplorer 移动到 Applications 里面！

![拖到 Applications](https://github.com/koolshare/ddnsto/raw/master/doc/img/mac01.png "拖到 Applications")
![Applications中打开](https://github.com/koolshare/ddnsto/raw/master/doc/img/mac02.png "Applications中打开")

初始化配置参考 Windows

# Merlin 安装教程
![在路由应用市场中安装](https://github.com/koolshare/ddnsto/raw/master/doc/img/arm02.png "在路由应用市场中安装")
![打开插件](https://github.com/koolshare/ddnsto/raw/master/doc/img/arm02.jpg "打开插件")

登录 https://www.ddnsto.com 手动把 token 填入插件相关的位置。

# Fw867 Lede 安装教程
参考 Merlin，也可以在应用市场安装。

# QNAP 安装教程
[参考论坛文章完成 QNAP 安装](http://koolshare.cn/thread-156616-1-1.html)

# iOS 支持（android版本开发中）
在公测群公告查看下载链接，安装，微信登录，再进行测试。
### iOS 功能简单介绍
![显示已绑定的所有设备列表](https://github.com/koolshare/ddnsto/raw/master/doc/img/iOS01.jpg "显示已绑定的所有设备列表")
![文件菜单](https://github.com/koolshare/ddnsto/raw/master/doc/img/iOS05.jpg "文件菜单")
![管理设备以及上传备份](https://github.com/koolshare/ddnsto/raw/master/doc/img/iOS03.jpg "管理设备以及上传备份")

其它细节自己体验，如：
1. 打开视频
2. 跨设备复制文件

# 常见问题

1. 支持多文件夹（多共享目录）吗？

答：暂时不支持，未来会支持

2. 支持内网吗？

答：支持，也同时支持外网。内网会走内网的连接速度

3. 会自动断点续传吗？

答：再复制一次，都会重新计算增量然后会传增量的部分，这个相当于断点续传

4. 连接突然出错怎么样？

答：突然连接出错，请尝试再连接一次；关闭代理再尝试；杀进程重启再尝试；排错方法，可以查看连接状态，具体参考上文的连接状态部分。

5. 除了手机之后，没显示其它的设备怎么办？

答：确认是否在其它地方绑定了设备？ 如果已绑定了，则等一会再看是否显示设备列表。，若仍无法显示则杀进程重试。

6. 看视频特别卡？

答：确认手机是否打开代理，打开则关闭；确认与视频所在设备的连接状态是否为连接中，非连接中请等待连接完成。

7. 如果文件夹设置错误了怎么办

答：目前代码限制，只能共享一个文件夹，如果配置错误了，可以在菜单右上角，系统配置再修改共享的目录。

9. 易有云文件传输安全吗？

答：

    * 如果您名下传输的两节点都在内网，会优先使用内网传输，速度快，并且安全。
    * 如果您的网络状态比较好，易有云优先选择使用 P2P 进行文件加密传输，数据不走服务器，肯定安全。
    * 如果您名下的设备节点，有一台有公网 IP 的设备，则节点通信会借助这台设备转发，通信也不走服务器，安全。
    * 如果您网络不满足上面的任何条件，则数据走了服务器转发，服务器只转流量，不存任何真实数据，安全。 
    * 您可以通过查看连接状态了确认当前的传输方式，也可以看传输速度来确定是否走服务器转发。文件很大，服务器转发速度有限，没有直连快！
    * Token 目前还比较重要，请不要分享给他人

10. 易有云安全实现说明

答：

    * 目前易有云先经过非对称加密，最后由服务器在内存当中生成一个对称加密密钥。
    * 服务器生成的密钥只存于内存，不存于任何数据库，每个用户都不一样，服务器重启或者用户再次连接则变化。
    * 文件在传输过程数据会加密，存到本地之后，会解密。
    * 目前在一定程度上，安全级别还不够，未来考虑让用户自己设置本地的密钥，但使用会更复杂。(TODO 使用 gpg 密钥对服务器)

