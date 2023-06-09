//Cats and shelves
//A macska csak 1-et vagy 3-at ugorhat a megjelölt magasságú pihenőre. Mennyi lesz a legkevesebb ugrás?

function solution(start: number, finish: number):number {
    
    let count = 0
    let current = start
    while(current !== finish){
        if(current + 3 > finish) {
            current = current + 1
            count+=1
        } else {
            current = current + 3
            count+=1
        }
    }
    return count
  }

let result1:number = solution(1, 5) 
let result2:number = solution(3, 3) 
let result3:number = solution(2, 4) 


console.log(result1)
console.log(result2)
console.log(result3)