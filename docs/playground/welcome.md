# 开机欢迎音乐

## 利用`开机音乐`插件包
:::tip
灵感来自内测群成员 @吾\__兮_，希望大家能利用好插件包这个功能
:::

1. 下载[开机音乐](https://zfile.edgeless.top/d/%E6%8F%92%E4%BB%B6%E5%8C%85/%E7%BE%8E%E5%8C%96%E5%A2%9E%E5%BC%BA/%E5%BC%80%E6%9C%BA%E9%9F%B3%E4%B9%90_1.1.0.0_Cno.7z?sign=fGGSksOw19FFhkL_qcEd_O6DN7oJG4E1EZBggWrvD6Q=:0)插件包并解压，得到`bootWave`文件夹和`bootWave.cmd`外置批处理

2. 将音频文件放到`bootWave`文件夹内替换`win7.mp3`

3. 返回上级目录的`bootWave.cmd`文件将第二行的`win7.mp3`换成自定义音频文件的文件名

4. 保存`bootWave.cmd`，将`bootWave`文件夹和`bootWave`文件夹和`bootWave.cmd`外置批处理压缩回 7z 文件

6. 启动 Edgeless 进行测试


## 利用`千千静听`插件包（不推荐）

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
