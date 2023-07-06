const likes = (a: string[]): string => {
    let aLength = 0
    while (a[aLength] !== undefined) {
        aLength++
    }
    let others = aLength - 2
    return (aLength === 1) ? a[0] + " likes this" : (aLength === 2) ? a[0] + " and " + a[1] + " like this" : (aLength === 3) ? a[0] + ", " + a[1] + " and " + a[2] + " like this" : (aLength > 3) ? a[0] + ", " + a[1] + " and " + others + " others like this" : "no one likes this"
}

let result1: string = likes([])
let result2: string = likes(["Peter"])
let result3: string = likes(["Jacob", "Alex"])
let result4: string = likes(["Max", "John", "Mark"])
let result5: string = likes(["Alex", "Jacob", "Mark", "Max"])

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)

export { }