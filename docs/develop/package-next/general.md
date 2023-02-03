# 下一代 Edgeless 资源包（Next-generation Edgeless Resource-package）

插件包是 Edgeless 的一大特性，它能赋予用户通过自由组合插件包增加 PE 功能的能力。初代插件包简单易懂的规范使得 Edgeless 快速获得了大量的第三方插件包，极大程度地丰富了 Edgeless 生态，但是初代插件包规范也同样存在着许多问题。在经过 2 年多的实践反馈后，我们提出了下一代 Edgeless 资源包规范。

[为什么不用...?](why-not.md)

## 概览

下一代 Edgeless 资源包（下称资源包）本质依旧是一个由 7-Zip 压缩的压缩包，为了便于区分且方便直接使用压缩软件打开，我们使用了 `.nep.7z` 作为拓展名，同样也支持 `.nep.7zf` 等带[属性](property.md)的拓展名。资源包取代了初代插件包、初代必要组件包和初代主题包/资源包，使得 Edgeless 生态更加统一，便于管理。我们也会提供转换工具将初代的包转换为下一代资源包。

资源包的内部结构大体上延续初代插件包设计，可能的结构如下：

```
- package.toml
- package.lock
- _retinue/
- PackageName/
```

或

```
- package.toml
- package.lock
- _patch
- PackageName.exe
```

显然，`package.toml` 取代了初代的外置批处理，成为描述资源包行为的唯一入口文件。

使用配置文件而不是包含绝对命令语句的批处理来描述插件包行为有非常多的好处，例如可拓展、可自定义行为、提供更便捷的高级特性等。而选用 [`TOML`](https://toml.io/cn/) 作为配置文件描述语言则是因为 `TOML` 是一种拥有良好可读性的高级描述语言，并且能很容易地被转换为 `JSON` 或其他数据结构以便被现代程序处理。

当然，我们也会提供相应的图形化配置生成器和配置检查工具以确保此文件准确地表达了你的意图。

## 目录结构

我们对资源包的目录结构有严格要求，这点与初代插件包不一样。基础的（不含[专用文件夹](exclusive-directory.md)的）资源包目录结构仅能为下列中的一种：

```
- package.toml
- package.lock
- PackageName/
```

或

```
- package.toml
- package.lock
- PackageName.exe
```

其中 `PackageName` 代指此资源包的名称；`package.lock` 用于保存加密后的时间戳信息，你可以在[资源包安全](security.md)章节看到它的作用。

假设你的资源包文件名为 `MySoftware-runtime_1.0.0_Cno.nep.7z` 且是一个绿色软件，那么你必须将此软件的主程序放置在 `MySoftware-runtime` 目录内；如果这是一个通过安装包静默安装的软件(或真单文件程序<sup>[[1]](#footnote-1)</sup>)，那么你必须将其安装包(或主程序)命名为 `MySoftware-runtime.exe` 放置在根目录下。

除了 `PackageName` 文件夹/文件和[专用文件夹](exclusive-directory.md)外，不能在根目录放置其他文件夹/文件，这样有助于保持根目录的可读性。

:::tip
你还需要[保持程序目录纯净](norm.md#保持程序目录纯净)和[保持程序目录相对性](norm.md#保持程序目录相对性)
:::

## 配置文件

### 基础信息

在 `package.toml` 的开头，我们需要你通过 `package` 表提供一些这个包的基础信息，大概是这样：

```toml
[package]
# 包名
name = "VSCode"
# 类型
type = "Software"
# 版本号
version = "1.46.0"
# 打包者/作者
# 通过附加 <@github_id>  提供对应的GitHub ID
authors = [
  "Cno <@Cnotech>",
  "Microsoft"
]
# 兼容的 Edgeless 版本（可选）
compat = [">= 4.0.0"]
# 通过测试的 Edgeless 版本
tested = ["4.0.0","3.2.1"]
```

你可以在 [API 参考](api.md#基础信息) 中查看基础信息的详细规范。

### 最重要的内容！

接下来的内容是关于如何配置插件的，这是配置文件中最重要的一个部分！它是如此的重要以至于我们需要单独分章节来讲解它。

点击前往[工作流章节](workflow.md)，我们将在那里详细讲解工作流、步骤、变量、条件、步骤组等概念。阅读完成后请返回此处并继续向下阅读剩余部分。

:::tip
下面的内容会默认你已经读完了工作流章节
:::

### 卸载工作流

与配置(`setup`)工作流相对应的是卸载(`remove`)工作流，例如：

```toml
  [remove_flow.delete_profile]
  name = "Delete profile"
  type = "File"

  operation = "Delete"
  target = "${SystemDrive}/Users/profiles"
```

卸载开始前，Edgeless 会停止此资源相关的所有服务并自动结束可能的主进程；卸载工作流执行完毕后，Edgeless 还会删掉配置时创建的文件、文件夹、快捷方式等，并询问用户是否删除保存的用户数据。

:::tip
对于便携软件来说，可能不需要执行卸载工作流，直接删除生成的程序目录即可完成卸载。对于这种情况，构建工具会检查程序的配置工作流，仅当配置工作流*不包含创建快捷方式以外的步骤*时才会允许卸载工作流为空，否则必须提供卸载工作流
:::

### 展开工作流

描述用于展开(`expand`)[内容分布式资源包](property.md#内容分布式资源包)时操作的工作流，例如：

```toml
  [expand_flow.download_installer]
  name = "Download Installer"
  type = "Download"

  url = "https://az764295.vo.msecnd.net/stable/7f6ab5485bbc008386c4386d08766667e155244e/VSCodeUserSetup-x64-1.60.2.exe"
  save = "./vscode.exe"
  md5 = "DD4DD2E97577D88B4E6E4B3BF4AA86A9"
```

### 钩子工作流 <Badge text="可选" />

[生命周期钩子](../../playground/hooks.md)可以在 Edgeless 运行时的不同周期位置运行用户的指定脚本，我们规定在 `hooks.HOOK_STAGE` 使用工作流来描述某个位置的钩子，例如：

```toml
[hooks.onDesktopShown]
  [hooks.onDesktopShown.update_vscode]
  name = "Update VSCode"
  type = "Script"

  path = "./update.cmd"
```

你可以在[生命周期钩子](../../playground/hooks.md#启动周期)章节找到所有的钩子位置，不过由于资源包加载的位置在很多钩子后，因此资源包可用的钩子只有 `onDesktopShown` `onBootFinished` `onExit`。

### 独占表

不同类型的资源包通常会拥有一些特定的表用于存放该类资源的通用信息，我们将其定义为独占表。

例如，对于软件型资源会有 `software` 表：

```toml
[software]
# 上游URL
upstream = "https://code.visualstudio.com/"
# 分类
category = "办公编辑"
# 标签
tags = ["Visual Studio Code","VSC"]
# 软件语言（Multi表示自适应多语言）
language = "Multi"
# 是否需要UAC
uac = false
# 安装位置
location = "${ProgramFiles}/Edgeless"
```

驱动型资源会有 `driver` 表：

```toml
[driver]
# 驱动程序提供商
brand = "Intel"
# 硬件类型
type = "无线网卡"
# 适用型号，默认品牌与驱动程序提供商一致
# 可以使用 品牌-型号 指定其他品牌
models = ["AX200","Killer-AX1650"]
```

:::tip
驱动型资源包还需要满足一些其他规范，请移步[驱动型资源包](driver.md)
:::

主题型资源会有 `theme` 表：

```toml
[theme]
# 标签
tags = ["Material Design","圆角"]
```
:::tip
主题型资源包还需要满足一些其他规范，请移步[主题型资源包](theme.md)
:::

你可以在 [API 参考](api.md#独占表) 中查看独占表的详细规范。

### 用户数据目录 <Badge text="可选" />

你可以指定程序的用户数据目录，这样当用户要求保存他们的数据时 Edgeless 就可以在结束周期打包这些目录，并在下次启动时恢复这些数据。

示例：

```toml
[profiles]
dir = ["${SystemDrive}/Users/profiles"]
```
你可以在 [API 参考](api.md#用户数据目录) 中查看用户数据目录的详细规范。

### 服务配置 <Badge text="可选" />

如果你打包了一个服务型程序(例如 ssh-server、vnc-server 等)，我们强烈建议你提供服务配置来控制这项服务，Edgeless 会向用户提供操作接口来控制*实现了服务配置*的服务。

示例：

```toml
[service]
# 进程名，用于判断服务运行状态
progress = "sshd.exe"
# 启用服务命令
start = "./sshd.exe"
# 停止服务命令
stop = "taskkill /im sshd.exe /t"
```
你可以在 [API 参考](api.md#服务配置) 中查看服务配置的详细规范。

### 依赖 <Badge text="可选" />

如果你的程序需要安装运行库/运行时依赖或其他资源包，你可以指定所需的依赖，加载器会自动地解决依赖关系。

示例：

```toml
[dependencies]
# 必须安装的依赖
required = [{name:"dotnet",version:"3.5"}]
# （为了达到更好的用户体验）推荐安装的依赖
suggested = [{name:"PowerShell",version:"0.0.0",remark:"推荐搭配PowerShell使用"},{name:"Nodejs-runtime",version:">=15.0.0",remark:"如果需要爬虫功能则必须安装此依赖"}]
```
你可以在 [API 参考](api.md#依赖) 中查看依赖的详细规范。

<small>
注
<br/>
<a id="footnote-1"></a>[1] 指确实仅有一个不可解压的可执行文件的程序。对于使用 7-Zip 自解压程序打包的伪单文件程序，我们建议将其解压以获得更好的性能与体验，而不是直接将单文件程序扔在根目录下
</small>
