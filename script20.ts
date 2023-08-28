function duplicateEncode(text: string): string {
    const lowercaseText = text.toLowerCase();
    const countArray: Record<string, number> = {}
    const convertArray: string[] = [] 

    for (const char of lowercaseText){
        countArray[char] = (countArray[char] || 0) + 1
    }

    for (const char of lowercaseText){
        if(countArray[char] === 1){
            convertArray.push("(")
        }
        else {
            convertArray.push(")")
        }
    }

    const result = convertArray.join("")

    return result
}
    
let result1: string = duplicateEncode("din")
let result2: string = duplicateEncode("recede")
let result3: string = duplicateEncode("Success")
let result4: string = duplicateEncode("(( @")

    
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

    
export {}