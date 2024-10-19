let message; //string
message = 'Hello!';
console.log(message); // shows the variable content

let selectedColors = ['red', 'green']; //array
selectedColors[2] = 'blue'; //add a new object
selectedColors.push('yellow', 'purple');//add a new object
selectedColors.push('banana');
selectedColors.pop() //removes an item in the array from the end
selectedColors.shift()//reomoves an item in the array from the beginning
selectedColors.unshift('black');

console.log(selectedColors.length,selectedColors[0], typeof selectedColors);
console.log(selectedColors, typeof selectedColors);

let arrayOfNumber = [1,2,3,4,5,6,7,8,9,0];
somieNumber = arrayOfNumber.slice(0, 4)//to copy the first 4 numbers
somieNumber = arrayOfNumber.slice(4)//to remove the first 4 numbers
somieNumber = arrayOfNumber.slice(0, -2)//to remove the last 2 numbers

console.log(arrayOfNumber, typeof arrayOfNumber);
console.log(somieNumber, typeof somieNumber);

let fruits = ['mango', 'orange', 'apple', 'grape', 'banana'];
fruits.splice(2, 0, 'pear', 'guava');//add other fruits after the first 2 items
fruits.splice(3, 1, 'paw-paw');//delete the fourth fruit and add paw-paw
let deletedfruits = fruits.splice(3, 1, 'paw-paw');
fruits.splice(-1, 0, 'pineapple');//add pineapple before the last item

console.log(fruits, fruits.length, typeof fruits);
console.log(deletedfruits);

// function to perform a task
function greet(name, lastName) {
console.log('Hello ' + name + ' ' + lastName);
}
greet('Somie', 'Anaeto');
greet('Faith');

//function to calculate a value
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);

//concatenation
const name = 'John';
const age = 30;

console.log('My name is ' + name + ' and I am ' + age);
//Template String
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);