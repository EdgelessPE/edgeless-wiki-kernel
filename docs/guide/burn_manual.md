# 如何手动写入Edgeless到U盘
:::tip 提示
如果您不正在使用Windows10 64位系统或因为其他原因无法使用Edgeless Hub制作启动盘，您可以参考本篇教程手动完成启动盘的制作，且制作完成后的启动盘符合官方规范，可以在未来被Edgeless Hub等软件正确识别
:::

:::warning 警告
请记住Edgeless定位并非是维护用PE，对旧机型的兼容性不佳，这也是我们不为您提供Edgeless Hub的原因
:::

1. 下载依赖文件

从以下链接下载依赖文件：

* [Ventoy](https://www.ventoy.net/cn/download.html)（如果您正在使用linux，请下载linux版，本教程以Windows版为例）
* [ventoy wim插件](https://pineapple.edgeless.top/api/v2/info/ventoy_plugin_addr)
* [Edgeless ISO镜像](https://pineapple.edgeless.top/api/v2/info/iso_addr)

2. 安装Ventoy

解压从第一个链接下载到的`ventoy-xxx-windows.zip`，运行`Ventoy2Disk.exe`，选中您的目标设备，点击安装
> 如果您希望安装至移动硬盘，请勾选`配置选项-显示所有设备`

![](https://pineapple.edgeless.top/picbed/wiki/img/145759.jpg)

3. 复制文件

在U盘内新建一个`ventoy`文件夹，将从第二个链接下载到的`ventoy_wimboot.img`复制到此文件夹内

![](https://pineapple.edgeless.top/picbed/wiki/img/152202.jpg)

使用压缩软件打开或直接双击挂载从第三个链接下载到的`Edgeless_xxxx_xxx.iso`，将其中的`sources/boot.wim`复制到U盘根目录，然后将其重命名为`Edgeless_xxxx_xxx.wim`

![](https://pineapple.edgeless.top/picbed/wiki/img/152504.jpg)

再复制其中的`Edgeless`文件夹到U盘根目录

![](https://pineapple.edgeless.top/picbed/wiki/img/152608.jpg)

4. 启动测试

重启电脑进入Edgeless，[如何启动](https://home.edgeless.top/guide/)

5. 安装插件

从[Edgeless下载站](https://down.edgeless.top)下载插件包，将插件包放置在`U盘:\Edgeless\Resource`目录下即可，之后进入PE时插件会被自动加载

![](https://pineapple.edgeless.top/picbed/wiki/img/010022.jpg)