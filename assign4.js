let myArr = []
let myVal = process.argv
let myMeal= myArr.push(Number(myVal[2]))
let tipPercent = myArr.push(Number(myVal[3]))
let tip = myVal[3]/100*myVal[2]
const totalAmount = Number(myVal[2]) + tip;
const output = `your meal is $${Number(myVal[2])} + ${Number(myVal[3])}%tip = $${totalAmount}`
console. log(output)