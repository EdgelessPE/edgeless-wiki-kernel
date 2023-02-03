## 仅本地系统识别不了exFAT分区

这个问题困扰了我们很久，终于找到了答案：
![](https://pineapple.edgeless.top/picbed/wiki/images/QQpic20190615221709.png)

 （图片来自内测群成员@nszxgesx）

与 @杉 讨论后得知，这个问题是**Windows10以下系统**的通病：无法为移动设备的第二个分区分配盘符

目前只能建议各位尽快升级到原版Windwos10系统。如果不希望或是不方便更换系统，请：
1. 删除新建的分区
2. 把空间分配给原分区
3. 直接在原分区（卷标为“Edgeless”）存放文件



**2020-3-9续**：

根据热心用户 @Billraozihan 的来信，存在一种无需升级系统解决此问题的方法
 @Billraozihan的来信原文（十分感谢来信）：

>在设备管理器内给u盘设备安装 **“cfadisk.inf”** 驱动（可在网上搜到，好像分x86和x64）。如果安装失败，设置[允许未签名的驱动](https://www.cnblogs.com/liujx2019/p/10620769.html)：**bcdedit.exe /set nointegritychecks on**(可能会降低电脑安全性）
这个方法是我一年前给树莓派安装win10 arm时发现的，当时的系统版本没记错是win10 1803。



## PE与本地系统均无法识别exFAT分区
请依次尝试：
1. 升级到最新版本的启动盘制作工具重新制作启动盘，然后再进行分区
2. 更换分区工具，如 [傲梅分区助手](https://www.disktool.cn) 进行操作
2. 更换U盘