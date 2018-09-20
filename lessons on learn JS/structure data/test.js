'use strict';
// alert("Hello, world!".length); // свойство length
// var str = "Hello, world!";
// alert( str.length );
// console.log( str.toUpperCase() ); // метод toUpperCase()

// var n = 12.345;

// alert( n.toFixed(2) ); // "12.35"
// alert( n.toFixed(0) ); //"12"
// alert( n.toFixed(5) ); // "12.34500"

// alert( 12.34.toFixed(1) );
// alert( 12.toFixed(1) ); // invalid or unexpected token
// alert(12..toFixed(1) );

// alert(12e3); 120000
// alert(12e-3); // 0.012
// alert(123e-3); // 0.123
 // alert(123e-1); // 0.123
 // alert(Infinity === Infinity + 1); // Infinity
  // alert(-1 / 0); //-Infinity
  // alert( 1e500 ); //Infinity
  // alert(0 / 0); //NaN

  // if (NaN == NaN) alert( "==");
  // alert(NaN == NaN); // false

  // var a = +prompt("", '');
  // console.log(a);

  // var n = 0 / 0;

  // alert( isNaN(n) ); //true
  // alert( isNaN("12") ); //false

  // alert( NaN + 1); // NaN

  // var n = 0 / 0;

  // if (n !== n) alert('n = NaN');


  // var value = prompt("Введите Infinity", 'Infinity');

  // var number = +value;

  // alert( number );

  // alert( isFinite(1) ); // true

  // alert( isFinite(Infinity) ); //false

  // alert( isFinite(NaN) ); // false


  // var s = "12.34";
  // alert( +s ); // 12.34

// alert( +'12test' ); //NaN

// alert(+' -12');// -12
// alert( +" \n34 \n" ); // 34
// alert(+"");//0
// alert( +"1 2" ); // NaN
// alert( '12.34' / "-2" ); // -6.17

// alert(+"12px"); //NaN

// alert( parseInt('12px') ); // 12
// alert( parseFloat('12.3.4') ) // 12.3

// var str = "jnkjn   dcddc       ";
// var str2 = str.trim();
// console.log(str2.trim());

// alert(+"12px"); // NaN

// alert( parseInt('12px') );
// alert( parseFloat('0.777.88.9') );

// alert(parseInt('j88')); // NaN

// alert( parseFloat('k0.88') ) // NaN;

// alert( parseInt('FF', 16) ); // 255

// var x = prompt("Введите значение", "-11.5");

// if (isNaN(x)) {
// 	alert( "Строка преобразовалась в NaN. Не число" );
// } else {
// 	alert( "Число" );
// }

// alert( isNaN(null) ); // false не NaN, т.е. число

// alert( isNaN("\n \n") ); // false не NaN, т.е. число

// function isNumeric(n) {
// 	return !isNaN(parseFloat(n)) && isFinite(n);
// }

// var n = 255;

// alert( n.toString(16) ); // ff

// alert( Math.floor(3.1) ); // 3
// alert( Math.ceil(3.1) ); // 4
// alert( Math.round(3.1) ); // 3

// do {} while (true)

// alert( 0.1 + 0.2 ); // 0.30000000000000004

// alert(0.1 + 0.2 > 0.3) // true

// 8 байт (64 бита) выделяется на одно число

// alert( 0.1.toFixed(20) ); //0.10000000000000000555

// alert( (0.1 * 10 + 0.2 * 10) ); // 0.3

// var result = 0.1 + 0.2;
// alert( 0.3.toFixed(10) );

// alert( 9999999999999999 ); // // выведет 10000000000000000

// console.log( Math.sqrt(61) );

// var number1 = +prompt("Enter the number one", '2');
// var number2 = +prompt("Enter the number two", '2');

// console.log(number1 + number2);

// console.log(6.35.toFixed(1) == 6.3);
// console.log(1.35.toFixed(20) );
// console.log(1.5.toFixed(0) == 2);
// console.log(6.35.toFixed(20));

// console.log(0.1 + 0.2 + '$');
// console.log( (0.1 * 10 + 0.2 * 10) / 10 + '$');
// var result = 6.30 + 0.05;
// console.log(result.toFixed(2));
//     function getDecimal(n) {

// 	if(n < 0) {



	
// 	var l = n - Math.ceil(n);


// 	 l = l - l*2;
// 	return l.toFixed(3);
// }

// 	l = n - Math.floor(n);
	
// 	return l.toFixed(3);

// }
// function getDecimal(n) {

// 	if(n < 0) {



	
// 	var l = n - Math.ceil(n);;


// 	return l - l*2;
// }

// 	return l = n - Math.floor(n); 

// }


// function fibBinet(n) {

// 	var f = ( (1 + Math.sqrt(5)) / 2);

// 	console.log(f);

// 	var f3 = Math.pow(f, n) / Math.sqrt(5);

// 	var f4 = Math.round(f3);

// 	return f4;
// }

// fibBinet(77);


// Math.random(12, 20);

// console.log("Hello \n world");

// var str = "hero\"";
// console.log(str.charAt(5));
// console.log(str.length);
// console.log(str[2]);

// var str = "";

// console.log(str.charAt(0));
// console.log(str[0]);

// var str = "Строка";

// console.log(str[3] + str[4] + str[5]);

// console.log(str.toUpperCase());

// console.log(str.toLowerCase());

// console.log(str[0].toLowerCase());

// console.log(str.indexOf('тро') );
// console.log(str.indexOf('о') );
// console.log(str.indexOf('о', 4) );

// ~ = - (n+1)
// console.log(~2);
// var str = 'test.html'
// if (~str.indexOf('.ht')) {
// console.log('~');
// }

// var str = "Ослик Иа-Иа посмотрел на виадук";
// var target = "Иа";

// var pos = 0;

// while (true) {
//   var foundPos = str.indexOf(target, pos);

//   if (foundPos == -1) break;
//   console.log(foundPos);

//   pos = foundPos + 1;
// }

// var pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
  // console.log(pos);
// }

// var str = "stringify";
// console.log(str.substring(3, 6));

// var str = "stringify";

// str = str.substr(2,4);

// console.log(str);

// console.log( "testme".substring(-2) );
// console.log( "testme".substring(4, 2) ); // st

// console.log( "testme".slice(-2) ); // me
// console.log( "testme".slice(-1) ); // e
// console.log( "testme".slice(1, -1) ); // estm

// console.log( "а" > "Я");
// console.log( "ё" > "я");
// console.log(String.fromCharCode(1072));
// console.log(String.fromCharCode(1078));

// var str = '';
// for (var i = 1034; i <= 1113; i++) {
//   str += String.fromCharCode(i);
// }

// console.log(str);
// f(5);
// function f(n) {
//   if (n==1) return 1;
  
//     return n *f(n-1);
// }

// var str = 'Ёлки';
// console.log( str.localeCompare('Яблони') ); // -1
// console.log( str.localeCompare('Абрикосы') ); // 1
// console.log( str.localeCompare('Ёлки') ); // 0

    // function ucFirst(name) {
    //   if(name == "") return "";
    //   var c = name.charAt(0);
    //   var x = c.toUpperCase();
    //   name = name.substring(1);
    //   return x + name;
      
    // }

  //   function checkSpam(str) {
  //     var xxx = str.indexOf("XXX");
  //     var via = str.indexOf("viagra");

  //     if (xxx >= 0 || via >= 0) {

  //       return true;

  //     }

  //     else {

  //       return false;      
  //   }
  // }
// truncate("What I'd like to tell on this topic is:", 20);
// function truncate(str, maxlength) {
//   console.log(maxlength);
//   if (str.length > maxlength) {
//     console.log(str.length);
//     var a = str.slice(0, maxlength -3) + &#8230;
//     console.log(a);
//   }
// }

// function extractCurrencyValue(str) {
//   if (str[0] == "$") {
//     var strQ = str[1] + str[2] + str[3];
//     return +strQ;
//   }
// // }

// o = new Object();
// o = {};



var person = {};

// person.name = "Vasya";
// person.age = 25;

// console.log(person.name +" :" + person.age);

// delete person.age;

// if ("name" in person) {
//   console.log("Hello!")
// };

// var a= 4;
// function c() {
//   return a = 5;
// }

// o = new Object();
// var person = {

// };

// person.name = "Vasya";
// person.age = "25";

// if ("sa" in person) {
//   alert("hello, batya")
// } alert("npo")

// var person = {};

// person["name"] = 'Vasya';

// person["Favorite style music"] = 'Jazz';

// var person = {};

// person.age = 25;

// var key = 'age';

// alert( person[key] );

// var menuSetup = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// };

// var menuSetup = {};

// menuSetup.width = 300;
// menuSetup.height = 200;
// menuSetup.title = "Menu"

// var menuSetup = {
//   width: 300,
//   'height': 200,
//   "mother clean indow": true
// };

// var user = {
//   name: "Tanya",
//   age: 25,
//   size: {
//     top: 90,
//     middle: 60,
//     bottom: 90
//   }
// }

// var user = {};
// user.name = 'Vasya';
// user.surName = "Petrov";
// user.name = 'Sergey';
// delete user.name;

// var menu = {
//   width: 300,
//   height: 200,
//   title: "menu"
// };

// for (var key in menu) {
//   console.log(key + ": " + menu[key]);
// }

// var menu = {
//   width: 300,
//   height: 200,
//   title: "width"
// }

// var counter = 0;
// for (var key in menu) {
//   counter++;
// }

// var codes = {
//   "-7": "Russia",
//   "-38": "Ucraine",
//   "-1": "USA"
// };

// for (var key in codes) {
//   console.log(key);
// }

// var obj1 = {};
// obj1.name = "Vanya";
// function isEmpty(obj) {
//   for (var key in obj) {
//     var counter = 0;
//     counter++;
//     console.log(counter);
//   }
//     if (counter>0) {
//       return true
//     };
//     else {
//       return false;
// }
// }
// isEmpty(obj1);

// var salaries = {
//   // 'vasya': 100,
//   // 'Petya': 300,
//   // 'Dasha': 250
// };
// var a = 0;
// function as(salaries) {
// for (var key in salaries) {

//      return a += salaries[key];
  

// }
// return alert('');
// }
// as(salaries);
// var obj = {
//   // name: "Vasya",
//   // age: 25
// }
// isEmpty(obj);
// function isEmpty(obj) {
//   for(var key in obj) {
//     return false;
//   }
//   return true;
// }


// var salaries = {
//   "Vasya": 100,
//   "Petya": 300,
//   "Dasha": 250
// }

// for (var key in salaries) {
//     console.log(salaries[key] * 2); 
// }

// var salaries = {
//   "Vasya": 100,
//   "Petya": 300,
//   "Dasha": 250
// }

// var name = "";
// var salary = 0;
// compareSalaries(salaries);
// function compareSalaries(salaries) {
//   for (var key in salaries) {

//     if (salary < salaries[key]) {

//       name = key;
//       salary = salaries[key];
//     }
//   }

//   if (name == "") return 'Нет сотрудников';
  
//   return name;

// }

// var obj = {
//   // name: "va"
// };

// function isEmtyObj(obj) {
//   for (var key in obj) {

//     return "Not empty";
//   }
//   return 'Empty';
// }

// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// function isNumeric(key) {
//       return !isNaN(parseFloat(key) && isFinite(key))
//     }

// function multiplyNumeric(menu) {
//   for (var key in menu) {

//     if (!isNumeric(menu[key])) continue;

//     menu[key] = menu[key] * 2;
//     console.log(key + ": " + menu[key]); 
    

//   }  

// }


// var message = 'Hello';
// var phrase = message;
// message = 123;
// var phrase = message;

// alert(phrase);

// var user = {
//   name: "Vasya"
// };

// var admin = user;

// admin.name = 'Petya';

// alert(user.name);
// alert(admin.name);

// var user = {
//   name: "Vasya",
//   age: 30
// };

// var clone = {};

// for (var key in user) {
//   clone[key] = user[key];
//   console.log(key);
// };

// clone.name = "Petya";

// alert( user.name ); // "Vasya"

// var time = {
//     year: 2345,
//     month: 11,
//     day: 10,
//     hour: 11,
//     minute: 12,
//     second: 13,
//     microsecond: 123456
// }

// alert(time.microsecond);
// time.microsecond++;

// alert(time.microsecond);
// time.microsecond++;

// alert(time.microsecond);
// time.microsecond++;
// alert(time.microsecond);

// var arr = [];

// var fruits = ["Apple", "Orange", "Pear"];

// alert(fruits[0]);
// alert(fruits[1]);

// fruits[2] = "Lemon";
// alert(fruits[2]);
// fruits[3] = "Kokos";

// alert(fruits.length);// 4


// var arr = [ 1, 'Name', {name: 'Petya'}, true ];

// alert( arr[2].name );

// var fruits = ["Apple", "Orange", "Pear"];

// alert( fruits.pop() );

// alert(fruits); // "Apple", "Orange"

// var fruits = ["Apple", "Orange", "Pear"];

// fruits.push("Lemon");
// alert(fruits.push("Lemon")); // "Apple", "Orange", "Pear", "Lemon"

// alert(fruits.push()); // 4

// function eat() {
//   arr.pop();
// }
// var arr = ["Bread", "Butter", "Oil"];
// eat(arr);

// var fruits = [];

// fruits[99999] = 5;

// fruits[4] = "age" = 25;

// var a = [];

// a[0] = 0;
// a[5] = 5;

// alert(a);

// var arr = ["Apple", "Orange", "Pear"];

// for (var i = 0; i < arr.length; i++) console.log(arr[i]);

// for (var key in arr) console.log(arr[key]);

// var arr = [];

// arr[1000] = true;

// console.log(arr.length);