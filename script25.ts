function xo(str: string) :boolean{
    let countX: number = 0
    let countO: number = 0

    for (let i = 0; i < str.length; i++){
      if(str[i].toLowerCase() === "x")
        countX++    
      
      if(str[i].toLowerCase() === "o")
        countO++
    }

    return (countX === countO) || (countX === 0 && countO === 0) ? true : false
}
    
let result1: boolean = xo('xo')
let result2: boolean = xo('xxOo')
let result3: boolean = xo('xxxm')
let result4: boolean = xo('Oo')
let result5: boolean = xo('ooom')

    
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)

    
export {}