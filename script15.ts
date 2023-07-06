function findEvenIndex(numbers: number[]): number {
    let sum = 0
    let i = 0
    while (numbers[i] !== undefined){
        sum += numbers[i]
        i += 1
    }

    let upperSum = sum
    let lowerSum = 0
    i = 0
    while (numbers[i] !== undefined) {
        
        upperSum = upperSum - numbers[i]

        if (upperSum === lowerSum){
            return i
        }

        lowerSum = lowerSum + numbers[i]
        i += 1
    }
    return -1
}

let result1: number = findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
let result2: number = findEvenIndex([1, 100, 50, -51, 1, 1]);
let result3: number = findEvenIndex([1, 2, 3, 4, 5, 6]);
let result4: number = findEvenIndex([20, 10, 30, 10, 10, 15, 35]);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

export {};
