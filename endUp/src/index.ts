/* 
Given a string,
return a new string where the last 3 chars are now in upper case. 
If the string has less than 3 chars, uppercase whatever is there. 
Note that str.toUpperCase() returns the uppercase version of a string.


endUp("Hello") → "HeLLO"
endUp("hi there") → "hi thERE"
endUp("hi") → "HI"
endUp("Conor") → "CoNOR"
endUp("heyyyyy") → "heyyYYY"
*/


export function endUp(sentence: string): string {
  if (sentence.length >=3) {
    let lastThree = sentence.slice(-3).toUpperCase();
    let firstPart = sentence.slice(0, (sentence.length - 3));
    return firstPart.concat(lastThree)

  } else {
    return sentence.toUpperCase()
  }
}