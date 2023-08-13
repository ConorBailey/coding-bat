/* 


Given a string, 
we'll say that the front is the first 3 chars of the string.
If the string length is less than 3, the front is whatever is there.
Return a new string which is 3 copies of the front.


front3("Java") → "JavJavJav"
front3("Chocolate") → "ChoChoCho"
front3("ab") → "ababab"
front3("Conor is ok") → "ConConCon"

//throw error
front3(" abc") → "The sentence doesnt begin with a char"
 */


export function front3(  sentence: string): string {
  if (sentence.length < 3) {
      return sentence.repeat(3)
    } else if ( sentence.charAt(0) == " ") {
      throw Error("Sentence starts with a ' '")
        } else {
          let first3 = sentence.slice(0,3)
            return first3.repeat(3)
  }
}