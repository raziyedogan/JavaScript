//kitapları ve rafları oluşturalım.

let kitap1 = {isim:"Her Şeyi Düşünme", yazar:"Anne Bogel", fiyat:25, raf:"1.5.RAF"};
let kitap2 = {isim:"Hiçbir Karşılaşma Tesadüf Değildir", yazar:"Hakan Mengüç",fiyat:55, raf:"2.2.RAF"};
let kitap3 = {isim:"İnsan Neyle Yaşar", yazar:"Tolstoy", fiyat:34, raf:"3.4.RAF"};
let kitap4 = {isim:"Zafer Sızlanarak Kazanılmaz", yazar:"Haluk Tatar", fiyat:45, raf:"4.4.RAF"};
let kitap5 = {isim:"Şeker Portakalı", yazar:"Jose Mauro de Vasconcelos", fiyat:25, raf:"5.4.RAF"};

let kitaplar = [kitap1,kitap2,kitap3,kitap4,kitap5];

let raf11 = {kod: "1.1.RAF", goster: false};
let raf12 = {kod: "1.2.RAF", goster: false};
let raf13 = {kod: "1.3.RAF", goster: false};
let raf14 = {kod: "1.4.RAF", goster: false};
let raf15 = {kod: "1.5.RAF", goster: false};

let raf21 = {kod: "2.1.RAF", goster: false};
let raf22 = {kod: "2.2.RAF", goster: false};
let raf23 = {kod: "2.3.RAF", goster: false};
let raf24 = {kod: "2.4.RAF", goster: false};
let raf25 = {kod: "2.5.RAF", goster: false};

let raf31 = {kod: "3.1.RAF", goster: false};
let raf32 = {kod: "3.2.RAF", goster: false};
let raf33 = {kod: "3.3.RAF", goster: false};
let raf34 = {kod: "3.4.RAF", goster: false};
let raf35 = {kod: "3.5.RAF", goster: false};

let raf41 = {kod: "4.1.RAF", goster: false};
let raf42 = {kod: "4.2.RAF", goster: false};
let raf43 = {kod: "4.3.RAF", goster: false};
let raf44 = {kod: "4.4.RAF", goster: false};
let raf45 = {kod: "4.5.RAF", goster: false};

let raf51 = {kod: "5.1.RAF", goster: false};
let raf52 = {kod: "5.2.RAF", goster: false};
let raf53 = {kod: "5.3.RAF", goster: false};
let raf54 = {kod: "5.4.RAF", goster: false};
let raf55 = {kod: "5.5.RAF", goster: false};

let raflar = [
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15]];

function rafOlustur(){
    console.clear();
    let satir="";
    for(let i=0; i<raflar.length; i++){
        for(let j=0; j<5;j++){
            satir+= "| " + (raflar[i][j].goster ? raflar[i][j].kod : "---") + "";
        }
        console.log(satir);
        console.log("-----------------");
        satir="";
    }
}


//Kullanıcıdan ekrandan bir kitap ismi istenmeli. Girilen kitabın raf numarasını bulacağız.

function kodBul(kitapIsmi){
    let rafKod=null;
    kitaplar.forEach(function(kitap){
        if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
            rafKod = kitap.raf;
        }
    });
    return rafKod;
}

function raftaGoster(rafKodu){
    for(let i=0; i<raflar.length; i++){
        for(let j=0; j<5; j++){
            if(raflar[i][j].kod == rafKodu){
                raflar[i][j].goster = true;
                break;
            }
        }
    }
}

rafOlustur();

let kitapIsmi = prompt("Lütfen bir kitap ismi giriniz.");
let rafKod = kodBul(kitapIsmi);

if(rafKod != null){
    raftaGoster(rafKod);
    rafOlustur();
}
else{
    alert("Girdiğiniz kitap kütüphanemizde bulunmamaktadır.");
}

//Çıktıda görülen:
// | ---| ---| ---| ---| ---
// -----------------
// | ---| ---| ---| ---| ---
// -----------------
// | ---| ---| ---| ---| ---
// -----------------
// | ---| ---| ---| ---| ---
// -----------------
// | ---| ---| ---| ---| ---
// -----------------
//şekli rafları temsil etmektedir. Çıktıda görülen ilk satır 5.rafı ifade etmektedir. 5.rafın altında 4.raf görülmektedir. 4.rafın altında 3.raf, 3.rafın altında 2.raf ve 2.rafın altında 1.raf bulunmaktadır. 