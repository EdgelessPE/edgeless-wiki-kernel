# Edgeless 生命周期钩子 <Badge text="4.0.0+" /> <Badge text="结束周期钩子 4.0.3+" />

## 简介

Edgeless 生命周期分为启动周期和结束周期，可以在 Edgeless 运行时的不同周期位置运行用户的指定脚本，支持`.wcs` `.cmd`格式的脚本

## 启动周期

现阶段共提供 5 个启动周期的钩子位置，其中红色的位置可以执行预处理操作，绿色的位置可以执行后置优化操作；其中`onDesktopShown` `onBootFinished`周期钩子为*异步并发*执行，其余周期钩子为*同步顺序*执行

- `onDiskFound`
- `beforeLocalBoost`
- `beforePluginLoading`
- `onDesktopShown`
- `onBootFinished`

![](https://pineapple.edgeless.top/picbed/wiki/img/hooks.png)

## 结束周期

从用户的关机/重启指令发出到 Edgeless 系统关闭的一段时间称为结束周期，在这个周期位置可以进行指定数据保存等操作；此周期钩子为*同步顺序*执行

- `onExit`

## 使用方法

1. 在 Edgeless 启动盘中新建文件夹，位置为`U盘:\Edgeless\Hooks`
2. 编写脚本后将脚本放置于周期名称文件夹中，例如编写了需要在`onDiskFound`处运行的脚本，则将其放置在`U盘:\Edgeless\Hooks\onDiskFound`

![](https://pineapple.edgeless.top/picbed/wiki/img/015750.jpg)

## 注意事项

- （重要）由于大部分插件的载入是异步并发且无法被追踪的，因此我们暂时无法提供类似于`当所有插件加载完毕`的周期位置；近似的，请在`onBootFinished`处运行此类钩子；并且为了保证此时的插件都能加载完毕，建议在脚本开头加入延时命令
- 脚本的默认工作目录为`X:\Windows\System32`，请注意使用`cd`命令切换到实际需要的工作目录中
- 可以在同一位置放置任意数量的脚本，这些脚本都会被运行
- 启动后用户的自定义脚本会被复制到`X:\Program Files\Edgeless\system_hooks`中然后运行，这个文件夹内已经存放了一些以`_`开头的脚本如`_Preset.wcs`，这些脚本为 Edgeless 预置钩子脚本，为保障 Edgeless 正常运行请勿移动或删除他们
- 可以通过查看日志（开始菜单-Edgeless 服务-查看日志）观察您的自定义钩子脚本是否正确运行
