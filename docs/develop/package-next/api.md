# API 参考

:::tip
`Enum<String>` 表示一个 `String` 类型的枚举值，取值仅能是给定中的一种

`Array<String>` 表示一个 `String` 类型的数组
:::

[[TOC]]
## 基础信息

位置： `package` 表

### name
`String`

包名，简名标识资源包内容的字段

需要与文件名中的包名相同；不包含`_`

:::tip
如果需要使用`_`分割内容，请用空格或`-`达到近似目的；例如 `Python-runtime` 或 `IDEA Community`；注意仅能使用 `-` 分割同名软件的不同版本，详见[其对应的规范](norm.md#使用-分割同名软件的不同版本)

*不要*在包名中提供代指版本号的数字，请在对应的版本号中体现；例如 `VMware Workstation 16` 就是一个不规范的名称，这会导致用户无法接收大版本更新，因此请将其改为 `VMware Workstation`
:::

### type
`Enum<String>`

资源包内容类型

下列值中的一个：`{"Software", "Driver", "Manifest", "Dependency", "Theme"}`

### version
`String`

资源包内容版本号，需要与文件名中的版本号相同


:::tip
资源包版本号的取值使用4位的“拓展 Semver 规范”：前三位称为“上游版本号”，通常会遵循 [Semver](https://semver.org/lang/zh-CN/) 规范；最后一位称为“自留版本号”，由资源包打包者自留，用于发布*在上游分发不变的情况下*由打包引起的更新。

如果上游版本号不遵循 Semver 规范，则截取前三位作为上游版本号。这意味着会忽略像 `ChromeDev` 这类的软件的 nightly 更新，不过我们认为这些感知不强且不稳定的更新本来就没有必要推送给普通用户。

对于软件，推荐使用官网给出的版本号，如果未给出则截取主程序的产品版本前三位；对于驱动则截取使用设备管理器中标识的驱动程序版本前三位。

根据校验规则，禁止在版本号中出现非数字且非`.`的字符，请考虑将不规范的版本字符删除或移动到包名中；对于 `-beta` `-rc` 这类标识版本阶段的字符，我们建议在版本号与正式版不冲突时删掉它们，或是不制作此阶段的资源，等待上游发布正式版。
:::

### authors
`Array<String>`

打包者与内容作者

打包者（第一个成员）需要与文件名中的打包者相同
:::tip
统一将打包者作为第一个成员提供，如果打包者同时也是内容作者则只需保留一个成员即可

推荐打包者通过附加`<@github_id>`来提供对应的 GitHub ID
:::

### compat
<Badge text="可选" />
`Array<String>`

资源包兼容的 Edgeless 版本（使用 `0.0.0` 表示不兼容任何版本的 Edgeless），缺省表示全部兼容


:::tip
允许使用前缀：`[">=" , "<=" , ">" , "<"]`
:::

### tested
`Array<String>`

经打包者测试可用的 Edgeless 版本

:::tip
由官方渠道获得的资源包会通过 [Edgeless QA](qa-system.md) 的校验，确保资源包在当前最新的 Alpha 版本上可用
:::

### licence
<Badge text="可选" />
`String`

资源对应的许可证链接

## 内置变量

**步骤状态类**

### ExitCode
`int`

上一个步骤的执行状态，`==0` 表示成功，`!=0` 表示失败

对于 [`Script`](#script) 和 [`Execute`](#execute) 类型的步骤来说，这个变量的值会是脚本或命令的退出码

示例：
```toml
if = '${ExitCode}!=0'
```

:::tip
这里所谓的“上一个步骤”是指逻辑上的上一个步骤，而不是在工作流中紧挨着的上一个步骤。因此对于这种情况 `fix` 步骤是可以被触发的：
```toml
[setup_flow.step_1]
name = "Step 1"
type = "Execute"

# 产生一个错误
command = "exit 3"


[setup_flow.step_2]
name = "Step 2"
type = "Execute"
# 手动阻止Step 2的执行
if = 'false'

command = "exit 0"


[setup_flow.fix]
name = "Fix"
type = "Execute"
# 由于Step 2没有被执行，此时的ExitCode值为3，是Step 1的退出码
if = '${ExitCode}!=0'

command = "start ./VSCode/vscode.exe"
```
:::

对于 [`Group`](#group) 类型的步骤来说，这个变量的值：
- 在 `Group` 内部，是上一条*组内*指令的执行状态，这意味着组内第一个步骤获取到的 `${ExitCode}` 始终为 `0`
- 在 `Group` 外部，组的下一个步骤获取到的 `${ExitCode}` 表示整个组的执行状态，当组未正常执行时会使 `${ExitCode}=1`

示例：

```toml
[setup_flow.make_error]
name = "Make error"
type = "Execute"

# 在此处产生一个错误
command = "exit 2"


[setup_flow.install_group]
name = "Install Group"
type = "Group"
# 此处可以捕获到上一步骤产生的错误
# 因此ExitCode值为2
if = '${ExitCode}==2'

  [setup_flow.install_group._install_1]
  name = "Install 1"
  type = "Execute"
  # 此步骤为组内第一个步骤，而ExitCode表示组内上一个步骤的状态
  # 因此ExitCode值为0，不会受到组外步骤的影响
  if = '${ExitCode}==0'

  # 产生一个错误
  command = "exit 3"


  [setup_flow.install_group._install_2]
  name = "Install 2"
  type = "Execute"
  # 可以捕获到组内上一个步骤的状态
  if = '${ExitCode}==3'

  # 产生一个错误
  command = "exit 4"


[setup_flow.verify_group_install]
name = "Verify group install"
type = "Log"
# 此时捕获的是整个install_group组的执行状态
# 组的退出码描述的是整个组的状态，当组执行不正常时会将ExitCode置1
# 因此尽管组内没有产生值为1的退出码，此时的ExitCode仍为1
if = '${ExitCode}==1'

level = "Error"
msg = "Installation failed!"
```

### Feedback
`int`

获得 [Dialog](#dialog) 的用户反馈，`0` 表示用户关闭了对话框，从`1`开始表示用户所选按钮的索引

示例：见 [Dialog](#dialog)

---

**路径类**

### SystemDrive
`String`

Windows PE 盘符，在 Edgeless 下通常为 `X:`

示例：

```toml
if = '${SystemDrive}=="X:"'
```

### EdgelessDrive
`String`

Edgeless 启动盘盘符，可能为 `U:`

如果当前没有检测到Edgeless 启动盘，则会立即结束当前步骤并将 [`${ExitCode}`](#exitcode) 配置为`1`；如果有多个 Edgeless 启动盘则随机选择其中一个

示例：

```toml
if = '${EdgelessDrive}=="U:"'
```

### UserPolt
`String`

[用户自留文件夹](workflow.md#用户自留文件夹)，可能为 `U:/Edgeless/Polt/PackageName`

你可以通过 [plot](#用户自留文件夹相关) 表定义这个自留文件夹

示例：

```toml
if = '${UserPolt}=="U:/Edgeless/Polt/PackageName"'
```

### DefaultLocation
`String`

资源的默认安装位置，在 Edgeless 下通常为 `X:/Program Files/Edgeless`

示例：

```toml
if = '${DefaultLocation}=="X:/Program Files/Edgeless"'
```

### Desktop
`String`

桌面位置，在 Edgeless 下通常为 `X:/Users/Default/Desktop`

示例：

```toml
if = '${Desktop}=="X:/Users/Default/Desktop"'
```


---

**内置工具类**

### Aria2cPath
`String`

aria2c 可执行文件 `aria2c.exe` 的绝对路径，如果内置的 [Download](#download) 步骤无法满足你的需求，你可以不等待地执行一个脚本来实现异步下载并回调的操作

:::warning
此变量仅能在[展开工作流](general.md#展开工作流)中使用，当不符合运行要求时会拒绝执行使用此变量的对应步骤
:::

示例：

```toml
[setup_flow.download_vscode]
name = "Download VSCode"
type = "Script"

path = "./download.cmd"
wait = false
use = ["Aria2cPath"]
```
---

**信息类**


### EdgelessVersion
`String`

当前 Edgeless 版本号，为三位使用`.`分割的数字

示例：

```toml
if = '${EdgelessVersion}=="4.0.0"'
```
:::tip
如果返回了`0.0.0`则说明当前环境不为 Edgeless
:::
### BootPolicy
`String`

当前系统启动方式，值为`Legacy` 或 `UEFI`

示例：

```toml
if = '${BootPolicy}=="UEFI"'
```

## 自定义变量

位置：`env` 表

支持定义 `bool` `int` `String` 三种类型的自定义变量，然后通过 `${env.KEY_NAME}` 调用

:::tip
`int` 类型变量使用 `int64` 表达，支持的范围为 `-9223372036854775808 ~ 9223372036854775808`
:::

示例：
```toml
[env]                                       
USER_ARGS = "--help"
MY_BOOT_POLICY = 0
INSTALL_CHINESE = true
```

```toml
[setup_flow.create_shortcut]
name = "Create shortcut"
type = "Link"

source_file = "./VSCode/VSCode.exe"
target_name = "Visual Studio Code"
# 使用自定义变量的值，此项会被解释为 target_args = "--help"
target_args = "${env.USER_ARGS}"
target_icon = "./VSCode/vscode.ico"
location_default = "Desktop"
```

支持在自定义变量的值中使用[内置变量](#内置变量)

示例：
```toml
[env]                                       
PROFILE_LOCATION = "${SystemDrive}/Users/Profile"
```

## 用户配置变量

位置：`uc` 表

支持定义 `bool` `int` `String` 三种类型的自定义变量(通过提供的默认值判断)，然后通过 `${uc.KEY_NAME}` 调用

- `name :String`：变量名称，用于向用户展示
- `description :String`：变量描述，用于向用户展示
- `default :T`：默认值，类型 `T` 只能为 `{bool, int, String}` 中的一种
- `options :Array<{title :String, value :T}>`：（可选）值选项，`title` 为该选项描述，`value` 为该选项对应的值，类型必须与 `default` 一致；缺省时根据类型自动提供选择/输入界面


**布尔型**

此时 `options` 缺省为 `[
  {
    title = "是",
    value = true
  },
  {
    title = "否",
    value = false
  }
]`

没有额外的校验字段

示例：

```toml
[uc.AUTO_RUN]
name = "开机启动"
description = "启动时自动运行VSCode"
default = false
options = [
  {
    title = "是",
    value = true
  },
  {
    title = "否",
    value = false
  },
]
```

```toml
[setup_flow.start_vscode]
name = "Start VSCode"
type = "Execute"
if = "${uc.AUTO_RUN}==true"

command = "explorer ${Desktop}/Visual Studio Code.lnk"
```

**整型**

此时缺省 `options` 则会提供输入框

- `min :int`：（可选）值的最小值，要求用户输入的数不小于此值
- `max :int`：（可选）值的最大值，要求用户输入的数不大于此值

示例：

```toml
[uc.VOLUME]
name = "音量"
description = "启动时的默认音量"
default = 67

max = 100
min = 0
```

**字符串型**

此时缺省 `options` 则会提供输入框

- `regex :String`：（可选）校验正则，要求用户输入的内容满足此正则表达式
- `tip :String`：（可选）正则校验失败提示

示例：

```toml
[uc.RESOLUTION]
name = "分辨率"
description = "使用 宽x高 语法表示分辨率"
default = "1920x1080"

options = [
  {
    title = "1920 x 1080",
    value = "1920x1080"
  },
  {
    title = "800 x 600",
    value = "800x600"
  },
]
```

```toml
[uc.HOMEPAGE]
name = "主页"
description = "浏览器主页"
default = "https://home.edgeless.top"

regex = '/^https?:\/\/[^\s]*$/'
tip = "请输入 http:// 或 https:// 开头的网址"
```

支持在默认值中使用[内置变量](#内置变量)

示例：

```toml
[uc.LOCATION]
name = "安装位置"
description = "您希望将软件安装至哪个位置？"
default = "${DefaultLocation}"

regex = '^\${SystemDrive}/[^\s]+/'
tip = "请输入一个以${SystemDrive}/开头的有效路径"
```
:::tip
如果你的正则表达式中包含 `^\${EdgelessDrive}/`，例如 `^\${EdgelessDrive}/[^\s]+.mp3$`，则会认为这是一个指定启动盘文件/文件夹的变量，因此用户配置界面会让用户选择启动盘中的一个文件或文件夹(图形化配置工具会生成一个符合此正则的路径，判断此路径是文件还是文件夹，然后打开文件/文件夹选取对话框)

而对于包含 `^\${SystemDrive}/` 的正则，则不会要求选择一个路径，因此用户需要手动输入一个以 `${SystemDrive}/` 开头的有效路径
:::

## 内置函数

内置函数仅可用于条件语句（含[if/else/elif](#if)、[LogicAnd/LogicOr](#logicand)）内，仅提供一些返回值为 `bool` 型的简单函数

:::tip
复杂的函数和步骤不是工作流应该考虑的内容，你应该使用脚本
:::

### Exist
`Exist(path :String) :bool`

判断是否存在某个文件或目录

示例：

```toml
if = 'Exist("${SystemDrive}/Users/Profiles")'
```

### IsDirectory
`IsDirectory(path :String) :bool`

判断某个路径是否是文件夹

示例：

```toml
if = 'IsDirectory("${SystemDrive}/Users/Profiles")'
```

### IsAlive
`IsAlive(name :String) :bool`

判断某个进程是否正在运行

示例：

```toml
if = 'IsAlive("notepad.exe")'
```

### IsVisible
`IsVisible(path :String) :bool`

判断当前屏幕上是否存在与给定的截图相同的图像

示例：

```toml
if = 'IsVisible("./_retinue/screenshots/success.jpg")'
```

## 工作流

### 配置工作流
位置：`setup_flow`

用于资源的配置（setup）操作，使用 `ept install` 或 `ept load` 时会触发此工作流

### 卸载工作流
位置：`remove_flow`

用于资源的卸载（remove）操作，使用 `ept remove` 时会触发此工作流

### 展开工作流

位置：`expand_flow`

用于资源的[展开](property.md#内容分布式资源包)（expand）操作

### 钩子工作流
位置：`hooks.onDesktopShown` `hooks.onBootFinished` `hooks.onExit`

用于在 Edgeless 运行时的不同周期位置执行操作，详情见[生命周期钩子](../../playground/hooks.md)


## 步骤通用字段
在[工作流](#工作流)的步骤内使用

### name
<Badge text="必须" />

步骤名称，通常是步骤键名的标准英文句式

示例：

```toml
[setup_flow.install_vscode]
name = "Install VSCode"
```

### type
<Badge text="必须" />

步骤类型，必须为[步骤类型 API 参考](#步骤类型)中指定的一种

示例：

```toml
type = "File"
```

### if

条件语句，满足语句中的条件时才会执行步骤，仅对当前步骤或步骤组生效

示例：

```toml
if = '${SystemDrive}=="X:"'
```

允许在语句中使用[内置函数](#内置函数)

示例：

```toml
if = 'Exist("${SystemDrive}/Windows/System32")'
```

### elif

条件语句，必须紧随包含 `if` 或 `elif` 的步骤出现，当上一步骤因 `if` 或 `elif` 指定的语句结果为假而未执行时才会判断此步骤是否需要执行

示例：

```toml
[setup_flow.group_1]
name = "Group 1"
type = "Group"
if = '${SystemDrive}=="X:"'

  [setup_flow.group_1._step_1]
  name = "Step 1"
  ...

[setup_flow.group_2]
name = "Group 2"
type = "Group"
elif = '${SystemDrive}=="C:"'

  [setup_flow.group_2._step_1]
  name = "Step 1"
  ...

[setup_flow.group_3]
name = "Group 3"
type = "Group"
elif = '${SystemDrive}=="D:"'

  [setup_flow.group_3._step_1]
  name = "Step 1"
  ...
```

允许在语句中使用[内置函数](#内置函数)

示例：

```toml
elif = 'Exist("${SystemDrive}/Windows/SysWOW64")'
```

### else

条件语句，必须紧随包含 `if` 或 `elif` 的步骤出现，当上一步骤因 `if` 或 `elif` 指定的语句结果为假而未执行时才会执行此步骤

由于含 `else` 语句的步骤是否执行仅取决于上一步骤，因此无论 `else` 指定的语句结果是什么都不会影响其性质，推荐使用 `else = 'true'`

:::tip
你完全可以使用 `else = 'false'`，不过这样做很不好(比如会被田所浩二撅)
:::

示例：

```toml
[setup_flow.group_1]
name = "Group 1"
type = "Group"
if = '${SystemDrive}=="X:"'

  [setup_flow.group_1._step_1]
  name = "Step 1"
  ...

[setup_flow.group_2]
name = "Group 2"
type = "Group"
elif = '${SystemDrive}=="C:"'

  [setup_flow.group_2._step_1]
  name = "Step 1"
  ...

[setup_flow.group_3]
name = "Group 3"
type = "Group"
else = 'true'

  [setup_flow.group_3._step_1]
  name = "Step 1"
  ...
```

### throw

异常处理字段，若当前步骤执行异常(退出码不等于`0`)则立即抛出指定的错误信息，然后退出当前工作流

在不指定 throw 语句的情况下，出现异常后工作流会继续执行，不过在下一个逻辑步骤中 [`${ExitCode}`](#exitcode) 会不为`0`

这里 throw 真正的含义是“throw if error”，不太贴切，如果你有更好的命名建议请给我们发issue

示例：
```toml
[setup_flow.start_vscode]
name = "Start VSCode"
type = "Execute"
throw = "Can't start VSCode"

command = "exec explorer ${Desktop}/Visual Studio Code.lnk"
shell = "pecmd"
```

在[步骤组](#group)中的 throw 会捕获该组中步骤的所有异常：
```toml
[setup_flow.install_group]
name = "Install Group"
type = "Group"
# 使用一个throw语句捕获整组步骤的异常
throw = "Group install failed"

  [setup_flow.install_group._install_1]
  name = "Install 1"
  type = "Execute"

  command = "./MySoftware/Installer1.exe /S"


  [setup_flow.install_group._install_2]
  name = "Install 2"
  type = "Execute"

  command = "./MySoftware/Installer2.exe /S"


  [setup_flow.install_group._install_3]
  name = "Install 3"
  type = "Execute"

  command = "./MySoftware/Installer3.exe /S"
```

:::tip
你也许发现了我们没有提供类似于 `exit` 的功能，因为提前退出工作流无外乎两种情况：

- 一切正常，但是我想提前结束

  这种编写思路事实上是非常危险的，这会使得你编写的工作流毫无逻辑可言。我们认为一个合理的工作流在一切正常的情况下必须执行完全部应有的步骤后才能退出，因此请使用[条件语句](#if)和[步骤组](#group)表达你的逻辑

- 发生了异常

  对于这种情况，如果你不想处理问题，请直接 [throw](#throw)；如果你想尝试解决问题，请在下一步骤中判断 [ExitCode](#exitcode) 并使用[步骤组](#group)编写解决方案
:::

## 步骤类型
使用 `type = "xxx"` 指定步骤类型，并根据此处的参考规范提供相应的字段

### Group

步骤组，与[条件语句](#if)配合使用可以同时控制多个步骤的执行

不需要额外的字段，但是组内步骤的键需要以 `_` 开头

示例：
```toml
[setup_flow.install_group]
name = "Install Group"
type = "Group"
# 使用一个条件语句控制整组步骤的执行
if = "${uc.GROUP_INSTALL}==true"

  [setup_flow.install_group._install_1]
  name = "Install 1"
  type = "Execute"

  command = "./MySoftware/Installer1.exe /S"


  [setup_flow.install_group._install_2]
  name = "Install 2"
  type = "Execute"

  command = "./MySoftware/Installer2.exe /S"


  [setup_flow.install_group._install_3]
  name = "Install 3"
  type = "Execute"

  command = "./MySoftware/Installer3.exe /S"
```

:::tip
Group 与 ExitCode 配合使用时有一些注意事项，详见 [ExitCode](#exitcode)
:::

### LogicAnd
验证一组条件，仅当*所有条件均*为真时使 `${ExitCode}=0`，否则 `${ExitCode}=1`
- `exp :Array<String>`：所有条件

示例：
```toml
[setup_flow.verify_success]
name = "Verify success"
type = "LogicAnd"

exp = [
  'Exist("${EdgelessDrive}/Edgeless/version.txt")',
  'Exist("${EdgelessDrive}/Edgeless/Nes_Inport.7z")',
  'Exist("${EdgelessDrive}/Edgeless/Resource/*.7z")'
  ]

[setup_flow.log_success]
name = "Log success"
type = "Log"
if = '${ExitCode}==0'

level = "Info"
msg = "Installed successfully"
```

### LogicOr
验证一组条件，当*存在任一条件*为真时使 `${ExitCode}==0`，否则 `${ExitCode}==1`
- `exp :Array<String>`：所有条件

示例：
```toml
[setup_flow.check_7z]
name = "Check 7z"
type = "LogicOr"

exp = [
  'Exist("${SystemDrive}/Program Files (x86)/7-Zip/7z.exe")',
  'Exist("${SystemDrive}/Program Files/7-Zip/7z.exe")',
  'Exist("./7z.exe")'
  ]

[setup_flow.log_7z]
name = "Log 7z"
type = "Log"
if = '${ExitCode}==0'

level = "Info"
msg = "Found 7-Zip"
```

### Modify
更改[自定义变量](#自定义变量)或[用户配置变量](#用户配置变量)的值
:::tip
[内置变量](#内置变量)*不允许*被工作流或是用户修改，其值仅由加载器运行时决定
:::
- `key :String`：需要修改的键
- `value :String`：新值

示例：

修改自定义变量
```toml
[setup_flow.modify_boot_policy]
name = "Modify boot policy"
type = "Modify"
if = '${BootPolicy}=="UEFI"'

key = "env.MY_BOOT_POLICY"
value = 1
```

修改用户配置变量
```toml
[setup_flow.modify_auto_run]
name = "Modify auto run"
type = "Modify"
if = '${BootPolicy}=="UEFI"'

key = "uc.AUTO_RUN"
value = true
```

### Wait
等待一定时间
- `timeout :int`：延时，单位为ms

示例：

```toml
[setup_flow.wait_1]
name = "Wait 1"
type = "Wait"

timeout = 1000
```

### Link
创建快捷方式，支持在桌面、任务栏、开始菜单
- `source_file :String`：源文件
- `target_name :String`：快捷方式名称，可以使用 `Folder/Name` 表示创建目录
- `target_args :String`：（可选）追加参数
- `target_icon :String`：（可选）快捷方式图标，缺省与源文件一致
- `location_default :Enum<String>`：（可选）默认创建位置，缺省为`"Desktop"`，下列值中的一个：`{"Desktop", "Taskbar", "StartMenu"}`；用户可以手动更改此项

示例：

```toml
[setup_flow.create_shortcut]
name = "Create shortcut"
type = "Link"

source_file = "./VSCode/VSCode.exe"
target_name = "Visual Studio Code"
target_args = "${env.USER_ARGS}"
target_icon = "./VSCode/vscode.ico"
location_default = "Desktop"
```

可以使用 `target_name: "Folder/Name"` 表示将快捷方式放置于目录中，尤其建议当 `location_default` 值为 `StartMenu` 时这样做，示例：

```toml
[setup_flow.create_shortcut]
name = "Create shortcut"
type = "Link"

source_file = "./VSCode/VSCode.exe"
target_name = "集成开发/Visual Studio Code"
target_args = "${env.USER_ARGS}"
target_icon = "./VSCode/vscode.ico"
location_default = "StartMenu"
```

### File

文件操作类型步骤，通过 `operation` 字段说明所需的操作，支持复制、移动、重命名、删除操作

#### 复制

需要使 `operation = "Copy"`

- `source : String`：复制来源，可以是文件或文件夹，支持通配符
- `target : String`：复制目的地，支持重命名
- `overwrite : bool`：（可选）是否覆盖，缺省为 `true`

示例：

```toml
[setup_flow.copy_config]
name = "Copy config"
type = "File"

operation = "Copy"
source = "./VSCode/config/*"
target = "${SystemDrive}/Users/Config/"
overwrite = false
```

#### 移动

需要使 `operation = "Move"`；配合 [_patch](exclusive-directory.md#补丁文件夹) 专用文件夹可以实现打文件补丁操作

- `source : String`：移动来源，可以是文件或文件夹，支持通配符
- `target : String`：移动目的地，支持重命名
- `overwrite : bool`：（可选）是否覆盖，缺省为 `true`

示例：

```toml
[setup_flow.move_config]
name = "Move config"
type = "File"

operation = "Move"
source = "./_patch/config/*"
target = "${SystemDrive}/Users/Config/"
overwrite = false
```

#### 重命名

需要使 `operation = "Rename"`

- `source : String`：重命名源，可以是文件或文件夹，支持通配符
- `target : String`：新名称，需要手动添加拓展名

示例：

```toml
[setup_flow.rename_config]
name = "Rename config"
type = "File"

operation = "Rename"
source = "./VSCode/config/*.ini"
target = "*.wcs"
```

#### 删除

需要使 `operation = "Delete"`

- `source : String`：删除来源，可以是文件或文件夹，支持通配符
- `force : bool`：（可选）是否解除占用强制删除，缺省为 `false`

示例：

```toml
[setup_flow.delete_config]
name = "Delete config"
type = "File"

operation = "Delete"
source = "${SystemDrive}/Users/Config/*"
force = true
```

#### 新建

需要使 `operation = "New"`

- `target : String`：新建位置，以 `/` 结尾则视为新建文件夹，否则新建一个空白文件
- `overwrite : bool`：（可选）是否覆盖，缺省为 `false`

示例：

```toml
[setup_flow.new_folder]
name = "New folder"
type = "File"

operation = "New"
target = "${SystemDrive}/Users/Config/"
overwrite = true
```

### Script
执行*自编*脚本，支持 cmd 脚本(`.cmd`)、 pecmd 脚本(`.wcs`)和 [AutoHotKey](https://www.autohotkey.com/) 脚本(`.ahk`)

:::warning 
如果你需要执行上游提供的安装脚本，请使用 [`Execute`](#execute) 步骤并将 `callInstaller` 置为 `true`
:::

- `path :String`：脚本路径
- `args :String`：（可选）参数
- `use :Array<String>`：（可选）需要传递的[变量](#内置变量)
- `pwd :String`：（可选）工作目录，缺省时自动判断(引用 `_retinue` 内脚本则为资源根目录，其他位置则在脚本所在目录)
- `hide :bool`：（可选）是否隐藏脚本执行窗口，缺省为 `true`
- `wait :bool`：（可选）是否等待脚本执行完成，缺省为 `true`
- `fix :Array<String>`：（可选）需要[修复 `_retinue` 引用](exclusive-directory.md#随从文件夹)的文本文件

示例：

```toml
[setup_flow.run_setup_script]
name = "Run setup script"
type = "Script"

path = "./setup.cmd"
args = "${env.USER_ARGS}"
use = ["EdgelessDrive","env.PLUGINS","uc.AUTO_RUN"]
pwd = "${SystemDrive}/System32"
hide = false
wait = false
fix = ["./VSCode/install.cmd", "./_retinue/update.py"]
```

### Execute
执行命令，支持 cmd 命令和 pecmd 命令

- `command :String`：命令
- `shell :Enum<String>`：（可选）使用的终端，下列值中的一个：`{"cmd", "pecmd"}`，缺省为 `cmd`
- `callInstaller :bool`：（可选）此步骤是否在调用安装器（如调用`安装包 /S`或运行`安装.bat`），请务必如实填写，缺省为 `false`
- `pwd :String`：（可选）工作目录，缺省为资源包根目录
- `hide :bool`：（可选）是否隐藏命令执行窗口，缺省为 `true`
- `wait :bool`：（可选）是否等待命令执行完成，缺省为 `true`

示例：

```toml
[setup_flow.start_vscode]
name = "Start VSCode"
type = "Execute"
if = "${uc.AUTO_RUN}==true"

command = "exec explorer ${Desktop}/Visual Studio Code.lnk"
shell = "pecmd"
callInstaller = false
pwd = "${SystemDrive}/System32"
hide = false
wait = false
```

### Kill
杀死某个进程
- `target :String`：进程名称，或启动时对应的可执行文件名

示例：

```toml
[setup_flow.kill_vscode]
name = "Kill VSCode"
type = "Kill"

target = "vscode.exe"
```

### Path
增删用户 PATH 变量
- `record :String`：需要增/删的记录值
- `operation :Enum<String>`：指定增/删操作，下列值中的一个：`{"Add", "Remove"}`

示例：

```toml
[setup_flow.add_path]
name = "Add PATH"
type = "Path"

record = "${SystemDrive}/Users/nodejs"
operation = "Add"
```

### Log
输出日志，分为信息、警告、错误三个等级，错误(`Error`)等级信息的内容会以 [Toast](#toast) 形式直接展示给用户
- `level :Enum<String>`：日志等级，下列值中的一个：`{"Info", "Waring", "Error"}`
- `msg :String`：日志内容

示例：

```toml
[setup_flow.log_status]
name = "Log status"
type = "Log"

level = "Info"
msg = "VSCode installed successfully"
```

### Toast
弹出悬浮通知
- `title :String`：通知标题
- `content :String`：通知内容

示例：

```toml
[setup_flow.show_status]
name = "Show status"
type = "Toast"

title = "安装成功"
content = "VSCode 已安装完成"
```

### Dialog
弹出对话框，可以使用 [`${Feedback}`](#feedback) 变量获得用户操作反馈
- `title :String`：对话框标题
- `content :String`：对话框内容
- `options :Array<String>`：（可选）按钮文本，缺省为`["确认"]`

示例：

```toml
[setup_flow.show_status]
name = "Show status"
type = "Dialog"

title = "安装成功"
content = "是否打开 VSCode？"
options = ["是","否"]


[setup_flow.start_vscode]
name = "Start vscode"
type = "Execute"
if = '${Feedback}==1'

command = "explorer ${Desktop}/Visual Studio Code.lnk"
```

:::tip
由于此操作与 nep 所倡导的自动化理念相悖，因此请尽可能不使用此步骤，而改用 [`uc`](#用户配置变量)
:::

### Download
从网络下载文件，默认使用2线程的 aria2c 完成下载

:::warning
此步骤仅能在[展开工作流](general.md#展开工作流)中使用，且必须提供 MD5
:::

- `url :String`：链接
- `save :String`：保存路径
- `md5 :String`：文件MD5
- `overwrite: bool`：（可选）是否覆盖，缺省为`true`
- `wait :bool`：（可选）是否等待下载完成，缺省为`true`
- `thread :int`：（可选）线程数，范围`1~16`，缺省为`2`

示例：

```toml
[expand_flow.download_vscode]
name = "Download VSCode"
type = "Download"

url = "https://az764295.vo.msecnd.net/stable/7f6ab5485bbc008386c4386d08766667e155244e/VSCodeUserSetup-x64-1.60.2.exe"
save = "./vscode.exe"
md5 = "DD4DD2E97577D88B4E6E4B3BF4AA86A9"
overwrite = false
wait = false
thread = 16
```

:::tip
如果需要异步地下载并执行回调，请改为使用脚本，我们会在 [`${Aria2cPath}`](#aria2cpath) 参数上提供一个现成的 aria2c.exe 可执行文件
:::

### Unzip
解包压缩文件，文件类型范围等同于 [7-Zip](https://www.7-zip.org/) 支持范围
- `source :String`：压缩文件路径
- `target :String`：解压路径，最好是一个空目录
- `overwrite: bool`：（可选）是否覆盖，缺省为`true`

示例：

```toml
[setup_flow.unzip_vscode]
name = "Unzip VSCode"
type = "Unzip"

source = "./vscode.exe"
target = "./VScode"
overwrite = false
```

### SendKey
向窗口发送键盘输入
- `key :String`：按键名称，见[AutoHotKey KeyList](https://www.autohotkey.com/docs/KeyList.htm)
- `focus :String`：（可选）目标窗口标题

示例：

```toml
[setup_flow.send_key]
name = "Send key"
type = "SendKey"

key = "Enter"
focus = "Chrome Setup"
```

:::tip
如果此步骤无法满足你的需求，你可以使用 [`Script` 步骤](#script)运行一个 AutoHotKey 脚本来实现复杂的模拟按键操作
:::

### SendMouse
向窗口发送鼠标左键单击输入
- `control :String`：控件名称或文本，或者是需要点击对象的图片（会自动点击图像中心）
-  `focus :String`：（可选）目标窗口标题

示例：

```toml
[setup_flow.send_mouse]
name = "Send mouse"
type = "SendMouse"

control = "Next"
focus = "Chrome Setup"
```

或

```toml
[setup_flow.send_mouse]
name = "Send mouse"
type = "SendMouse"

control = "./_retinue/screenshots/button.jpg"
focus = "Chrome Setup"
```

:::tip
控件名称可以使用 [AutoHotKey](https://www.autohotkey.com) 提供的 WindowSpy 脚本查看，此脚本位于你下载的 AutoHotKey 发行版压缩包根目录

如果此步骤无法满足你的需求，你可以使用 [`Script` 步骤](#script)运行一个 AutoHotKey 脚本来实现复杂的模拟按键操作
:::

## 独占表
### 软件型
位置：`software` 表

- `upstream :String`：软件上游，打包者获取此软件的URL页面
- `category :String`：软件分类，必须是下载站已有分类中的一种；如果需要新建分类请给我们发issue
- `tags :String`：软件标签，建议将资源名称的同义词(如 "VSCode" 的同义词有"Visual Studio Code" "VSC" "code" 等)加入此标签，可以在分类中体现的标签(如"下载工具")请不要加到这里
- `language :Enum<String>`：语言，下列值中的一个：`{"Multi", "zh-CN", "en-US"}`
- `uac :bool`：是否需要 [UAC](https://zh.wikipedia.org/wiki/%E4%BD%BF%E7%94%A8%E8%80%85%E5%B8%B3%E6%88%B6%E6%8E%A7%E5%88%B6) 授权
- `location :String`：（可选）软件安装位置，缺省为`${DefaultLocation}`
- `defaultFullLoad :bool`：（可选）是否需要默认启用[自动完全加载](property.md#自动完全加载资源包)

示例：
```toml
[software]
upstream = "https://code.visualstudio.com/"
category = "办公编辑"
tags = ["Visual Studio Code", "VSC", "code"]
language = "Multi"
uac = false
location = "${SystemDrive}/Users/PortableApps"
defaultFullLoad = false
```

### 驱动型
位置：`driver` 表
- `brand :String`：驱动程序提供商
- `type :Enum<String>`：硬件类型，下列值中的一个：`{"存储", "音频", "有线网卡", "无线网卡", "人体工程学输入", "视频输入", "主板", "蓝牙", "打印机", "显卡", "其他"}`
- `models :Array<String>`：适用型号，默认品牌与驱动程序提供商一致；可以使用 `品牌-型号` 语法指定其他品牌；如果 `brand` 为 `Microsoft` 则此项可以省略并显示为`通用`

驱动型资源包还需要满足一些其他规范，请移步[驱动型资源包](driver.md)

:::warning
`type` 中的部分类型无法在 Edgeless 中使用，此处仅作预留
:::

示例：
```toml
[driver]
brand = "Intel"
type = "无线网卡"
models = ["AX200","Killer-AX1650"]
```

### 主题型
位置：`theme` 表
- `tags :String`：主题标签

主题型资源包还需要满足一些其他规范，请移步[主题型资源包](theme.md)

示例：
```toml
[theme]
tags = ["Material Design","圆角"]
```

### 清单型
位置：`manifest` 表
- `tags :String`：清单标签

清单型资源包还需要满足一些其他规范，请移步[清单资源包](property.md#清单资源包)

示例：
```toml
[manifest]
tags = ["Jetbrains","程序员"]
```


## 用户数据目录
位置：`profiles` 表
- `dir :Array<String>`：所有的用户目录

指定了用户数据目录（位于系统盘，由资源在运行时产生）之后，当用户要求保存他们的数据时 Edgeless 会在结束周期打包这些目录，并在下次启动时恢复这些数据。

示例：

```toml
[profiles]
dir = ["${SystemDrive}/Users/profiles"]
```

## 用户自留文件夹相关
位置：`plot` 表
- `fileList :Array<{name :String,description :String,required :bool}>`：自留文件夹中有效的文件/文件夹的文件名、描述、是否必须提供

[用户自留文件夹](workflow.md#用户自留文件夹)用于存放由用户自定义的文件，其位置可以使用 [`${UserPolt}`](#userpolt) 变量获取。

示例：

```toml
[polt]
fileList = [
  {
    name = "frpc.ini",
    description = "frp客户端配置文件",
    required = true
  }
]
```

## 服务配置
位置：`service` 表
- `progress :String`：进程名，用于判断服务运行状态
- `start :String`：启用服务命令
- `stop :String`：停止服务命令

在打包服务型程序时需要提供服务配置来控制这项服务，Edgeless 会向用户提供操作接口来控制*实现了服务配置*的服务。

示例：

```toml
[service]
progress = "sshd.exe"
start = "./sshd.exe"
stop = "taskkill /im sshd.exe /t"
```

## 依赖
位置：`dependencies` 表
- `required :Array<{name:String, version:String>`：（可选）必须安装的依赖
- `suggested :Array<{name:String, version:String, remark:String}>`：（可选）（为了达到更好的用户体验）推荐安装的依赖

指定使用资源前需要完成安装的其他资源，如运行库、运行时等

`version` 支持在版本号前使用 `>=` `<=` `>` `<` 表达依赖要求，值为 `0.0.0` 则表示无版本限制

:::tip 注意
指定的 `version` 不一定会被安装，`ept` 会自动选择一个可能的最合适版本执行安装
:::

示例：

```toml
[dependencies]
required = [{name="dotnet",version="3.5.0"}]
suggested = [{name="PowerShell",version="0.0.0",remark="推荐搭配PowerShell使用"},{name="Nodejs-runtime",version=">=15.0.0",remark="如果需要爬虫功能则必须安装此依赖"}]
```

## CI/CD 保留
<Badge text="自动" />

位置：`ci-cd` 表

不提供键定义

示例：

```toml
[ci-cd]
# 自动构建设施代号
build_at = "GithubActions"
# 自动构建设施上的构建器版本号
build_with = "0.1.0"
# 自动测试设施代号
test_at = "GithubActions"
# 自动测试设施上的测试器版本号
test_with = "0.1.0"
# 自动交付目标服务器代号
deploy_at = "Pineapple"
# 安全检查是否通过
scan_passed = true
# 人工审核员ID
reviewer_id = "Cno"
```

## 构建工具保留
<Badge text="自动" />

位置：`build` 表
- `contract :String`：配置文件规范版本
- `tool :String`：构建工具版本
- `date :Time`：打包时间(UTC+8)
- `unsafe :bool`：不安全标记，使真此标记可以绕过配置规则校验，但是不能上架到官方镜像源、不能被自动加载且加载时会弹出警告

示例：

```toml
[build]
contract = "1.0"
tool = "0.1.0"
date = 2021-09-29 00:32:00+08:00
unsafe = true
```