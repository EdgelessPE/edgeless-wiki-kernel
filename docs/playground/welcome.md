# 开机欢迎音乐

利用“千千静听”插件包实现开机自动播放音乐

> 灵感来自内测群成员 @吾\__兮_，希望大家能利用好插件包这个功能

:::tip 2019-11-28 加注
我们上架了“开机音乐”插件包，内含修改帮助，更加容易修改！
:::

1. 下载“千千静听”插件包并解压，得到`TTPlayer`（文件夹）和`TTPlayer7.10Plus.cmd`（外置批处理）
   ![](https://pineapple.edgeless.top/picbed/wiki/images/picture1_1561395662946.png)

2. 将音频文件放到“TTPlayer”文件夹内（只要是千千静听支持的音频格式都可以）
   ![](https://pineapple.edgeless.top/picbed/wiki/images/picture2_1561395754987.png)
3. 编辑“TTPlayer7.10Plus.cmd”
   ![](https://pineapple.edgeless.top/picbed/wiki/images/scshot4.png)
4. 在`exit`的上方加一行`"X:\Program Files\Edgeless\TTPlayer\TTPlayer.exe" "X:\Program Files\Edgeless\TTPlayer\Bad Reputation-Avicii.mp3"`
   其中`Bad Reputation-Avicii.mp3`为音频文件名
   :::tip 释义
   这行代码的作用为调用`TTPlayer.exe`程序播放`Bad Reputation-Avicii.mp3`
   
   而`X:\Program Files\Edgeless\TTPlayer\`则表示 Edgeless 启动完成之后千千静听的程序组件被存放在了这个目录内
   :::

   ![](https://pineapple.edgeless.top/picbed/wiki/images/picture3_1561396151258.png)

5. 保存“TTPlayer7.10Plus.cmd”，将文件夹（TTPlayer）和外置批处理（TTPlayer7.10Plus.cmd）压缩回 7z 文件
   ![](https://pineapple.edgeless.top/picbed/wiki/images/scshot5.png)
6. 启动 Edgeless 进行测试
   ![](https://pineapple.edgeless.top/picbed/wiki/images/picture4_1561396273879.png)
