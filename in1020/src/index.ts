/*


Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.


max1020(9, 21) → 0
max1020(19, 11) → 19
max1020(11, 9) → 11


*/


export function max1020(num0: number, num1: number): number {
    if ((num0 > 9 && num0 < 21) && num0 > num1) {
        return num0
        console.log(num0)
    } else if(num1 > 9 && num1 < 21) {
        console.log(num1)
        return num1
    } else if (num0 == num1){
        return num0
    } else {
        return 0
    }
}