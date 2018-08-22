// var request = new XMLHttpRequest();
// var but = document.querySelector('.btn');

// but.onclick = function() {

// 	but.innerHTML = request.responseText;
	

// }

// request.open('GET', '/hello.txt');
// request.send();


// var btn = document.querySelector('button');

// btn.addEventListener('click', function (ev) {
// 	ev.preventDefault();

// 	window.fetch('/hello.json')
// 		.then(function(response) {
// 			console.log(response);
// 			return response.json();
// 		})

// 		.then(function(response) {
// 			document.querySelector('.project')
// 			.innerHTML = response.project;

// 			document.querySelector('.course')
// 			.innerHTML = response.course;

// 			document.querySelector('.module')
// 			.innerHTML = response.module;

// 			document.querySelector('.teacher')
// 			.innerHTML = response.teacher;
// 		})
// });



// home work


	var textInput = document.getElementById('text').value;
	var textInput2 = document.getElementById('text2').value;	

	var selectElem = document.getElementById('select');
	var selectElem2 = document.getElementById('select2');


// Когда выбран новый элемент <option>


	selectElem.addEventListener('change', function() {

  		var index = selectElem.selectedIndex;
  		

});
		
	


// Когда выбран новый элемент <option>

	selectElem2.addEventListener('change', function() {

  		var index2 = selectElem2.selectedIndex;

  
});


	var btn = document.querySelector('button');
	var word;
	
	btn.onclick = function() {

		var word = document.getElementById('text').value;
		console.log(word);
		
}
btn.onclick();
console.log(word);


	

// trnsl.1.1.20180803T100432Z.60b479d535905337.aebac5c9f900934c6955fb3dad5539c584e4a58a