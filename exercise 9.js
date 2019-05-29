
function shoutOut(){
return "Halo Function!"
}

console.log(shoutOut());

function calculateMultipy(num1, num2){
return num1*num2;
}

var num1 =5;
var num2 =6;

var hasilPerkalian=calculateMultipy(num1,num2);
console.log(hasilPerkalian);

function processSentence(name, age, address, hobby){
var sentence = "nama saya "+name+", umur saya "+age+ "tahun, alamat saya di "+address+ "dan saya punya hobi "+hobby;
return sentence;
}


var name = "Frans";
var age = 23;
var address = "Jln. Hayam Wuruk, Tangerang";
var hobby = "travelling";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);