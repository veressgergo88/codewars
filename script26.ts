function number(array: string[]): string[]{
    let rowNumber = 1
    let result:string[] = []
    let newRow:string = ""

    if(array.length)
        for(let i = 0; i < array.length; i++){
            newRow = rowNumber + ": " + array[i]
            result.push(newRow)
            rowNumber++
        }
    
    return result
}
    
let result1: string[] = number([])
let result2: string[] = number(["a", "b", "c"])
let result3: string[] = number(["", "", "",])
let result4: string[] = number(["jam", "ram", "pam"])

    
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

    
export {}