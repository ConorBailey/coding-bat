/*

Given a string,
return a new string where "not " has been added to the front.
However, if the string already begins with "not",
return the string unchanged. Note: 
use .equals() to compare 2 strings.

notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"
notString("conor") → "not conor"
notString("not assert") → "not assert"

*/

export function notString(sentence: string): string {
    if ( sentence.startsWith("not")) {
        return sentence
    } else {
        let not = "not "
        return not.concat("", sentence)
    }
}