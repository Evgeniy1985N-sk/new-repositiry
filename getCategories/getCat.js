

		let container=document.querySelector(".container");
		let mainRow = document.createElement('div');
		mainRow.className="row";
		container.appendChild(mainRow);


	// // ---------------------------ICECREAM-------------------------

	// 	let iceCol = document.createElement('div');
	// 	iceCol.className="col-lg-4";
	// 	mainRow.appendChild(iceCol);

	// 	let iceH2 = document.createElement('h2');
	// 	iceH2.innerText="Мороженка";
	// 	iceCol.appendChild(iceH2);

		

	// //-------BAKE----------------------------------------------------------

	// 	let bakeCol = document.createElement('div');
	// 	bakeCol.className="col-lg-4";
	// 	mainRow.appendChild(bakeCol);

	// 	let bakeH2 = document.createElement('h2');
	// 	bakeH2.innerText="Торты";
	// 	bakeCol.appendChild(bakeH2);



	// // ---------CAKE--------------------------------------------------------

	// 	let cakeCol = document.createElement('div');
	// 	cakeCol.className="col-lg-4";
	// 	mainRow.appendChild(cakeCol);

	// 	let cakeH2 = document.createElement('h2');
	// 	cakeH2.innerText="Пирожное";
	// 	cakeCol.appendChild(cakeH2);








// ______________________________________________________________________________________
function func() {
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
			// iceCol.appendChild(iceConteiner);

			let iceH3 = document.createElement('h3');
			iceConteiner.appendChild(iceH3);

			let iceImg = document.createElement('img');
			iceConteiner.appendChild(iceImg);

			let iceH4 = document.createElement('h4');
			iceConteiner.appendChild(iceH4);

	    
	    		
	    	iceH3.innerText = el.name;

			iceImg.src= el.pic;

			iceH4.innerText = el.price;

			var polka = document.getElementById(el.type);

			polka.appendChild(iceConteiner);


		
	   		// if (el.type === 'cake' ) {


	   		// 	bakeCol.appendChild(iceConteiner);
	   				
	   		// }

	   		// else if (el.type === 'bake' ) {


	   		// 	cakeCol.appendChild(iceConteiner);
	   				
	   		// }

    });
	    
	 });
}

//----------------------- get Category--------------------------------------------------------



	$.get( "http://codestory.ru/git/fe.php", 

		{ 
			qtype: "getCategories" 
		}, function( data2 ) {
	  		

	  
	    
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





					// if (el2.key === 'cake' ) {

					// 	iceH2.innerText = el2.title;
			   				   				
			  //  		}

			  //  		else if (el2.key === 'bake' ) {


			  //  			iceH2.innerText = el2.title;
			   				
		   // 		}

		   		
			}); 
		
				func();
});
		





