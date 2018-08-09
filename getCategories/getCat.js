

	let container=document.querySelector(".container");
	let mainRow = document.createElement('div');
	mainRow.className="row";
	container.appendChild(mainRow);


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

				 	let iceConteiner = document.createElement('div');
					iceConteiner.className="container_goods";
					

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
					textBuy.style.paddingTop = '30px';
					
					
					

					






			    		
			    	iceH3.innerText = el.name;

					iceImg.src= el.pic;

					

					var polka = document.getElementById(el.type);

					polka.appendChild(iceConteiner);


			
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

					// let textBuy = document.createElement('a');
					// iceCol.appendChild(textBuy);
					// textBuy.innerText = 'Купить';
					// textBuy.style.cursor = 'pointer';
					// textBuy.style.textDecoration = 'none';


					iceH2.innerText = el2.title;
				

					iceCol.id = el2.key;


		   		
				}); 

		
				func();


		});
		





