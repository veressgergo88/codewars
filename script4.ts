function split(original:string, separator:string):string[]{
  let result:string[] =[]
  let word=""

  let i=0
  while(original[i] !== undefined){
      if(original[i] !== separator){
          word += original[i]
      }
      else {
          result = [...result, word]
          word = ""
      }
      i += 1
  }
  result = [...result, word]

  return result
}

function join(original:string[], separator:string):string{
  let result = ""
  
      let i = 0
      while(original[i] !== undefined){
          result += original[i]
          if(original[i+1] !== undefined){
          result += separator
          }
          i += 1
      }
  
  return result
}

function getLength(str: string):number{
  let count = 0
  while(str[count] !== undefined){
      count += 1
  }
  return count
}

function reverse(word: string):string{
  let result = ""
  let wordLength = getLength(word)

  let i = wordLength-1
  while(i >= 0){
       result += word[i]
       i -= 1 
  }
  return result
}


function spinWords(words:string): string{
  let wordsArray: string[] = split(words, " ")
  let finalArray: string[] = []
  let result=""

  let i = 0
  while(wordsArray[i] !== undefined){
      if(getLength(wordsArray[i]) > 4 ){
          let reversedWord = reverse(wordsArray[i])
          finalArray = [...finalArray, reversedWord]
      }
      else {
          finalArray = [...finalArray, wordsArray[i]]
      }
  i += 1
  }
  result = join(finalArray, " ")
return result
}

let finalResult1: string = spinWords("Hey alma fellow warriors")
let finalResult2: string = spinWords("Brutal warriors are brutals")
let finalResult3: string = spinWords("Why are you serious?")


console.log(finalResult1)
console.log(finalResult2)
console.log(finalResult3)