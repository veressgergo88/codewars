//Find The Parity Outlier
//Kapunk egy egész számokat tartalmazó tömböt (amelynek legalább 3 hosszúságú lesz, de nagyon nagy is lehet).
//A tömb vagy teljesen páratlan egész számokból áll, vagy teljes egészében páros egész számokból áll, kivéve egyetlen N egész számot.
//Írjon egy metódust, amely a tömböt veszi argumentumként, és ezt a "kiugró" N-t adja vissza.

function findOutlier(integers: number[]): number {
  let evenCount = 0
  let oddCount = 0
  let result = 0
  
        let i = 0
        while (integers[i] !== undefined) {
                if (integers[i] % 2 === 0) {
                evenCount += 1
                } else if (integers[i] % 2 !== 0) {
                oddCount += 1  
                }
            i += 1
        }

        let y = 0
        if (evenCount > oddCount){
                while (integers[y] !== undefined) {
                    if (integers[y]%2 !== 0 ){
                        result = integers[y]
                    }
                    y += 1
                }
            }
        else if (oddCount > evenCount){
                while (integers[y] !== undefined) {
                    if (integers[y]%2 === 0) {
                        result = integers[y]
                    }
                    y += 1
                }
        }
    return result
}

let result1: number = findOutlier([0, 1, 2]); //1
let result2: number = findOutlier([1, 2, 3]); //2
let result3: number = findOutlier([2, 6, 8, 10, 3]); //3
let result4: number = findOutlier([0, 0, 3, 0, 0]); //3
let result5: number = findOutlier([1, 1, 0, 1, 1]); //0

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

export {};
