function arrayDiff(a: number[], b: number[]): number[] {
    let comparedArray: number[] = []
    
    let bLength = 0
    while(b[bLength] !== undefined){
        bLength++
    }

    let i = 0
    while (a[i] !== undefined) {
        let j = 0;
        let found = false;
        while (j < bLength){
            if (a[i] === b[j]) {
                found = true;
                break;
            }
            j++;
        }

        if (!found) {
            comparedArray = [...comparedArray, a[i]]
        }
        i++;
    }

    return comparedArray
}

let result1: number[] = arrayDiff([], [4, 5])
let result2: number[] = arrayDiff([3, 4], [3])
let result3: number[] = arrayDiff([1, 8, 2], [])
let result4: number[] = arrayDiff([1, 2, 3], [1, 2])

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

export { }