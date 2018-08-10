

let container=document.querySelector(".container");
let mainRow = document.createElement('div');
mainRow.className="row";
container.appendChild(mainRow);


let goodsBascket = document.getElementById('goods');
let valueGoods = 0;
goodsBascket.innerHTML = `Товаров: ${valueGoods}`;


let summBascket = document.getElementById('summ');
let valueSumm = 0;
summBascket.innerHTML = `Сумма: ${valueSumm}`;

let cartGoods={}

var bascketModulWindow = document.getElementById('bascket');





function func() {
	$.get( "http://codestory.ru/git/fe.php", 

	{ 
		qtype: "getNyamki" 
	}, 

	function( data ) 

	{

		data = JSON.parse(data);
		console.log( "Data Loaded: ", data);  

		data.forEach(el=> 

		{



			let iceConteiner = document.createElement('a');
			iceConteiner.setAttribute("href", "#");
			iceConteiner.className="container_goods";
			iceConteiner.style.textDecoration = 'none';
			
			let iceH3 = document.createElement('h3');
			iceConteiner.appendChild(iceH3);

			let iceImg = document.createElement('img');
			iceConteiner.appendChild(iceImg);

			let iceH4 = document.createElement('div');
			iceConteiner.appendChild(iceH4);
			iceH4.innerHTML = `<h4 style="display: inline; float: left;">${el.price}</h4>`;


			let textBuy = document.createElement('div');
			iceH4.appendChild(textBuy);
			textBuy.innerText = 'Купить';
			textBuy.style.cursor = 'pointer';
			textBuy.style.display = 'inline';
			textBuy.style.paddingRight = '40px';
			textBuy.style.lineHeight = '2';
			textBuy.style.fontSize = '20px';




			iceH3.innerText = el.name;
			iceImg.src= el.pic;
			var polka = document.getElementById(el.type);
			polka.appendChild(iceConteiner);


			textBuy.onclick = function() {

				valueGoods = valueGoods + 1;
				goodsBascket.innerHTML = `товаров: ${valueGoods}`;

				valueSumm += el.price;
				summBascket.innerHTML = `Сумма: ${valueSumm}`;
			}


			iceConteiner.onclick = function() {


				

				let iceConteiner = document.createElement('div');
				iceConteiner.className="container_goods";


				let vitrin = document.getElementById('vitrin');


				vitrin.innerHTML='';
				vitrin.appendChild(iceConteiner);
				



				let iceH3 = document.createElement('h3');
				iceH3.innerText = el.name;
				iceConteiner.appendChild(iceH3);

				let iceImg = document.createElement('img');
				iceImg.src= el.pic;
				iceConteiner.appendChild(iceImg);

				let iceH4 = document.createElement('div');
				iceConteiner.appendChild(iceH4);
				iceH4.innerHTML = `<h4 style="display: inline; float: left;">${el.price}</h4>`;


				let textBuy = document.createElement('div');
				iceH4.appendChild(textBuy);
				textBuy.innerText = 'Купить';
				textBuy.style.cursor = 'pointer';
				textBuy.style.display = 'inline';
				textBuy.style.paddingRight = '40px';
				textBuy.style.lineHeight = '2';
				textBuy.style.fontSize = '20px';
				

				textBuy.onclick = function() {

					valueGoods = valueGoods + 1;
					goodsBascket.innerHTML = `товаров: ${valueGoods}`;

					valueSumm += el.price;
					summBascket.innerHTML = `Сумма: ${valueSumm}`;

					if (cartGoods[el.name]) cartGoods[el.name]+=1; 
					else cartGoods[el.name]=1;
						//Когда будешь обрабатывать модалку, используй for .. in для cartGoods
						console.log('В корзине: ', cartGoods);


					}



					
				}

				bascketModulWindow.onclick = function() {

					alert('sxs')
				}

			});



	});
}

//----------------------- get Category--------------------------------------------------------



$.get( "http://codestory.ru/git/fe.php", 

{ 
	qtype: "getCategories" 
}, 

function( data2 ) {




	data2 = JSON.parse(data2);
	console.log( "Data2 Loaded: ", data2); 

	data2.forEach(el2=> 

	{


		let iceCol = document.createElement('div');
		iceCol.className="col-lg-4";
		mainRow.appendChild(iceCol);

		let iceH2 = document.createElement('h2');

		iceCol.appendChild(iceH2);


		iceH2.innerText = el2.title;


		iceCol.id = el2.key;



	});



	func();


});






