# Edgeless插件包管理工具（Edgeless Plugin-packages Tool） <Badge text="3.1.2+" /> <Badge text="支持LocalBoost 3.1.4+" />

ept 的灵感来源于微软发布的 `winget` 和debian系Linux下的 `apt` ，我们为习惯这两种工具语法的用户做了语法适配

<!-- 同时，下一代 ept 的规划已经提上议程，其将成为 Edgeless 生态系统的核心部件。欢迎各位[参与此项目的讨论](https://github.com/EdgelessPE/ept-next) -->

## 快速开始
1. 在Edgeless中按下`Win+R`快捷键，输入`cmd`并回车打开命令提示符窗口
2. 以安装微信为例，输入`ept install wechat`并回车，程序会输出运行提示、插件信息和确认提示

:::tip 提示
由于此时是第一次使用，程序会自动执行`ept update`更新索引
:::

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1591520774571.png)

3. 按下`y`确认安装，程序会自动完成安装过程；如果同时想要将插件保存到启动盘，请改为按`a`

![](https://pineapple.edgeless.top/picbed/wiki/images/screenshot_1591520979325.png)
4. 此时桌面上已经出现了微信的快捷方式，插件安装成功



## 具体使用

目前初代的ept提供了以下命令：`ept install` `ept search` `ept remove` `ept update` `ept upgrade` `ept getver`

### ept install

#### 作用

安装指定插件至当前PE环境，同时也提供安装并保存插件包至启动盘的功能；当输入无效时会自动将输入内容作为关键词提交给`ept search`

#### 用法

`ept install {序号}[ -y][ -a][ -l]` 或 `ept install {软件名}[ -y][ -a][ -l]` 或 `ept install {关键词}`

#### 同义用法

`ept-install` `ept-get install`

#### 示例

`ept install 36`

此处36作为序号处理，执行安装

>插件对应的序号请使用[ept search](#ept-search)查看，这个序号会随着插件镜像源变动而变化

`ept install 36 -a`

此处36作为序号处理，执行安装并保存

`ept install qq -l`

此处qq作为软件名处理，执行通过[LocalBoost](localboost.md)安装并保存

`ept install "microsoft edge" -y`

此处microsoft edge作为软件名处理，执行安装，加引号是因为软件名中有空格

`ept install wech`

此处wech作为关键词处理，执行**搜索**，因为没有一款名为wech的软件存在

:::tip 注意
* 可以使用`-y` 或 `-a` 或 `-l`参数跳过确认，`-y`执行安装，`-a`执行安装并保存，`-l`执行通过[LocalBoost](localboost.md)安装并保存，仅对`ept install {序号}`和`ept install {软件名}`有效
* `ept install {软件名}`中的`软件名`需要全字匹配；如果软件名包含空格或特殊符号，请在软件名两侧加上英文双引号，例如`ept install "microsoft edge" -a`
* 当使用`ept install {关键词}`时事实上在调用`ept search`；在被作为关键词传递给`ept search`前，输入的内容会被尝试依次解析为有效序号、软件名；转至[ept search](#ept-search)的条目下查看更多关于`ept install {关键词}`的注意事项
* 插件包对应的序号由ept根据镜像源索引文件自动生成，会随着插件镜像源变动而变化，请勿依赖于序号安装插件（相应地使用软件名即可）

* 程序会自动查找本地所有磁盘的`\Edgeless\Resource`目录中的同名目标插件包（.7z/.7zf）以加快运行速度
:::

### ept search
#### 作用

使用关键词查找指定插件的序号

#### 用法

`ept search {关键词}`

#### 同义用法

`ept-search` `ept-cache search`

#### 示例

`ept search wechat`

:::tip 注意
* 不支持同义词转义、高级搜索、正则、标签等，请使用简洁准确的关键词搜索
* 经测试，部分输入法不支持在cmd窗口中显示候选框，请使用手心输入法或搜狗输入法
* 为了便捷，可以直接使用`ept install {关键词}`
:::

### ept remove
#### 作用

在当前PE环境中移除指定的插件

#### 用法

`ept remove {序号}[ -y]` 或 `ept remove {关键词}`

#### 同义用法

`ept-remove` `ept-get remove`

#### 示例

`ept remove wechat`

`ept remove 1`

`ept remove 1 -y`

:::tip 注意
* **必须**先使用`ept remove {关键词}`查找需要移除的插件，然后使用`ept remove {序号}`将其移除
* 可以使用`-y`参数跳过确认，仅对`ept remove {序号}`有效
* 不支持同义词转义、高级搜索、正则、标签等，请使用简洁准确的关键词搜索
* 经测试，部分输入法不支持在cmd窗口中显示候选框，请使用手心输入法或搜狗输入法
* 如果在本地的加速仓库中发现同名插件，则会将其从仓库中删除（无论此插件是否使用LocalBoost加载）
* 目前remove能做到的只是将插件的安装目录和快捷方式删除（非强制），在第二代插件包规范实行后remove的功能会进一步增强
:::

### ept update
#### 作用

更新本地的插件索引文件

#### 用法

`ept update`

#### 同义用法

`ept-update` `ept-get update`

:::tip 注意
* 当执行需要用到索引文件的其他ept命令时，如果索引文件缺失则`ept update`会被自动调用执行
:::

### ept upgrade
#### 作用

查找启动盘中插件的可用更新，同时对名称不规范的插件包文件进行提示

#### 用法
`ept upgrade[ -y][ -b]`

#### 同义用法

`ept-upgrade` `ept-get upgrade`

#### 示例

`ept upgrade`

`ept upgrade -y`

`ept upgrade -b`

:::tip 注意
* 可以使用`-y` 或 `-b`参数跳过确认，`-y`执行更新，`-b`执行更新但仅下载而不加载，以减少对U盘的频繁读写
* 过期的插件会被移动至同目录下的`过期插件包`目录中并禁用
* 如果Resource子目录文件夹内的插件有更新，新的插件包不会自动归位到原文件夹内，而是会出现在Resource文件夹根目录
:::

### ept getver
#### 作用

获取指定插件的最新版本号

#### 用法

`ept getver {软件名}`

#### 同义用法

`ept-getver` `ept-cache madison`

:::tip 注意
* 如果软件名包含空格，请在软件名两侧加上英文双引号，例如`ept getver "microsoft edge"`
* 如果软件名无效，会输出`InvaildName`，否则会直接输出版本号
* 运行一次本命令，程序会将版本号写入至`X:\Users\ept\upgrade\ver_ol.txt`；如果运行后此文本文件不存在，则说明输入的软件名无效
:::