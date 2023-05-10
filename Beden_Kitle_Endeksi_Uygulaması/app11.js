// Beden Kitle Endeksi Hesaplama

let kilo = Number(prompt("Kilonuzu giriniz."));
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz."));
let sonuc = kilo/(boy*2);

if(sonuc < 18.5){
    alert("İdeal kilonun altındasınız. Vücut kitle endeksiniz:" + sonuc);
}
else if(sonuc >= 18.5 && sonuc <= 24.9){
    alert("İdeal kilonun altındasınız. Vücut kitle endeksiniz:" + sonuc);
}
else if(sonuc >= 25 && sonuc <= 29.9){
    alert("İdeal kilodasınız. Vücut kitle endeksiniz:" + sonuc);
}
else if(sonuc >= 30 && sonuc <= 39.9){
    alert("İdeal kilonun çok üstündesiniz (obez). Vücut kitle endeksiniz:" + sonuc);
}
else if(sonuc >= 40){
    alert("İdeal kilonun çok üstündesiniz (morbid obez). Vücut kitle endeksiniz:" + sonuc);
}