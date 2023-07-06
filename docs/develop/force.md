# 插件包暴力封装
:::warning 您可以不经过Edgeless团队的同意自由更改发布插件作品，但是请不要忘记您的道德操守。

我们不希望看到有违反Edgeless三无精神（无劫持、无广告、无收费）或是违反中华人民共和国相关法律条款的作品出现，也不会承认此类作品与我们有任何关系。

继续开发视为您已经同意此条款
:::

:::tip 分享你的劳动成果
如果您希望能上架您的插件包，请[加入内测交流QQ群](https://home.edgeless.top/jump/qqg.html)进行提交
:::


本教程由`Copur` 编写，以微信PC端为例

原版的微信无法直接在Edgeless内运行，经过暴力封装后便能以插件包的形式直接运行

这个过程相对有些复杂，适合有一定基础的同学使用

### 准备材料
1. 微信官方版本安装包
2. VMware Workstation
3. Edgeless暴力封装专用虚拟机镜像（[百度网盘: 5km5](https://pan.baidu.com/s/1ohmM4XpESyu7YnNN2u63hg), [Onedrive](https://wdw1dev-my.sharepoint.com/:f:/g/personal/wdw1007_wdw1dev_onmicrosoft_com/EslDjZlyo59MvOZs8BcfnRABXo53MHmJ9mlxjANBhCW1iA)）

:::tip 虚拟机镜像文件sha1
Edgeless暴力封装专用虚拟机.part1.rar：59B98D301C63B9C513A9DFBFB428B43591181513
Edgeless暴力封装专用虚拟机.part2.rar：B56355E58EFAD0AABCC931C02C45F4B4443C5BD3
:::

:::tip
如果不方便下载此镜像，请自行修改Windows10的原版镜像，要求：

1. 镜像母版版本号不低于1903
2. 系统所在盘符修改为X，用户名使用Default
3. Cameyo软件
4. Procmon 分析工具
5. RegWorkshop
:::



------

### 开始封装
1. 使用`VMware`导入准备的虚拟机镜像

![](https://pineapple.edgeless.top/picbed/wiki/images/2_1581665552242.png)

2. 启动虚拟机
2. 将微信安装程序拖放至虚拟机
3. 运行桌面`Cameyo单文件打包制作v3.1.1530.0汉化增强绿色版`文件夹内的`扫描安装过程并打包.exe`

![](https://pineapple.edgeless.top/picbed/wiki/images/7_1581665615913.png)

5. 等待扫描结束
2. 扫描结束后会出现如下窗口

![](https://pineapple.edgeless.top/picbed/wiki/images/9_1581665635431.png)

7. 此时运行微信安装程序
2.  按照正常方式安装

![](https://pineapple.edgeless.top/picbed/wiki/images/11.png)

9.  点击安装已完成并再次耐心等待扫描结束
2. 建立一个Edgeless插件工作目录（如果不知道这个是什么，请先阅读父章节[开发插件包](plugin.md)）

![](https://pineapple.edgeless.top/picbed/wiki/images/14.png)

11. 编写外置批处理`wechat.wcs`
```
// 静默等待运行setup.cmd完成安装任务
exec =!"X:\Program Files\Edgeless\Wechat\setup.cmd"
// 为主程序创建快捷方式
link "X:\Users\Default\Desktop\Wechat","X:\Program Files (x86)\Tencent\WeChat\WeChat.exe"
// 删除源目录以释放空间
file "X:\Program Files\Edgeless\Wechat"
```

12.   `Wechat`文件夹内是插件的内容包（您刚刚新建完文件夹，此时这里应当是空的；此处的文件获取步骤见下方）
![](https://pineapple.edgeless.top/picbed/wiki/images/15.png)


13. `setup.cmd`用于模仿微信安装包程序的文件复制和注册表注册过程，其内容如下
```
copy \*.dll X:\Windows\SysWOW64\\\*.dll
copy \*.dll X:\Windows\system32\\\*.dll
regedit /s "X:\Program Files\Edgeless\Wechat\reg.reg"
xcopy "x:\Program Files\Edgeless\Wechat\System\\\*" "%system%\\\*" /s /e /h /f /y
xcopy "x:\Program Files\Edgeless\Wechat\Windows\\\*" "%Windows%\\\*" /s /e /h /f /y
xcopy "x:\Program Files\Edgeless\Wechat\Personal\\\*" "%Personal%\\\*" /s /e /h /f /y
xcopy "x:\Program Files\Edgeless\Wechat\Appdata\\\*" "%Appdata%\\\*" /s /e /h /f /y
xcopy "x:\Program Files\Edgeless\Wechat\Profiles\\\*" "%Profiles%\\\*" /s /e /h /f /y
xcopy "x:\Program Files\Edgeless\Wechat\Local Appdata\\\*" "%Local Appdata%\\\*" /s /e /h /f /y
xcopy "x:\Program Files\Edgeless\Wechat\Common AppData\\\*" "%Common AppData%\\\*" /s /e /h /f /y
xcopy "x:\Program Files\Edgeless\Wechat\Program Files(x86)\\\*" "%ProgramFiles(x86)%\\\*" /s /e /h /f /y
xcopy "x:\Program Files\Edgeless\Wechat\Program Files\\\*" "%ProgramFiles%\\\*" /s /e /h /f /y
```

  

14.  打开桌面`Cameyo单文件打包制作v3.1.1530.0汉化增强绿色版`文件夹内的`包编辑器By风之暇想.exe`

![](https://pineapple.edgeless.top/picbed/wiki/images/12.png)

15. 使用包编辑器打开文档文件夹内的打包exe

![](https://pineapple.edgeless.top/picbed/wiki/images/13.png)

16. 可以看到如图所示页面

![](https://pineapple.edgeless.top/picbed/wiki/images/16.png)

17. 打开注册表选项卡，并点击如图所示按钮导出注册表至工程目录内的`reg.reg`；使用`RegWorkshop`软件适当清理注册表中与程序安装无关的内容（包括用户使用痕迹）

![](https://pineapple.edgeless.top/picbed/wiki/images/17.png)

18. 打开文件选项卡，并点击如图所示按钮保存除`Icons`和`Logs`以外文件到工程目录内

![](https://pineapple.edgeless.top/picbed/wiki/images/18.png)
此时目录内应当有以下内容

![](https://pineapple.edgeless.top/picbed/wiki/images/15.png)

**至此，微信的主体程序提取完成。如果您测试程序*在Edgeless内直接运行*没有异常请直接打包为7z，否则请根据接下来的步骤进行运行库的补充**

19.  先运行`Procmon`，然后打开`微信`，并在微信上进行诸如登录之类的常用操作，然后关闭微信

![](https://pineapple.edgeless.top/picbed/wiki/images/19.png)

20. 点击如图所示按钮进行筛选

![](https://pineapple.edgeless.top/picbed/wiki/images/20.png)

21. 筛选条件如图↓

![](https://pineapple.edgeless.top/picbed/wiki/images/21.png)

22. 对事件逐个按下`Ctrl+K`按键并检查调用的函数库

![](https://pineapple.edgeless.top/picbed/wiki/images/22.png)

23. 将Edgeless缺少的函数库复制到项目文件夹的`Wechat`的文件夹根目录

>`System32`和`SysWOW64`文件夹中都存在库文件，应当复制哪个文件夹内的库文件呢？
>1. 如果目标程序是32位的（安装到`Program Files (x86)`文件夹内）则优先考虑复制`SysWOW64`中的库文件；如果目标程序是64位的（安装到`Program Files`文件夹内）则优先考虑复制`System32`中的库文件
>2. 当遵循步骤1复制出的库文件无法正常支持活动的运行时，或对应的文件夹中不存在这个库文件时，请复制另一个文件夹中的库文件

![](https://pineapple.edgeless.top/picbed/wiki/images/23.png)

24. 对`Procmon`中筛选出的所有事件进行相同操作
1. 适当修改`wechat.wcs`和`setup.cmd`以创建快捷方式
1. 为避免错误，`setup.cmd`内最好使用绝对路径，并将`SysWOW64`和`System32`的函数库分离到`SysWOW64`和`System`两个文件夹

修改后的内容如下
```
xcopy "x:\Program Files\Edgeless\Wechat\SysWOW64\\\*" "X:\Windows\SysWOW64\\\*"/s /e /h /f /y
xcopy "x:\Program Files\Edgeless\Wechat\System\\\*" "X:\Windows\System32\\\*"  /s /e /h /f /y
xcopy "x:\Program Files\Edgeless\Wechat\Windows\\\*" "X:\Windows\\\*" /s /e /h /f /y
xcopy "x:\Program Files\\Edgeless\Wechat\Personal\\\*" "X:\Users\Default\Documents\\\*" /s /e /h /f /y
xcopy "x:\Program Files\\Edgeless\Wechat\Appdata\\\*" "X:\Users\Default\AppData\\\*" /s /e /h /f /y
xcopy "x:\Program Files\\Edgeless\Wechat\Profiles\\\*" "X:\Users\Default\\\*" /s /e /h /f /y
xcopy "x:\Program Files\\Edgeless\Wechat\Local Appdata\\\*" "X:\Users\Default\AppData\Local\\\*" /s /e /h /f /y
xcopy "x:\Program Files\\Edgeless\Wechat\Common AppData\\\*" "X:\ProgramData\\\*" /s /e /h /f /y
xcopy "x:\Program Files\\Edgeless\Wechat\Program Files(x86)\\\*" "X:\Program Files (x86)\\\*" /s /e /h /f /y
xcopy "x:\Program Files\\Edgeless\Wechat\Program Files\\\*" "X:\Program Files\\\*" /s /e /h /f /y
regedit /s "X:\Program Files\Edgeless\Wechat\reg.reg"
```

27. 将工程目录封装为7z插件包

![](https://pineapple.edgeless.top/picbed/wiki/images/24.png)

28. 在Edgeless内测试获得的插件包