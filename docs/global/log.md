# 日志

## 开发状态
### Edgeless主体核心
* 基于 21H1 母盘制作的内核

【Version:{{edgeless_alpha}} Stage:Alpha Author:Cno】

【Version:{{edgeless_beta}} Stage:Beta Author:Cno】
### Edgeless Hub
* 使用 Electron 编写的版本【Version:{{hub_beta}} Stage:Beta Author:Cno】
### Edgeless主要功能研发
* LocalBoost™【Version:2.0 State:Working Author:Brzh】
* 大神码™【Version:Null State:Working Author:Copur】


希望获取内测的用户请[获取内测邀请码](https://home.edgeless.top/jump/qqg.html)

希望合作进行开发的开发者请先加入内测交流群，确认合作之后会邀请进开发群


## Edgeless Hub更新日志（当前已发布最新版本：{{hub_beta}}）
2.28版本更新
1. 更新官方人员名单
2. 适配新的 Ventoy 日志解析器

2.27版本更新

:::tip
Edgeless Hub 停止维护告示

我们非常遗憾地通知各位，由于上游 npm 包更新导致屎山项目 Edgeless Hub 在经过数小时的抢救后依然无法正常编译一个可用的版本，因此我们不得不提前终止对其的更新维护（悲）；我们已经将新版的 Edgeless Hub 开发工作提前提上日程，在此期间 2.27 版本的 Edgeless Hub 依旧能够正常使用，只是我们无力为其提供新的功能更新。
:::

1. 修复达最大下载数10后aria2迷惑报错以及侧边栏下载数计数错误（感谢 [@undefined](https://github.com/undefined-ux)）
2. 开发体验优化和部分错别字修改
3. 修复 HubCache 路径名称重复问题（感谢 [@undefined](https://github.com/undefined-ux)）
4. 优化aria2c配置

## Edgeless核心更新日志（当前已发布最新Beta版本：{{edgeless_beta}}）
4.1.1 - 4.1.2版本更新

功能/架构更新：

1. 使用了 Windows 11 22H2 作为母盘构建，没有引入新特性但是可能引入了一堆由于新母盘引起的问题，例如没有声音等，仅建议作为尝鲜使用。

4.1.0版本更新

:::tip
首先和各位说声抱歉，Edgeless 被我鸽成了一个年更项目，但是以后 PE 本体的维护频率还会越来越低。

我不再是一个学生，即将步入社会被资本压榨（悲），因此有限的精力可能会花在一些更有意义、更高技术力的 Edgeless 衍生项目上。后续可能会推出孵化于 Edgeless 的“大招”，还请大家多多关注。
:::

BUG修复：

（3.2.1Alpha开始）

1. 更换智能虚拟光驱中的安装教程二维码
2. 修复硬盘版安装器不能用的问题，优化安装逻辑
3. 修复部分驱动类插件包无法使用的问题
4. 移除烦人的Imdisk安装成功提示


（4.0.0Alpha开始）

5. 更新插件下载器的"Chrome"和"QQ"名称

（4.0.3Alpha开始）

6. 提高删除Imdisk菜单成功率

（4.0.4Alpha开始）

7. 优化钩子执行策略
2. 优化智能虚拟光驱逻辑
3. 适配自动构建的火绒安全
4. 优化插件加载的toast
5. 修复dotnet插件包加载无效问题
6. 修复火绒安全无法正常使用问题


功能/架构更新：

（4.0.0Alpha开始）

1. 新增浏览器自动固定至任务栏功能
2. 新增[钩子](../playground/hooks.md)功能，可以在启动流程中执行脚本，此功能会完全替代自定义Launcher脚本
3. 其他由于重构带来的全新特性

（4.0.1Alpha开始）

4. 优化插件包下载器体验
2. 修改固定浏览器的hook执行位置，更快完成固定

（4.0.3Alpha开始）

6. 将部分hooks的执行改为并发
2. 使用符号链接创建桌面日志并隐藏了cmd框
3. 取消Launcher.bat设计，使用Hooks取代对应功能
4. 增加“全局浏览器主页”功能和“禁用固定浏览器到任务栏”功能开关
5. 精简应急包

（4.0.4Alpha开始）

11. 增加结束周期钩子
2. 增加beta和dev版chrome的全局主页支持
3. 支持360极速浏览器X的全局主页
4. 更新自带的插件下载器
5. 增加emoji以适应Edgeless Hub
6. 移除检查更新、安装Edgeless到本地硬盘

***

3.2.0版本更新

BUG修复：

（3.1.2Alpha开始）

1. 修复了外置批处理名称不能有空格的问题
4. 修复了在某些环境下自定义LoadScreen资源包无法被加载的问题
5. 修复此电脑右键`管理`不能用的问题，同时在开始菜单中也加入`计算机管理`
6. 修复了插件包下载器中Chrome的token和名称错误问题，优化文本框排版
7. 修复了检查更新总是失败的问题

（3.1.3Alpha开始）

6. 修复了将非外置批处理的暴露文件记录为外置批处理的问题
（3.1.4Alpha开始）
1. 修复了ept-remove无法识别使用%Desktop%变量创建的快捷方式的问题
2. 完善了ept帮助界面的内容
3. 修复了ept-install无法安装包含英文括号插件的问题
4. 修复了无法正常使用mklink的问题（感谢@Oxygen）
5. 记录了存在暴露的依赖文件插件包信息
6. 针对将U盘盘符分配到Z导致的无法识别合法Edgeless文件夹的问题做了处理
7. 优化pecmd.ini中记录日志的语句
8. 对启动流程微调，增加鼠标样式自动配置成功率

（3.1.5Alpha开始）

15. 更新下载器中ept使用说明的二维码
2. 增加使用LocalBoost加载插件的外置批处理清理工作，防止被7z加载器二次运行
3. ept remove支持了删除暴露的依赖文件
4. 修复热加载不记录暴露的依赖文件的问题
5. 修复了理顺盘符闪退的问题，顺便更新脚本到2020-11-08 PS+版本

（3.2.0开始）

20. 优化鼠标样式按下确认的应用逻辑

功能/架构更新：

（3.1.2Alpha开始）

1. 增加错误日志机制，以解决因为插件包过多内存过小导致的启动出错
2. 增加应急包功能以方便boot.wim文件启动后独立使用，因此boot.wim的体积将增加20MB
3. 使用动态提示生成程序代替启动过程中的多个提示文件
4. 插件下载器新增了微信、IDM的选项，将Teamviewer替换为向日葵远程控制，~~同时加入系统下载界面（感谢 @陳獨秀 提供的原版镜像直链）~~（此版本暂时不提供此功能）
5. 功能开关增加“电源按钮默认为重启”
6. 增加自定义鼠标样式自动确认应用和自动编号功能，不再需要用户手动选择、重命名（感谢 @Oxygen ）
7. 优化了插件加载确认和下载确认对话框的样式与排版
8. 新增`Shift+F9`组合键，降低分辨率并刷新资源管理器，同时询问是否需要永久降低分辨率（灵感来自于 @sinoxer，感谢）
9. 使用pecmd.ini重写实现加载必要组件包和插件包，**支持`Resource`子目录插件载入**、启动时可以看到当前正在加载的插件名称、提升加载效率并实现了插件包信息的记录功能、减少并发等待时间至50ms
11. 增强对MSI安装包的支持（感谢 @杉）
12. 内置了**安装到硬盘**功能（开始菜单-Edgeless服务），并适配支持识别硬盘版安装的Edgeless文件夹
13. 增加迫害路人甲的小彩蛋
14. 自动扫描并删除所有分区中的stuff.zip以解决早期制作工具的遗留问题
15. 添加对HFS和MNT的支持（感谢@Billraozihan）
16. 功能开关增加禁用LoadScreen
17. 内置鼠标样式资源包，来自`Win10Aero鼠标指针_1.1.0.0_汪凯 `
18. 尽可能不依赖EasyDown，使用Aria2完成通讯任务（包括检查更新、下载插件包），**肉眼可见的速度提升**

（3.1.3Alpha开始）

18. 新增`setx.exe`方便开发者设置PATH变量（感谢@Billraozihan）
2. 增加ept（Edgeless Plugin-packages Tool）包管理工具
3. 插件热加载核心同步使用wcs脚本改写，现已加入插件包信息记录豪华午餐
4. 内置的插件下载器改为调用ept工作
5. 热加载插件完成后不再刷新explorer
6. 对硬盘安装器的复制核心步骤输出提示

（3.1.4Alpha开始）

24. 改进设置鼠标样式的刷新方法（感谢@Oxygen）
2. 增加X分区容量至128G（虽然没有什么L用但还是要感谢@Oxygen）
3. 增加LocalBoost功能，[查看使用说明](../playground/localboost.md)

（3.1.5Alpha开始）

27. 为使用LocalBoost加载的插件依赖目录增加_LocalBoost.txt标识
2. 为ept install、ept upgrade和ept remove增加LocalBoost支持
3. 为ept install增加了进程锁，防止多进程运行出现错误
4. 增加外置批处理自动重命名功能，防止不同插件包的外置批处理同名引发冲突
5. 升级ept接口至V2版本
6. 分辨率调节换用Winxshell提供的程序
7. 更新携带程序：Winxshell，DiskGenius，NTSetup，WinSnap，aida64，CGI，NTPWEdit，adb&fastboot，Imdisk
8. Edgeless升级程序更新接口和提示信息，不再支持OTA

（3.2.0开始）

35. 尝试自适应DPI
36. 增加挂载所有分区功能开关


*****
3.1.0版本更新：

Edgeless一周年重大更新，历经4个内测版本，基于1909的全新版本焕然来临！
但是在日志的开头我们需要掺一点私货，因为我们有必要让各位知道Edgeless经历的某件恶性盗用事件，如果您感兴趣请点击[https://wiki.edgeless.top/v2/cooperation/blacklist.html](https://wiki.edgeless.top/v2/cooperation/blacklist.html)

功能/架构更新：

（3.0.0Alpha开始）
1. 由全新内核带来的NVME、网卡、显示、音频驱动更新，完美驱动您的新机型
2. 支持MTP（Media Transfer Protocol）媒体传输协议
3. 支持通过符合 RNDIS（Remote Network Driver Interface Specification）规范的设备进行网络共享
4. ~~高度拟真的Edgeless ThemeSwitch 1.1.0程序，有三套内置主题可供替换~~
5. 全新优化的StartIsBack界面
6. 加入WinXShell工具集
7. 更新PENetwork，实现自带WiFi功能
8. 支持部分 MSI（Microsoft Windows Installer）安装程序运行
9. 更新的必要组件包
10. 自带Windows图片查看器，支持显示资源管理器界面图片缩略图
11. 优化的Launcher逻辑
12. 检查更新程序支持识别Edgeless Alpha内测版
13. 更全面的加载过程提示
14. 针对典型文件类型进行右键菜单清理
15. 取消“全局右键加载功能”，仅针对.7z文件启用右键“作为插件包加载”
16. 修缮过的“插件下载器”
17. 加入了花里胡哨的LoadScreen™显示加载进度
18. ~~将Notepad替换为Notepad3~~
19. 修复了NTSetup无法使用ISO镜像的问题
（3.0.5Alpha开始）
1. 原“自定义一些功能”更名为“功能开关”，同时增加了几个开关：*禁用U盘管家*（桌面上的悬浮窗及其配套软件）、*干预盘符整理过程*、*使用微PE同款的盘符整理方案*、*启用高通用性的全局无人值守安装*
（使用方法见“玩转Edgeless-官方的自定义玩法-功能开关”）
2. 更新“过期的插件包检测”数据信息
3. Edgeless智能虚拟光驱增加Windows镜像快速安装选择面板
4. 整理开始菜单文件夹分类
5. Edgeless Theme正式上线，增加对Edgeless Theme的支持
6. 取消ThemeSwitch程序，并将其功能转变为“浅色.eth”“深色.eth”两个主题包
7. 升级了plugin_loader程序包以适配Edgeless Theme
8. 增加Log文件，路径X:\Users\Log.txt，并启用日志记录（已适配：plugin_outdatedcheck，plugin_loader，plugin_downloader，dynamic_creator，theme_processer，Launcher.bat，pecmd.ini，openesd），同时向开始菜单添加“查看日志”快捷方式
9. 增加dynamic_creator程序用于快速实现接口，调用方法见开发者文档-API
11. 为保存到U盘的操作添加了提示
（3.0.6Alpha开始）
1. 完善此电脑属性页面显示（感谢@杉 @某康）
2. Launcher写入日志时会写入Edgeless版本号
3. 优化键盘布局切换和防火墙界面
4. 更新NTSetup至4.0.1
5. 优化Edgeless智能虚拟光驱运行逻辑，完善快速安装面板，同时增加日志支持
6. 增加功能开关和理顺盘符的日志支持
7. 在开始菜单内增加另外三种盘符整理方案（实在是找不到完美的方案了，对盘符要求高的同学自己试试吧）
（3.0.7Alpha开始）
2. 增加“禁用智能虚拟光驱”“禁用回收站”开关
1. 更新Dism++至10.1.1001.10版本
2. 支持禁止自动调节分辨率功能开关
3. 主题包安装器支持识别部分只读分区

BUG修复：

（3.0.0Alpha开始）
1. 结束卡住的cmd延时改为10s，解决了启动后30s内运行cmd窗口被强行关闭的bug
2. 修复“更换壁纸”“更改分辨率”的注册表注册位置错误
3. 更全面的文件清理工作
（3.0.5Alpha开始）
1. LoadScreen™取消最后一张用户贴图显示，并额外增加1s延时以获取更好的视觉体验
3. 修复7z无法查看/编辑的问题
4. 修缮插件包下载器：深信服替换为火绒，迅雷替换为3.x可用的官方版本，增加自动重试功能，可能修复了保存到U盘失效的问题，修复文件名带空格无法保存到U盘的问题
5. 将工作组名称还原为WORKGROUP（感谢@☆晓星☆）
6. 大幅度修改了pecmd.ini的启动顺序逻辑，极大提升启动速度
9. 自带程序不再向X:\Users目录乱放无用文件，保持此目录整洁
10. 修复过期插件包比对程序闪退问题和无法禁用列表中插件包的问题
11. 修复部分应用无法输入的问题（感谢@杉）
（3.0.6Alpha开始）
1. 修复wait.cmd显示异常和无法创建“重新加载”快捷方式问题
2. 修复因缺失有效的Edgeless文件夹导致启动卡在LoadScreen界面的问题
3. 修复System文件夹快捷方式无效和无法创建的问题
4. 修复Windows镜像快速安装面板没有图标的问题
5. Launcher结束延时后再次设置桌面图标，防止部分外置批处理运行缓慢导致插件快捷方式没有成功更换图标
6. 检测到没有有效替换系统图标时自动减少恢复默认图标步骤
7. 优化删除Imdisk全局右键菜单的执行位置
8. 修复WinXShell快捷方式图标缺失问题
9. 调整Imdisk快捷方式注册位置
10. 优化文件类型注释
11. 重新进行右键菜单整理，使右键菜单体验尽可能接近日用环境
12. 加入主题应用等待完成，防止与盘符整理冲突
13. 调整开始菜单快捷方式排列
14. 将Notepad还原为官方版本
15. 修复了因为不存在Default文件夹导致安装资源包失败的问题
16. 修复了“过期的插件包检测”因为盘符变更导致无法进行手动管理、全部禁用操作的问题
17. 修复了插件过少情况下应用已安装主题包失败的问题，同时使用等待执行完毕减少出错概率
18. 更换iso文件的文件图标
19. 修复iso无法被Imdisk装载导致死循环的情况
20. LoadScreen处理程序适配最新标准
21. 修复无法找到合法Edgeless启动盘导致的主题安装过程闪退
22. 修复直接启动NTSetup时无法使用全局无人值守文件的问题
23. 修复部分功能开关响应异常的问题
（3.0.7Alpha开始）
1. 修复了ISO文件关联异常的问题
2. 修复主题设置程序逻辑问题和日志显示错误
3. 修复了应用系统图标包时初始化失败的问题
1. 修复“分辨率.txt”存放位置的兼容性问题
（3.1.0追加修复）
2. 修复Launcher读取自定义分辨率和禁用自动分辨率调节的判断代码问题，此问题导致了Launcher闪退
3. 修复外置Launcher警告无法弹出的问题
4. 修复用户账户头像未更改的问题

*****
2.3.0版本更新：

BUG修复：

1.  添加Imdisk挂载后的阶梯型延时，使得挂载完成的处理部分能够完成——针对U盘速度极慢的情况也做了提示
    
3.  修复了内核遗留的GDI BUG，补丁放置在必要组件包内（感谢@Fir @Hikari）
    
4.  修复了Launcher逻辑错误导致插件无法修改壁纸的BUG
    
5.  继续优化-清理开始菜单空文件夹（这个功能实现居然用了三个版本！！！）这次参考微PE的写法（感谢@UEPON），把代码直接放进pecmd.ini里面实现，确保能被完整执行
    
6.  使用pecmd分身大法以应对由pecmd繁忙导致的玄学bug
    
7.  原先等待外置批处理完成处理的时间过长，现缩短至2s。这个问题导致2.2.0版本在某些情况下的用户感官启动时间延长了
    
8.  插件包的批处理运行方式改为半并发型（添加100ms延时依次运行），同样是为了解决由pecmd繁忙导致的玄学bug
    
9.  修复NTSetup引导驱动器初始为C的错误，增加NtSetup引导驱动器智能判断
10. 发现桌面上的“引导修复”程序实为IQI9，并且存在捆绑2345主页的情况，已替换为旧版的sinoxer引导修复程序
    

功能/架构更新：

1.  更新“加载插件包”功能逻辑，**添加全局右键加载功能和7zf的双击加载功能**，适配7zf图标。同时取消了开始菜单内的“加载插件包”功能
    
2.  更新NTSetup到3.9.4（感谢@Caldari）
    
3.  为本不符合插件包规范的启动盘制作工具添加适配策略
    
4.  **调用外置批处理前弹出8s警告（8s后继续执行外置批处理），以防外置批处理被滥用导致安全隐患**  

*（如何使其失效，请参考“官方的自定义玩法”章节）*
    
5.  Edgeless拥有了备案域名edgeless.top。顺便，由于Cloudflare日常抽风（现已取消使用Cloudflare，内陆用户打开网页更快速），我们增加了由@路人甲提供的备用下载站
    
6.  收纳整理了system32目录下的零散文件（为其文件名开头加0），同时为Icon文件夹分类
    
7.  引入Config文件夹，方便对Edgeless的功能进行设置
    
8.  关联esd/wim文件到NTSetup，并为U盘某一分区根目录内的System文件夹创建快捷方式，安装系统更快捷
    
9.  添加了**Edgeless插件下载器**（由@Fir的EasyDown强力驱动，开发者也可以调用EasyDown实现功能），快捷方式位于开始菜单内。跟随内核加载，可以不依赖任何外置部件下载插件包（当然前提是能联网）
    
10.  添加了过期插件包的校验与提醒

   *（如何使其失效，请参考“官方的自定义玩法”章节）*
    
11.  将Imdisk（Edgeless魔改优化版）进化为-**Edgeless智能虚拟光驱**（Edgeless Smart ISO），智能识别并操作ISO文件
    
12.  优化“kill explorer”并适配图标，同时改掉了pecmd的图标
13. 内置了"tasklist.exe"方便开发者调用
14. 自动中断超时的cmd批处理（感谢@Fir）
15. 加入**检查Edgeless更新**功能并嵌入OTA组件接口，**实现PE内OTA功能**
16. 替换了默认主题的自带壁纸，如果没有放置wp.jpg就能看到了

    
*****

2.2.0版本更新：

1.  全面优化插件加载用户体验，去除cmd运行黑框（感谢@Fir），添加右下角加载过程消息提示
    
2.  解决必要组件包中网络驱动的闪退问题，并正式支持WLAN功能（需要使用WiFi插件包）
    
3.  优化Launcher逻辑，加入“更多工具”文件夹和开始菜单空文件夹清理
    
4.  大幅精简并更新了必要组件包，启动更加快速。优化桌面体验
    
5.  启动时自动理顺盘符，减少硬盘误认概率，提升使用体验
    
6.  替换U盘管理软件为”金山U盘卫士“，解决了上一个版本中U盘弹出没有提示、延迟的问题（但是默认会出现一个置顶悬浮窗，开发者目前尚未找到合适的方法去除他，如果您知道如何去除请联系作者）
    
7.  增添了IEProxy组件，更新了7z
    
8.  针对部分U盘存在的无法找到盘符现象进行了处理（会过2.5s自动重试一次，如仍旧找不到则弹出提示）
    
9.  支持自定义壁纸（替换Edgeless文件夹内的wp.jpg即可。注意：如果原图片不是jpg格式，请使用转换工具转换后替换）
    
10.  启动时自动调节分辨率或是固定使用某一分辨率，支持在桌面右键调节分辨率和更换壁纸
    
11.  支持启动时补充Windows文件夹内的缺失文件（把需要的文件按照Windows文件夹内的目录顺序放在Edgeless\\Windows文件夹内即可）
    
12.  添加手动加载插件功能（注意：不推荐作为自动加载的替代方案！！！更多的用于开发者调试和应急加载）
    
13.  更换ISO挂载程序为Imdisk（Edgeless魔改优化版），解决了Windows资源管理器不能挂载exFAT分区内ISO镜像的问题

<script>
   export default{
      data(){
         return {
            edgeless_beta:"loading...",
            edgeless_alpha:"loading...",
            hub_beta:"loading..."
         }
      },
      methods:{
         getEdgeless(){
            fetch("https://pineapple.edgeless.top/api/v2/info/iso_version").then((res)=>{
               res.text().then((ver)=>{
                  this.edgeless_beta=ver
               })
            })

            fetch("https://pineapple.edgeless.top/api/v2/alpha/data?token=そうだよ").then((res)=>{
               res.json().then((json)=>{
                  this.edgeless_alpha=json.version
               })
            })
    
            fetch("https://pineapple.edgeless.top/api/v2/info/hub_version").then((res)=>{
               res.text().then((ver)=>{
                  this.hub_beta=ver
               })
            })
         }
      },
      mounted(){
         this.getEdgeless()
      }
   }
</script>