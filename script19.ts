function duplicateCount(text: string): number {
    //pure algorithm no methods
    const charCount: Record<string, number> = {};
    const lowercaseText = text.toLowerCase();

    for (const char of lowercaseText) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let count = 0;
    for (const key in charCount) {
        if (charCount[key] > 1) {
            count++;
        }
    }

    return count
}
    
let result1: number = duplicateCount("abcde")
let result2: number = duplicateCount("aabbcde")
let result3: number = duplicateCount("aabBcde")
let result4: number = duplicateCount("aA11")
let result5: number = duplicateCount("Indivisibility")
let result6: number = duplicateCount("Indivisibilities")
    
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)
    
export {}