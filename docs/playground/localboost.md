# Edgeless LocalBoost <Badge text="3.1.3+" />

## 什么是LocalBoost
将插件安装到本地磁盘的加速仓库中而非内存中，以加速Edgeless在此电脑上的启动速度，并有可能保留插件运行的用户数据（由插件运行性质决定）

使用LocalBoost后，可缩短80%的插件载入时间，以极大的提高Edgeless的启动速度，并且不会因为插件过多导致Edgeless崩溃卡顿

## LocalBoost的局限性
* 只能针对某台电脑实现加速，更换电脑启动时需要重新安装一次插件到新电脑的加速仓库中
* 需要占用本地磁盘空间

## 如何使用LocalBoost
### 启动时加载
1. 打开`U盘:\Edgeless\Resource`，将需要以LocalBoost形式安装的插件拓展名由`.7z`更改为`.7zl`
![1.jpg](https://pineapple.edgeless.top/picbed/wiki/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202021-02-03%20173356.jpg)
2. 启动Edgeless，启动时会弹出LocalBoost仓库选择，选择本地的某个可用分区即可，插件将会被安装至`此分区:\Edgeless\BoostRepo`

![2.jpg](https://pineapple.edgeless.top/picbed/wiki/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202021-02-03%20173800.jpg)

:::tip 提示
此时关闭对话框，则所有的`.7zl`插件都不会被安装

如果程序扫描到本地已经存在加速仓库目录，则会直接将此插件安装到该仓库中，不会弹出选择界面
:::

### 热加载（启动后加载）
1. 在`.7z`文件上右键-作为插件包加载，或是双击`.7zf` `.7zl`文件，会弹出插件加载对话框
![3.jpg](https://pineapple.edgeless.top/picbed/wiki/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202021-02-03%20174045.jpg)
2. 选择LocalBoost，点击安装，程序会将此插件包安装至先前扫描到的默认加速仓库（BoostRepo）中![4.jpg](https://pineapple.edgeless.top/picbed/wiki/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202021-02-03%20174221.jpg)
:::tip 提示
如果先前扫描时此电脑中尚未存在可用的加速仓库，则会弹出LocalBoost仓库选择，选择本地的某个可用分区即可
:::


## 从加速仓库删除插件
浏览目标分区的加速仓库目录`此分区:\Edgeless\BoostRepo`，将需要删除的插件文件夹删除即可
![5.jpg](https://pineapple.edgeless.top/picbed/wiki/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202021-02-03%20174534.jpg)

## 兼容性问题
由于Edgeless核心不完整导致cmd和wcs脚本无法正常识别软连接符号，部分需要执行绿化操作才能正常使用的插件会无法启动，称之为不兼容LocalBoost，我们会努力尝试解决这一问题。

现阶段，载入器会对可能不兼容LocalBoost的插件弹出提示。

## 开发者：被LocalBoost加载的标识 <Badge text="3.1.4+" />

开发者可以通过判断插件依赖目录中是否包含`_LocalBoost.txt`文件来识别此插件是否通过LocalBoost加载，`_LocalBoost.txt`中记录了此目录的真实路径

![6.jpg](https://pineapple.edgeless.top/picbed/wiki/img/135929.jpg)