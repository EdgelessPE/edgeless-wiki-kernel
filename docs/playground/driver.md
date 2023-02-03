# 为Edgeless添加自定义驱动（插件包法）
> 查看[修改wim法（不推荐）](driver_old.md)

由于Edgeless仅包含兼容驱动，因此可能无法支持部分小众型号硬件的正常使用，此时就需要您手动为Edgeless添加对应的驱动。

:::warning 警告
请不要尝试使用此方法为Edgeless添加显卡驱动！

此方法也无法保证驱动可以完美运行，仅适用于驱动简易设备
:::

1. 首先**确保本地系统可以正常驱动您的设备**，然后下载[Dism++](http://www.chuyu.me/zh-Hans/)，解压运行Dism++主程序

2. 在当前系统的会话中导出需要为Edgeless安装的驱动到某个空白文件夹中，此处以有线网卡驱动为例

![](https://pineapple.edgeless.top/picbed/wiki/img/011508.jpg)

3. [下载驱动插件包模板](https://cno.lanzoui.com/ixSH1roow0h)并解压，删除掉 `myDrivers` 文件夹内的预置文件，然后将导出的驱动放到 `myDrivers` 文件夹内

![](https://pineapple.edgeless.top/picbed/wiki/img/171008.png)

:::tip
支持在子目录中搜索驱动，你可以同时导出多个驱动并放置在 `myDrivers` 文件夹的子目录中
:::

4. 返回上级目录，将全部文件压缩为插件包，然后启动Edgeless进行测试

![](https://pineapple.edgeless.top/picbed/wiki/img/171043.png)