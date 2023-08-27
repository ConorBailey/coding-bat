/*

Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".


stringBits("Hello") → "Hlo"
stringBits("Hi") → "H"
stringBits("Heeololeo") → "Hello"
stringBits("Hiattlerr") → "Hater"
stringBits("Cdofneofr") → "Conor"

*/

export function stringBits(sentence: string): string {
  let result = "";
  for (let index = 0; index < sentence.length; index++) {
    result = result.concat(sentence.slice(index, index + 1));
    index++;
  }
  return result;
}
