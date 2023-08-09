/*

We'll say that a number is "teen" if it is in the range 13..19 inclusive.
Given 2 int values, return true if one or the other is teen, but not both.


loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false
loneTeen(7, 20) -> false
loneTeen(12, 20) -> false
*/

export function loneteen(numA: number, numB: number) {
  if (
    ((numA >= 13 && numA <= 19) || (numB >= 13 && numB <= 19)) &&
    numA != numB
  ) {
    return true;
  } else {
    return false;
  }

  // if (numA > Math.min(numA, numB, 12) && numB < Math.max(numA, numB, 20)) {
  //   return false;
  // } else if (numA < Math.min(numA, numB, 12) && numB > Math.max(numA, numB, 20)) {
  //   return false;
  // } else if ((numA > Math.min(numA, numB, 12) || numB < Math.max(numA, numB, 20))) {
  //   return true;
  // }
  // return true
}
