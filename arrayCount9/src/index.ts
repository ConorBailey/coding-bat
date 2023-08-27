/*

Given an array of ints, return the number of 9's in the array.


arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3
arrayCount9([1, 9, 9, 9, 9]) → 4
arrayCount9([1, 7, 8, 10, 0]) → 0

}
*/

export function arrayCount9(ninesArray: number[]): number {
  let index = 0;
  let result = 0;
  while (index < ninesArray.length) {
    if (ninesArray[index] == 9) {
      result++;
    }
    index++;
  }
  return result;
}
