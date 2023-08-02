/*
What is a class?
- Its like a template
- Complex type
- Contains reuseable pieces of logic
- Block of code that other blocks can access
- Contains methods accessed through dot operator
- Contains properties/fields that can be accessed through dot operator
*/
​
class Person {
​
    // Fields (Characteristics of a class)
    private name: String
    private age: number
    private hairColor: String
    private height: number
    private weight: number
    private gender: String
    private spokenLanguages: String[]
​
    // Methods (Behaviours of a class)
​
    constructor(name: String, gender: String) {
        this.name = name;
        this.gender = gender;
        console.log("Creating person");
    }
​
    // Properties are the methods that access the fields/characteristics of a class
    // Getter property
    getName(): String {
        return this.name.toUpperCase();
    }
​
    // Setter property
    setName(name: String) {
        this.name = name;
    }
​
    getGender(): String {
        return this.gender;
    }
​
    setWeight(newWeight: number) {
        this.weight = newWeight;
    }
​
    getBMI(): number {
        return this.weight / this.height;
    }
​
    getLanguage(index: number): String {
        if (this.spokenLanguages.length > index - 1) {
            return this.spokenLanguages[index];
        } else {
            return "None"
        }
    }
​
    calculateBMI(): number {
        return this.weight / this.height;
    }
​
    // Checks if this person speaks the language they provide
    doesSpeak(language: String): Boolean {
        return false //this.spokenLanguages.includes(language)
    }
​
    run() {
​
    }
​
    walk() {
​
    }
​
    // Lets person talk, therefore proceed in game
    talk() {
​
    }
}
​
function createPerson(name: String): Person {
    return new Person(name, "other");
}
​
// Instances are assigned in memory and are the instantiated versions of classes
const instance: Person = createPerson("Warren");
const instance2: Person = instance;
const instance3 = new Person("Conor");
​
// instance2 = instance3;
​
instance2.setName("Mark");
​
console.log(instance2.getName()); 
​
let pi = 3.14;
​
let pi2 = pi;
​
pi2 = 6.28;
​
console.log(pi);
​
interface T {
    getName(): String
}
​
type P = {
    getName(): String
}
​
const g: P = {
    getName() {
        return ""
    },
}
​
const l: T = {
    getName() {
        return ""
    },
}
​
// const nameOfPerson = instance.getName();
​
// const tatenda = new Person();
// tatenda.setName("Tatenda");
​
// if (tatenda.doesSpeak("Afrikaans")) {
//     // Do stuff
//     tatenda.talk()
// }