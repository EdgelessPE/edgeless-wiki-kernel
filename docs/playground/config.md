# 官方的自定义玩法

## 功能开关

在 U 盘的 Edgeless 文件夹内新建一个`Config`文件夹，**下列的功能开关操作均在 Config 文件夹内进行**

:::tip 提示
**推荐使用 Edgeless Hub 配置功能开关，免去手动操作的麻烦**
:::


### 启动时使用自定义分辨率/禁止自动调节分辨率 <Badge text="2.2.0+" />

新建一个文本文件命名为“分辨率.txt”，内容如下（PECMD DISP 命令的参数）

```
w1024 h768 b32 f60
格式：宽(w) 高(h) 色位(b) 刷新率(f)
```

:::warning 注意

1. 此开关仅适用于Legacy引导启动，对于UEFI引导在启动时选择需要的分辨率即可（如果没有分辨率选择菜单请[点击此处](../faq/resolution.md)）
2. 将内容改为`DisableAutoSuit`可以阻止 Edgeless 设置分辨率，有效解决启动过程中因为分辨率过高导致老旧显示器无法显示的问题
3. 在2.2.0版本中，分辨率.txt 应被放置在 Edgeless 文件夹内。在2.2.0以上版本中，放置在 Edgeless 文件夹内的分辨率.txt 会被自动移动到 Config 文件夹内
:::

### 使外置 Launcher 脚本的警告失效 <Badge text="2.2.0+" /> <Badge text="4.0.0-" />

新建`Developer`文件夹

（警告仍然会弹出，但是只是起到警示的作用，不会暂停外置批处理的运行）

### 禁用过期插件包检测与提醒功能 <Badge text="2.2.0+" /> <Badge text="4.0.0-" />

新建`NoOutDateCheck`文件夹

### 禁用 U 盘管家（桌面上的悬浮窗及其配套软件） <Badge text="3.0.0+" />

新建`DisableUSBManager`文件夹

### 禁用智能虚拟光驱 <Badge text="3.0.6+" />

新建`DisableSmartISO`文件夹

禁用之后资源管理器将会接管.iso 文件的关联

### 展开资源管理器上方功能区 <Badge text="3.0.5+" /> <Badge text="4.0.0-" />

新建`UnfoldRibbon`文件夹

### 电源键默认重启 <Badge text="3.1.0+" />

新建`RebootDefault`文件夹

### 禁用回收站 <Badge text="3.0.6+" />

新建`DisableRecycleBin`文件夹

### 启用全局无人值守安装 <Badge text="3.0.0+" />

新建`AutoUnattend`文件夹：运行原版 Windows 镜像的 setup.exe 或使用 NTSetup 时，程序会自动使用 Edgeless 内置的无人值守文件作为系统安装的自动应答文件
:::tip 提示
1.  理论上支持 Windows7/8/8.1/10/2008/2008 R2/2012/2012 R2/2016/2019
2.  基本能力：免填写安装序列号、自动开通免密码的 Administrator 账号（隶属于 Administrators 组）登录桌面；中文环境、时区选择、网络等等 OOBE 配置
3.  方案来源于[无忧启动论坛](http://bbs.wuyou.net/forum.php?mod=viewthread&tid=414837)，感谢[chiannet](http://bbs.wuyou.net/home.php?mod=space&uid=282390)
:::

### 干预盘符整理过程 <Badge text="3.0.0+" />

新建`UpActDrv`文件夹：将程序找到的第一块硬盘（通常是 SSD）活动分区所在的盘符排在所有盘符之前（如果没有启用此开关，程序不改变硬盘分区盘符顺序，盘符排列的顺序和在磁盘管理软件中看到的一样）

新建`WinFirst`文件夹：如果磁盘上没有活动分区，将程序找到的第一块硬盘（通常是 SSD）含有 Windows 系统的分区盘符放在第一位；如果有活动分区，将含有活动分区所在的盘符排在第一位

:::tip 提示
由于 WinFirst 开关实际上是 UpActDrv 的高级版本，因此如果同时打开了这两个开关，程序会使用 WinFirst 开关的方案
:::

### 使用微 PE 同款的盘符整理方案 <Badge text="3.0.5+" />

> 感谢@VirallSHUO

新建`OrderDrvAnotherWay`文件夹

:::tip 提示
Edgeless 自带的盘符整理程序与[victor888](http://bbs.wuyou.net/home.php?mod=space&uid=131142)大神发布的最新版本保持同步，至少为 2019 年及之后发布的版本；而此开关调用的盘符整理程序为 victor888 大神于 2013-09-25 发布的版本，因此如果您启用了此开关但是没有看到显著的效果属于正常现象
:::

### 禁用开机启动图（LoadScreen） <Badge text="3.1.0+" />

新建`DisableLoadScreen`文件夹

虽然启用此开关能更快看到桌面，但是我们不建议在Edgeless加载过程中操作

### 挂载所有分区 <Badge text="3.1.5+" />

新建`MountEveryPartition`文件夹

### 全局浏览器主页 <Badge text="4.0.2+" />

新建`HomePage.txt`文件，在此文件中填写自定义主页

将此文件内容更改为`Disable`可禁用自动替换主页功能（缺省时会将所有浏览器插件的主页替换为无推广的百度`https://www.baidu.com`以解决部分浏览器插件的水土不服问题）

### 禁用固定浏览器到任务栏 <Badge text="4.0.2+" />

新建`DisablePinBrowsers`文件夹

***
:::warning 注意
下列内容不再于`Config`文件夹内操作，因为它们不属于功能开关
:::

## 自定义壁纸 <Badge text="2.1.0+" />

将壁纸图片转换为 jpg 格式并替换 Edgeless 文件夹内的`wp.jpg`

:::tip 提示
在2.1.4以上的版本中，您可以在桌面右击选择更换壁纸（临时更换，重启后失效）；或是使用Edgeless Hub进行永久有效的更换
:::

## 补充/替换 Windows 文件夹内的文件 <Badge text="2.1.4+" />

在 Edgeless 文件夹内新建一个`Windows`文件夹，这个目录内的文件（夹）将被覆盖复制到 X:\Windows 内

## 系统安装包文件夹 创建快捷方式 <Badge text="2.2.0+" />

将系统镜像（iso/wim/esd）放置在 U 盘**任意分区**的根目录内的`System`文件夹内，Edgeless 会为其创建桌面快捷方式

## 自定义 Launcher 启动脚本（开发者选项） <Badge text="4.0.3-" />

> 在4.0.3及以上版本中，Launcher 启动脚本的功能已被[生命周期钩子](hooks.md)取代

将批处理文件命名为`Launcher.cmd`放在 Edgeless 文件夹内