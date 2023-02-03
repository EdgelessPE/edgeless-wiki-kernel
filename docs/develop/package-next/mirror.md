# 镜像源规范
本文件用于指定 nep 镜像源的服务器规范

## 存储池
存储池可以使用各式存储策略，最好能够实现与主镜像源的同步。此外，镜像源需要搭配一个可以运行服务端的服务器或Serverless函数以实现本文件提及的 API 规范。

存储池存放的文件夹列表如下：
- 资源包
- 摘要池

资源包文件夹用于存放资源包本体，包含普通资源包、内容分布式资源包（及其对应的展开的普通资源包）、清单资源包（单独成一个分类），并通过子目录分类资源包类型。

摘要池与资源包文件夹的目录结构相对应，在对应位置存放资源包配置文件的摘要文件。

## 摘要文件规范
摘要文件用于描述资源包信息，包含其基础信息、独占信息、特定资源包属性及特定属性的相关信息、权限请求、QA 系统审核信息、用户交互信息、依赖、构建信息等。

被完整引用的配置文件表：`package` `software/driver/theme/manifest` `uc` `profiles` `polt` `service` `dependencies` `ci-cd` `build`

需要生成的表：

### permission
描述在配置工作流中需要的权限，通过扫描 `setup_flow` 中的相关步骤生成

#### 普通权限
- link_desktop：创建桌面快捷方式
- link_taskbar：创建任务栏快捷方式
- link_startmenu：创建开始菜单快捷方式
- send：模拟鼠标/键盘输入
- dialog：弹出对话框
- path：配置PATH

#### 重要权限
- file_systemdrive：读写系统盘（包括对于默认安装位置的修改）
- file_edgelessdrive：读写 Edgeless 启动盘
- script：执行脚本
- kill：终止进程
- auto：自动完全加载

### missing
描述内容分布式资源包需要下载的文件，通过扫描 `expand_flow` 中的 `Download` 步骤生成

## API 规范
- `/nep/hello`

获取镜像站基础信息和资源包列表，返回示例：

```json
{
    "mirror":{
        "name":"官方镜像源",
        "sync":true,
        "contract":"1.0",
        "download":"https://pineapple.edgeless.top/disk/资源包/${category}/${name}",
        "digest":"https://pineapple.edgeless.top/disk/摘要池/${category}/${name}"
    },
    "categories":["实用工具","开发辅助","配置检测","资源管理","办公编辑","输入法","录屏看图","磁盘数据","安全急救","即时通讯","安装备份","游戏娱乐","运行环境","压缩镜像","美化增强","驱动管理","下载上传","浏览器","影音播放","远程连接"],
    "packages":{
        "远程连接":
        [
            {
                "name":"frp-client_0.38.0.0.nep.7zp",
                "size":254
            },
            {
                "name":"frp-client_0.38.0.0.nep.7z",
                "size":3224692
            }
        ]
    }
}
```