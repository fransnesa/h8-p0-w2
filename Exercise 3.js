var nama = 'tian';
var peran = '';

if (peran === 'Ksatria' && nama !== '' ){
    console.log("Selamat datang di dunia Proxytia "+nama);
    console.log("Halo "+peran+" "+nama+ ",kamu dapat menyerang dengan senjatamu!");
}
else if (peran === 'Tabib' && nama !== ''){
    console.log("Selamat datang di dunia Proxytia "+nama);
    console.log("Halo "+peran+" "+nama+ ",kamu akan membantu temanmu yang terluka.");
}
else if (peran === 'Penyihir' && nama !== ''){
    console.log("Selamat datang di dunia Proxytia "+nama);
    console.log("Halo "+peran+" "+nama+ ",ciptakan keajaiban yang membantu kemenanganmu");
}
else if (peran === '' && nama !== ''){
    console.log("Halo " +nama+",pilih peranmu untuk memulai game");
}
else{
    console.log('Nama harus diisi');
}