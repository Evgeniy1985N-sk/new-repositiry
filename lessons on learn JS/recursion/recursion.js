// // // // var g=2, n=4;
// // // // for(k=1;n!=0;n--) {
// // // // 	k*=g;
// // // // 	console.log(k)
// // // // }

// // // // -----------------recursion-----------

// // // function pow(x,n) {
// // // 	if (n!=1) {
// // // 		return x * pow(x, n-1);
// // // 	} else {
// // // 		return x;
// // // 	}
// // // }

// // // alert(pow(2,3));


// // // ---------execution context------------

// // // function pow(x,n) {
// // // 	if (n!=1) {
// // // 		return x * pow(x, n-1);
// // // 	} else {
// // // 		return x;
// // // 	}
// // // }

// // // alert(pow(2,3));

// // // function pow(x,n) {
// // // 	var result = x;
// // // 	for (var i=1; i<n; i++) {

// // // 		console.log('i: ', i)
// // // 		result *= x;
// // // 	}
// // // 	return result;
// // // }
// // // alert(pow(2,4));

// // // function pow(x,n) {
// // // 	if (n!=1) {
// // // 		return x * pow(x, n-1);
// // // 	} else {
// // // 		return x;
// // // 	}
// // // }


// // //----------------home work-------------

// // function sumTo(n) {
// // 	if (n>1) {
// // 		return n + sumTo(n-1);
// // 		console.log(n);
// // 	}
// // 	else {
// // 		return n;
// // 	}
// // }
// // console.log(sumTo(10001)); // very slow



// // // function sumTo(n) {
// // // 	var result = n;
// // // 	for (n=n-1; n!=0; n--) {
// // // 		console.log('n: ', n);
// // // 		result += n;
// // // 		console.log('result: ', result)
// // // 	}
// // // 	return result;
// // // }
// // // console.log('sumTo: ', sumTo(100));


// // // function sumTo(a) {
	
// // // 	var S = (2*a + (a-1)*-1)/2*a; 
// // // 	return S;
// // // }
// // // console.log(sumTo(100)); // very fast



// // --------------------factorial----------

// function sumTo(n) {
// 	if (n>1) {
// 		return n * sumTo(n-1);

// 	}
// 	else {
// 		return n;
// 	}
// }
// console.log(sumTo(2));

// -----------------numbers of Fibonachi--------

// function fib(n) {

// 	if (n>1) {

		
// 		 return n= ( fib(n-1)+fib(n-2) );

// 	}

// 	else {
// 		return n;
// 	}

// }
// console.log(fib(7));