# API
此章节列出一些Edgeless内可用的API接口，方便开发者调用

:::tip 提示
默认所有接口都至少需要3.0.0以上版本，即使少数接口在2.x版本可用

示例均以cmd脚本作演示
:::

## **记录日志**
用法：

`echo %time% 程序名称[-部件名称]-事件详情 >>X:\Users\Log.txt`

示例：

`echo %time% Edgeless初始化程序-启动 >>X:\Users\Log.txt`

`pecmd exec cmd /c "echo %time% 插件包下载程序-检查网络连接-网络未连接 >>X:\Users\Log.txt"`

注意：
* 此日志文件为Edgeless官方日志文件，我们会要求用户在反馈问题时提交此文件的内容并及时反馈给开发者
* 可以使用管道符`>>`将其他程序的回显结果（日志所需要的内容）记录到X:\Users\Log.txt


## **弹出悬浮通知（类似于Toast）**
用法：

`"X:\Program Files\Edgeless\dynamic_creator\dynamic_tip.cmd" 延时 标题 内容`

示例：

`call "X:\Program Files\Edgeless\dynamic_creator\dynamic_tip.cmd" 3000 Edgeless欢迎程序 欢迎使用Edgeless`

注意：
* 延时、标题、内容缺一不可
* 延时参数的单位为毫秒（ms），例如示例中延时时间为3000毫秒，即3秒
* 此命令执行瞬时完成并退出，不会等待通知消失
* 不支持含空格的内容，支持在“内容”中使用转义符
* 调用此API时程序会自动将内容记录到日志文件


## **弹出弹窗提示**
用法：

`"X:\Program Files\Edgeless\dynamic_creator\dynamic_msgbox.cmd" 标题 内容`

示例：

`call "X:\Program Files\Edgeless\dynamic_creator\dynamic_msgbox.cmd" Edgeless欢迎程序 欢迎使用Edgeless`

注意：
* 标题、内容缺一不可
* 此命令执行瞬时完成并退出，不会等待提示被用户关闭
* 不支持含空格的内容，不支持转义符
* 调用此API时程序会自动将内容记录到日志文件

## **将某文件作为插件包加载**
用法：

`"X:\Program Files\Edgeless\plugin_loader\load.cmd" "文件路径"`

示例：

`pecmd exec =!"X:\Program Files\Edgeless\plugin_loader\load.cmd" "D:\Edgeless Plugins\Plugin.7zf"`

注意：
* 不对后缀名作要求，目标文件符合Edgeless插件包规范即可正确加载
* 文件路径需要使用绝对路径，支持包含空格的路径
* 文件路径两侧的双引号不可省略
* 使用此API加载插件不会重启`explorer`
* 此命令执行会等待插件加载完毕再退出
* 调用此API时程序会自动将操作记录到日志文件
* 如调用pecmd命令失败，请先使用`cd /d X:\Windows\System32`切换工作目录

## **判断Edgeless启动方式**
示例：

```
pushd"%~dp0"
cd /d "X:\Program Files\Edgeless\system_addin"
detectefi32 |find /i "Legacy" && goto BIOS || goto UEFI popd

:BIOS
echo Edgeless使用了传统模式启动
exit

:UEFI
echo Edgeless 使用了UEFI模式启动
exit
```


> 此程序和示例由[liuzhaoyzz](http://wuyou.net/home.php?mod=space&uid=298214)版主提供，感谢liuzhaoyzz大佬的分享（[原贴地址](http://wuyou.net/forum.php?mod=viewthread&tid=412368)）

## **调用EasyDown下载文件**
用法：

`"X:\Program Files\Edgeless\EasyDown\EasyDown.exe" -Down("目标地址","下载文件名","下载目录")`

示例：

`"X:\Program Files\Edgeless\EasyDown\EasyDown.exe" -Down("https://www.7-zip.org/a/7z1900-x64.exe","7z_X64.exe","X:\Users\Default\Desktop")`

注意：
* EasyDown由 @杉 开发并友情提供给Edgeless使用（感谢 @杉 ），不得未经 @杉 允许外传此程序
* EasyDown基于[ThunderSDK](https://gitee.com/cnotech/ThunderSDK)开发，支持目标重定向和多线程下载
* 如果使用以管理员身份运行的命令行窗口调用EasyDown，则将在此窗口中输出回显；否则EasyDown将在新的控制台窗口中输出回显
* 不带参数直接运行EasyDown可以打开其GUI界面
* 下载文件名和下载目录支持包含空格
* 此目录下提供了aria2c.exe <Badge text="3.1.2+" />
