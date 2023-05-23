//Date(): Tarih ve saat bilgisi verir.
let tarih = new Date();
console.log(tarih);

//get metotlarını değer almak için kullanırız:

//getTime(): Number tipinde tarih döner.
console.log(tarih.getTime());

//getFullYear(): tarihin yıl kısmını döndürür.
console.log(tarih.getFullYear());

//getDate(): Tarihin gün kısmını döndürür.
console.log(tarih.getDate());

//getDay(): Haftanın kaçıncı gününde olduğumuz bilgisini verir.
console.log(tarih.getDay());

//getHours(): Saati döndürür.
console.log(tarih.getHours());

//getMilliseconnds(): Milisaniyeyi döndürür.
console.log(tarih.getMilliseconds());

//getMinutes(): Dakikayı döndürür.
console.log(tarih.getMinutes()); 

//getMonth(): Kaçıncı ayda olunduğu bilgisini verir. Dikkat edilmesi gereken, ayları 0'dan başlatır. Ocak ayı için 0 değeri döndürülür.
console.log(tarih.getMonth()); 

//Aşağıda aylar 1'den başlatılır.
console.log(tarih.getMonth()+1); 

//toLocaleDateString(): Tarihi gün.ay.yıl formatında verir.
console.log(tarih.toLocaleDateString());

//toLocaleTimeString(): Saati saat.dakika.saniye formatında verir.
console.log(tarih.toLocaleTimeString);

//toLocaleString(): gün.ay.yıl saat.dakika.saniye formatlarında değer döndürür.
console.log(tarih.toLocaleString());

//set metotlarını değer vermek için kullanırız:

//setDate(): Tarihin gün kısmını parametre olarak verdiğimiz değere ayarlar.
console.log(tarih);
tarih.setDate(28);
console.log(tarih);

//setHours(): saati parametre olarak verdiğimiz değere ayarlar.
tarih.setHours(15);
console.log(tarih);

//setMonth(): Ayı parametre olarak verdiğimiz değere ayarlar.
console.log(tarih.setMonth(11));

//Mevcut saate 2 saat eklemek için:
console.log(tarih.setHours(tarih.getHours()+2));

//toString(): Tarihi stringe çevirir.
tarih.toString();
console.log(typeof tarih.toString());

//Tarih ve saati şu şekilde de tanımlayabiliriz:
let tarih2 = new Date(1999,10,25,08,00,10);
console.log(tarih2);