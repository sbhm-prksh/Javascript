// BIND

// Without bind
const person = {
    name: "Shubham",
    greet() {
      console.log("Hello, I am " + this.name);
    },
};
person.greet();
const greetFn = person.greet;
greetFn();


// With bind
const person1 = {
    name: "Shreya",
    greet() {
      console.log("Hello, I am " + this.name);
    },
};
person1.greet();
const greetFn1 = person1.greet.bind(person1);
greetFn1();
  