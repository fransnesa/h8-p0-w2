function xo(str) {
  var counterX = 0;
  var counterO = 0;
  var panjangKata = str.length;
  var alertWord=""; 
  for(i=0;i<panjangKata;i++){
      if(str[i]==="x"){
          counterX++;
      }
      else if(str[i]==="o"){
          counterO++;
      }
      else{
          alertWord = "Ada data yang tidak terdaftar";
      }
  }
  if(alertWord===""){
    if(counterO===counterX){
        return true;
    }
    else if(counterO!==counterX){
        return false;
    }
  }
  else{
      return alertWord;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true