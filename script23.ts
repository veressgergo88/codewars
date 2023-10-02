function multiplicationTable(size: number): number[][] {
    const outerArray:number[][] = []
    
    for (let i = 1; i <= size; i++){
        const innerArray: number[] = []
        for (let j = 1; j <= size; j++) {
            innerArray.push(i * j)
        }
        outerArray.push(innerArray)
    }
    return outerArray
}
    
let result1: number[][] = multiplicationTable(1)
let result2: number[][] = multiplicationTable(2)
let result3: number[][] = multiplicationTable(3)
let result4: number[][] = multiplicationTable(4)
let result5: number[][] = multiplicationTable(5)

    
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)

    
export {}