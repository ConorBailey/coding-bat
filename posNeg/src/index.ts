/*

Given 2 int values, 
return true if one is negative and one is positive.
Except if the parameter "negative" is true, 
then return true only if both are negative.


posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true
posNeg(-1, 1, true) → false
posNeg(4, 4, true) → false
*/

export function posNeg(numA: number, numB: number, isNegative: boolean) {
  if (
    (numA < 0 && numB > 0 && isNegative == false) ||
    (numA > 0 && numB < 0 && isNegative == false) ||
    ((numA && numB) < 0 && isNegative == true)
  ) {
    return true;
  }
  return false;
}
