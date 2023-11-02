export function persistence(num: number): number {
    let str: string = num.toString()
    let numArray: number[] = []
    let count:number = 0
    
    while (str.length !== 1) {
        let i = 0
        while(str[i] !== undefined){
            numArray = [...numArray, parseInt(str[i])]
            i++
        }
        str = numArray.reduce((acc, current) => acc *= current).toString()
        count++
        numArray = []
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