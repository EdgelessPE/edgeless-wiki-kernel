# 不想用 Ventoy 启动？
由于一些原因，你可能不希望使用 Ventoy 启动你的 Edgeless，我们提供了一种不推荐使用的替代方案供你参考，但是请注意此方案的缺陷对你造成的影响。

## 缺陷
- 不支持在 Hub 升级、获取内测
- 使用 FAT32 文件系统无法存储4GB以上大文件；使用 NTFS 文件系统则文件系统日志的频繁读写可能导致 U 盘物理损坏

## 方案
使用 [Rufus](https://rufus.ie/zh/) 写入 [Edgeless 镜像](/faq/getiso.md)到 U 盘。可选 `FAT32` 或 `NTFS` 文件系统。

![](https://pineapple.edgeless.top/picbed/wiki/img/rufus.png)