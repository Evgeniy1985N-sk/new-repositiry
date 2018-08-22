// function showMessage() {
// 	alert('Hello!');
// }

// showMessage();
// showMessage();

// function showMessage() {
// 	var message = 'Hello i am Vasiya';
// 	alert(message);
// }

// showMessage();

// alert(message); //message is not defined

// function count() {
// 	for (var i=0; i<3; ++i) {
// 		var j=i*2;
// 	}
// 	alert(i); //3
// 	alert(j); //4
// }

// function count() {
// 	var i, j;
// 	for (i=0; i<3; i++) {
// 		j=i*2;
// 	}

// 	alert(i);
// 	alert(j);
// }


// var userName="vasya";
// function showMessage() {
// 	var message = "Hello, I " + userName;
// 	alert(message);
// }

// showMessage();

// var userName = 'Vasya';

// function showMessage() {
// 	userName = 'Petya';

// 	var message = "Hello I am " + userName;

// 	alert(message);

// }
// showMessage();
// alert(userName);


// function showMessage() {
// 	message = 'Hello';
// }
// showMessage();
// alert(message);  error is not defined

// function showMessage(from, text) {
// 	from = "** " + from + "**";
// 	alert(from + ': ' + text);
// }

// showMessage('Masha', 'Hello!');
// showMessage('Masha', 'How do you do?');
// showMessage('Vasya', 'ok')

// function showMessage(from, text) {
// 	from = '**' + from + '**';
// 	alert(from + ': ' + text);
// }
// var from = "Masha";

// showMessage(from, "Hello");

// alert(from);



// function showMessage(from, text) {
// 	if(text===undefined) {
// 		text = 'text no';
// 	}
// 	alert(from + ": " + text);
// }

// showMessage("Masha", "Hello");
// showMessage("Masha");

// function calcD(a,b,c) {
// 	return b*b-4*a*c;
// }

// var test = calcD(-4,2,1);
// alert(test);

// function checkAge(age) {
// 	if (age>18) {
// 		true;
// 	} else {
// 		confirm('parents allowed?');
// 	}
// }

// var age = prompt('How you old');

// if (checkAge(age)) {
// 	alert('acces allow')
// } else {
// 	alert('acces no');
// }

// function showMovie(age) {
// 	if (!checkAge(age)) {
// 		return;
// 	}
// 	alert("film is not for all");

// }

// showMovie(+'12');

// function doNothing(){};
// alert(doNothing() );

// function doNothing() {
// 	return;
// }
// alert(doNothing() === undefined);

// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm('Parents allowed?');
// 	}
// }


// function checkAge(age) {age > 18 ? true : confirm('Parents allowed?');}



// function checkAge(age) {age > 18 && true || confirm('Parents allowed?');}


// function founMinNumber (a,b) {
// 	if (a<b) {
// 		return alert(a);
// 	}
// 	else if (b<a) {
// 		return alert(b);
// 	}

// }

// function min(a,b) {
// 	return a<b ? a : b;
// }

// var x = prompt('Enter the number', 2);
// var n = prompt('Enter the number', 2);


// for (var res = 1; n > 0; n--) {
// res *= x;
// console.log(res)
// }
