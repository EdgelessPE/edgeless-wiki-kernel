---
name: donation-recorder
description: 记录捐赠信息并自动提交PR。当用户发送捐赠记录截图时，自动识别截图中的捐赠者称呼（带星号）、金额、日期和备注，支持微信支付、支付宝（Alipay）和其他支付平台的捐赠截图自动识别。

---

# Donation Recorder

自动记录捐赠信息并创建 PR。

触发条件：用户发送包含捐赠记录的图片或截图，或明确要求"记录捐赠"。

## 工作流程

### 1. 同步主仓库代码

```bash
cd /home/cno/.openclaw/workspace/edgeless-wiki-kernel
git fetch upstream
git checkout main
git pull upstream main
```

### 2. 创建新分支

```bash
git checkout -b add-donation-YYYYMMDD
```

### 3. 识别截图信息

从用户发送的图片中提取：
- 捐赠者称呼（脱敏处理，可能带星号，注意正确识别星号数量，可能是两个或一个星号）
- 金额（人民币）
- 日期（YYYY.MM.DD 格式）
- 备注（如果有）

### 4. 插入捐赠记录

编辑 `docs/global/donate.md`：
- 找到对应年份的表格（如 2026 年）
- 按金额降序找到插入位置，如果金额相同则按照日期升序插入新记录
- 格式：`| 称呼 | ￥ 金额 | 日期 | 备注 |`

### 5. 提交并推送

```bash
git add docs/global/donate.md
git commit -m "Add donation: 称呼 ￥金额 日期"
git push -u origin add-donation-YYYYMMDD
```

### 6. 创建 PR

```bash
gh pr create --repo EdgelessPE/edgeless-wiki-kernel --base main --head cno4tech:add-donation-YYYYMMDD --title "Add donation: 称呼 ￥金额 日期" --body "在YYYY年捐赠列表中增加新记录：称呼 ￥金额 日期"
```

### 7. 返回结果

将 PR 链接返回给用户。

## 注意事项

- 本地仓库路径：`/home/cno/.openclaw/workspace/edgeless-wiki-kernel`
- 远程仓库：使用 SSH 协议推送到 cno4tech/edgeless-wiki-kernel
- PR 目标仓库：EdgelessPE/edgeless-wiki-kernel
- 分支命名格式：`add-donation-YYYYMMDD`
