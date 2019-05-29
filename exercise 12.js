
function konversiMenit(menit) {
  var jadiJam = Math.floor(menit/60);
  var sisaMenit = menit%60;
  var konversi ="";
  if(sisaMenit <= 10){
    konversi+= jadiJam+":0"+sisaMenit
  }
  else if(jadiJam===0){
    konversi+= "0:"+sisaMenit;
  }
  else{
      konversi+= jadiJam+":"+sisaMenit
  }
  return konversi; 
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
