function bandingkanAngka(angka1, angka2) {
  if (angka1 < angka2){
      return true;
  }
  else if(angka1 === angka2){
      return "-1";
  }
  else{
      return false;
  }
}

console.log(bandingkanAngka(10, 8)); // true
console.log(bandingkanAngka(7, 3)); // false
console.log(bandingkanAngka(-1, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(0, 2)); // false