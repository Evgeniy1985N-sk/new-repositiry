

let container=document.querySelector(".container");
		let mainRow = document.createElement('div');
		mainRow.className="row";
		container.appendChild(mainRow);


	// ---------------------------ICECREAM-------------------------

		let iceCol = document.createElement('div');
		iceCol.className="col-lg-4";
		mainRow.appendChild(iceCol);

		let iceH2 = document.createElement('h2');
		iceH2.innerText="Мороженка";
		iceCol.appendChild(iceH2);

		



		//-------BAKE----------------------------------------------------------

		let bakeCol = document.createElement('div');
		bakeCol.className="col-lg-4";
		mainRow.appendChild(bakeCol);

		let bakeH2 = document.createElement('h2');
		bakeH2.innerText="Торты";
		bakeCol.appendChild(bakeH2);

		// ---------CAKE--------------------------------------------------------

		let cakeCol = document.createElement('div');
		cakeCol.className="col-lg-4";
		mainRow.appendChild(cakeCol);

		let cakeH2 = document.createElement('h2');
		cakeH2.innerText="Пирожное";
		cakeCol.appendChild(cakeH2);

		

	// ----------------------------function-------------

	 // data.forEach(el=> {

	 // 	let iceConteiner = document.createElement('div');
		// iceConteiner.className="container_goods";
		// iceCol.appendChild(iceConteiner);

		// let iceH3 = document.createElement('h3');
		// iceConteiner.appendChild(iceH3);

		// let iceImg = document.createElement('img');
		// iceConteiner.appendChild(iceImg);

		// let iceH4 = document.createElement('h4');
		// iceConteiner.appendChild(iceH4);

    
    		
  //   	iceH3.innerText = el.name;

		// iceImg.src= el.pic;

		// iceH4.innerText = el.price;

	
  //  		if (el.type === 'cake' ) {


  //  			bakeCol.appendChild(iceConteiner);
   				
  //  		}

  //  		if (el.type === 'bake' ) {


  //  			cakeCol.appendChild(iceConteiner);
   				
  //  		}

  //   });



	$.get( "http://codestory.ru/git/fe.php", 

		{ 
			qtype: "getNyamki" 
		}, function( data ) 
	  
	  {
	    
	    data = JSON.parse(data);
		console.log( "Data Loaded: ", data);  
	    
	     data.forEach(el=> {

		 	let iceConteiner = document.createElement('div');
			iceConteiner.className="container_goods";
			iceCol.appendChild(iceConteiner);

			let iceH3 = document.createElement('h3');
			iceConteiner.appendChild(iceH3);

			let iceImg = document.createElement('img');
			iceConteiner.appendChild(iceImg);

			let iceH4 = document.createElement('h4');
			iceConteiner.appendChild(iceH4);

	    
	    		
	    	iceH3.innerText = el.name;

			iceImg.src= el.pic;

			iceH4.innerText = el.price;

		
	   		if (el.type === 'cake' ) {


	   			bakeCol.appendChild(iceConteiner);
	   				
	   		}

	   		if (el.type === 'bake' ) {


	   			cakeCol.appendChild(iceConteiner);
	   				
	   		}

    });
	    
	 });




// http://codestory.ru/git/fe.php
// qtype=getNyamki
// qtype=getCategories
// chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
//$.get()(function(){})


// var filePhp = $.get( "http://codestory.ru/git/fe.php", 
// 	{ 
// 		qtype: "getNyamki" 
// 	}, function( data ) 
//   {
//     console.log( "Data Loaded: ", JSON.parse(data));//JSON
//  });
// var event = JSON.parse(filePhp)
//http://phpfaq.ru/newbie/na_tanke#js



