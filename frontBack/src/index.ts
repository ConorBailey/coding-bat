/* 

Given a string, 
return a new string where the first and last chars have been exchanged.


frontBack("code") → "eodc"
frontBack("a") → "a"
frontBack("ab") → "ba"
frontBack("daaab") → "baaad"
frontBack("conor is") → "sonor ic"

 */

export function frontBack(sentence: string): string {
  if (sentence.length == 1 ) {
        return sentence;
    } else {
        let firstChar = sentence.charAt(0);
        let lastChar = sentence.charAt(sentence.length -1);
          console.log(firstChar)
          console.log(lastChar)
            return lastChar.concat(sentence.slice(1,sentence.length -1), firstChar)
  }
}
