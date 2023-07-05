function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  if (n === 0) return [];
  if (n === 1) return [a];
  if (n === 2) return [a, b];

  let result: number[] = [a, b, c];

  let count = 0;
  while (count < n - 3) {
    let newNumber = result[0 + count] + result[1 + count] + result[2 + count];
    result = [...result, newNumber];
    count++;
  }
  return result;
}

let result1: number[] = tribonacci([1, 1, 1], 10);
let result2: number[] = tribonacci([0, 0, 1], 10);
let result3: number[] = tribonacci([0, 1, 1], 10);
let result4: number[] = tribonacci([1, 0, 0], 10);
let result5: number[] = tribonacci([0, 0, 0], 10);
let result6: number[] = tribonacci([1, 2, 3], 10);
let result7: number[] = tribonacci([3, 2, 1], 10);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);

export {};
