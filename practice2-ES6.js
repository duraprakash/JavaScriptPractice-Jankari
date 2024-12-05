const obj = {name: 'Prakash'};
obj.name = 'Roshan';
console.log(obj.name);

// Regular defined function
function fullname(firstname, lastname){
    return firstname + ' ' +lastname;
}
console.log(fullname("Prakash", "Dura"));

// Arrow function 
const fullnameAFn = (firstname, lastname) => firstname + ' ' +lastname;
console.log(fullname("Ganesh", "Gurung"));

// Arrow function and this
const person = {
    name: "Ramesh",
    sayHi: () => {
        console.log(`SayingHi: Hi!, I'm ${this.name}`); // 'this' does NOT refer to person
    },
    // Correction
    greeting: function(){
        console.log(`Greeting: Hi, I'm ${this.name}`); // 'this' refers to person
    }
}
person.sayHi(); // undefined; // Because `arrow function` doesnot create its own `this`. It gets from where it is defined i.e `person` and scope for `person` is global or undefined
person.greeting();