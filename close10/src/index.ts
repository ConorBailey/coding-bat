/*
Given 2 int values, 
return whichever value is nearest to the value 10, 
or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0
*/


export function close10(num0: number, num1: number) {
if (Math.abs(10 - num0) < Math.abs(10 - num1)){
    return num0
}else if(Math.abs(10 - num0) == Math.abs(10 - num1)) {
    return 0 
}
return num1
}
