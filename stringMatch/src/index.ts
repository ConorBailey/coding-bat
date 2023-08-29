/* 

Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring.
So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.


stringMatch("xxcaazz", "xxbaaz") → 3
stringMatch("abc", "abc") → 2
stringMatch("abc", "axc") → 0
stringMatch("ccoonorr", "pcoobors") → 3
stringMatch("aaaaa", "aaaaa") → 4


 */

export function stringMatch(senA: string, senB: string): number {
  let index = 0;
  let counter = 0;
  let stringLength = 0;

  if (senA.length >= senB.length) {
    stringLength = senA.length;
  } else {
    stringLength = senB.length;
  }

  for (index; index < stringLength - 1; index++) {
    if (senA.substring(index, index + 2) == senB.substring(index, index + 2)) {
      counter++;
    }
  }
  return counter;
}
