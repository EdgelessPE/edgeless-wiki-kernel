# 替换镜像启动

此方法适合已经制作了启动盘的用户免格式化使用 Edgeless，并且获得宿主 PE 优秀的兼容能力

1. 打开 ISO，将 Edgeless 文件夹复制到 U 盘的文件目录内

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1581509927718.png)

2. 使用 DiskGenius 等可以管理 U 盘隐藏分区的软件替换 EFI 分区的.wim 文件，这里以 UD 方案制作的启动盘为例
3. 选择 EFI 分区并点击浏览文件

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1581510282130.png)

4. 查找.wim 文件并进行替换

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1581510336375.png)
:::tip 注意

1. 如果宿主 PE 制作时划分的分区太小导致 Edgeless 的 wim 文件无法复制进分区，则需要清空 U 盘重新制作
2. 一些 PE（如微 PE）为了增强兼容性，可能会向 U 盘写入两份.wim 文件放在不同的分区内，这种情况下两份文件都需要替换
   :::
