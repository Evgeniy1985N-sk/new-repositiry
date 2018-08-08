// hoisting


// var apples = 5;
// if (true) {
// 	var apples = 10;
// 	alert(apples); //10
// }
// alert(apples); //10

// let apples = 5;
// if (true) {
// 	let apples =10;
// 	alert(apples); //10
// }
// alert(apples); // 5

// let x;
// let x;  // error

// for(let i = 0; i<10; i++){}
// for(let i = 0; i<10; i++){}
// 	alert(i); // error

// const apple = 5;
// apple = 10; // error


// ----------------destructuring-----------


// const user = {
// 	name: 'John',
// 	lastName: 'Doe',
// 	age: 30	
// };

// const { name, lastName, age } = user;
// console.log(user.name);
// console.log(user.lastName);
// console.log(user.age);

// const arr = [10, 10, 2000];

// const [day, much, year] = arr;

// console.log(day);
// console.log(much);
// console.log(year);

// let [, , ,title] = "1 2 3 4 5".split(" ");
// console.log(title)

// let r =  ['1','2','3','4','5'];
// console.log(r[0])


// -----------------------rest and spread--------------



// let [...rest] = "Juliy Cezar Imperator Rome".split(" ");
// // console.log(firstName); 
// // console.log(lastName); 
// console.log(rest); 


// ---------ES5--------
// function foo() {
// 	var a = arguments[0];
// 	var params = Array.prototype.slice.call(arguments, 1);
// 	console.log(a);
// 	console.log(params);
// }
// //-----------ES2015-------------
// function fooES2015(a, ...params) {
// 	console.log(a);
// 	console.log(params);
// }

// fooES2015(11,22,33,44,55);

//----------------------------------template strings

// const str = 'My string';
// const str1 = 'my string\ntext here';
// console.log(str1);

// const html = '<div>n<p>text</p>\n</div>'
// let html2 = '<div>';
// html2 += '<p>text</p>';
// html2 += '</div>';

// const html3 =`klrvmmb



// fvrfverevv


// erver


// `;



// const text = 'text here';

// const buttonText = 'My button';

// const html = `<div>
// 	<p>${text}</p>
// 	<button>${buttonText}</button>
// 	</div>
// 	`;
// 	console.log(html);

	//templates


// -----------------function---------


// var x=2
// var y=4
// function foo(x) {
// 	return x*x;
// }

// const fooES2015_ = x => x*x;

// const fooES2015 = (y) => {
// 	return y*y;
// }

// console.log (foo(2) );
// console.log(fooES2015(2) );

// const fooES2015__ = (x, y, z) => {
// 	return x * y * z;
// }

// const fo1 = {} => {
// 	return ''
// }

