function numPrimorial(n: number): number {
    let primorialNumbers: number[] = []
    let result = 1

    let isPrime = (num: number):boolean =>  {
        if (num < 2) return false
        for (let i = 2; i <= Math.sqrt(num); i++){
            if (num % i === 0) return false
        }
        return true
    }
    
    let i = 2
    while(primorialNumbers.length !== n){
        if(isPrime(i))
            primorialNumbers = [...primorialNumbers, i]
        i++
    }

    for (const number of primorialNumbers){
        result *= number
    }    

    return result
}
    
let result1: number = numPrimorial(3)
let result2: number = numPrimorial(4)
let result3: number = numPrimorial(5)
let result4: number = numPrimorial(8)
let result5: number = numPrimorial(9)

    
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)

    
export {}