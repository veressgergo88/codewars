let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19,];

function comp(array1: number[], array2: number[]): boolean {
  let squareArray: number[] = [];
  
  if (array1 === null || array2 === null) {
    return false;
  }

  let i = 0;
  let square = 0;
  while (array1[i] !== undefined) {
    square = array1[i] * array1[i];
    squareArray = [...squareArray, square];
    i++;
  }

  squareArray.sort((a,b)=>a-b)
  array2.sort((a,b)=>a-b)

  let y = 0
  while(squareArray[y] !== undefined){
    if(squareArray[y] !== array2[y]){
        return false
    }
    y++
  }
  return true;
}

let result1: boolean = comp(a1, a2);

console.log(result1);

export {};
