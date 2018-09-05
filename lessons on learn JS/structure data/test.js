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

do {} while (true)