/* 
Given a string,
take the first 2 chars and return the string with the 2 chars added at both the front and back,
so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.


front22("kitten") → "kikittenki"
front22("Ha") → "HaHaHa"
front22("abc") → "ababcab"
front22("Conor is OK") → "CoConor is OKCo"
front22("l") → "lll"
 */

export function front22(sentence: string): string {
  let first2 = sentence.slice(0,2)
    if (sentence.length < 2) {
      let first1 = sentence.slice(0)
        return first1.concat(sentence, first2)
    } else {
      return first2.concat(sentence, first2)
  }
}