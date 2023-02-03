# 进入PE后出现异常情况
## 症状表现
* 提示内存错误（最常见）
* 运行Chrome等高内存占用程序时程序崩溃
* 无法对X分区进行读写或在读写过程中出错

![](https://pineapple.edgeless.top/picbed/wiki/images/QQpic20191221164750.jpg)

（图片来自内测群成员@ThreeAnd1☆）

![](https://pineapple.edgeless.top/picbed/wiki/images/QQpic20191221164959.jpg)

（图片来自内测群成员@@汪凯在线）

## 原因分析
Edgeless运行环境内存太小，或机器的内存存在物理问题，或Edgeless镜像出现损坏

## 解决方法
1. 适当禁用部分不常用的插件然后重启电脑
2. 使用Edgeless [LocalBoost](../playground/localboost.md)安装插件
5. 手动下载、校验ISO镜像后替换U盘中对应的`.wim`文件
3. 更换内存更大的电脑/虚拟机运行或更换稳定、高速、不易错的U盘制作启动盘
4. 拔出内存条，使用橡皮擦擦拭内存条触点（金手指）并稳固安装内存条