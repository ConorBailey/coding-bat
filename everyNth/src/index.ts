/* 

Given a non-empty string and an int N,
return the string made starting with char 0,
and then every Nth char of the string. 
So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.


everyNth("Miracle", 2) → "Mrce"
everyNth("abcdefg", 2) → "aceg"
everyNth("abcdefg", 3) → "adg"
everyNth("ConoRisAG", 4) → "CRG"
everyNth("qwertyuiop", 4) → "qto"
 */

export function everyNth(sentence: string, counter: number): string {
  let newString = []
  let slicedChar = ""
    for (let index = 0; index < sentence.length; index = index + counter) {
      slicedChar = sentence.slice(index , index + 1)
        newString.push(slicedChar)
    }
  return newString.join("")
  }
