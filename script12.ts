const digitalRoot = (n: number): number => {
    let convertBackAndForth = (number: number): number[] => {
        let numConvStr: string = "" + number
        let stringNumArray: string[] = []
        let numberArray: number[] = []

        let stringNumIndex = 0
        while (stringNumArray[stringNumIndex] !== undefined) {
            stringNumArray = [...stringNumArray, numConvStr[stringNumIndex]]
            stringNumIndex++
        }

        let convertIndex = 0
        let stringNumber = ""
        while (stringNumArray[convertIndex] !== undefined) {
            stringNumber = stringNumArray[convertIndex]
                + stringNumber
            numberArray = [...numberArray, +stringNumber]
            convertIndex++
        }
        return numberArray
    }

    let sum = (array: number[]): number => {
        let sumofArray = 0
        let indexOfArray = 0
        while (array[indexOfArray] !== undefined) {
            sumofArray += array[indexOfArray]
            indexOfArray++
        }
        return sumofArray
    }

    let i = 0
    while()

    if()

    return 0
}

let result1: number = digitalRoot(16)
let result2: number = digitalRoot(456)
let result3: number = digitalRoot(942)
let result4: number = digitalRoot(132189)
let result5: number = digitalRoot(493193)
let result6: number = digitalRoot(555666)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)

export { }