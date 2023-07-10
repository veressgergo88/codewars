const digitalRoot = (n: number): number => {
    let convertBackAndForth = (number:number):number[] => {
        let numConvStr = "" + number
        let stringNumArray:string[] = []
        let numberArray:number[] = []
    
        let stringNumIndex = 0
        while (numConvStr[stringNumIndex] !== undefined) {
            stringNumArray = [...stringNumArray, numConvStr[stringNumIndex]]
            stringNumIndex++
        }
        let convertIndex = 0
        let stringNumber = ""
        while (stringNumArray[convertIndex] !== undefined) {
            stringNumber = stringNumArray[convertIndex]
            numberArray = [...numberArray, +stringNumber]
            convertIndex++
        }
        return numberArray
    }

    let sum = (array:number[]):number => {
        let sumofArray = 0
        let indexOfArray = 0
        while (array[indexOfArray] !== undefined) {
            sumofArray += array[indexOfArray]
            indexOfArray++
        }
        return sumofArray
    }

let focusNumber = n
let focusNumArray = convertBackAndForth(focusNumber)
let arraySum = sum(focusNumArray)

let numLenght = 0
while(focusNumArray[numLenght] !== undefined){
    numLenght++
}

while(numLenght > 1){
    focusNumber = arraySum
    focusNumArray = convertBackAndForth(focusNumber)
    arraySum = sum(focusNumArray)
    numLenght = 0
    while(focusNumArray[numLenght] !== undefined){
        numLenght++
    }
}
    return arraySum
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