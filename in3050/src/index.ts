/*
Given 2 int values,
return true if they are both in the range 30..40 inclusive,
or they are both in the range 40..50 inclusive.


in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true
*/


export function in3050(num0: number, num1: number) :boolean {
if ((num0 > 29 && num0 < 41) && (num1 > 29 && num1 < 41)) {
    return true
} else if ((num0 > 39 && num0 < 51) && (num1 > 39 && num1 < 51)) {
    return true
}
return false
}