// chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

let body = document.querySelector('body');

let container=document.querySelector(".container");
let mainRow = document.createElement('div');
mainRow.className="row";
container.appendChild(mainRow);


let goodsBascket = document.getElementById('goods');
let valueGoods = 0;
goodsBascket.innerHTML = `Товаров: ${valueGoods}`;

let goodsBase;

let summBascket = document.getElementById('summ');
let valueSumm = 0;
summBascket.innerHTML = `Сумма: ${valueSumm}`;

let cartGoods={};

var bascketModulWindow = document.getElementById('bascket');




let coverDiv = document.createElement('div');
coverDiv.className = "cover-div";
body.appendChild(coverDiv);




// -----------------table in modul windiow------------------------------

let modulWindow = document.createElement('table');
modulWindow.className = "modul-window";
body.appendChild(modulWindow);

let titleModulWindow = document.createElement('caption');
modulWindow.appendChild(titleModulWindow);
titleModulWindow.innerHTML = 'Корзина заказов';
titleModulWindow.style.textAlign = 'center';

let nameOfProductTitlesTr = document.createElement('tr');
modulWindow.appendChild(nameOfProductTitlesTr);

let nameOfProductTitlesTh = document.createElement('th');
nameOfProductTitlesTr.appendChild(nameOfProductTitlesTh);
nameOfProductTitlesTh.innerHTML = `Наименование`;

let nameOfProductTitlesTh2 = document.createElement('th');
nameOfProductTitlesTr.appendChild(nameOfProductTitlesTh2);
nameOfProductTitlesTh2.innerHTML = `Цена`;

let nameOfProductTitlesTh3 = document.createElement('th');
nameOfProductTitlesTr.appendChild(nameOfProductTitlesTh3);
nameOfProductTitlesTh3.innerHTML = `Количество`;

let nameOfProductTitlesTh4 = document.createElement('th');
nameOfProductTitlesTr.appendChild(nameOfProductTitlesTh4);
nameOfProductTitlesTh4.innerHTML = `Сумма`;


// let nameOfProductTitlesTr2 = document.createElement('tr');
// modulWindow.appendChild(nameOfProductTitlesTr2);



let modulWindowString = document.createElement('tr');
modulWindow.appendChild(modulWindowString);

// nameOfProductTitlesTr2.appendChild(modulWindowString);


coverDiv.style.display = 'none';
modulWindow.style.display = 'none';



bascketModulWindow.onclick = function() {

	modulWindowString.innerHTML ='';
	makeOrder();

	coverDiv.style.display = 'block';
	modulWindow.style.display = 'block';

}

coverDiv.onclick = function() {

	modulWindow.style.display = 'none';
	coverDiv.style.display = 'none';

}


function makeOrder() {

	let nameGoodsBase;
	let priceGoodsBase;

	for (let b in cartGoods) {
		
		goodsBase.forEach(function(item, i) {


			if (b === item.name) {

				let valueSumm2 = 0;
				let valueSumm3 = valueSumm2;

				let newLi = document.createElement('tr');
				modulWindowString.appendChild(newLi);

				newLi.innerHTML = 
				`<td><img src="${item.pic}" 
				style="height:30px; width:40px; padding-left: 7px;"/>
				${b}</td>
				<td>${item.price}</td>
				<td>${cartGoods[b]}</td> 
				<td>${item.price * cartGoods[b]}</td>`;


			}

		});
		



	}
}

function buy(price, name) {

	valueGoods = valueGoods + 1;
	goodsBascket.innerHTML = `товаров: ${valueGoods}`;

	valueSumm += price;
	summBascket.innerHTML = `Сумма: ${valueSumm}`;

	if (cartGoods[name]) cartGoods[name]+=1; 

	else cartGoods[name]=1;

		//Когда будешь обрабатывать модалку, используй for .. in для cartGoods

		console.log('В корзине: ', cartGoods);



	}


	

	function func() {

		$.get( "http://codestory.ru/git/fe.php", 

		{ 
			qtype: "getNyamki" 
		}, 

		function( data ) 

		{

			data = JSON.parse(data);
			goodsBase = data;
			console.log( "Data Loaded: ", data);  

			data.forEach(el=> 

			{



				let iceConteiner = document.createElement('div');
				let iceConteiner2 = document.createElement('a');
				iceConteiner.appendChild(iceConteiner2);
				iceConteiner2.setAttribute("href", "#");
				iceConteiner.className="container_goods";
				iceConteiner2.style.textDecoration = 'none';

				let iceH3 = document.createElement('h3');
				iceConteiner2.appendChild(iceH3);

				let iceImg = document.createElement('img');
				iceConteiner2.appendChild(iceImg);

				let iceH4 = document.createElement('div');
				iceConteiner.appendChild(iceH4);
				iceH4.innerHTML = `<h4 style="display: inline; float: left;">${el.price}
				</h4>`;


				let textBuy = document.createElement('div');
				iceH4.appendChild(textBuy);
				textBuy.innerText = 'Купить';
				textBuy.style.cursor = 'pointer';
				textBuy.style.display = 'inline';
				textBuy.style.marginRight = '25px';
				textBuy.style.lineHeight = '2';
				textBuy.style.fontSize = '20px';




				iceH3.innerText = el.name;
				iceImg.src= el.pic;
				var polka = document.getElementById(el.type);
				polka.appendChild(iceConteiner);



				textBuy.onclick = ()=> buy(el.price, el.name);

				makeOrder();

				function createContainer() {



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
					iceH4.innerHTML = `<h4 style="display: inline; float: left;">${el.price}
					</h4>`;


					let textBuy = document.createElement('div');
					iceH4.appendChild(textBuy);
					textBuy.innerText = 'Купить';
					textBuy.style.cursor = 'pointer';
					textBuy.style.display = 'inline';
					textBuy.style.paddingRight = '40px';
					textBuy.style.lineHeight = '2';
					textBuy.style.fontSize = '20px';

					textBuy.onclick = ()=> buy(el.price, el.name);

				}



				iceImg.onclick = ()=> createContainer(); 

				iceH3.onclick = ()=> createContainer();





				

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






