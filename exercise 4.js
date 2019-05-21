var tanggal = 31;
var bulan = 12;
var tahun = 2000;

switch (bulan) {
    case 1:
    bulan = 'Januari';
    break;
    case 2:
    bulan = 'Februari';
    break;
    case 3:
    bulan = 'Maret';
    break;
    case 4:
    bulan = 'April';
    break;
    case 5:
    bulan = 'Mei';
    break;
    case 6:
    bulan = 'Juni';
    break;
    case 7:
    bulan = 'Juli';
    break;
    case 8:
    bulan = 'Agustus';
    break;
    case 9:
    bulan = 'September';
    break;
    case 10:
    bulan = 'Oktober';
    break;
    case 11:
    bulan = 'November';
    break;
    case 12:
    bulan = 'Desember';
    break;
    default:
    console.log("Gak ada nih nama bulannya");
    break;
}
if (tahun < 1900 || tahun > 2200){
    console.log("Pilih tahun dari range 1900-2200");
}
else if(tahun >= 1900 && tahun <= 2200 ){
if(bulan === "Februari" || bulan === "April" || bulan=== "Juni" || bulan=== "September" || bulan === "November"){
        if (bulan === "Februari"){
            if(tanggal < 1 || tanggal > 29){
        console.log("Pilih tanggal dari range 1-29 untuk bulan ini");
        }
        else{
        console.log(tanggal, bulan, tahun);
        }
    }
    else if (bulan !== "Februari"){
        if(tanggal < 1 || tanggal > 30){
    console.log("Pilih tanggal dari range 1-30 untuk bulan ini");
    }
    else{
    console.log(tanggal, bulan, tahun);
    }
}
}
else if(bulan === "Januari" || bulan ==="Maret" || bulan==="Mei" || bulan ==="Juli" || bulan ==="Agustus" || bulan ==="Oktober" || bulan === "Desember"){
    if (tanggal < 1 || tanggal > 31){
        console.log("Pilih tanggal dari range 1-31 untuk bulan ini");
    }
    else {
        console.log(tanggal, bulan, tahun);
    }
}

}



