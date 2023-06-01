const todo = document.querySelectorAll(".list-group-item")[0];

console.log(todo);

todo.style.color = "red"; //Elementin üzerindeki yazıyı kırmızı yapar.
todo.style.backgroundColor = "purple"; //Elementin arka plan rengini mor yapar.
todo.style.fontWeight = "bold"; //Elementin üzerindeki yazıyı kalınlaştırır.
todo.style.paddingTop = "20px"; // Elementin üzerindeki yazının üstünden 20 pixel boşluk bırakır.
todo.style.paddingLeft = "70px"; // Elementin üzerindeki yazının solundan 70 pixel boşluk bırakır.
todo.style.padding = "10px"; //Elementin üzerindeki yazının her tarafından 10 pixel boşluk bırakır.
todo.style.borderRadius = "50px"; //Elementin kenarlarını 50 pixel ovalleştirir.

//ul etiketini yakalayıp onun üzerinde işlem yapalım:
const todoList = document.querySelector(".list-group");
todoList.style.marginTop="60px";
todoList.style.marginLeft="100px";