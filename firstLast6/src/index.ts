/* 
Given an array of ints,
return true if 6 appears as either the first or last element in the array.
The array will be length 1 or more.


firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
*/

export function firstLast6(numbers: number[]) {
  return numbers[0] == 6 || numbers[numbers.length - 1] == 6;
}
