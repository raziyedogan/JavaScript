// ! Aşağıda yapılan işlemler chrome'de hata vermektedir. Edge'den çalıştırmanızı öneririm.
//Selectors (Seçiciler):
//JavaScript'ten html etiketleri 3 farklı şekilde seçilip yakalanabilir.
//	classname, id, tag name (etiket ismi) 'e göre yakalayıp üzerinde işlemler yapabiliyoruz.

//getElementById : id ye göre elementi yakalamak için kullanılır.

const button = document.getElementById("todoAddButton"); //id'si todoAddButton olan değişken yazdırılır.

console.log(button);
console.log(button.id);
console.log(button.getAttribute("id"));

//10. ve 11. satırlardaki kodlar aynı işlemi yapmaktadır.

//butonun class name değerini alalım:
console.log(button.className);
console.log(button.getAttribute("class"));

//16. ve 17. satırlardaki kodlar aynı işlemi yapmaktadır.

//Butonun class listesini alalım:
const classListesi = button.classList;
console.log(classListesi);

//Butonun 3.indisindeki class değerini alalım:
const class_ = button.classList[3];
console.log(class_);

//Her bir class değeri "c" değişkeninde tutulur ve ekrana yazdırılır:
classListesi.forEach(function(c){
    console.log(c);
})

//Yakalanan elementin text değerini alalım:

let buttonText = button.textContent;
let buttonText2 = button.innerHTML;

console.log(buttonText);
console.log(buttonText2);

//textContent ile innerHTML arasındaki fark:
//textContent ile direkt string olan metin alınır.
//innerHTML ile stringin kenarlarında html etiketi varsa algılanırlar.

button.textContent = "<b>Todo Ekleyin</b>";
//Yukarıdaki satır soncunda buton üzerinde yazan ifade: <b>Todo Ekleyin</b>

button.innerHTML = "<b>Todo Ekleyin</b>";
//Yukarıdaki satır soncunda buton üzerinde yazan ifade: Todo Ekleyin

//getElementByClassName: Class ismine göre yakalar.

const todoList = document.getElementsByClassName("list-group-item");
console.log(todoList);

todoList.forEach(function(todo){
    console.log(todo);
})

//getElementByTagName: Etiket ismine göre yakalar.

const forms = document.getElementsByTagName("form"); //parametre: etiket adı
console.log(forms);
console.log(forms[1]);

forms.forEach(function(f){
    console.log(f);
})

const forms_li = document.getElementsByTagName("li"); //etiketi "li" olanlar alındı.
console.log(forms_li);

//getElementById, getElementByClassName, getElementByTagName metodlarının üçünün yaptığı işlemi tek başına yapan 2 tane metot vardır.
//Bunlar: querySelector - querySelectorAll

const clearButton = document.querySelector("#todoClearButton"); //id'si todoClearButton olan alınır. id belirtirken başa "#" konur.
console.log(clearButton);

console.log(document.getElementById("todoClearButton"));

//78. ve 81. satırlardaki kodlar aynı işlemi yapmaktadır.

const todoList_ = document.querySelector(".list-group"); //class name'e göre alındı. class name belirtirken başa "." konur.
console.log(todoList_);

//querySelector ile 1 tane değer alınır. querySelectorAll ile aranan değerden birden fazla item var ise hepsini döndürür.
//Mesela aynı id'den 1 kere kullanılabileceğinden querySelector metodu kullanılabilir.
//Ama class name'den birden fazla olabileceğinden hepsini görebilmek için querySelectorAll metodu kullanılabilir.

const todoList_indis = document.querySelector(".list-group")[3]; //Dönen değerlerden 3.indisteki alınır.
console.log(todoList_indis);

const todoList_tag = document.querySelector("li") //Etiket ismine göre çekmek için kullanıldı.
console.log(todoList_tag);

const todoList_tag_end = document.querySelector("li:last-child") //Aynı etikete sahip li topluluğundan sonuncusu alındır.
console.log(todoList_tag_end);
//nth-child: ikinci çocuğu alır. 0.indis ile son indis arasında birden fazla çocuk var ise "li:nth-child(2)" şeklinde ifade edilir.

//odd ve even: odd kullanılırsa indis değeri tek sayı olanlar alınır. even kullanılırsa indis değeri çift sayı olanlar alınır.

const todoList_even = Array.from(document.querySelector("li:nth-child(even)"));

todoList_even.forEach(function(e){
    e.style.backgroundColor = "lightgrey"; // İndisi çift değer olan satırlar griye boyanır.
})

console.log(todoList_even);