/* 

Given a string, 
take the last char and return a new string with the last char added at the front and back, 
so "cat" yields "tcatt". 
The original string will be length 1 or more.


backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"
backAround("Conor is OK") → "KConor is OKK"
backAround("") → " throw an Error"
 */

export function backAround(sentence: string): string {
  if ( sentence.length == 0 ) {
    throw Error("The sentence is empty")
      } else {
          let lastChar = sentence.charAt(sentence.length -1)
            console.log(lastChar)
          return lastChar.concat(sentence,lastChar)
  }
}