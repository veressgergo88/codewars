function multiples35(number: number): number {
      let sum = 0
      let currentNumber = 0

      while(currentNumber < number){
        if(currentNumber%5 === 0 || currentNumber%3 === 0){
            sum += currentNumber
        }
        currentNumber += 1
      }
      return sum
}
  
  

  let result1: number = multiples35(10); 
  let result2: number = multiples35(23); 
  let result3: number = multiples35(42); 
  let result4: number = multiples35(50); 
  let result5: number = multiples35(55); 
  
  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
  console.log(result5);

  export {}