/* 


Given a string, return a version where all the "x" have been removed.
Except an "x" at the very start or end should not be removed.


stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"
stringX("xxxxX") → "xX"
stringX("ConoxrisxaxG") → "ConorisaG"

 */

export function stringX(xSentence: string) {
  let result = "";
  let middleString = xSentence.slice(1, -1);
  let beginningChar = xSentence.slice(0, 1);
  let endChar = xSentence.slice(-1, xSentence.length);
  let replacedString = middleString.replace(/X|x/g, "");

  if (beginningChar != "x" && endChar != "x") {
    result = beginningChar + replacedString + endChar;
  } else {
    result = beginningChar + replacedString + endChar;
  }
  return result;
}
