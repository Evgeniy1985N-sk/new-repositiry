// function sayHi() {
// 	alert('Hello');
// }
// alert(sayHi);

// function sayHi() {
// 	alert("Hello");
// }

// // var func = sayHi;
// // func();

// // sayHi = null;
// // sayHi();

// alert(sayHi());



// function expression

// var sayHi = function(person) {
// 	alert("Hello, " + person );
// };

// sayHi('Vasya');

// //function declaration

// function sum(a,b){
// 	return a+b;
// }

// sayHi("Vasya");

// function sayHi(name) {
// 	alert('Hello, ' + name);
// }


// sayHi('Vasya'); // sayHi is not a function
// var sayHi = function(name) {
// 	alert('Hello, ' + name)
// }


// function declaration:


// 'use strict';

// var age = +prompt("How old you?", 20);

// if (age >= 18) {
// 	function sayHi() {
// 		alert('access allow');
// 	}
// }//  else {
// 	function sayHi() {
// 		alert('before 18 not enter');
// 	}
// // }

// sayHi(); // reference error sayHi is not defined



// function expression

// 'use strict';

// var age = +prompt("How old you?", 20);

// if (age >= 18) {
// 	var sayHi = function () {
// 		alert('access allow');
// 	}
// }  else {
// 	var sayHi = function () {
// 		alert('before 18 not enter');
// 	}
// }

// sayHi(); not error

// 'use strict';
// var age = prompt('How old you?');

// var sayHi = (age >= 18) ?
// 	function() {alert('allow enter');} :
// 	function() {alert('before 18 not enter!');};

// sayHi();

// ------anonymous function----------

// function ask(question, yes, no) {
// 	if (confirm(question)) yes()
// 		else no();
// }

// function showOk() {
// 	alert("You agree.");
// }

// function showCancel() {
// 	alert("You cancel performance");
// }

// ask("Are are agree?", showOk, showCancel);

// ------------new function---------

// var sum = new Function('a,b', ' return a+b');
// var result = sum(1,2);
// alert(result);

// var sayName = new Function('a,b,c', 'return a+b*c');
// var result = sayName(3,2,2);
// console.log(result);

//expression
// var func = function(){};

// //declaration
// function func(){};