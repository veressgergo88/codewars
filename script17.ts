function nbDig(n: number, d: number): number {
let count = 0
let stringDig = "" + d

let k = 0
let squaredNum = 0
let stringSquaredNumbers:string[] = []
while(k <= n){
    squaredNum = k**2
    stringSquaredNumbers = [...stringSquaredNumbers, "" + squaredNum ]
    k++
}

let i = 0
while(stringSquaredNumbers[i] !== undefined){
    let stringNumber = stringSquaredNumbers[i]
    let y = 0
    while(stringNumber[y] !== undefined){
        if(stringNumber[y] === stringDig){
            count++
        }
        y++
    }
    i++
}
    
return count
}

let result1: number = nbDig(5750, 0)
let result2: number = nbDig(11011, 2)
let result3: number = nbDig(12224, 8)
let result4: number = nbDig(11549, 1)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

export {}