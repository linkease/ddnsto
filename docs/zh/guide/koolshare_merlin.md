## 获取Token

1. 打开ddnsto.com，点击右上角微信登录。

   ![image-20210201221421068](./koolshare_merlin/image-20210201221421068.png)

2. 登录成功后，复制右上角令牌(Token)。

   ![image-20210201221633684](./koolshare_merlin/image-20210201221633684.png)

## 路由器设置 

### 1. KS梅林固件
   KS梅林固件，在软件中心搜索并安装ddnsto插件。

   ![image-20210201222044149](./koolshare_merlin/image-20210201222044149.png)

   安装后开启并设置token。

   ![image-20210201222256261](./koolshare_merlin/image-20210201222256261.png)

### 2. KS LEDE固件  
   KS LEDE固件，在酷软中心搜索并安装ddnsto插件。

   ![image-2021022400000001](./koolshare_merlin/image-2021022400000001.png)
   
   安装后开启并设置token。
   
   ![image-2021022400000002](./koolshare_merlin/image-2021022400000002.png)
   
### 3. OpenWrt固件 
   OpenWrt固件开发者众多，部分固件不自带ddnsto，可通过以下任一脚本轻松安装：

   via curl
```
sh -c "$(curl -sSL http://firmware.koolshare.cn/binary/ddnsto/openwrt/install_ddnsto.sh)"
```
   via wget
```
sh -c "$(wget --no-check-certificate -qO- http://firmware.koolshare.cn/binary/ddnsto/openwrt/install_ddnsto.sh)"
```
   others
```
cd /tmp; wget --no-check-certificate http://firmware.koolshare.cn/binary/ddnsto/openwrt/install_ddnsto.sh; sh ./install_ddnsto.sh
```
   在OpenWrt TTYD终端中输入任一上述命令，会自动安装完成。

   ![image-2021022400000003](./koolshare_merlin/image-2021022400000003.png)
   
   ![image-2021022400000004](./koolshare_merlin/image-2021022400000004.png)

   或者putty、MobaXterm等软件登陆SSH，输入任一上述命令，会自动安装完成。

   ![image-2021022400000005](./koolshare_merlin/image-2021022400000005.png)
   
   ![image-2021022400000006](./koolshare_merlin/image-2021022400000006.png)
 
   ![image-2021022400000007](./koolshare_merlin/image-2021022400000007.png) 

   然后找到DDNS.to内网穿透，启用并设置token。

   ![image-2021022400000008](./koolshare_merlin/image-2021022400000008.png) 

### 4. 群晖固件 

   从https://firmware.koolshare.cn/binary/ddnsto/synology/下载套件并上传安装。

   ![image-20210204235851709](./koolshare_merlin/image-20210204235851709.png)

   填入刚刚从官网复制的令牌(Token)，点击下一步完成安装。

   ![image-20210204235956264](./koolshare_merlin/image-20210204235956264.png)

   即可在面板看到ddnsto。

   ![image-20210205000203910](./koolshare_merlin/image-20210205000203910.png)
   
### 5. 威联通

  下载对应自己版本的 [QNAP插件](https://firmware.koolshare.cn/binary/ddnsto/qnap/)

  如果不知道自己的平台，一般来说是 DDNSTO_xxx_x86_64.qpkg

#### 离线安装

   ![qnap-install](./koolshare_merlin/qnap-install.jpeg)

#### 安装好了，要配置

  token 从官网拿，填入提交就可以了。然后回到官网去配置域名。

  注意 QNAP 的域名端口是 8080，比如配置内网地址为： http://127.0.0.1:8080

   ![qnap-config](./koolshare_merlin/qnap-config.jpeg)

### 6. 爱快/Docker

1. TOKEN: 你从官网拿到的 token。
2. DEVICE_IDX: 默认0，如果设备ID重复则为1-100之间。
3. PUID/PGID 不知道可不填

```
docker run -d \
    --name=<container name> \
    -e TOKEN=<填入你的token>
    -e DEVICE_IDX=<默认0，如果设备ID重复则为1-100之间>
    -v /etc/localtime:/etc/localtime:ro \
    -e PUID=<uid for user> \
    -e PGID=<gid for user> \
    linkease/ddnsto
```

注意要替换 "<>" 里面的内容，且不能出现 "<>"

[镜像地址](https://hub.docker.com/r/linkease/ddnsto/)

### 7. 老毛子Padavan
   扩展功能-花生壳内网，然后右侧选择ddnsto，启用并设置token。(Ps：某些纯净版的Padavan无法启用)

   ![image-2021022400000009](./koolshare_merlin/image-2021022400000009.png)

### 8. ReadyNAS

* 支持以下ReadyNAS存储设备：

| ![ARM设备](/ARM_button.png) | ![x86设备](/x86_button.png) |![x86设备](/x86_button.png)  |
| --------         |------|-----|
| ReadyNAS 102        | ReadyNAS 312        | ReadyNAS 626X        |
| ReadyNAS 104        | ReadyNAS 314        | ReadyNAS 628X        |
| ReadyNAS 202        | ReadyNAS 316        | ReadyNAS 716X        |
| ReadyNAS 204        | ReadyNAS 422        | ReadyNAS 2304        |
| ReadyNAS 212        | ReadyNAS 424        | ReadyNAS 2312        |
| ReadyNAS 214        | ReadyNAS 426        | ReadyNAS 3130        |
| ReadyNAS 2120       | ReadyNAS 428        | ReadyNAS 3138        |
|        -            | ReadyNAS 516        | ReadyNAS 3220        |
|        -            | ReadyNAS 524X        | ReadyNAS 4220        |
|        -            | ReadyNAS 526X        | ReadyNAS 3312        |
|        -            | ReadyNAS 528X        | ReadyNAS 4312        |

#### 安装程序
* 1， [下载](https://firmware.koolshare.cn/binary/ddnsto/readynas/ddnsto_all.deb)以 **.deb** 结尾的安装程序
* 2， 进入ReadyNAS管理界面，点进 **应用程序**
* 3， 选择上传并安装应用程序

![安装图解1](./koolshare_merlin/readynas-1.jpg)
![安装图解2](./koolshare_merlin/readynas-2.jpg)
![安装图解3](./koolshare_merlin/readynas-3.jpg)
![安装图解4](./koolshare_merlin/readynas-token.jpg)
   
## 穿透设置

   回到ddnsto.com用户中心，刷新等待设备出现在界面上。如长时间没有出现请查看【常见问题】！

   ![image-20210201223322255](./koolshare_merlin/image-20210201223322255.png)

## 添加域名

1. 用户中心出现设备后，点击添加域名映射"+"。

   ![image-20210201224437222](./koolshare_merlin/image-20210201224437222.png)

2. 添加域名前缀，请使用小写字母或数字，并且大于6个字符。如前缀是"kool666"，那么访问路由器的地址就是https://kool666.kooldns.cn:443 ,在目标主机一栏填入路由器LAN口IP地址，如http://192.168.50.1:80 ( 端口如果是80，可以省略端口如：http://192.168.50.1 。非80端口则不能省略，如http://192.168.50.11:5000 ，请根据实际情况填写！)，填写完毕后点击"✔️"提交。

   ![image-20210203210534480](./koolshare_merlin/image-20210203210534480.png)

   提交后可以看到完整的访问地址"https://kool666.kooldns.cn:443"已经录入了！

   ![image-20210201224634676](./koolshare_merlin/image-20210201224634676.png)

   成功添加后请稍等1分钟左右即可正常访问。如果提交后立刻访问，可能会看到下面的错误页面，此时插件还正在重启。

   ![image-20210202233021317](./koolshare_merlin/image-20210202233021317.png)

3. 通过访问绑定的域名即可访问路由器，首次访问可能需要微信登录验证。

   ![image-20210201232105052](./koolshare_merlin/image-20210201232105052.png)



补充几种特殊设置说明：

- merlin shellinabox插件设置

  shellinabox插件域名前缀的格式是固定的，是在你路由器的域名前缀后面添加“-cmd”，映射地址填路由器LAN口IP加端口4200。像我们前面设置的路由器前缀是kool666,则shellinabox插件域名前缀就是“kool666-cmd”，目标主机地址为http://192.168.50.1:4200

  ![image-20210202235150872](./koolshare_merlin/image-20210202235150872.png)

  ![image-20210202235216315](./koolshare_merlin/image-20210202235216315.png)

  成功！

  ![image-20210202235804318](./koolshare_merlin/image-20210202235804318.png)

- aria2远程下载设置

  请参考小宝大神的[教程](https://koolshare.cn/thread-144886-1-1.html)

- 群辉穿透设置(偷懒直接复制clang大神的教程了)

  因为使用https穿透后群辉的自动跳转会出现问题，所以需要自己补齐链接

  假如群辉的IP是192.168.50.11，并且绑定了域名https://nas6666.kooldns.cn/

  但这个链接是不能访问nas的！！！

  

  **需要在链接后加上** **webman/index.cgi 也就是说完整链接为：**
  **https://nas6666.kooldns.cn/webman/index.cgi**
  **用HTTP协议访问可以忽略上面的这个问题：http://nas6666.kooldns.cn:5000/ 这个就可以直接访问了，不需要手动补齐**

  

  点击切换到http即可方便的切换

  ![image-20210203001526915](./koolshare_merlin/image-20210203001526915.png)

  还可以来回切换 https和http呢！

  ![image-20210203001606683](./koolshare_merlin/image-20210203001606683.png)

## 通道和套餐

为了满足ddnsto更健康的发展，需要大家多多支持！现在推出了26 元一年的套餐，每个套餐可以绑定一台设备。

同时我们也增加了新的服务器(通道)以满足更多用户的稳定使用。

切换通道后，有几点需要注意的：

- 域名前缀也会随之改变，如现在除了原有的"ddnsto.com",还多了默认的"kooldns.cn"
- 切换通道后ddnsto插件会有1分钟左右的初始化时间，期间绑定的域名会不可用，请稍等再尝试
- 切换后原有的域名将不可使用，如"aaa.kooldns.cn"切换到了"aaa.ddnsto.com"之后，原有的"aaa.koolddns.cn"将不可使用。

