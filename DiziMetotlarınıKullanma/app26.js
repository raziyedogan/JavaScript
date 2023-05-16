let arabalar = ["bmw","toyota","reanult","mercedes","porsche"];
console.log("Dizi uzunluğu:" + arabalar.length);

//push: Dizinin sonuna eleman ekler. Ayrıca dizinin uzunluğunu döndürür.
let diziUzunluk = arabalar.push("opel"); //"opel" değeri diziye eklenir ve sonra dizinin uzunluğu diziUzunluk değişkenine atanır.
console.log("Push metodu ile dönen dizi uzunluğu:" + diziUzunluk);

//unshift: Dizinin başına eleman ekler. Eleman sayısını döndürür.
arabalar.unshift("hundai");
console.log(arabalar);

//pop: Dizinin son elemanını siler. Silinen elemanı döndürür.
let silinenEleman = arabalar.pop();
console.log("Silinen eleman:" + silinenEleman);
console.log("Son eleman silinmiştir. Dizinin yeni hali: "+arabalar);

//shift: dizinin başından eleman siler. Silinen elemanı döndürür.
let silinenEleman2 = arabalar.shift();
console.log("Silinen eleman:" + silinenEleman2);
console.log("İlk eleman silinmiştir. Dizinin yeni hali: "+arabalar);

//splice(index,index): eleman eklemek ve silmek için kullanılır.
arabalar.splice(0,0,"hundai");
//1. parametre: hangi elemandan başlanacağı indisi ile belirtilir.
//2.parametre: kaç eleman silineceği bilgisidir.
//3.parametre: eklenecek değerdir.
//0.indekse (1.parametre) herhangi bir eleman silmeden(2.parametre) hundai verisi (3.parametre) eklenir.
console.log(arabalar);
//Yani splice() metodu ile dizinin istenen herhangi bir yerine ekleme veya silme yapılır.

arabalar.splice(2,0,"hundai"); //Hiçbir eleman silinmez. 2.indeksin olduğu yere "hundai" eklenir.
console.log(arabalar);

arabalar.splice(1,2); //1.indisten başlanarak 2 eleman silinir. 
console.log(arabalar);

arabalar.splice(2,2,"hundai"); //2.indisten başlanarak 2 eleman silinir ve onların olduğu yere "hundai" eklenir.
console.log(arabalar);

//toString: diziyi stringe çevirir.
console.log(typeof arabalar); //Çıktı: object 
let stringArabalar = arabalar.toString();
console.log(typeof stringArabalar); //Çıktı: string

//join: diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz.
let _stringArabalar = arabalar.join("?");
console.log(_stringArabalar); //Çıktı: hundai?toyota?hundai?porsche

//concat: dizileri birleştirmek için kullanılır.
let arabalar2 = ["hundai","tofaş"];
let birlesmisDizi = arabalar.concat(arabalar2);
console.log(birlesmisDizi);

//slice(dilimlemek): diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
let ayriDizi = arabalar.slice(2); //arabalar dizisinin 2.indisinden sonuna kadar olan kısım ayrı bir dizi olarak ayrılır.
console.log(ayriDizi);

//length: dizinin uzunluğunu verir.
console.log(arabalar.length);

//reverse: dizinin elemanlarını ters çevirir.
console.log(arabalar);
arabalar.reverse();
console.log(arabalar);

//split(bölmek): Belirli bir ifadeye göre bölüp diziye çevirir.
let isimler = "elma,armut,karpuz";
let isimlerDizi = isimler.split(",");
console.log(typeof isimlerDizi);
console.log(isimlerDizi);

//indexOf: elemanın index numarasını döndürür.
let index = arabalar.indexOf("hundai");
if(index==0){
    console.log("Belirtilen eleman vardır.");
}
else{
    console.log("eleman yoktur.");
}

//includes: verilen elemanı içeriyor mu kontrolünü yapar. İçeriyor ise true, içermiyor ise false döner.
let sonuc = arabalar.includes("opel");
console.log(sonuc);