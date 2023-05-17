let x = 3.15;

//Floor: Herhangi bir yuvarlama işlemi yapılmadan sayının noktadan sonraki kısmını yok sayar direkt noktadan önceki kısmı döndürür.
console.log(Math.floor(x));

//Ceil: Noktadan sonrasını dikkate almaksızın sayıyı bir üstüne yuvarlar.
console.log(Math.ceil(x));

//Round: Noktanın sağındaki ilk değer 5'e eşit veya 5'ten büyük ise noktanın solundaki sayıyı bir yukarıya yuvalar, 5'ten küçük ise noktanın solundaki kısmı alır.
console.log(Math.round(x));

//Max: number tipindeki array içerisinden en büyük değeri döndürür.
console.log(Math.max(1,2,3,4,50));

//Min: number tipindeki array içerisinden en küçük değeri döndürür.
console.log(Math.min(10,0,5));

//Random: Rastgele değerler üretmek için kullanılır.
console.log(Math.random()); //0 ile 1 arasında değer döndürür.
console.log(Math.random()*100); //0 ile 100 arasında değer döndürür.

//Abs: Bir sayının mutlak değerini alır.
let b = -12;
console.log(Math.abs(b));

//Sqrt: Sayının karekökünü alır.
console.log(Math.sqrt(16));

//Pow: Bir sayının bir kuvvetini alır.
console.log(Math.pow(2,4));

//pi sayısı:
console.log(Math.PI);