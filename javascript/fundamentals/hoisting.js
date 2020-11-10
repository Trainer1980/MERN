// #1 Given
// console.log(example);
// var example = "I'm the example!";

    // Hoisted
// var example;
// console.log(example);                logs undefined
// example = "I'm the example!";


// #2 Given
// console.log(example);                   ReferenceError: Cannot access 'example' before initialization
// let example = "I'm the example!";

    // Hoisted
// console.log(example);
// let example = "I'm the example!";  let doesn't allow hoisting


// #3 Given
console.log(hello);
var hello = 'world';                // Logs undefined

    // Hoisted
// var hello;
// console.log(hello);
// hello = 'world';


// #4 Given
var needle = 'haystack';
test();                             
function test(){
    var needle = 'magnet';
    console.log(needle);
}                                   // Logs magnet

    // Hoisted
// var needle;
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack'
// test();


// #5 Given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);               // Logs super cool

    // Hoisted
// var brendan;
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);


// #6 Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}                                   // Logs chicken   half-chicken

    // Hoisted
// var food;
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food);
// eat();


// #7 Given
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);                  // TypeError: mean is not a function

    // Hoisted
// var mean;
// mean();
// console.log(food);
// mean = function(){
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);


// #8 Given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);                     // Logs undefined  rock  r&b  disco

    // Hoisted
// var genre;
// function rewind(){
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);


// #9 Given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);                      // Logs san jose  seattle  burbank  san jose

    // Hoisted
// function learn(){
//     var dojo;
//     dojo = 'seattle';
//     console.log(dojo);
//     dojo = 'burbank';
//     console.log(dojo);
// }
// dojo = 'san jose';
// console.log(dojo);
// learn();
// console.log(dojo);

// #10 Given (Bonus ES6)
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}                                           // logs { name: 'Chicago', students: 65, hiring: true }  TypeError: Assignment to constant variable (dojo = "closed for now")

    // Hoisted
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));