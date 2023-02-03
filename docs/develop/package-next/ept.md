# ept-next
专注于“包管理”本身的功能，不实现保存到U盘、属性管理等
## 管理相关
install
接受资源名/本地路径/URL

remove
接受资源名

search
使用镜像源提供的search_index进行搜索

upgrade
更新本地资源

update
刷新索引，索引有10min有效时间

expand
展开内容分布式资源包

take
提供U盘或文件夹或某个网络位置，将其视为 Edgeless 启动盘并执行加载工作

fetch
仅下载

mirror
管理镜像源，Hub使用`ept mirror hello --json`获取某镜像源的hello信息

cache
管理缓存

status
查询本地已安装和待更新

info
查询某资源信息

help
命令行帮助

## 制作相关
verify
执行校验，接受资源项目文件夹路径

pack
打包，接受资源项目文件夹路径

publish
发布，如果未登录则会打开浏览器窗口要求登录并获取access_token