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

# APP 公测链接
* [iOS点此链接测试](https://testflight.apple.com/join/Pl4jm65I)

# 常见问题
1. 连接突然出错怎么样？

可以查看连接状态，状态会显示，是否走内网连接，是否外网 P2P 连接，是否直连。如果连接断开可以过一会再尝试。

2. 除了手机之后，没显示其它的设备怎么办？

确认是否在其它地方绑定了设备？
如果已绑定了，则等一会再看，是否显示设备列表。
还不行就杀进程重试。

3. 两个设备一直连接不上？

确认两设备的版本是否为最新。一般都会兼容旧版本，但在某一些情况下，也有不兼容的可能。尽量保存互连的设备版本相同或为最新。

3. 看视频特别卡？

确认手机是否打开 V-P-N，打开则关闭；确认与视频所在设备的连接状态是否为连接中，非连接中请等待连接完成。

4. 如果文件夹设置错误了怎么办？
目前代码限制，只能共享一个文件夹，如果配置错误了，可以在菜单右上角，系统配置再修改共享的目录。

5. 易有云文件传输安全吗？
    * 如果您名下传输的两节点都在内网，会优先使用内网传输，速度快，并且安全。
    * 如果您的网络状态比较好，易有云优先选择使用 P2P 进行文件加密传输，数据不走服务器，肯定安全。
    * 如果您名下的设备节点，有一台有公网 IP 的设备，则节点通信会借助这台设备转发，通信也不走服务器，安全。
    * 如果您网络不满足上面的任何条件，则数据走了服务器转发，服务器只转流量，不存任何真实数据，安全。 
    * 您可以通过查看连接状态了确认当前的传输方式，也可以看传输速度来确定是否走服务器转发。文件很大，服务器转发速度有限，没有直连快！
    * Token 目前还比较重要，请不要分享给他人

6. 易有云安全实现说明
    * 目前易有云先经过非对称加密，最后由服务器在内存当中生成一个对称加密密钥。
    * 服务器生成的密钥只存于内存，不存于任何数据库，每个用户都不一样，服务器重启或者用户再次连接则变化。
    * 文件在传输过程数据会加密，存到本地之后，会解密。
    * 目前在一定程度上，安全级别还不够，未来考虑让用户自己设置本地的密钥，但使用会更复杂。(TODO 使用 gpg 密钥对服务器)

7. 不能设置多个目录

目前确实是这样的，未来再考虑支持

# 加这个人，他会拉你进群参测试

![IMG_0439](https://user-images.githubusercontent.com/7870528/56940482-4ec39e80-6b41-11e9-9256-b94aaa66eb13.JPG)

