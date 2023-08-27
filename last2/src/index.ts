/*


Given a string, 
return the count of the number of times that a substring length 2 appears in the string 
and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).


last2("hixxhi") → 1
last2("xaxxaxaxx") → 1
last2("axxxaaxx") → 2
last2("conorcoco") → 2
last2("xxxxxx") → 4

*/

export function last2(sentence: string): number {
  let index = 0;
  let result = 0;
  let end2 = sentence.slice(-2, sentence.length);

  for (index; index < sentence.length - 2; index++) {
    if (sentence.slice(index, index + 2) == end2) {
      result++;
    }
  }
  return result;
}
