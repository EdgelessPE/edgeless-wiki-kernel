import { readFileSync } from "node:fs"

function main() {
    const file = process.argv[2] ?? new URL("../docs/global/donate.md", import.meta.url)
    const lines = readFileSync(file, "utf8").split(/\r?\n/)
    const sections = lines.flatMap((line, index) => {
        const match = line.match(/^##\s+(\d{4})\s*年\s*$/)
        return match ? [{ year: Number(match[1]), index }] : []
    })
    const latest = sections.sort((a, b) => b.year - a.year)[0]
    if (!latest) throw new Error("未找到捐赠年份标题（## YYYY 年）")

    let previous
    let count = 0
    for (let index = latest.index + 1; index < lines.length; index++) {
        const line = lines[index].trim()
        if (/^#{1,2}(?:\s|$)/.test(line)) break
        if (!line.startsWith("|")) continue

        const cells = line.split(/(?<!\\)\|/).slice(1).map(cell => cell.trim())
        if (cells[0] === "称呼" && cells[1] === "数额" && cells[2] === "日期") continue
        if (cells.slice(0, 3).length === 3 && cells.slice(0, 3).every(cell => /^:?-+:?$/.test(cell))) continue

        const lineNumber = index + 1
        const amount = cells[1]?.match(/^[￥¥]\s*(\d+)(?:\.(\d{1,2}))?$/)
        const date = cells[2]?.match(/^(\d{4})\.(\d{1,2})\.(\d{1,2})$/)
        if (!cells[0] || !amount || !date) {
            throw new Error(`第 ${lineNumber} 行：捐赠记录格式无效，需包含称呼、金额（￥ 0.00）和日期（YYYY.MM.DD）`)
        }

        const [year, month, day] = date.slice(1).map(Number)
        const parsedDate = new Date(Date.UTC(year, month - 1, day))
        if (year !== latest.year || parsedDate.getUTCFullYear() !== year ||
            parsedDate.getUTCMonth() !== month - 1 || parsedDate.getUTCDate() !== day) {
            throw new Error(`第 ${lineNumber} 行：日期无效或不属于 ${latest.year} 年`)
        }

        // 以分比较金额，避免小数精度影响相同金额的判断。
        const cents = Number(amount[1]) * 100 + Number((amount[2] ?? "").padEnd(2, "0"))
        const current = { cents, date: year * 10000 + month * 100 + day, lineNumber }
        if (previous && (current.cents > previous.cents ||
            (current.cents === previous.cents && current.date < previous.date))) {
            throw new Error(`第 ${lineNumber} 行与第 ${previous.lineNumber} 行顺序错误：金额须降序，相同金额的日期须升序`)
        }
        previous = current
        count++
    }

    if (count === 0) throw new Error(`${latest.year} 年没有捐赠记录`)
    console.log(`检查通过：${latest.year} 年的 ${count} 笔捐赠按金额降序、相同金额日期升序排列`)
}

try {
    main()
} catch (error) {
    console.error(error.message)
    process.exitCode = 1
}
