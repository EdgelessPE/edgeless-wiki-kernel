# 瞎扯
Edgeless是Cno在高二就开始酝酿的一个PE项目，高三下半学期（对就是高考前）一直在策划Edgeless的相关内容

（当然最后高考的结果个人jio的还是很满意的哈，目前在南京某211高校就dian读di）。
## 起因
### 为什么要做PE？

市面上的PE一大堆，当然绝大部分都是商业PE，会自带捆绑软件、劫持主页等。比较良心的一款PE就是微PE了，不过微PE一直不肯支持网络功能（由此保存内核的精简）让我感觉不爽。我师父@yidee推荐给我了一款PE叫做无垠PE，我在zdfans上找到了无垠PE，并用了很长一段时间，甚至在Edgeless_Alpha_1.0（功能不完备，当时只能做到正常启动）诞生时我也在用它帮我同学重装系统。支持网络功能、工具完备、更新周期适当，爱不释手。

但令我感到不适的是无垠PE完全没有自定义功能，甚至连壁纸都无法自主决定，更不用说自带的庞大的工具集了。而且内置的Opera浏览器十分不好用，日常崩溃，一些软件也因为种种原因无法正常在PE内运行。我便萌生了插件的想法。
<br/>

我个人比较推崇“插件化/模块化”的概念，也致力于研究完善接口对接方案。一开始的想法是希望实现PE领域的“插件化”，如果能对PE领域产生一点点影响，最好能带动功能插件化的风气我感到万分荣幸。在Edgeless出现之前有部分PE已经实现了外置PETOOL的方案，然而这种专包专用的解决方案仍然不够灵活，我需要的是更灵活多变的自主化方案，这样的插件化机制才能提供给用户更多的选择机会，而不是让用户在一堆死板而没有生气的产品之间挑选出那个相对能令自己满意的产品。
## 名称
### 为什么叫Edgeless？
无垠PE恋梦维护版的版本最终停留在了2017.09.03，zdfans站长也卖站跑路，似乎关于无垠PE的一切消息来源都已经消失（后来发现无忧启动论坛有一位大佬发布了他的无垠PE魔改版）。

到了高三下半学期，我已经不指望无垠PE继续更新了。我妄图接手更新无垠PE的事项，偷偷用班里电脑去找了恋梦的联系方式，未果。

高考前疯狂的刷题令我感到厌烦，于是我便会在上自主自习的时候拿出一张空白的A3纸写批处理，写插件实现原理的结构和逻辑，甚至开始写Edgeless官网长什么样子，当然也想了这个项目的名称和Logo。当时写了一大堆，本来想保存到高考后慢慢完成的，后来好像被我丢了，因为比较影响xio习。
也是经过很久的思想斗争，才敲定Edgeless这个名称的，来由就是无垠的英文近似翻译。找了一下Edgeless的重名项目，发现并不是很多（有一家好像是做赌场的emmm），而且Edge有蹭巨硬♂ 热度的嫌疑![内裤滑稽](https://cloud.edgeless.top/picbed/wiki/images/pc.gif)，就这么敲定了。
## 特点
### Edgeless有啥特点吗?
如果不算3.x版本内核的主题包，Edgeless的最大特点就一个——插件。不过个人认为这个特点已经足以秒杀市面上的...（这么说是不是违反广告法了![流汗滑稽](https://cloud.edgeless.top/picbed/wiki/images/tieba_emotion_88.gif)我住口）

其实插件的原理十分简单，就是几个开机自动解压并运行批处理安装的压缩包，但是它的潜能却是无穷的，理论上能自定义PE的一切内容。（目前我还没看到和我想法一致的PE，如果有纯属巧合，这个概念确实是我自己想出来的。当然也不能完全说是我原创的，因为有很多PE都是外置工具型的）
开发者可以自主开发插件，为PE增加不同的软件、功能。这种能自己决定PE内有哪些东西的感觉确实nice啊，就好比公共电脑和自己的电脑更喜欢哪个这样的。虽然某些商业PE也可以自定义壁纸啥的，但我觉得还是不够，里面的一切都要由用户自己决定才是坠好的。

还有一个严格来说不能算是特点的特点是非盈利性。Edgeless的官方组件、网站完全无广告，PE自带内容无捆绑、无劫持。此外Edgeless在很多小细节方面也做了优化
## 开发
### 你个辣鸡是怎么开发的?
缩实话，本人技术极差，只能边做边摸索求助。Edgeless2.x的内核提供来自无忧启动论坛的大佬2012919497149（我几乎没改因为大佬已经做得很好了）。大佬在发布时提到这样一句:[（原帖）](http://bbs.wuyou.net/forum.php?mod=viewthread&tid=376688)

>提醒：Boot可以自由修改分享等非盈利行动

那我就认为已经获得授权啦，直接照搬过来做内核用。
插件载入部分是Edgeless的核心。这个部分我在大一寒假利用晚上的时间（白天去打工）一点一点熬出来的，期间也求助了无忧启动的坛友，最后在Beta2.0版本初步实现了Edgeless的基本功能，也尽可能做到了效率最高化。

第一批插件来自恋梦维护的无垠PE的工具集（体现在必要组件包中）和无忧启动论坛tools241收集的PE用程序，也是基本照搬（wtcl我太菜了）。

从3.x开始，内核由slore的Wimbuilder2制作，感谢 @杉 的制作教程和仓库！

先扯这么多啦，别的也不知道说啥了。等以后想起来再说。

============分割线============

刚刚翻了一下Windsys的站点，发现康康的WTDR的Pack功能和Edgeless的插件包很相似诶，而且发布还比我早。emmmmm我只能说英雄所见略同吧，还好我们在不同的领域实现功能，不然我可能会被喷抄袭了![流汗滑稽](https://cloud.edgeless.top/picbed/wiki/images/tieba_emotion_88.gif)

解释一下，这种包思路并不复杂，还是很容易想到的：通过一个共有、通用的配置文件来适配参差不齐、标准不一的第三方软件。事实上，在MBR与EFI引导启动的设计思路也能看到这种想法的影子，这种思路也造就了x86平台强大的兼容性能

<br/>

<br/>

此外，粗浅地以个人观点谈一下目前的PE。商业PE多有成熟的套壳方案（OEM）供应，不作详细描述。非商业PE多以不同作者发布的“内核”为核心分为数个阵营，无忧论坛甚至还划分了风格门派。各PE之间大多比拼内核、技术、完整度、精简度、用户体验等。百家争鸣，热闹非凡。然而，

* 随着技术分享与交流深入，各核心之间相互借鉴，差异越来越小，功能越来越完善。因此便有了wimboot这样较为成熟、趋于完美的内核解决方案供应
* 大部分PE多为这类内核的套壳版本，添加了部分维护软件、修改了引导菜单或是在用户体验方面（GUI）有所改进，然而其之间共有的部分——内核核心却相差无几。上述的大部分改动并不直接操作内核，完全可以通过启动内核之后添加文件、执行程序完成
* 大部分PE升级可能只是升级了几个常用软件，却要用户下载动辄上GB的镜像文件，全部重新写入，而实际文件更新率不到5%，也就是说有95%的文件是本地已经存在的，这未免有资源浪费之嫌
* 很多PE用户喜欢这个PE的一部分和另一个PE的一部分，然而自己不会自制PE或是不愿意耗费时间，只好妥协选择相对能另自己满意的那一个，然后通过一些方法实现其他功能
* 某PE作者精挑细选了一些软件制成PE，但是有人留下了“请加入xxxx软件”“xxxx软件可以删掉”“我觉得xxx比xxxx更好用”之类的评论，也就是容易出现“众口难调、各执一词”的现象
* 根据使用场景的不同，用户所使用的内置程序也不一样。而现阶段大部分PE都会把所有的程序一股脑地全部加载，造成时间的浪费与资源的不必要占用
* 
<br/>

为了尽可能地解决上述问题，Edgeless采用了“加法”，任何能通过简单的加法增加的内容就绝不做成内置，把所有能改的部件交给用户选择。正所谓众口难调，那就让厨师做好主菜，把加配料的环节交给用户，喜辣喜甜自己调整，这样大家都能吃的满意。这也是Edgeless所倡导的：只给用户想要的，用户不需要的哪怕再好也绝不强加；尊重用户的选择，而不是开发者至上（我说这个东西好，你就必须接受；不接受那就别用，自己做去）。这样同时也充分提高了劳动输出效率与各方资源的利用率
