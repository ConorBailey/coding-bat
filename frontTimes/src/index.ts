/* 

Given a string and a non-negative int n,
we'll say that the front of the string is the first 3 chars,
or whatever is there if the string is less than length 3. Return n copies of the front;


frontTimes("Chocolate", 2) → "ChoCho"
frontTimes("Chocolate", 3) → "ChoChoCho"
frontTimes("Abc", 3) → "AbcAbcAbc"
frontTimes("Conor", 4) → "ConConCon"
frontTimes("Conor", -1) → Error


 */

export function frontTimes(Sentence: string, CounterA: number) {
  if (CounterA < 0) {
    throw new Error("Error")
  } else {
    let first3 = Sentence.slice(0,3)
    return first3.repeat(CounterA)
  }

}