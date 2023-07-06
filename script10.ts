function createPhoneNumber(numbers: number[]): string {
let result: string = ""
let firstPart: string = "(" + numbers[0] + numbers[1] + numbers[2]+ ")"
let secondPart: string = " " + numbers[3] + numbers[4] + numbers[5]
let thirdPart: string = "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]

let numbersLength = 0
while(numbers[numbersLength] !== undefined){
    numbersLength++
}

return (numbersLength === 10) ? firstPart + secondPart + thirdPart : ""
}

let result1: string = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
let result2: string = createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
let result3: string = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

console.log(result1)
console.log(result2)
console.log(result3)

export {}