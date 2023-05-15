//Mükemmel Sayı: Saynın tam bölenleri toplamı sayının iki katına eşit ise o sayı mükemmel sayıdır.
//Örneğin: 6, 28, 496
// 6: 1 + 2 + 3 + 6 = 12
//28: 1 + 2 + 4 + 7 + 14 + 28 = 56

// ! Bir sayının tam bölünebildiği sayıları bulmak için, o sayının yarısına kadar olan sayıları kontrol ederiz. 

let number = Number(prompt("Sayi giriniz."));

isPerfectNumber(number);

function isPerfectNumber(number){
    let toplam = 0;
    for(let i=2; i<=number/2; i++){
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam+=1+number;

    if(toplam==number*2){
        alert("Mükemmel sayıdır.");
    }
    else{
        alert("Mükemmel sayı değildir.");
    }
}