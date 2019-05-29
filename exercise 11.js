function balikKata(kata) {
  var panjangKata = kata.length;
  var kataBalik="";
  for(i=panjangKata-15;i>=0;i--){
      kataBalik+=kata[i];
  }
  return kataBalik;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS