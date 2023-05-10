let tc = prompt("TCKN giriniz.");
let isim = prompt("isminizi giriniz.");

kontrolEt(tc,isim);

function kontrolEt(tc, ad){
    if(tc.length == 11){
        if(isim != ""){
            alert("Gerekli bilgiler alınmıştır.");
        }
        else{
            alert("İsim alanını boş bırakmayınız.");
        }
    }
    else{
        alert("TC'nizi 11 haneli olarak girmelisiniz.");
    }
}

//Çoklu if yapısı ile yukarıdaki işlemlerin aynısı aşağıdaki gibidir.
function kontrolEt2(tc,ad){
    if(tc.length != 11){
        alert("TC'nizi 11 haneli olarak girmelisiniz.");
        return;  //bu if bloğuna girilmesi durumunda bu satırda okunan return ile alt satırlar okunmaz, fonksiyon burada sonlanır.
    }
    if(isim == ""){
        alert("İsim alanını boş bırakmayınız.");
        return;
    }
    alert("Gerekli bilgiler alınmıştır.");
}