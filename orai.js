/*jshint esnext: true */
/*jshint devel: true */
/*jslint node: true */
/*jslint browser: true */
/*jslint jquery: true */

console.log("1.feladat");

let a=7;
let b=8;
let c;

console.log("Csere előtt A értéke: "+a+" , B értéke: "+b);
 let a2 = b;
 let b2 = a;

 console.log("Csere után A értéke: "+a2+" , B értéke: "+b2);


 // -------------------------

 console.log("");
 console.log("2.feladat");
  let osszeg = 0; 
  let x = [5, 7, 2, 9, 5, 4,];

  for (var i =0; i < x.length; i++) {
  		osszeg = osszeg + x[i]; 
  	}  

  	console.log("A tömb összege: "+osszeg);

  	//----------------------
  	
  	console.log("");
  	console.log("3.feladat");

  	let van = false;
	i = 0;
	while ( i < x.length && x[i] !== 2) {
		i = i + 1;
	}
	if (i <= x.length)
	{
		van = true;
	}
	console.log ("yes: "+van);

//------------------------------

console.log("");
console.log("4.feladat");


	 van = false;
	i = 0;
	while ( i < x.length && x[i] !== 2) {
		i = i + 1;
	}
	if (i <= x.length)
	{
		van = true;
	}
	console.log ("yes: "+van);

	if ( van === true ) {
 		console.log("A tömb "+i+".eleme.");
 }

 	console.log("");
 	console.log("5.feladat");

 	let db = 0;
 	for (i = 0; i < x.length; i++) {
 		if ( x[i] === 2 ) {
 			db = db+1;
 		}
 	}

 	console.log(db+" darab kettes van.");

 	//-------------------------------

 	console.log("");
 	console.log("6.feladat");

 	let max = 0;
 	for (i=0; i < x.length; i++) {
 		if (x[i] > x[max]) {
 			max = i;
 		}
 	}
 	
 	console.log("A "+max+" . elem a legnagyobb");

 	//-----------------------
 	console.log("");
 	 console.log("7.feladat");

 	 x = [5, 7, 2, 9, 3];
 	 for ( i = x.length; i > 1; i--) {
 	 	for ( let j = 0; j < i-1; j++) {
 	 		if ( x[j] > x [j + 1]) {
 	 			c = x[j];
 	 			x[j] = x [ j + 1 ];
 	 			x [ j + 1 ] = c;

 	 		}
 	 	}
 	 }

 	 console.log(x);

 	 //--------------------------
 	 console.log("");
 	 console.log("8.feladat");

 	 for (i=0; i > x.length; i-- ) {
 	 	min = i;
 	 	for (let j=(i+1); j > x.length; j++ ) {
 	 		if (x[min] < x[j] ) {
 	 			min = j;
 	 		}
 	 	}
 	 	c = x[i];
 	 	x[i] = x[min];
 	 	x[min] = c;
 	 }

 	 console.log(x);

 	 //---------------------




