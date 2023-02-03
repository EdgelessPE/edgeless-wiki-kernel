# 寄生启动
Edgeless拥有强大的兼容能力，您可以使用已有的PE寄生启动Edgeless来实现“一盘两用”。这样您就可以兼顾维护PE的易用和Edgeless的强大能力
:::tip FAQ
- Q：如何判断我的PE能不能寄生启动Edgeless？

- A：以Legacy（传统）模式启动该PE，翻看菜单，查找类似于“启动自定义ISO/IMG镜像”“运行SISO引导器”“文件管理”的功能。如果有就说明此PE支持寄生启动Edgeless。

- Q：寄生启动支持UEFI吗？

- A：根据我们了解到的最新消息，已经有了在UEFI下可用的引导菜单。但是我们测试了其中一个号称支持ISO启动的维护系统，没有成功。因此目前我们暂时认为寄生启动支持UEFI，但是是否可行则完全取决于宿主PE是否完善了其UEFI引导菜单下的ISO启动功能。
:::

本节内容以“优启通”为例演示如何通过寄生启动启动Edgeless（优启通没给赞助哦，纯粹供演示使用。由于各PE实现这一功能的组件基本都一样，因此对其他PE也都适用）

1. 在已写入优启通的U盘内新建一个文件夹“ISO”，放置Edgeless的ISO镜像
:::tip 提示
此文件夹是优启通指定的存放自定义ISO镜像的文件夹，其他PE的文件夹名称可能不是“ISO”甚至要求直接将ISO文件放在根目录内

建议翻阅宿主PE的使用说明查询或运行这一功能之后查看报错提示来判断（详见倒数第二张图片的界面）
:::

![](https://pineapple.edgeless.top/picbed/wiki/images/picture3_1561399745392.png)

1. 用WinRAR等压缩软件（或虚拟光驱软件）打开Edgeless的ISO镜像（[如何获得iso镜像](../faq/getiso.md)），**复制“Edgeless”文件夹到U盘根目录**


:::danger 重要的步骤⬆
漏掉此步骤会导致进入Edgeless后报错！
:::

![](https://pineapple.edgeless.top/picbed/wiki/images/picture2_1561399806990.png)


3. 对U盘根目录内的Edgeless文件夹进行操作，如放置壁纸、添加插件包等
2. 以Legacy（传统）模式启动优启通

![](https://pineapple.edgeless.top/picbed/wiki/images/IMG_20190625_014946_1561400365782.jpg)

5. 选择“运行其他工具-运行自定义映像”

![](https://pineapple.edgeless.top/picbed/wiki/images/IMG_20190625_014955.jpg)
![](https://pineapple.edgeless.top/picbed/wiki/images/IMG_20190625_015003.jpg)

6. 选中Edgeless的镜像并回车，启动Edgeless

![](https://pineapple.edgeless.top/picbed/wiki/images/IMG_20190625_015012.jpg)
![](https://pineapple.edgeless.top/picbed/wiki/images/IMG_20190625_015055.jpg)