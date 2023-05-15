// kullanıcı tarafından girilen cümle içerisinde kullanıcı tarafından girilen harfin kaç adet bulunduğunu döndüren kod.

let metin = prompt("Cümle giriniz.");
let harf = prompt("Cümle içerisinde adetini hesaplamak istediğiniz harfi giriniz.");
let cnt=0;

alert(harf + " harfi cümle içerisinde " + harf_sayaci(metin,harf) + " adet bulunmaktadır.");

function harf_sayaci(metin,harf){
    for(let i=0; i<metin.length; i++){
        if(metin.charAt(i).toLowerCase() === harf.toLowerCase()){
            cnt++;
        }
    }
    return cnt;
}
