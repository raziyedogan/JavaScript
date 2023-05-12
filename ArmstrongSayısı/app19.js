// Sayının her bir hanesindeki rakamın küplerinin toplamı sayıya eşit ise bu sayıya armstrong sayı denir.
// 153, 370, 407 armstrong sayılardır.
// 153 = 1*1*1 + 5*5*5 + 3*3*3

let sayi = prompt("Sayı giriniz.");
let toplam = 0;
for(let i=0; i<sayi.length; i++){
    let rakam = sayi.charAt(i); //charAt() metodu ile parametre olarak verilen indisteki değer alınır.
    console.log(typeof rakam);
    toplam += rakam*rakam*rakam; // String değerlerde çarpma, bölme, çıkarma gibi işlemleri yapmak mümkün. Sadece + işleminde toplama değil,birleştirme işlemi yapılır.
}

if(Number(sayi) == toplam){
    alert("Armstrong sayısıdır.");
}
else{
    alert("Armstrong sayısı değildir.");
}