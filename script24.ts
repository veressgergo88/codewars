function nbMonths(startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[] {
    let result: number[] = []
    let savings: number = 0
    let month: number = 0

    while ( startPriceOld + savings < startPriceNew ) {
        month++
        if (month % 2 === 0)
            percentLossByMonth += 0.5
        
        startPriceOld *= (1 - percentLossByMonth / 100)
        startPriceNew *= (1 - percentLossByMonth / 100)

        savings += savingperMonth
    }

    let remainingSavings = savings + startPriceOld - startPriceNew
    return result = [...result, month, Math.round(remainingSavings)]
}
    
let result1: number[] = nbMonths(2000, 8000, 1000, 1.5)
let result2: number[] = nbMonths(12000, 8000, 1000, 1.5)
let result3: number[] = nbMonths(6000, 9000, 1000, 1.5)
let result4: number[] = nbMonths(8000, 8000, 1000, 1.5)
let result5: number[] = nbMonths(1000, 7000, 1000, 1.5)

    
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)

    
export {}