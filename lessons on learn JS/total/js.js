'use strict';
// alert('Hello'); alert('Hello');
// alert('Hello')
// alert('Hello')

// var a = 2
// +3

// alert(a);

// alert("After this message will be error")

// [1, 2].forEach(alert)//cannot read property '2' of undefined

// var x = 5;
// x = 'Petya';

// x=1; //number
// x="test"//string
// x=true;//boolean
// x=null;//special sign
// x=undefined;//special sign

//special signs: infinity, NaN

// var age = null; // old is undefined

// var _=23;
// var $ = 121;
// console.log(typeof($));

// var l=5;
// a=8;
// function ase() {
// 	'use strict';
// 	a=5;
// }


// function akert(name,surName){
// 	name="*ssas" + name;
// 	alert(name+surName);
// }

// akert('Vasya', 'Pettyn');

// prompt('what is your name', 'Vasya' );

// var a = confirm('Are you crazy?');

// var b = alert('SAasccs');
// console.log(b);

// var userName = prompt('How is your name?', '');
// var isTeaWnated = confirm("Do you want tea?");
// alert('Your name is ' + userName);
// alert('Tea: ' + isTeaWnated);


// alert('as' + 1);
// alert( 1 + 'qwqwq');
// alert( '1' + 2);

// alert(0==false);//true
// alert(true>0);//true
// alert(null==undefined);//true
// alert(null===undefined);//false

// var a = null;
// var c=0;
// alert(a>=c);//a =0

// при использовании операторов больше/меньше 
// null приводится к 0,
// undefined к NaN 

// alert(null>0);//false
// alert(null>=0);//true
// alert(null==0);//false
// alert(null<=0);//true

// alert('a' > 'A')

//----------------------------------------------
//значения интерпритируются как логические, 
// но то которое в итоге определяет результат,
// возвращается без преобразования

// alert(0&&1); //0
// alert(1&&2&&3); //3
// alert(null||1||2); //1

// cicle---------------


// aaaaaaaaaaaaa----------------------
// var i1=3;
// while (i1) {
// 	console.log('i1a :', i1--);
// 	console.log('i1b: ', i1);
// }

// var i2=3;
// while(i2){
// 	console.log('cicle2: ', i2--);

// }

// for (var i=0; i<5; i++) alert(i);

// var i=0;
// do {
// 	alert(i);
// 	i++;
// } while(i<3);

// var age = prompt('Your age', 18);

// switch (age) {
// 	case 18:
// 		alert('Will not work!');

// 	case '18':
// 		alert('You 18 old!');
// 		break;

// 	default:
// 		alert('Any expression');
// }

// function sum(a,b) {
	// var result = a+b;
// 	var s=12;
// 	// return result;

// 	function abr(){
// 		return alert(s);
// 	}
// }
// alert(abr());

// var sum = function(a,b) {
// 	var result = a+b;
// 	return result;
// }

// alert(sum(1,2));

// asd(1,2);
// function asd(b,c) {
// 	var a = b+c;
// 	return console.log(a);
// }

// var factorial = function me (n) {
// 	return (n==1) ? n : n * me(n-1);
// } 

// console.log(factorial(5));
// console.log(me);

// var a=3, b=2;
// (a>b) ? console.log(b) : console.log(a);