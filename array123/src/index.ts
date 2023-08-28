/*

Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.


array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true
*/

export function array123(intsArray: number[]): boolean {
  let index = 0;

  for (index; index < intsArray.length; index++) {
    if (
      intsArray[index] == 1
      &&
      intsArray[index + 1] == 2
      &&
      intsArray[index + 2] == 3
    ) {
      return true;
    }
  }
  return false;
}
