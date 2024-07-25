//What is Hoisting?
//Hoisting is like JavaScript’s way of saying, "I’ll move all the variable and function declarations to the top of their scope before running the code."
//Here are some practice quiz about hoisting...
//Each question will have four options, and the correct answers will be provided at the end.
//Hoisting Quiz
//1.What will be the output of the following code?
console.log(a());
function a() {
    return 'Hello, World!';
}
//A. undefined
//B. 'Hello, World!'
//C. ReferenceError
///D. null
//2.What will be the output of the following code?
console.log(b());
var b = function () {
    return 'Hello, World!';
};
//A. Hello, World!
//B. undefined
//C. ReferenceError
//D. null
//3.What will be the output of the following code?
console.log(c);
var c = 'Hello, World!';
//A. undefined
//B. 'Hello, World!'
//C. ReferenceError
//D. null
//4.What will be the output of the following code?
console.log(d());
var d = function () {
    return 'Hello, World!';
};
///A. Hello, World!
//B. undefined
//C. ReferenceError
//D. null
//5.What will be the output of the following code?
console.log(e);
var e = 'Hello, World!';
//A. undefined
//B. 'Hello, World!'
//C. ReferenceError
//D. null
//6.What will be the output of the following code?
console.log(f());
var f = 'Hello, World!';
function f() {
    return 'Goodbye, World!';
}
//A. 'Goodbye, World!'
//B. 'Hello, World!'
//C. ReferenceError
//D. undefined
//7.What will be the output of the following code?
console.log(g);
g = 'Hello, World!';
var g;
//A. undefined
///B. 'Hello, World!'
//C. ReferenceError
//D. null
//8.What will be the output of the following code?
console.log(h());
var h = function () {
    return 'Hello, World!';
};
//A. 'Hello, World!'
//B. undefined
//C. ReferenceError
//D. null
//9.What will be the output of the following code?
console.log(i());
var i = 'Hello, World!';
function i() {
    return 'Goodbye, World!';
}
//A. 'Goodbye, World!'
//B. 'Hello, World!'
//C. ReferenceError
//D. undefined
//10.What will be the output of the following 
console.log(j);
var j = 'Hello, World!';
var j = function () {
    return 'Goodbye, World!';
};
//A. undefined
//B. 'Hello, World!'
//C. 'Goodbye, World!'
//D. ReferenceError
//Answers
//B. 'Hello, World!'
//C. ReferenceError
//A. undefined
//B. undefined
//A. undefined
//C. ReferenceError
//A. undefined
//B. undefined
//A. 'Goodbye, World!'
//A. undefined
