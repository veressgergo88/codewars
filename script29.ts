export function abbreviate(str: string): string {
    return str.replace(/\w{4,}/g, (word) => {
        return word.charAt(0) + (word.length - 2).toString() + word.charAt(word.length - 1);
      });
}

   let result1: string = abbreviate("internationalization")
   let result2: string = abbreviate("accessibility")
   let result3: string = abbreviate("Accessibility")
   let result4: string = abbreviate("elephant-ride")
   
   console.log(result1)
   console.log(result2)
   console.log(result3)
   console.log(result4)
   
       
   export {}