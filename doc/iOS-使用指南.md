## 1. 什么是易有云

易有云致力于实现PC、路由器、手机、存储设备等多平台终端之间的远程管理与文件备份服务，同时提供高效的智能网络连接能力，内外网能直连不限速。

用户在多终端安装易有云的产品后，就可享受高速安全的文件相关服务。轻松实现家庭文件共享、移动办公等。

易有云集成了图片查看、音视频播放器等多种功能，用户可通过流媒体方式在线浏览图片、音频、视频文件。

## 2. 快速使用向导

### 2.1 使用前准备

iOS设备可用于管理易有云个人账号下的所以设备，但使用前，需先组建使用环境，即至少包含一个除iOS设备外的其他设备。

若单独使用易有云iOS客户端，仅能管理手机自身文件，且APP卸载后，所以文件及操作记录都同时删除。

易有云目前支持以下终端类型：

  1. Windows
  2. MAC
  3. KoolShare Merlin
  4. QNAP
  5. Fw867 Lede
  6. iOS
  7. Android （开发中，6 月初发布测试）

在以上设备安装易有云软件后，就可以使用设备端的文件服务了。[多平台基础指南](https://www.ddnsto.com/doc/basic.html)

### 2.2 iOS客户端安装及注册登录

#### 2.2.1 打开App Store 搜索并下载易有云 App
    
![下载并注册](https://www.ddnsto.com/doc/iOS/login.png)
    
#### 2.2.2 注册及登录

（1）微信登录

点击微信按钮，跳转至微信授权即可登录

（2）邮箱密码登录

1. 浏览器打开链接[https://www.ddnsto.com/](https://www.ddnsto.com/)
2. 点击右上角进行微信登录

![右上角](https://www.ddnsto.com/doc/iOS/web-home.png)

3. 微信扫码登录
![扫码登录](https://www.ddnsto.com/doc/iOS/web-qr.png)

4. 登录后可查看令牌，在非移动端设备登录时使用

![设备信息](https://www.ddnsto.com/doc/iOS/web-info.png)

5. 点击右上角“更多” --> 设置“个人资料”，可编辑用户名及密码，后续手机登录可使用用户名密码的方式进行

![个人资料修改](https://www.ddnsto.com/doc/iOS/web-info.png)

### 2.3 iOS 客户端使用指南

#### 2.3.1 首页

登录成功后，首页为本机共享目录的详细信息，iPhone 上为固定的路径，首次登录仅包含如下两个文件夹：

Imports 文件夹中保存通过其他应用发送过来的文件，例如微信中“使用其他应用打开” 的文件

Logs文件夹中保存程序的相关日志

![文件夹说明](https://www.ddnsto.com/doc/iOS/phone-home.png)

#### 2.3.2 本机设备管理相关操作

点击首页右上角菜单按钮，可查看本机可进行的设备相关操作。如下图

![设备菜单](https://www.ddnsto.com/doc/iOS/phone-device.png)

（1）相册

点击-->在手机相册选择需要共享的照片-->点击确定

照片就会复制的当前设备的共享目录中，如下图：

![照片上传](https://www.ddnsto.com/doc/iOS/phone-upload.png)

（2）文件

点击-->选择位置-->选中待管理的云文件

例如将iCloud上的文件同步到易有云

（3）重命名设备

点击-->设置新的设备名称-->确定

![重命名](https://www.ddnsto.com/doc/iOS/phone-rename.png)

（4）新建文件夹

点击-->输入新建文件夹名称-->确定

![新建](https://www.ddnsto.com/doc/iOS/phone-new.png)
![显示新建内容](https://www.ddnsto.com/doc/iOS/phone-new2.png)

#### 2.3.3 左侧菜单

点击首页左上角的菜单按钮即可看到设备列表以及系统相关的操作

![左侧菜单](https://www.ddnsto.com/doc/iOS/phone-left.png)

（1）设备列表

可查查看使用本账号登录的所有在线设备列表，点击每个设备，可对其进行设备操作及文件管理

（2）设置

可执行如下操作：

查看设备的基本信息

清理缓存内容

退出登录操作

![系统信息](https://www.ddnsto.com/doc/iOS/phone-setting.png)

（3）任务

分设备显示所有当前正在执行的任务，复制、移动等操作的源设备及目的设备中都会展示该条任务

![任务1](https://www.ddnsto.com/doc/iOS/phone-task1.png)
![任务2](https://www.ddnsto.com/doc/iOS/phone-task2.png)

#### 2.3.4 非本机设备管理相关操作

其它平台请参考 [多平台基础指南](https://www.ddnsto.com/doc/basic.html)。

点击设备列表中的”公司电脑”，可对非本机设备进行管理及文件操作，操作项与本机基本相同，但多了“备份相册”及”设备状态”两项

![非本机设备](https://www.ddnsto.com/doc/iOS/other-device.png)

（1）备份相册

点击备份相册，开始将本手机的相册备份到当前打开的设备中，备份后会在当前打开的设备中创建命名为“设备名称+的照片备份”的文件夹

![备份1](https://www.ddnsto.com/doc/iOS/other-backup1.png)
![备份2](https://www.ddnsto.com/doc/iOS/other-backup2.png)

（2）设备状态

点击可查看当前设备状态，是否连接等

![是否连接](https://www.ddnsto.com/doc/iOS/other-connect1.png)

isConnect为1表示连接成功

p2pType 表示连接协议

useLan 表示是否使用内网连接

useDirect 表示是否直连

易有云支持多种链接方式，下面举例描述各个连接方式:

 1. 外网连接非直连

![外网连接非直连](https://www.ddnsto.com/doc/iOS/other-connect2.png)

 2. 内网连接直连

![内网连接直连](https://www.ddnsto.com/doc/iOS/other-connect3.png)

 3. 外网连接直连

![外网连接直连](https://www.ddnsto.com/doc/iOS/other-connect4.png)

#### 2.3.5 文件操作

用户可在手机客户端管理所有在线设备的所有文件，支持跨设备的文件操作。选择设备中的任何文件或文件夹，可对该文件执行多种操作，如下图：

![文件操作](https://www.ddnsto.com/doc/iOS/other-file.png)

（1）重命名

选择需要重命名的文件后，点击重命名可对文件名称进行重新编辑，点击确定后，新的名称生效

![设备重命名](https://www.ddnsto.com/doc/iOS/other-rename.png)


（2）移动

移动，即将文件从当前所在设备移动到目的设备，移动完成后，原设备上不再保存该文件，移动过程中，目的设备中会存在三个中间临时文件，不可预览，待移动全部完成后才可进行查看

目前只支持设备内移动，不可跨设备移动

（3）复制

复制，即将文件从当前所在设备复制到目的地址中，目的地址可以是任何设备的地址。复制过程中，目的地址会存在三个临时文件，不可预览，待复制完成后临时文件删除。

易有云采用增量同步技术进行复制，不管是全新的复制，还是复制到一半的错误或取消，后续对相同文件名的文件进行重新复制时，都会快速计算增量值，并且仅复制不同部分的数据，大大缩短复制的时间。

![复制](https://www.ddnsto.com/doc/iOS/other-copy1.png)
![复制](https://www.ddnsto.com/doc/iOS/other-copy2.png)
![复制](https://www.ddnsto.com/doc/iOS/other-copy3.png)
![复制](https://www.ddnsto.com/doc/iOS/other-copy4.png)
![复制](https://www.ddnsto.com/doc/iOS/other-copy5.png)
![复制](https://www.ddnsto.com/doc/iOS/other-copy6.png)
![复制](https://www.ddnsto.com/doc/iOS/other-copy7.png)
![复制](https://www.ddnsto.com/doc/iOS/other-copy8.png)


（4）压缩

选择需要压缩的文件，点击操作项中的压缩，则可对该文件进行压缩，压缩格式为.zip。压缩完成后，在文件所在的文件夹中生成一个压缩文件

![压缩](https://www.ddnsto.com/doc/iOS/other-zip1.png)
![压缩](https://www.ddnsto.com/doc/iOS/other-zip2.png)
![压缩](https://www.ddnsto.com/doc/iOS/other-zip3.png)


（5）删除

点击删除，需二次确认，确认后可进行删除，删除在前台进行

![删除](https://www.ddnsto.com/doc/iOS/other-del1.png)
![删除](https://www.ddnsto.com/doc/iOS/other-del2.png)

#### 2.3.6 文件预览

（1）文档

支持目前大部分主流的文档格式，包括 Word、PDF、TXT 等

（2）表格

支持查看EXCEL格式文件

（3）图片
  1. 支持所有主流图片格式
  2. 支持左右滑动查看

![图片](https://www.ddnsto.com/doc/iOS/other-photo.png)

（4）音频

支持主流的音频格式播放

（5）视频

支持如下功能

  1. 开始暂停，及快进后退
  2. 字幕文件选择
  3. 播放倍速，支持X0.5、X1、X1.5、X2
  4. 横竖屏控制

![视频](https://www.ddnsto.com/doc/iOS/other-video1.png)
![视频](https://www.ddnsto.com/doc/iOS/other-video2.png)

## 3. 常见问题

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
    * 如果您网络不满足上面的任何条件，则数据走了服务器转发，服务器只转流量，不存任何真实数据，相对安全。
    * 您可以通过查看连接状态了确认当前的传输方式，也可以看传输速度来确定是否走服务器转发。
    * Token 目前还比较重要，请不要分享给他人。

10. 易有云安全实现说明

  答：

    * 目前易有云先经过非对称加密，最后由服务器在内存当中生成一个对称加密密钥。
    * 服务器生成的密钥只存于内存，不存于任何数据库，每个用户都不一样，服务器重启或者用户再次连接则变化。
    * 文件在传输过程数据会加密，存到本地之后，会解密。
    * 目前在一定程度上，没达到企业级别的安全程度，未来考虑让用户自己设置只存于本地的密钥，但使用会更复杂。(TODO 使用 gpg 密钥对服务器)

11. APP 登录失败

  答：

    则请确认对应的 WIFI 或 4G 网络是事打开，如以下图所示：

![打开网络](doc/loginfailed/login-wifi.JPG)
![失败示例](doc/loginfailed/login-failed.png)

