# 插件包快速上手
:::warning 您可以不经过Edgeless团队的同意自由更改发布插件作品，但是请不要忘记您的道德操守。

我们不希望看到有违反Edgeless三无精神（无劫持、无广告、无收费）或是违反中华人民共和国相关法律条款的作品出现，也不会承认此类作品与我们有任何关系。

继续开发视为您已经同意此条款
:::

:::tip 分享你的劳动成果
如果您希望能上架您的插件包，请[加入内测交流QQ群](https://home.edgeless.top/jump/qqg.html)进行提交

提交前请自行测试插件能否在PE内加载并使用
:::

此章节是“开发插件包”的补充章节，帮助新手快速上手插件包开发

以DiskGenius为例，这是目前拥有的文件↓

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1579783415246.png)

1. 新建一个文件夹，名称为`DiskGenius`，将上面的文件放进这个文件夹中

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1579783498512.png)

2. 新建一个文本文档，重命名为`DiskGenius.wcs`（注意：这一步需要打开系统资源管理器的显示后缀名！）

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1579783585372.png)

3. 使用记事本打开`DiskGenius.wcs`，输入以下命令并保存：

`LINK X:\Users\Default\Desktop\DiskGenius,%ProgramFiles%\Edgeless\DiskGenius\DiskGenius.exe`

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1579783680651.png)

1. 将`DiskGenius`和`DiskGenius.wcs`添加到7z压缩文件并按照`名称_版本号_打包者.7z`命名即可完成DiskGenius插件包的制作

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1579783771844.png)


:::tip 没看懂？
本章节只是用来告诉你制作一个插件包有多简单用的（根本没打算让你看懂2333），转至下一节“常规开发”深入了解插件包
:::