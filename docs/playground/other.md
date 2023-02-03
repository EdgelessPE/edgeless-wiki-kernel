# 其他姿势启动

**仅供参考，不提供具体的技术支持**。如果您有好的建议，欢迎在内测群反馈，感谢您的帮助！

由于 Edgeless 的启动加载具有**需要二次加载的特殊性**，如果不使用 U 盘刻录启动这种方式的话可能会在启动时遇到一些困难。

下面罗列了一些并不是很推荐使用的启动方式，感兴趣的同学们可以折腾一下玩玩

:::tip 提示
在实践这些启动方式之前，建议先了解一下如何使用 UltraISO 对 Edgeless 的镜像文件进行编辑。具体内容参考[在虚拟机内启动](../develop/devenvironment.md)章节
:::

:::warning 注意
无论您采用何种方式启动 Edgeless，请确保在 U 盘的根目录中存在`Edgeless`文件夹，此文件夹并非由您手动创建，而是从 Edgeless 的 ISO 镜像中复制得到
:::

## 获取 ISO

[点击查看](../faq/getiso.md)

## 在虚拟机内启动

[点击查看](../develop/devenvironment.md)

## 使用 DriveDroid 挂载启动（参考）

[点击查看](https://www.coolapk.com/feed/11167765?shareKey=M2NmM2IyMjkzNjE1NWNhZGM0MTE~&shareUid=1077555&shareFrom=com.coolapk.market_9.1-alpha3)

## 寄生启动

[点击查看](../playground/parasitism.md)

## 安装到移动硬盘

在写入 Ventoy 时勾选`配置文件-显示所有设备`，然后按照正常步骤完成制作

![](https://pineapple.edgeless.top/picbed/wiki/img/010154.jpg)


:::tip 上文没有提到你想要的启动方式？
Edgeless 提供的内核具有很高的精简度与自由度，其启动逻辑基本符合微软官方提供的 WinPE 的逻辑。因此您还可以以各种各样的方式启动 Edgeless。

而要使其能正确使用 Edgeless 的插件等相关功能，您只需要做到：

**在某一盘的根目录内放置 Edgeless 文件夹**

Edgeless 文件夹的内容必须符合规范（可通过挂载 Edgeless 官方提供的 ISO 镜像获取）。如果多个根目录下都存在符合条件的 Edgeless 文件夹，内核会选择初次启动时盘符相对靠前的进行操作
:::
