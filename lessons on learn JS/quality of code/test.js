'use strict';
// // var a;
// // function pow(x,n) {
// // var s;

// // 	s=x*n;
// // 	return s;
// // }
// // console.log(pow(1,2));
// // function sa(){
// // 		console.log('j');
// // 	}
// // function pow(x,n) {
// // 	if(n!==1) {
// // 		 var j = x*n;
// // 		 console.log(j);
// // 	}
// // 	saf();

// // }
// // console.log(pow(5,3) );

// // show("String" +
// // 	"dcscsc" +
// // 	"scscscs")

// // function pow(x, n) {
// // 	var result = 1;

// // 	for (var i = 0; i < n; i++) {
// // 		result *= x;
// // 	}

// // 	return result;
// // }

// // for (var i = 0; i < 10; i++) {
// // 	if (i % 2 !== 0) continue;
// // 	console.log(i);

// // }
// // isEven(9);
// // function isEven(n) {
// // 	if (n % 2 == 0) {
// // 		return true;
// // 		console.log('true');
// // 	} else {
// // 		console.log('false');
// // 		return false;
// // 	}
// // }

// // function isEven(n) {
// // 	if (n % 2 == 0) {
// // 		return true;
// // 	}

// // 	return false;
// // }

// // function isEven(n) {
// // 	return !(n % 2);
// // }

// // function showPrimes(n) {
// // 	nextPrime: for (var i = 2; i < n; i++) {
// // 		for (var j = 2; j < i; j++) {
// // 			if (i % j == 0) continue nextPrime;
// // 		}

// // 		console.log( i ); //simple
// // 	}
// // }

// // showPrimes(5);

// // for (var i = 2; i < n; i++) {
// // 	if (!isPrime(i)) continue;

// // 	alert(i);
// // }
// // }

// // function isPrime(n) {
// // 	for (var i = 2; i < n; i++) {
// // 		for (var i = 2; i < n; i++) {
// // 			if (n % i == 0) return false;
// // 		}
// // 		return true;
// // 	}
// // }

// // объявить функции

// // function createElement() {
// // 	...
// // }

// // function setHandler(elem) {
// // 	...
// // }

// // function walkAround() {
// // 	...
// // }

// // // код, использующий функции
// // var elem = createElement();
// // setHandler(elem);
// // walkAround();
//  // run();
//  // function run() {
//  // 	return console.log('Hello');
//  // }
//  // var elem = run;

//  // elem();

//  // кодd

//  // function pow(x, n) {
//  // 	var result = 1;

//  // 	for (var i = 0; i < n; i++) {
//  // 		result *= x;
//  // 	}

//  // 	return result;
//  // }

//  // var x = prompt("x?", '');
//  // var n = prompt("n?", '');

//  // if (n < 0) {
//  // 	alert('Степень ' + n +
//  // 		 'не поддерживается, введите целую степень, большую 0');
//  // } else {
//  // 	alert( pow(x, n) );
//  // }
//  // function pow() {
//  // 	return 8;
//  // }

 // describe("pow", function(){

 // 	it("возводит в n-ю степень", function() {
 // 		assert.equal(pow(2, 3), 8);
 // 		assert.equal(pow(3, 4), 81);

 // 	});
 // });

// // describe("pow", function() {

// // 	it("при возведении 2 в 3ю степень 8", function() {
// // 		assert.equal(pow(2, 3), 8);
// // 	});
// // 	it("при возведении 3 в 4ю степень 81", function() {
// // 		assert.equal(pow(2, 3), 81);
// // 	});

// // });

// function pow(x, n) {
// 	var result = 1;

// 	for (var i = 0; i < n; i++) {
// 		result *= x;
// 	}

// 	return result;
// 	console.log(result);
// }

// describe("pow", function() {
	
// 	describe("Возводит х в степень n", function(){

// 		function makeTest(x) {
// 			var expected = x * x * x;
// 			it("при возведении " + x + " в степень 3 результат: " + expected,
// 				function() {
// 					assert.equal(pow(x, 3), expected);
// 				});
// 		}

// 		for (var x = 1; x <= 5; x++) {
// 			makeTest(x);
// 		}

// 	});

// });
// var n = 5.1;

describe("pow", function() {

  it("возводит в n-ю степень", function() {
    assert.equal(pow(2, 3), 8);
  });

});

