function dontGiveMeFive(start:number, end:number) : number {
let count = 0
  while (start <= end) {
    let asString = "" + start
    let shouldAdd = true
    let i = 0
    while(asString[i] !== undefined){
        if (asString[i] === "5"){
            shouldAdd = false
        }
        i++
    }
    if(shouldAdd){
        count++
    }
    start++
  }
    return count;
}

let result1: number = dontGiveMeFive(1,9)
let result2: number = dontGiveMeFive(120,135)
let result3: number = dontGiveMeFive(12,80)
let result4: number = dontGiveMeFive(30, 50)
let result5: number = dontGiveMeFive(100, 200)
let result6: number = dontGiveMeFive(65, 88)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)

export {}