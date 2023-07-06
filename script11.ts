const findOdd = (xs: number[]): number => {
    let theOddCountNumber: number = 0
    let i= 0
    while(xs[i] !== undefined){
        let y = 0
        let count = 0
        while(xs[y] !== undefined){
            if(xs[i] === xs[y]){
                count++
            }
            y++
        }
        if(count%2 !== 0){
            theOddCountNumber = xs[i]
        }
        i++
    }
    return theOddCountNumber
};

let result1: number = findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
let result2: number = findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])
let result3: number = findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])
let result4: number = findOdd([10])
let result5: number = findOdd([1,1,1,1,1,1,10,1,1,1,1])
let result6: number = findOdd([5,4,3,2,1,5,4,3,2,10,10])

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)

export {}
  