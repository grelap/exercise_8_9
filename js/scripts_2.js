 function rysujChoinke (rows) {
  for (var i = 1; i <= rows; i++){ 
    var star = "";
      for (var c = 0; c < rows-i; c++){
            star +=' ';
          }
      for (var n = 0; n < i*2-1; n++){ 
         star += '*';     
      } 
    console.log(star); 
  } 
} 
 rysujChoinke(15);
