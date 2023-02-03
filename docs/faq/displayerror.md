# 显示器显示分辨率超出范围
## 症状表现

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1582818245415.png)

（图片来自网络）

## 原因分析
Edgeless自带的自动分辨率调节工具将分辨率设置过高导致显示器无法接受，此问题多见于仍在使用老旧显示器的电脑上

## 解决方法
### Legacy引导模式
* 3.1.0 及以下版本：重启回正常系统，参考[官方的自定义玩法](../playground/config.md)进行分辨率限制

* 3.1.0 以上版本：按下`Shift+F9`组合键即可

### UEFI引导模式
在启动时选择`Edgeless (1024x768)`进入即可