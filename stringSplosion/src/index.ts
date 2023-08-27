/*

Given a non-empty string like "Code" return a string like "CCoCodCode".


stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"
stringSplosion("Con") → "CCoCon"
stringSplosion("axab") → "aaxaxaaxab"

*/

export function stringSplosion(sentence: string): string {
  let result = "";
  let index = 0;
  for (index; index < sentence.length; index++) {
    result = result + sentence.slice(0, index);
  }
  return result + sentence;
}
