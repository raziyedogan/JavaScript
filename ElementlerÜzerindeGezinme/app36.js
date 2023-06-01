const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const card = document.querySelector(".card");

let value;

//Anneden çocuklara erişmek:
value = todoList;
value = todoList.children; //Çocuklara erişim sağlandı.
value = todoList.children[0]; //0.indisteki çocuğa erişir.
value = todoList.children[todoList.children.length-1]; //Son indisteki çocuğa erişir.
value = todoList.children[3].textContent = "Değişti"; // 3.çocuğun textContent değeri "Todo 4" idi ve bu "Değişti" olarak değiştirildi.

value = Array.from(todoList.children);

console.log(value);

//children'leri array formatına çevirelim:
value.foreach(function(todo){
    console.log(todo.textContent);
})

//Çocuktan anneye erişmek:

value = todo;
value = todo.parentElement.parentElement; //annenin de bir üstündeki anneye geçilir. 

console.log(value);

//Bir sonraki kardeşe erişmek için:
value = todo;
value = todo.nextElementSibling;
console.log(value);

//Bir önceki kardeşe erişmek için:
const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
value = todoLastChild.previousElementSibling;

//Elemanın style özelliklerini değiştirelim:
const row = document.querySelector(".row");

let todo3 = row.children[0].children[3].children[2].children[2]; //istenilen elemana erişmek için
todo3.textContent = "Todo3 Değişti";
todo3.style.backgroundColor = "lightgrey";
todo3.style.color = "red";