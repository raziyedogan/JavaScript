//ATM Uygulaması

let yeniSatir = "\r\n";
let bakiye = 0;

let metin = "1-Bakiye Görüntüleme" + yeniSatir + "2-Para Çekme" + yeniSatir + "3-Para Yatırma" + yeniSatir + "4-Çıkış" + yeniSatir + "Lüttfen seçiminizi giriniz.";

let secim = prompt(metin);

while(secim != 4){

    switch(secim){
        case "1":
            alert("Bakiyeniz: " + bakiye);
            break;
        
        case "2":
            let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz."));
            if(cekilecekTutar<bakiye){
                bakiye = bakiye-cekilecekTutar;
                alert("kalan bakiye: " + bakiye);
            }
            else{
                alert("Bakiyenizden fazla para çekemezsiniz."+yeniSatir+"Bakiyeniz: "+bakiye+ yeniSatir + "Cekilecek Tutar: "+cekilecekTutar);
            }
            break;
    
        case "3":
            let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz."));
            bakiye = bakiye + yatirilacakTutar;
            alert("Güncel bakiyeniz: " + bakiye);
            break;
    
        case "4":
            alert("Sistemden çıkış yapılmıştır.");
            break;
        
        default:
            alert("Lütfen 1-4 arasında geçerli bir seçim yapınız.");
            break;
    }

    secim = prompt(metin);

}