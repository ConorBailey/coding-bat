/* 



Given a string,
return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".


altPairs("kitten") → "kien"
altPairs("Chocolate") → "Chole"
altPairs("CodingHorror") → "Congrr"
altPairs("ConorisaG") → "CoriG"
altPairs("ThisWasFunSir") → "ThWaun"

 */

export function altPairs(sentence: string) {
  let index = 0;
  let result = "";
  let char1 = "";
  let char2 = "";

  for (index; index < sentence.length; index = index + 4) {
    char1 = sentence.slice(index, index + 1);
    char2 = sentence.slice(index + 1, index + 2);
    result = result + char1 + char2;
  }
  return result;
}
