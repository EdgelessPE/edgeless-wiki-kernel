# 修改浏览器插件包
以修改Firefox插件包为例：

:::tip 提示
Opera精简版插件包的Profiles文件夹在%appdata%内，需要在完成修改后手动把里面文件拷回Opera64_v12\Opera64文件夹内

[Edgeless Hub](https://down.edgeless.top/)现已支持设置浏览器主页与固定浏览器到任务栏,更改浏览器首页无需手动修改插件包
![](https://horatio.cn/edgeless/wiki/images/browser-2.png)
:::


1. 打开自己的常用浏览器，进入书签管理器，将书签导出为HTML格式
    ![](https://horatio.cn/edgeless/wiki/images/browser-1.png)

2. **解压**Firefox插件包，运行\Firefox\FirefoxPortable.exe
    ![](https://horatio.cn/edgeless/wiki/images/browser-3.png)

3. 进入火狐的书签管理器，从HTML文件导入书签
    ![](https://horatio.cn/edgeless/wiki/images/browser-4.png)

​       也可一键导入
​       ![](https://horatio.cn/edgeless/wiki/images/browser-5.png)


4. 如果你想给浏览器拓展组件等，请相应地进行配置

5. 定制完成后按下Ctrl+Shift+Delete快捷键，精简部分数据以加快插件包加载速度

![](https://horatio.cn/edgeless/wiki/images/browser-6.png)

6. 完成之后**回到插件包的解压目录**，将修改后的文件夹和一个外置批处理（Firefox.wcs）压缩为7z，在Edgeless中测试是否可用
![](https://horatio.cn/edgeless/wiki/images/browser-7.png)