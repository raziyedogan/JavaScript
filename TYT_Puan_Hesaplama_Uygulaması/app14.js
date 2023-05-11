let turkceDogru, turkceYanlis=0;
let matematikDogru, matematikYanlis=0;
let sosyalDogru, sosyalYanlis=0;
let fenDogru, fenYanlis=0;
let puan=0;
let okulPuani=0;

let yeniSatir = "\r\n";
let mesaj = "TYT PUAN HESAPLAMA UYGULAMASI"+yeniSatir+"1-Puan hesapla"+yeniSatir+"2-Çıkış yap";

let secim = prompt(mesaj);
switch(secim){
    case "1":
        okulPuani = Number(prompt("Okul puanınızı giriniz."));
        turkceDogru = Number(prompt("Türkçe dersi için doğru sayısını giriniz."));
        turkceYanlis = Number(prompt("Türkçe dersi için yanlış sayısını giriniz."));

        matematikDogru = Number(prompt("Matematik dersi için doğru sayısını giriniz."));
        matematikYanlis = Number(prompt("Matematik dersi için yanlış sayısını giriniz."));

        sosyalDogru = Number(prompt("Sosyal dersi için doğru sayısını giriniz."));
        sosyalYanlis = Number(prompt("Sosyal dersi için yanlış sayısını giriniz."));

        fenDogru = Number(prompt("Fen dersi için doğru sayısını giriniz."));
        fenYanlis = Number(prompt("Fen dersi için yanlış sayısını giriniz."));

        let dogruSayisi = turkceDogru+matematikDogru+fenDogru+sosyalDogru;
        let yanlisSayisi = turkceYanlis+matematikYanlis+fenYanlis+sosyalYanlis;
        let net = dogruSayisi - (yanlisSayisi/4);
        puan = (net*4) + 100 + okulPuani  //her soru 4 puan olduğu için (net*4) ve 100 puanda ösm versin ve birde okul puanı eklendi.
        alert("TYT Puanınız:" + puan);
        break;

    case "2":
        alert("Başarıyla çıkış yapılmıştır.");
        break;

    default:
        alert("Geçerli bir seçim giriniz.");
        break;

}