function spinWords(sentence: string): string {
  let result = "";

  let i = 0;
  while (sentence[i] !== undefined) {
    let count = 0;
    let ci = i;
    while (sentence[ci] !== undefined && sentence[ci] !== " ") {
      count += 1;
      ci += 1;
    }
    if (count === 0) {
      result += " ";
      i += 1;
    } else if (count < 5) {
      let word = "";
      while (sentence[i] !== undefined && sentence[i] !== " ") {
        word += word[i];
        i += 1;
      }
    } else {
      let word = "";
      let si = i;
      let ri = 0;
      while (sentence[si] !== undefined && sentence[si] !== " ") {
        word += sentence[i + count - ri - 1];
        ri += 1;
        si += 1;
      }
      result += word;
      i += count;
    }
  }
  return result;
}

let result1: string = spinWords("Hey fellow warriors");
let result2: string = spinWords("This is a test");
let result3: string = spinWords("This is another test");

console.log(result1);
console.log(result2);
console.log(result3);

export {};
