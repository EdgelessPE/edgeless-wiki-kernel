import fs from "fs"
import path from "path"

function main(){
    const textPath=path.join(__dirname,"..","docs","global","donate.md")
    const text=fs.readFileSync(textPath).toString()
    const sp=text.split(/## [0-9]+年/)
    const matches=sp[1].match(/￥ [\d\.]+\s*/g)
    if(matches){
        let money,sum=0
        for(let mt of matches){
            money=Number(mt.split(" ")[1])
            sum+=money
        }
        sum=Number(sum.toFixed(2))
        console.log(`Info:今年共收到：${matches.length} 笔捐赠，${sum} 元`)
        let donate=(0.2*(sum-260)).toFixed(2)
        console.log(`Info:需要捐出${donate} 元`)
    }
}
main()
