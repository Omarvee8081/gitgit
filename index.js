// alert('hello')
// document.getElementById('demo').innerHTML = 'hello world'
// document.getElementById('demo').style.color = 'red'

// console.log('hello world')
// document.write('hello world')

// variables & data types
var name = 'vivian'
let age = 12
var weight = 10.3
const complexion = "fair"
let isAlive = true

// console.log(weight)
// console.log(10 + 23)


// string operation
let word = 'hello world'

// getting string Elements
// console.log(word);
// console.log(word(0));

// length of a String
// console.log(word.length)

// string Casting
// console.log (word.toUpperCase());
// console.log (word.toLowerCase());

// checking if an element is present in a string / getting element position
console.log(word.indexOf('h'));

// concatenation
console.log(word + '' + 'how are you doing');

// appending
let greetings = 'good morning..'
greetings += 'hope you are fine today?'
console.log(greetings);

// CONDITION
let num3 = 10
let num4 = 2

if(num3 > num4){
    console.log('executed successfully')
}else{
    console.log('did not execute')
}

if(num3 == 2 && num4 > 1){
    console.log('or logical operator executed');
}else{
    console.log('or logical operator did not execute')
}

if(num3 == 2 || num4 < 1){
    console.log('or logical operator executed');
}else{
    console.log('or logical operator did not execute')
}

// else if
if(num3 < num4){
    console.log('first condition');
}else if(num3 == 11){
    console.log('second condition')
}else if(num4 < num3){
    console.log('third condition');
}else{
    console.log('default condition');
}

// arrays
let names = ['chibyke', 'john', 'obi', 'emeka']
// array operations
console.log(names);
console.log(names[0])

// length of an array
console.log(names.length)

// changing an element in an array
names[0] = 'james'
console.log(names);

// adding element 
names.push('henry')
names.unshift('david')
console.log(names);

// removing from an array
names.pop()
names.shift()
console.log(names);

// looping through
for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

// function 
function greet(){
    console.log('goodmorning');
}

greet()

function addNum(){
    let num1 = 10
    let num2 = 5
    let result = num1 + num2
    console.log(result);
}

addNum()

function addNumTwo(num1, num2){
    let result = num1 + num2
    console.log(result);
}

addNumTwo(20, 21)
addNumTwo(11, 231)

function getDetails(){
    let fName = 'john'
    let lName = 'Doe'
    let fullName = fName + ' ' + lName
    return fullName
}

let a = getDetails()
console.log(a);