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
1. 连接突然出错怎么样？

可以查看连接状态，状态会显示，是否走内网连接，是否外网 P2P 连接，是否直连。如果连接断开可以过一会再尝试。

2. 除了手机之后，没显示其它的设备怎么办？

确认是否在其它地方绑定了设备？
如果已绑定了，则等一会再看，是否显示设备列表。
还不行就杀进程重试。

3. 看视频特别卡?

确认手机是否打开 V-P-N，打开则关闭；确认与视频所在设备的连接状态是否为连接中，非连接中请等待连接完成。

