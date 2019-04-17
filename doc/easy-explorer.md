# EasyExplorer 解决了什么痛点？
* APP 备份文件到家里，走 P2P 省流量
* APP 看家里存的视频
* 增量备份，只传改动的数据
* 全平台相互管理与备份，一个都不能少（路由器，NAS，手机，电脑)

# Windows 安装教程
### 程序地址
[Windows 桌面版本](https://firmware.koolshare.cn/binary/EasyExplorerLatest/EasyExplorer.exe)

### 安装与绑定账号
![初始化配置](https://github.com/koolshare/ddnsto/raw/master/doc/img/win01.png "初始化配置")
![桌面菜单](https://github.com/koolshare/ddnsto/raw/master/doc/img/win02.png "桌面菜单")

# MAC 安装教程
### 程序地址
[MAC 桌面版本](https://firmware.koolshare.cn/binary/EasyExplorerLatest/EasyExplorer.dmg)

### 安装与绑定账号
![拖到 Applications](https://github.com/koolshare/ddnsto/raw/master/doc/img/mac01.png "拖到 Applications")
![Applications中打开](https://github.com/koolshare/ddnsto/raw/master/doc/img/mac02.png "Applications中打开")

初始化配置参考 Windows

![桌面菜单](https://github.com/koolshare/ddnsto/raw/master/doc/img/mac02.png "桌面菜单")

# Merlin 安装教程
![在路由应用市场中安装](https://github.com/koolshare/ddnsto/raw/master/doc/img/arm01.jpg "在路由应用市场中安装")
![打开插件](https://github.com/koolshare/ddnsto/raw/master/doc/img/arm02.jpg "打开插件")

登录 https://www.ddnsto.com 手动把 token 填入插件相关的位置。

# Fw867 Lede 安装教程
参考 Merlin，也可以在应用市场安装。

# QNAP 安装教程
[参考论坛文章完成 QNAP 安装](http://koolshare.cn/thread-156616-1-1.html)

# 群辉安装教程
* 群辉插件[下载并手动安装](https://github.com/koolshare/synology-easyexplorer/blob/master/easyexplorer_x86.spk)
手动离线安装，类似 QNAP。
目前只支持 x86 版本，arm 系列的不支持。

# iOS 支持（android版本开发中）
在公测群公告查看下载链接，安装，微信登录，再进行测试。
### iOS 功能简单介绍
![显示已绑定的所有设备列表](https://github.com/koolshare/ddnsto/raw/master/doc/img/iOS01.jpg "显示已绑定的所有设备列表")
![文件夹查看](https://github.com/koolshare/ddnsto/raw/master/doc/img/iOS02.jpg "文件夹查看")
![管理设备以及上传备份](https://github.com/koolshare/ddnsto/raw/master/doc/img/iOS03.jpg "管理设备以及上传备份")
![文件菜单](https://github.com/koolshare/ddnsto/raw/master/doc/img/iOS04.jpg "文件菜单")

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
