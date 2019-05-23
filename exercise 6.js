console.log("Soal 1");
var i=2;
var j=20;

console.log("Looping pertama");
while (i<=20){
console.log(i+ " - I love coding");
i=i+2;
}

console.log("Looping kedua");
while(j>=2){
console.log(j+" - I will become fullstack developer");
j=j-2;
}

console.log("Soal 2");
console.log("Looping pertama");
for(k=0; k<=20; k++){
console.log(k+ " - I love coding");
}
console.log("Looping kedua");
for(l=20; l>=0; l--){
console.log(l+ " - I will become fullstack developer");
}

console.log("Soal 3");
for(i=1;i<=100;i++){
if(i%2 === 0){
    console.log("Counter sekarang "+i+ " ini bilangan Genap");
}
else{
    console.log("Counter sekarang "+i+ " ini bilangan Ganjil");
}
}

console.log("Kelipatan 3");
for(j=1;j<=100;j=j+2){
if(j%3===0){
console.log(j +" kelipatan 3");
}
else{
    console.log("");
}
}

console.log("Kelipatan 6");
for(k=1;k<=100;k=k+5){
if(k%6===0){
    console.log(k +" kelipatan 6");
}
else{
    console.log("");
}
}

console.log("Kelipatan 10");
for(l=1;l<=100;l=l+9){
if(l%10===0){
    console.log(l +" kelipatan 10");
}
else{
    console.log("");
}
}