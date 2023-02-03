# 使用 Edgeless Bot 自动构建插件包


## 状态
[![workflow status](https://github.com/EdgelessPE/edgeless-bot/actions/workflows/serve.yml/badge.svg?branch=next)](https://github.com/EdgelessPE/edgeless-bot/actions/workflows/serve.yml)

## 简介
插件包的构建是一个较为机械的流程，通常步骤如下：
1. 去绿色软件网站或官方站点下载最新版的上游软件
2. 将绿色软件适配为插件包，编写外置批处理
3. 上传至 Edgeless 群文件等待管理员审核上架

此流程可以使用机器人自动完成，因此我们编写了 Edgeless Bot 来代替人工执行这些过程。

机器人的运行使用 GitHub Actions，构建触发为 Push 或每日04:00。机器人会从上游发布页面自动爬取软件更新信息，当存在更新时自动下载新版并制作成 Edgeless 插件包然后上传到 Edgeless 镜像源。

## 获取
打开 Edgeless Hub，带（CI）徽章或“自动构建”标签的插件包即由 Edgeless Bot 构建。

## 更多
[点击此处](https://wiki.edgeless.top/bot)跳转至 Edgeless Bot 文档