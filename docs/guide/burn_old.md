[遇到了问题？点此查看本节内容的FAQ](../faq/fail2burn.md)


1. 下载制作工具（无需手动下载ISO镜像），并根据需要下载插件包
注意要**下载到本地硬盘**啊，下载到U盘就是我刷我自己的死循环了（会提示设备繁忙）


得到的文件如图：![](https://pineapple.edgeless.top/picbed/wiki/images/picture1.png)


1. 第二步：解压启动盘制作工具的压缩包，得到“启动盘制作工具”文件夹![](https://pineapple.edgeless.top/picbed/wiki/images/picture2.png)


1. 将空U盘（至少1GB，推荐4GB以上容量且支持USB3.x协议）插入电脑
如插入写入了旧版本Edgeless的U盘，则会提升进行升级

>山寨劣质U盘可能导致启动时无法正常加载必要组件包与插件（启动报错），请选用知名品牌的正品U盘制作Edgeless启动盘！


1. 进入“启动盘制作工具”文件夹，运行“制作启动盘.exe”![](https://pineapple.edgeless.top/picbed/wiki/images/4.png)


1. 第五步：如果是全新制作，程序会自动开始下载ISO镜像
> 如果是升级，程序也会自动进行相关操作
![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1584627944381.png)

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1584627897300.png)



*****

## 全新制作步骤引导
1. 下载镜像完成之后会出现写入方案选择界面（非Win10系统只会出现两个选项），我们建议先尝试使用方案一写入，输入`1`并回车然后按`Y`确认（如果方案一制作失败请换用其他方案）
![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1584628113377.png)

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1584628357285.png)

2. 接着程序会要求清空U盘，注意拔出其他USB存储设备避免程序误判，确认盘符无误按`Y`即可清空
![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1584628598611.png)

3.留神清空过程中有没有报错，如果出现报错可能需要低级格式化启动盘然后再继续，如果没有报错按任意键即可
![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1584628750424.png)

4. 程序自动弹出不要更改默认选项的警告和UltraISO的写入界面，直接点击`写入`即可
![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1584629113152.png)

5. 等待写入完成，然后点击`返回`按钮或者关闭UltraISO的写入窗口（请勿关闭启动盘制作工具）

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1584629202568.png)
【出现如下状态（进度条清空）说明写入已经完成，点击`返回`按钮或者关闭此窗口】
![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1584629274637.png)

6. 等待制作工具完成写入之后的处理工作，直到弹出此对话框、写入工具退出说明Edgeless启动盘已经写入成功

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1584629428509.png)

7. 如果在写入过程中出现了问题，请[加入内测群](https://home.edgeless.top/jump/qqg.html)并提交`Log.txt`进行反馈（如果您进行了重试，请一并提交`Log_backup.txt`）

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1584629646552.png)