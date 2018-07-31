console.log(nyamki);


	let container=document.querySelector(".container");
	let mainRow=document.createElement('div');
	mainRow.className="row";
	container.appendChild(mainRow);



	let iceCol = document.createElement('div');
	iceCol.className="col-lg-4";
	mainRow.appendChild(iceCol);

	let iceh2 = document.createElement('h2');
	iceCol.appendChild(iceh2);
	iceh2.innerText="Мороженка";
	


	let cakeCol = document.createElement('div');
	cakeCol.className="col-lg-4";
	mainRow.appendChild(cakeCol);

	let cakeH2 = document.createElement('h2');
	iceCol.appendChild(cakeH2);
	cakeH2.innerText="Пирожное";

	

	let bakeCol = document.createElement('div');
	bakeCol.className="col-lg-4";
	mainRow.appendChild(bakeCol);

	let bakeH2 = document.createElement('h2');
	iceCol.appendChild(bakeH2);
	bakeH2.innerText="Торты";


	// 	let iceCol = document.createElement('div');
	// iceCol.className="col-lg-4";
	// mainRow.appendChild(iceCol);

	// let iceHeader = document.createElement('h2');
	// iceCol.appendChild(iceHeader);
	// iceHeader.innerText="Мороженка"

	// let contGoods = document.createElement('div');
	// contGoods.className="container_goods";
	// colLg.appendChild(contGoods);

	// let h3 = document.createElement('h3');
	// contGoods.appendChild(h3);

	// let img = document.createElement('img');
	// contGoods.appendChild(img);

	// let h4 = document.createElement('h4');
	// contGoods.appendChild(h4);



	// let colLg1 = document.createElement('div');
	// colLg1.className="col-lg-4";
	// mainRow.appendChild(colLg1);

	// let h2a = document.createElement('h2');
	// colLg1.appendChild(h2a);

	// let contGoods1 = document.createElement('div');
	// contGoods.className="container_goods";
	// colLg1.appendChild(contGoods1);

	// let h3a = document.createElement('h3');
	// contGoods1.appendChild(h3a);

	// let img1 = document.createElement('img');
	// contGoods.appendChild(img1);

	// let h4a = document.createElement('h4');
	// contGoods.appendChild(h4a);  




	 nyamki.forEach(el=>{

    	
    	console.log('el',el);


    })

    // for (let i=0; i < nyamki.length; i++) {
    // 	if (i >= 0) {
    // 		function() {
    // 		h2 = nyamki[i].type;
    // 		h3 = nyamki[i].name;
    // 		h4 = nyamki[i].price;
    // 		img = nyamki[i].pic;
    // 	}
    // 	}

    // }

 




// var typeOfGoods = document.getElementsByTagName('h2');
//     for (let i = 0; i < typeOfGoods.length; i++) {
//     }


// function() {
// 	if (true) {
// 	    var newGoods = document.createElement('div');
// 	    newGoods.innerHTML = document.getElementsByClassName('col-lg-4').value;//<li></li>
	    
// 	    list.appendChild(newLi);
// 	    injectListener(newLi);
// 	}
// }