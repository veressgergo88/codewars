export function persistence(num: number): number {
    let str: string = num.toString()
    let numArray: number[] = []
    let count:number = 0
    
    let i = 0
    while (i < str.length) {
        numArray = [...numArray, parseInt(str[i])]
        let newNumber = numArray.reduce((result, number) =>{
            return result * number
        }, 1)
        str = newNumber.toString()
        if(str.length > 1)
            count++
        i = 0
    }
    
    return count
}

   let result1: number = persistence(39)
   let result2: number = persistence(999)
   let result3: number = persistence(4)
   
   console.log(result1)
   console.log(result2)
   console.log(result3)
   
       
   export {}