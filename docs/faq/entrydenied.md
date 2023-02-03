# 进不了PE或进入后黑屏
## 症状表现
* 显示`Invalid signature detected.Check Secure Boot Policy in Setup`

![](https://pineapple.edgeless.top/picbed/wiki/img/0f56970a304e251fd6d0ca55ab86c9177e3.jpg)

（图片来自百度贴吧）

* 电脑无法引导进入U盘
* Ventoy引导成功后无法启动Edgeless
* 有U盘悬浮窗、加载提示等，但是explorer没有启动
* 在Windows Boot Manager界面报错
* 进入PE后蓝屏


![](https://pineapple.edgeless.top/picbed/wiki/images/QQpic20190531124822.jpg)

（图片来自内测群成员@重名 已做涂抹处理）


![](https://pineapple.edgeless.top/picbed/wiki/images/QQpic20190531130507.jpg)

（图片来自内测群成员@Scorpioღ）

## 原因分析
1. 未关闭安全启动，启动Ventoy需要进入BIOS关闭安全启动

2. 电脑年代久远或内存大小不足（3.2.0版本需要4GB以上内存）

:::danger 警告
Edgeless不是维护用PE，请不要在配置过时的或奇奇怪怪的机器上启动Edgeless！
:::

3. Ventoy引导启动失败，参考[启动盘制作失败](fail2burn.md)

4. U盘为劣质产品或者经历了频繁读写出现了物理损坏（比如长期使用NTFS作为U盘分区文件系统）
![](https://pineapple.edgeless.top/picbed/wiki/images/gos.png)

（图片来自内测群成员@F✺K✺B）


## 解决方法
* 关闭安全启动，通常位于`Secure-Secure Boot`
> 需要启用自签名安全启动请参考[Ventoy文档](https://ventoy.net/cn/doc_secure.html)

* 如果是Ventoy启动失败，则请转至[Ventoy FAQ](https://ventoy.net/cn/faq.html)

* 更换您的U盘或电脑