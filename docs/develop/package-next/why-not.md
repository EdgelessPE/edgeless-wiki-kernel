# 为什么不用 ... ?
在对比了现有的数个知名 Windows 端软件包解决方案后，我们依旧认为有必要进行 Edgeless 资源包的开发工作。

对比对象：[`Chocolatey`](https://chocolatey.org/) [`Scoop`](https://scoop.sh/) [`Winget`](https://github.com/microsoft/winget-cli)

## 更轻量的运行依赖需要
由于 Edgeless 资源包最开始就是为 PE 环境设计的，因此能够在精简到连 .Net 都无法预装的环境下正常使用。Chocolatey 依赖于 PowerShell / .Net / NuGet，Scoop 依赖于 PowerShell / .Net / Git，Winget 依赖于 UWP 框架 / msi，它们所依赖的无不是些“庞然大物”，而 Edgeless 资源包仅依赖于 cmd / winapi 和几个必要的二进制可执行文件，且全工具链均使用 Rust，可以静态编译出极小的无运行时二进制可执行文件，实现从 PE 到精简版系统到完整版系统的全面适配。

## 更完善的包解决方案
不同于 Scoop 或 Winget 仅有描述安装流程的“装箱单”，Edgeless 资源包是以一个完整的“包”的形式存在的，因此你可以在无法连接到因特网的环境下正常安装软件。

不同于 Chocolatey 使用基于 Nuget 的包管理方案，Edgeless 资源包是一个基于 7z 的独立压缩包，且具有良好的“无特定工具可读性”——只需常见的压缩软件就可以完成解包查看操作。此外，在工作流中提供基础步骤封装使得 Edgeless 资源包可以不依赖于 PowerShell 脚本完成一些复杂但是常用的 Windows 操作，且便于集中管理和快速定位问题。

此外，我们还综合了“装箱单”和“包”两种模式，创新性地提出了[内容分布式资源包](property.md#内容分布式资源包)，能够完美兼具两种模式的优点。

## 更适合国内软件生态
Edgeless 资源包针对国内的软件规范乱象专门设计了 [SendKey](api.md#sendkey) [SendMouse](api.md#sendmouse) 等步骤，使国产软件的安装和卸载也可以变得自动。

文档原生中文，国内用户可以快速上手使用，国内开发者可以更快上手实现开发。

我们的镜像源服务器也设于国内，能够为大陆地区用户提供更好的下载体验。同时我们设计时也考虑了国际化的多语言问题，预留了语言代码字段。
