/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a: number, b: number, c: number): number {
let shortest = (a <= b && a <= c) ? a : (b <= a && b <= c) ? b : c
let longest = (a >= b && a >= c) ? a : (b >= a && b >= c) ? b : c
let middle = (a >= b && a <= c || a >= c && a <= b) ? a : (b >= a && b <= c || b >= c && b <= a ) ? b : c

console.log(a, b, c , shortest, longest, middle)

return (shortest + middle <= longest) ? 0 : (shortest*shortest + middle * middle === longest * longest) ? 2 : (shortest * shortest + middle * middle < longest * longest) ? 3 : 1
}

let result1:number = triangleType(2, 4, 6)
let result2:number = triangleType(8, 5, 7)
let result3:number = triangleType(3, 4, 5)
let result4:number = triangleType(7, 12, 8)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

export {}