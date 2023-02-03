# 修改浏览器插件包
以修改Firefox插件包为例：

:::warning 警告
此教程使用的Firefox插件包已经过期，仅供参考
:::

:::tip 提示
Opera精简版插件包的Profiles文件夹在%appdata%内，需要在完成修改后手动把里面文件拷回Opera64_v12\Opera64文件夹内
:::


1. 打开自己的常用浏览器，进入书签管理器，将书签导出为HTML格式
![](https://pineapple.edgeless.top/picbed/wiki/images/picture4_1556378244510.png)

1. **解压**Firefox插件包，运行\Firefox61\Firefox\Firefox.exe
![](https://pineapple.edgeless.top/picbed/wiki/images/picture5.png)

1. 进入火狐的书签管理器，从HTML文件导入书签
![](https://pineapple.edgeless.top/picbed/wiki/images/picture6.png)

1. 如果你想给浏览器定制主页/搜索引擎/拓展组件等，请相应地进行配置

1. 定制完成后按下Ctrl+Shift+Delete快捷键，给Profiles文件夹瘦身以加快插件包加载速度

![](https://pineapple.edgeless.top/picbed/wiki/images/picture7.png)

6. 完成之后**回到插件包的解压目录**，将修改后的文件夹和一个外置批处理（Firefox.cmd）压缩为7z，在Edgeless中测试是否可用
![](https://pineapple.edgeless.top/picbed/wiki/images/scshot2_PicViewer.png)