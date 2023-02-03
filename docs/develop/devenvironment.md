# 开发环境的搭建
在开发过程中，经常会需要启动Edgeless环境。而每次都从U盘启动过于麻烦

本章节提供了一个构建Edgeless虚拟机环境的方法

## 准备软件
1. VMWare/VirtualBox
2. UltraISO（你可以在Edgeless Hub的 `core` 目录中找到绿色版的UltraISO）


## 准备文件
Edgeless的ISO镜像 [如何获取](../faq/getiso.md)


:::tip 提示
可以在Edgeless Hub的“开发辅助”分类中找到 VMTools 和 VirtualBoxGuest 插件

如果觉得默认分辨率过高请参考这里：[启动时使用自定义分辨率](../playground/config.md)
:::

## 创建虚拟机
* 1GB 以上 RAM（建议 2GB+ ）
* **不需要硬盘，如果设置了硬盘请勿为其建立新分区**
* 使用Edgeless的iso镜像作为虚拟光驱（CD/DVD(SATA)）
* 启动项内包含有“从光驱启动”选项

![](https://pineapple.edgeless.top/picbed/wiki/images/picture21.png)


## 读写虚拟U盘
运行UltraISO，打开Edgeless的iso镜像

![](https://pineapple.edgeless.top/picbed/wiki/images/picture22.png)

**此时，iso镜像就相当于用户写入Edgeless的U盘。你可以自由编辑iso内的文件**
>如果您是插件包开发者并且不需要依赖必要组件包中的内容，您可以用一个空的.7z包代替Nes_Inport.7z以加快启动速度

## 启动开发环境
保存UltraISO的更改，然后启动虚拟机

:::warning 注意
启动完成之后ISO会作为DVD驱动器在Edgeless中被识别且只读，需要写入请关闭虚拟机然后使用UltraISO修改iso文件
:::