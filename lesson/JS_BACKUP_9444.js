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


window.onload = function() {

  	var textInput = document.getElementById('text').value;	

	var selectElem = document.getElementById('select');
	var selectElem2 = document.getElementById('select2');

	


		var btn = document.querySelector('button');

	btn.onclick = function() {

		var word = document.getElementById('text').value;

		 // Создаем объект XMLHttpRequest, при помощи которого будем отправлять запрос
		 var req = new XMLHttpRequest();

		 // Сохраняем ключ API, полученный со страницы https://tech.yandex.ru/keys/get/?service=trnsl
		 // (с примером ниже работать не будет, нужно получить и вставить свой!)
		 var API_KEY = 'trnsl.1.1.20180803T100432Z.60b479d535905337.aebac5c9f900934c6955fb3dad5539c584e4a58a';

		 // Сохраняем адрес API
		 var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

		 // Формируем полный адрес запроса:
		 url += '?key=' + API_KEY; // добавляем к запросу ключ API
		 url += '&text=' + word; // текст для перевода
		 // url += '&lang=' + selectElem.value + '-' + selectElem2.value;

		 url +=`&lang=${selectElem.value}-${selectElem2.value}`;
		 // направление перевода: с русского на английский

		 // Таким образом формируется строка вида:
		 // https://translate.yandex.net/api/v1.5/tr.json/translate?key=example_api_key&text=кролики&lang=ru-en
		
		


		 var translate = document.querySelector('.translate');

<<<<<<< HEAD
	var btn = document.querySelector('button');
	var word;
	
	btn.onclick = function() {

		var word = document.getElementById('text').value;
		console.log(word);
		
}
btn.onclick();
console.log(word);
=======
		 // Назначаем обработчик события load

		 req.addEventListener('load', function () {

			console.log(req.response); // отображаем в консоли текст ответа сервера
		 	var response = JSON.parse(req.response); // парсим его из JSON-строки в JavaScript-объект
		    
			 // Проверяем статус-код, который прислал сервер
		 	// 200 — это ОК, остальные — ошибка или что-то другое
			 if (response.code !== 200) {
		      translate.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
		      return;
		    }

		    // Проверяем, найден ли перевод для данного слова
		    if (response.text.length === 0) {
		      translate.innerHTML = 'К сожалению, перевод для данного слова не найден';
		      return;
		    }
>>>>>>> adb5c483b28805a6c5f1753f8e3aa7cf9d4bbb34

		    // Если все в порядке, то отображаем перевод на странице
		    translate.innerHTML = response.text.join('<br>'); // вставляем его на страницу
		 
		  });

		  // Обработчик готов, можно отправлять запрос
		  // Открываем соединение и отправляем
		  req.open('get', url);
		  req.send();

		}
		}


			

		// trnsl.1.1.20180803T100432Z.60b479d535905337.aebac5c9f900934c6955fb3dad5539c584e4a58a