let str = "JavaScript öğreniyoruz.";
let tarih = "17.05.2023";

//charAt(): Belirtilen indisteki karakteri döndürür.

let karakter = str.charAt(5);
console.log(karakter);

//concat(): İki tane string ifadeyi birleştirir.
let birlestir = str.concat(" ", tarih); //str ile tarih stringlerinin aralarına 1.parametre ile boşluk koyulabilir.
console.log(birlestir);

//indexOf(): Belirtilen karakterin indisini döndürür.
let index = str.indexOf("o");
console.log(index);

//lastIndexOf():Belirtilen harfin veya kelimenin indisini döndürür.

let _index = str.lastIndexOf("öğreniyoruz");
console.log(_index);

//toUpperCase(): Tüm alfabetik karakterleri büyük harfe dönüştürür.

let buyuk_harf = str.toUpperCase();
console.log(buyuk_harf);

//toLowerCase():

let kucuk_harf = str.toLowerCase();
console.log(kucuk_harf);

//trim():Stringin başında ve sonunda bulunan space karakterlerini siler.

let trim_string = "       trim metodu                 ";
let trim = trim_string.trim()
console.log(trim);

//slice(): Stringin istenilen indis aralığındaki ifadeyi döndürür.
console.log(str);
console.log(str.slice(7,10)); //7., 8., 9. indislerde bulunan ifadeleri alır.

//substring(): substr fonksiyonu slice fonksiyonu ile aynı işleve sahiptir. Tek fark substr fonksiyonunun ikinci parametresi değerden alınacak karakter sayısını belirtir. İlk parametre negatif olursa başlangıç pozisyonu değerin sonundan başlar.
console.log(str);
console.log(str.substring(0,5));

//replace(): 1.parametreye string içerisinde değiştirilmesi istenilen kelime verilir. 2.parametreye kelimeyi değiştirmek istenen kelime verilir. String içerisinde bulunan 1.parametredeki kelime yerine 2.parametredeki kelime yazılır.

console.log(str);
console.log(str.replace("öğreniyoruz","programlama dili")); 

//split(): Belirtilen bir sembole göre ayırma işlemi yaparak dizi haline getirir.

console.log(str);
let dizi = str.split(" ");
console.log(dizi);

//valueOf(): Belirtilen objeyi primitive value'ye dönüştürür. 

console.log(str.valueOf());

//startsWith(): Stringin parametre olarak verilen karakter ile başlayıp başlamadığı kontrolünü yapar. Belirtilen karakter ile başlıyorsa True, başlamıyorsa False döndürür.

console.log(str.startsWith("J"));

//endsWith(): Stringin parametre olarak verilen karakter ile bitip bitmediği kontrolünü yapar. Belirtilen karakter ile bitiyorsa True, bitmiyorsa False döndürür.

console.log(str.endsWith("öğreniyoruz."));