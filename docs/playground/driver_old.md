# 为Edgeless增加自定义驱动（修改wim法，不推荐）

由于Edgeless仅包含兼容驱动，因此可能无法支持部分小众型号硬件的正常使用，此时就需要您手动为Edgeless添加对应的驱动。

:::warning 警告
请不要尝试使用此方法为Edgeless添加显卡驱动！

此方法也无法保证驱动可以完美运行，如果您生成的wim文件在使用时出现异常，请还原为官方版本
:::


1. 首先**确保本地系统可以正常驱动您的设备**，然后下载[Dism++](http://www.chuyu.me/zh-Hans/)，解压运行Dism++主程序

2. 在当前系统的会话中导出需要为Edgeless安装的驱动到某个空白文件夹中，此处以有线网卡驱动为例

![](https://pineapple.edgeless.top/picbed/wiki/img/011508.jpg)

3. 点击左上角的`文件-挂载映像`，选中Edgeless的wim文件（在启动盘的source/boot.wim或根目录Edgeless_xxxx_xxx.wim），新建一个空白文件夹作为挂载目录，然后开始挂载

![](https://pineapple.edgeless.top/picbed/wiki/img/010551.jpg)


4. 挂载完成后点击打开会话，在驱动管理中添加刚刚导出的驱动

![](https://pineapple.edgeless.top/picbed/wiki/img/011656.jpg)

5. 点击左上角`文件-另存为映像`，保存.wim文件

![](https://pineapple.edgeless.top/picbed/wiki/img/012258.jpg)

::: warning 警告
为了避免Edgeless Hub等软件对您自定义过的wim文件误判，请更改开头处的`Edgeless_`字段，如改为`myedgeless_`
:::

6. 将新的wim文件复制到启动盘根目录（对于旧版规范的启动盘，请替换`source/boot.wim`），然后启动Edgeless