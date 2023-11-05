export function posAverage(s: string): number {
    const substrings = s.split(", ")
    const n = substrings.length
    let totalCommonPos: number = 0
    
    for (let i = 0; i < n - 1; i++) {
        for (let y = i + 1; y < n; y++){
            const currCompare = substrings[i]
            const nextCompare = substrings[y]
            let commonPos = 0

            for (let x = 0; x < currCompare.length; x++){
                if(currCompare[x] === nextCompare[x])
                    commonPos++
            }
            totalCommonPos += commonPos
        }
    }
    const averagePercentage = (totalCommonPos / ((n * (n-1))/2 )) / substrings[0].length * 100
    
    return Number(averagePercentage.toFixed(10))
}

   let result1: number = posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096")
   let result2: number = posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490")
   let result3: number = posAverage("449404, 099090, 600999, 694460, 996066, 906406, 644994, 699094, 064990, 696046")   
   let result4: number = posAverage("0, 0, 1")   
   
   console.log(result1)
   console.log(result2)
   console.log(result3)
   console.log(result4)
   
       
   export {}