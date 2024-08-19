console.log("hello world");

function addition() {
  console.log(5 + 6 + 7);
}
addition();

let userName = "obiwam";

function helloThere() {
  console.log(`hello there ${userName}`);
}

helloThere();

function sayGoodbye() {
  console.log("au revoir");
}

sayGoodbye();

function sum(a, b, c) {
  console.log(a + b + c);
}
sum(5, 6, 7);

function sayHelloTo(nameUser) {
  console.log("Hello " + nameUser + "!");
}

sayHelloTo("Bob");
sayHelloTo("Jimmy");
sayHelloTo("Alice");

function greet(greeting, nameUser) {
  console.log(greeting + " " + nameUser + "!");
}
greet("Good morning", "Bob");
greet("Buenos dias", "Alice");
greet("Bonjour", "Charlie");

function add1(a, b) {
  return a + b;
}

const resulta = add1(1, 5);
console.log("The result is", resulta);
const anotherResulta = add1(2, 10);
console.log("Another result is", anotherResulta);

function multiply1(a, b) {
  return a * b;
}
const result2 = multiply1(1, 5);
console.log("The result is", result2);
const anotherResult2 = multiply1(2, 10);
console.log("Another result is", anotherResult2);

function subtract1(a, b) {
  return a - b;
}
const result3 = subtract1(1, 5);
console.log("The result is", result3);
const anotherResult3 = subtract1(2, 10);
console.log("Another result is", anotherResult3);

function divide1(a, b) {
  return a / b;
}
const result4 = divide1(1, 5);
console.log("The result is", result4);
const anotherResult4 = divide1(2, 10);
console.log("Another result is", anotherResult4);
