let value;

console.log(document.location);

//value = document.location.href; //Üzerinde çalışılan sayfanın adresi console'a yazdırılır.
//value = document.location.hostname; //host adresi yazdırılır.
//value = document.location.port; //port numarası yazdırılır.
//value = document.location.pathname; //Çıktıda klasör ismi ve klasör içerisinde üzerinde bulunulan dosyayı yazdırır. Yani adreste hostname'den sonraki kısım yazdırılır.
//value = document.characterSet; //Projede kullanılmış olunan dil kodunu gösterir.
//value = document.title; //Sayfa başlığı yazdırılır.
//value = document.links; //Sayfadaki linkleri yazdırır.
//value = document.links.item(4); //Linklerden 4.indiste olanı döndürür.
//value = document.links.item(4).id; //Linklerden 4.indiste olanın id'sini döndürür.
//Şu şekilde de attribute'ye erişerek aynı çıktıyı elde edebiliriz:
//value = document.links.item(4).getAttribute("id");
//value = document.links.item(4).getAttribute("class");
//value = document.links.item(4).classList  //4.indistekinin class listesini döndürür.
//value = document.links.item(4).classList[3]  //4.indistekinin 3. class'ını döndürür.
//value = document.forms; //Dökümandaki formları döndürür.
//value = document.forms.item(1); //1.indisteki formu döndürür.
//value = document.contentType //Sayfanın contentType'ını döndürür.

console.log(value);