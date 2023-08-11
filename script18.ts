function countBits(n: number): number {
    //pure algorithm no methods
    let binArray:number[] = []
    let dividend:number = n
    let quotient:number = 1

    while(quotient !== 0){
        dividend%2 === 0 ? binArray = [...binArray, 0]: binArray = [...binArray, 1]
        quotient = Math.floor(dividend/2)
        dividend = quotient
    }

    let i = 0
    let count = 0
    while(binArray[i] !== undefined){
        if(binArray[i] === 1){
            count++
        }
        i++
    }
        
    return count
    }
    
    let result1: number = countBits(5750)
    let result2: number = countBits(1101)
    let result3: number = countBits(1222)
    let result4: number = countBits(1154)
    
    console.log(result1)
    console.log(result2)
    console.log(result3)
    console.log(result4)
    
    export {}