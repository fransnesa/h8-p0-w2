var row1=5;
var row2=5;
var row3=3;

console.log("Soal 1");
for(i=0;i<row1;i++){
console.log("*");
}

console.log("Soal 2");
for (i=1;i<=row2;i++){
    var bintang = "";
    for(j=0;j<row2;j++){
        bintang = bintang + "*";
    }
    console.log(bintang);
}




console.log("Soal 3");
for (i=1;i<=row3;i++){
    var bintang3 = "";
    for(j=0;j<i;j++){
        bintang3 = bintang3 + "*";
    }
    console.log(bintang3);
}
