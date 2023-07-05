let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];

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

  let j = 0;
  while (array2[j] !== undefined) {
    let x = 0;
    while (squareArray[x] !== undefined) {
      if (array2[j] === squareArray[x]) {
        squareArray[x] = -1;
        x += i;
      }
      x++;
    }
    j++;
  }

  let y = 0
  while(squareArray[y] !== undefined){
    if(squareArray[y] !== -1){
        return false
    }
    y++
  }
  return true
}

let result1: boolean = comp(a1, a2);

console.log(result1);

export {};
