/*
Given a string,
return true if the first instance of "x" in the string is immediately followed by another "x".


doubleX("axxbb") → true
doubleX("axaxax") → false
doubleX("xxxxx") → true
doubleX("Conorxx") → true
doubleX("exexexx") → false
*/

export function doubleX(sentence: string): boolean {
  let xChecker = sentence.indexOf("x");

  if (sentence.charAt(xChecker + 1) == "x") {
    return true;
  }
  return false;
}
